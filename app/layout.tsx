import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MakeUp by Isha',
  description: 'Get your makeup done by Isha',
  openGraph: {
    images: [
      {
        url: 'https://ik.imagekit.io/apylsa7sp/Screenshot%202025-12-22%20at%201.55.59%E2%80%AFPM.png?updatedAt=1766391968028',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://ik.imagekit.io/apylsa7sp/Screenshot%202025-12-22%20at%201.55.59%E2%80%AFPM.png?updatedAt=1766391968028',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
