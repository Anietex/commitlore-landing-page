import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'CommitLore - Your code tells a story. Let the world hear it.';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#FAF8F3',
          padding: '100px',
          position: 'relative',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #B45309 0%, #D97706 100%)',
            opacity: 0.08,
            top: '-50px',
            right: '100px',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #B45309 0%, #D97706 100%)',
            opacity: 0.06,
            bottom: '50px',
            left: '0px',
            display: 'flex',
          }}
        />

        {/* Logo and brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '60px' }}>
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #B45309 0%, #D97706 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 25px rgba(180, 83, 9, 0.3)',
            }}
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="6" r="2.5" fill="white" opacity="0.9" />
              <circle cx="8" cy="10" r="2.5" fill="white" opacity="0.9" />
              <circle cx="8" cy="18" r="2.5" fill="white" opacity="0.9" />
              <circle cx="12" cy="14" r="2.5" fill="white" opacity="0.9" />
            </svg>
          </div>
          <span
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#1A1614',
            }}
          >
            CommitLore
          </span>
        </div>

        {/* Main headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '50px' }}>
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 800,
              color: '#1A1614',
              letterSpacing: '-2px',
              margin: 0,
              lineHeight: '1.1',
            }}
          >
            Your code tells a story.
          </h1>
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 800,
              color: '#1A1614',
              letterSpacing: '-2px',
              margin: 0,
              lineHeight: '1.1',
            }}
          >
            Let the world hear it.
          </h1>
        </div>

        {/* Supporting text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '40px' }}>
          <p
            style={{
              fontSize: '28px',
              fontWeight: 500,
              color: '#3A2F2A',
              opacity: 0.85,
              margin: 0,
              lineHeight: '1.4',
            }}
          >
            Transform your GitHub commits into compelling content.
          </p>
          <p
            style={{
              fontSize: '28px',
              fontWeight: 500,
              color: '#3A2F2A',
              opacity: 0.85,
              margin: 0,
              lineHeight: '1.4',
            }}
          >
            Build your reputation while you build your product.
          </p>
        </div>

        {/* CTA badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #B45309 0%, #D97706 100%)',
            borderRadius: '25px',
            padding: '14px 32px',
            fontSize: '18px',
            fontWeight: 700,
            color: 'white',
          }}
        >
          Get Started →
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
