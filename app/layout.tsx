import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://commitlore.com'),
  title: {
    default: 'CommitLore - Turn Your GitHub Commits Into Compelling Content',
    template: '%s | CommitLore'
  },
  description: 'CommitLore transforms your GitHub commits into engaging content for Twitter, LinkedIn, and your blog. Build your reputation while you build your product. Automatic content generation for developers.',
  keywords: [
    'GitHub commits to content',
    'developer content automation',
    'build in public',
    'automated social media for developers',
    'commit to Twitter',
    'commit to LinkedIn',
    'developer blog automation',
    'GitHub content generator',
    'developer marketing automation',
    'technical content generation',
    'software developer visibility',
    'developer personal branding',
    'commit message to post',
    'GitHub activity sharing',
    'developer storytelling'
  ],
  authors: [{ name: 'CommitLore' }],
  creator: 'CommitLore',
  publisher: 'CommitLore',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://commitlore.com',
    title: 'CommitLore - Your Code Tells a Story',
    description: 'Your code tells a story. Let the world hear it. Transform your GitHub commits into compelling content. Build your reputation while you build your product.',
    siteName: 'CommitLore',
    images: [
      {
        url: '/og-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'CommitLore - Your code tells a story. Let the world hear it.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CommitLore - Your Code Tells a Story',
    description: 'Your code tells a story. Let the world hear it. Transform your GitHub commits into compelling content. Build your reputation while you build your product.',
    creator: '@commitlore',
    images: ['/og-image.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://commitlore.com',
  },
  category: 'technology',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CommitLore',
  url: 'https://commitlore.com',
  logo: 'https://commitlore.com/favicon.svg',
  description: 'CommitLore transforms your GitHub commits into compelling content for social media and professional platforms.',
  sameAs: [
    'https://twitter.com/commitlore',
    'https://github.com/commitlore',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'support@commitlore.com',
    contactType: 'Customer Support',
    availableLanguage: 'English'
  }
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'CommitLore',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '15',
    priceCurrency: 'USD',
    priceValidUntil: '2025-12-31',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '500',
    bestRating: '5',
    worstRating: '1'
  },
  description: 'CommitLore transforms your GitHub commits into engaging content for Twitter, LinkedIn, and your blog automatically.'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
