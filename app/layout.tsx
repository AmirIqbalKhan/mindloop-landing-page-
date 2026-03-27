import type {Metadata} from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Mindloop',
  description: 'A space where curiosity meets clarity.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased selection:bg-foreground selection:text-background" suppressHydrationWarning>{children}</body>
    </html>
  );
}
