import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Meet the Team',
  description: 'Meet the executive board and student leaders of ColorStack at CMU, the official ColorStack chapter at Carnegie Mellon University.',
  alternates: { canonical: 'https://colorstackcmu.org/meet-us' },
};

interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

const TEAM: TeamMember[] = [
  { name: 'Kwame Asare', role: 'Co-President', photo: '/people/kwame.png' },
  { name: 'William Montague', role: 'Co-President', photo: '/people/william.png' },
  { name: 'Tchegnon Adjagbodjou', role: 'Secretary', photo: '/people/tchegnon.png' },
  { name: 'James Okeke', role: 'Treasurer', photo: '/people/james.png' },
  { name: 'Jorden Windross', role: 'Corporate & Academic Director', photo: '/people/jorden.png' },
  { name: 'Sophia Solomon', role: 'Community Outreach', photo: '/people/sophia.png' },
  { name: 'Rachel Quaye-Asamoah', role: 'Underclassmen Outreach', photo: '/people/rachel.png' },
  { name: 'Funmi Ekiyoyo', role: 'Design and Social Media Chair', photo: '/people/funmi.png' },
];

export default function MeetUs() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-red-50 via-white to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-cmu-dark-gray mb-6">
            Meet the <span className="gradient-text">Team</span>
          </h1>
          <p className="text-lg text-cmu-iron-gray max-w-2xl mx-auto leading-relaxed">
            The passionate leaders behind ColorStack at Carnegie Mellon University.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-cmu-light-gray">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden text-center"
              >
                <div className="relative w-full aspect-square bg-cmu-light-gray">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base md:text-lg font-bold text-cmu-dark-gray leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-xs md:text-sm text-cmu-red font-semibold mt-1">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
