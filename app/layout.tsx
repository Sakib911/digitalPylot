import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Header from '@/components/layout/Header';
import TopBanner from '@/components/layout/TopBanner';

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
});
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
       <body className={`${plusJakartaSans.variable} font-sans`}>
        <TopBanner />
        <Header />
        {children}
      </body>
    </html>
  );
}