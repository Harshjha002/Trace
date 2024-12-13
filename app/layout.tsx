import "@radix-ui/themes/styles.css";
import './theme-config.css';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './Navbar';
import { Container, Theme } from '@radix-ui/themes';
import QueryClientProvider from "./QueryClientProvider";

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
        <QueryClientProvider>
        <Theme accentColor="violet">
          <Navbar />
          <main className="container mx-auto p-6">
            <Container>
            {children}
            </Container>
          </main>
        </Theme>
        </QueryClientProvider>
      </body>
    </html>
  );
}
