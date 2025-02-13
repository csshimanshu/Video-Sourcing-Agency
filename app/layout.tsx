import type { Metadata, Viewport } from 'next';
import { Outfit, Inter } from 'next/font/google';
import LocomotiveScrollProvider from './components/providers/LocomotiveScrollProvider';
import './globals.css';
import './locomotive-scroll.css';

// Font optimization
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vidsource – Your Ultimate Video Production Partner',
  description: 'Professional video editing and production services for YouTube content creators.',
  metadataBase: new URL('http://localhost:3001'),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <LocomotiveScrollProvider>{children}</LocomotiveScrollProvider>
      </body>
    </html>
  );
}
