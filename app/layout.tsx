import "@radix-ui/themes/styles.css";
import './theme-config.css';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './Navbar';
import { Theme } from '@radix-ui/themes';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Trace - Issue Tracker',
  description: 'Manage and resolve issues effectively with Trace.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-neutral-50 text-neutral-900`}>

        <Theme accentColor="violet">
          <Navbar />
          <main className="container mx-auto p-6">{children}</main>
        </Theme>
      </body>
    </html>
  );
}
