import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://engineermarketplace.com'),
  title: {
    default: 'EngineerMarketplace - Professional Engineering Services & Solutions',
    template: '%s | EngineerMarketplace'
  },
  description: 'Connect with verified professional engineers for all your technical needs. From structural and mechanical to electrical engineering services. Quality work, competitive prices, and expert solutions delivered on time.',
  keywords: [
    'engineering services',
    'professional engineers',
    'structural engineering',
    'mechanical engineering',
    'electrical engineering',
    'civil engineering',
    'engineering consultant',
    'technical solutions',
    'engineering marketplace',
    'hire engineers',
    'engineering projects',
    'CAD services',
    'engineering design',
    'technical consulting'
  ],
  authors: [{ name: 'EngineerMarketplace Team' }],
  creator: 'EngineerMarketplace',
  publisher: 'EngineerMarketplace',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://engineermarketplace.com',
    siteName: 'EngineerMarketplace',
    title: 'EngineerMarketplace - Professional Engineering Services & Solutions',
    description: 'Connect with verified professional engineers for all your technical needs. Quality work, competitive prices, and expert solutions delivered on time.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EngineerMarketplace - Professional Engineering Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EngineerMarketplace - Professional Engineering Services',
    description: 'Connect with verified professional engineers for all your technical needs.',
    images: ['/twitter-image.jpg'],
    creator: '@engineermarketplace',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://engineermarketplace.com',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
