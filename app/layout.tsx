import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ronie | DevOps Engineer',
  description:
    'Personal portfolio of Ronie, a DevOps Engineer focused on scalable infrastructure, automation, and cloud-native systems.',
  keywords: ['Ronie', 'DevOps Engineer', 'Cloud', 'CI/CD', 'Kubernetes'],
  openGraph: {
    title: 'Ronie | DevOps Engineer',
    description:
      'I build scalable, reliable infrastructure and automate everything.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
