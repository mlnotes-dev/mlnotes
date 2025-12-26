import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ML Notes',
  description: 'ML Notes is a website for Machine Learning Notes, Projects, Videos, Courses, Guides, Tutorials, and more. By a builder. Created by Charan Manikanta Nalla, and powered by devsForFun studio.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name='impact-site-verification' content='f15a6c5f-9ef2-4ab6-9df2-060df707e749' />
      </head>
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
