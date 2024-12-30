import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import TopBanner from '@/components/layout/TopBanner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Digital Pylot - Performance Marketing',
  description: 'Performance Marketing für Unternehmen & Onlineshops',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBanner />
        <Header />
        {children}
      </body>
    </html>
  );
}