import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CALENDAR_ID = 'c_ae3f0dd2b16b39f17f7589e20ee7b7aa0a0ea48b308be896d180a6202412ca35@group.calendar.google.com';

interface CalendarEvent {
  id: string;
  title: string;
  description: string;
  location: string;
  start: string;
  end: string;
  allDay: boolean;
  flyerUrl: string | null;
  photos: string[]; // proxy URLs for event photos
}

// ── helpers ──────────────────────────────────────────────────────────────────

function extractFlyerUrl(item: any): string | null {
  if (Array.isArray(item.attachments) && item.attachments.length > 0) {
    const attachment =
      item.attachments.find((a: any) => a.mimeType?.startsWith('image/')) ??
      item.attachments[0];
    if (attachment?.fileId) return `/api/drive-proxy?id=${attachment.fileId}`;
  }

  const desc: string = item.description ?? '';
  const driveFileMatch = desc.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (driveFileMatch) return `/api/drive-proxy?id=${driveFileMatch[1]}`;

  const driveOpenMatch = desc.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/);
  if (driveOpenMatch) return `/api/drive-proxy?id=${driveOpenMatch[1]}`;

  const imgMatch = desc.match(/https?:\/\/\S+\.(?:jpg|jpeg|png|gif|webp|avif)/i);
  if (imgMatch) return imgMatch[0];

  return null;
}

