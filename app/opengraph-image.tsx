import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'ColorStack at CMU';
export const size = { width: 1200, height: 630 };

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #C41230 0%, #990000 100%)',
          padding: 60,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: '#ffffff',
              textAlign: 'center',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            ColorStack at CMU
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: '#ffffff',
              opacity: 0.92,
              textAlign: 'center',
              lineHeight: 1.3,
            }}
          >
            Carnegie Mellon University
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 22,
              fontWeight: 400,
              color: '#ffffff',
              opacity: 0.85,
              textAlign: 'center',
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Community, workshops, and professional development for Black, Latinx, and Indigenous students in tech.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
