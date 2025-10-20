import { Metadata } from 'next';

export const homePageMetadata: Metadata = {
  title: 'EngineerMarketplace - Connect with Professional Engineers Worldwide',
  description: 'Find and hire verified professional engineers for your projects. Structural, mechanical, electrical, and civil engineering services. Get quotes from top-rated engineers in minutes.',
  keywords: [
    'hire engineers online',
    'engineering services marketplace',
    'professional engineers',
    'structural engineer',
    'mechanical engineer',
    'electrical engineer',
    'civil engineer',
    'engineering consultant',
    'CAD services',
    'engineering design',
    'technical consulting',
    'engineering projects',
    'freelance engineers',
    'engineering solutions'
  ],
  openGraph: {
    title: 'EngineerMarketplace - Professional Engineering Services Worldwide',
    description: 'Connect with verified engineers for all your technical projects. Quality work, competitive rates, fast delivery.',
    images: [
      {
        url: '/og-homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'EngineerMarketplace - Professional Engineering Services',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EngineerMarketplace - Professional Engineering Services',
    description: 'Connect with verified engineers for all your technical projects.',
    images: ['/twitter-homepage.jpg'],
  },
  alternates: {
    canonical: 'https://engineermarketplace.com',
  },
};

export const generateHomePageJsonLd = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'EngineerMarketplace - Professional Engineering Services',
    description: 'Find and hire verified professional engineers for your projects.',
    url: 'https://engineermarketplace.com',
    mainEntity: {
      '@type': 'Service',
      name: 'Engineering Services Marketplace',
      description: 'Platform connecting clients with professional engineers worldwide',
      provider: {
        '@type': 'Organization',
        name: 'EngineerMarketplace',
        url: 'https://engineermarketplace.com'
      },
      serviceType: [
        'Structural Engineering',
        'Mechanical Engineering',
        'Electrical Engineering',
        'Civil Engineering',
        'Software Engineering'
      ],
      areaServed: 'Worldwide',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Engineering Services',
        itemListElement: [
          {
            '@type': 'OfferCatalog',
            name: 'Structural Engineering',
            description: 'Professional structural engineering and design services'
          },
          {
            '@type': 'OfferCatalog', 
            name: 'Mechanical Engineering',
            description: 'Mechanical system design and consulting services'
          },
          {
            '@type': 'OfferCatalog',
            name: 'Electrical Engineering', 
            description: 'Electrical system design and implementation services'
          }
        ]
      }
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://engineermarketplace.com'
        }
      ]
    }
  };
};