// Pull a Drive folder ID out of the event description if one is pasted in.
// Supports: drive.google.com/drive/folders/FOLDERID
function extractFolderId(description: string): string | null {
  const match = description.match(/drive\.google\.com\/drive\/folders\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

// Fetch all image file IDs from a publicly-shared Google Drive folder.
async function getFolderPhotoIds(folderId: string): Promise<string[]> {
  const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;
  if (!apiKey) return [];

  const q = encodeURIComponent(`'${folderId}' in parents and mimeType contains 'image/' and trashed = false`);
  const url =
    `https://www.googleapis.com/drive/v3/files?q=${q}&key=${apiKey}&fields=files(id)&pageSize=50&orderBy=name`;

  const res = await fetch(url, { next: { revalidate: 300 } });
  if (!res.ok) return [];

  const data = await res.json();
  return (data.files ?? []).map((f: any) => f.id as string);
}

// ── data fetching ─────────────────────────────────────────────────────────────

async function fetchEvents(params: Record<string, string>): Promise<Omit<CalendarEvent, 'photos'>[]> {
  const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;
  if (!apiKey) return [];

  const calendarId = encodeURIComponent(CALENDAR_ID);
  const query = new URLSearchParams({ key: apiKey, singleEvents: 'true', ...params }).toString();
  const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?${query}`;

  const res = await fetch(url, { next: { revalidate: 300 } });
  if (!res.ok) {
    console.error('Google Calendar API error:', await res.text());
    return [];
  }

  const data = await res.json();
  return (data.items ?? []).map((item: any) => ({
    id: item.id,
    title: item.summary ?? 'Untitled Event',
    description: item.description ?? '',
    location: item.location ?? '',
    start: item.start?.dateTime ?? item.start?.date ?? '',
    end: item.end?.dateTime ?? item.end?.date ?? '',
    allDay: !item.start?.dateTime,
    flyerUrl: extractFlyerUrl(item),
  }));
}

async function getUpcoming(): Promise<CalendarEvent[]> {
  const events = await fetchEvents({
    timeMin: new Date().toISOString(),
    orderBy: 'startTime',
    maxResults: '20',
  });
  return events.map((e) => ({ ...e, photos: [] }));
}

async function getPast(): Promise<CalendarEvent[]> {
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  const events = await fetchEvents({
    timeMin: oneYearAgo.toISOString(),
    timeMax: new Date().toISOString(),
    orderBy: 'startTime',
    maxResults: '250',
  });

  // For each past event, fetch photos from a Drive folder link in the description
  const withPhotos = await Promise.all(
    events.map(async (event) => {
      const folderId = extractFolderId(event.description);
      const photoIds = folderId ? await getFolderPhotoIds(folderId) : [];
      return {
        ...event,
        photos: photoIds.map((id) => `/api/drive-proxy?id=${id}`),
      };
    })
  );

  return withPhotos.reverse(); // most recent first
}

// ── formatting ────────────────────────────────────────────────────────────────

function formatDate(iso: string, allDay: boolean) {
  const date = new Date(iso);
  if (allDay) {
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  }
  return date.toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric',
    hour: 'numeric', minute: '2-digit', timeZoneName: 'short',
  });
}

function formatMonth(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
}

function formatDay(iso: string) {
  return new Date(iso).getDate();
}

function formatYear(iso: string) {
  return new Date(iso).getFullYear();
}

// ── components ────────────────────────────────────────────────────────────────

function EventCard({ event, past = false }: { event: CalendarEvent; past?: boolean }) {
  // Strip Drive/image URLs from visible description text
  const cleanDescription = event.description
    .replace(/<[^>]*>/g, '')
    .replace(/https?:\/\/\S+/g, '')
    .trim();

  return (
    <div className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col ${past ? 'opacity-85' : ''}`}>

      {/* Flyer — Instagram portrait ratio, full image visible */}
      {event.flyerUrl && (
        <div className="relative w-full aspect-[4/5] bg-gray-100">
          <Image
            src={event.flyerUrl}
            alt={`${event.title} flyer`}
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      )}

      {/* Event info */}
      <div className="p-6 flex gap-4">
        <div className={`flex-shrink-0 w-14 ${past ? 'h-16' : 'h-14'} rounded-xl flex flex-col items-center justify-center text-white ${past ? 'bg-cmu-iron-gray' : 'bg-cmu-red'}`}>
          <span className="text-[10px] font-bold uppercase leading-none">{formatMonth(event.start)}</span>
          <span className="text-xl font-extrabold leading-tight">{formatDay(event.start)}</span>
          {past && <span className="text-[9px] font-semibold leading-none mt-0.5 opacity-80">{formatYear(event.start)}</span>}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-cmu-dark-gray mb-1 leading-snug">{event.title}</h3>
          <p className="text-xs text-cmu-iron-gray mb-2">{formatDate(event.start, event.allDay)}</p>

          {event.location && (
            <p className="text-xs text-cmu-iron-gray flex items-center gap-1 mb-2">
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              {event.location}
            </p>
          )}

          {cleanDescription && (
            <p className="text-sm text-cmu-iron-gray leading-relaxed line-clamp-3">{cleanDescription}</p>
          )}
        </div>
      </div>

      {/* Photo gallery for past events */}
      {past && event.photos.length > 0 && (
        <div className="px-6 pb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-cmu-iron-gray mb-3">Event Photos</p>
          <div className="grid grid-cols-3 gap-2">
            {event.photos.map((src, i) => (
              <div key={i} className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={src}
                  alt={`${event.title} photo ${i + 1}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── page ──────────────────────────────────────────────────────────────────────

export const metadata = {
  title: 'Events',
  description: 'Upcoming and past events from ColorStack at CMU — workshops, networking sessions, study jams, and community events at Carnegie Mellon University.',
  alternates: { canonical: 'https://colorstackcmu.org/events' },
};

export default async function Events() {
  const [upcoming, past] = await Promise.all([getUpcoming(), getPast()]);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-red-50 via-white to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-cmu-dark-gray mb-6">
            Upcoming <span className="gradient-text">Events</span>
          </h1>
          <p className="text-lg text-cmu-iron-gray max-w-2xl mx-auto leading-relaxed mb-8">
            Stay up to date with our latest workshops, networking sessions, and community events.
          </p>
          <a
            href="https://calendar.google.com/calendar/r?cid=c_ae3f0dd2b16b39f17f7589e20ee7b7aa0a0ea48b308be896d180a6202412ca35%40group.calendar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cmu-red text-white font-semibold px-6 py-3 rounded-full hover:bg-red-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            Subscribe to Calendar
          </a>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-20 bg-cmu-light-gray">
        <div className="max-w-5xl mx-auto px-4">
          {upcoming.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2">
              {upcoming.map((event) => <EventCard key={event.id} event={event} />)}
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-md p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-cmu-red/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-cmu-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-cmu-dark-gray mb-3">No Upcoming Events</h3>
              <p className="text-cmu-iron-gray max-w-md mx-auto">
                Check back soon — new events will appear here automatically when added to our Google Calendar.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      {past.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-cmu-dark-gray mb-12">
              Past <span className="gradient-text">Events</span>
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {past.map((event) => <EventCard key={event.id} event={event} past />)}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
