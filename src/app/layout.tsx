import type { Metadata } from 'next';

import '../styles/globals.css';
import Nav from '@/components/Nav';

export const metadata: Metadata = {
  title: 'Acounter',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pl'>
      <body className='bg-gray-950'>
        <Nav />
        {children}
      </body>
    </html>
  );
}
