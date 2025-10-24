import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'SilentWatch - Memory Forensics Research Project',
  description: 'Memory Forensics Based Execution Phase Detection through Temporal Analysis with LSTM - A research project by Faculty of Computing, SLIIT',
  keywords: 'memory forensics, cybersecurity, LSTM, machine learning, digital forensics, SLIIT',
  authors: [{ name: 'SilentWatch Research Team' }],
  openGraph: {
    title: 'SilentWatch - Memory Forensics Research Project',
    description: 'Memory Forensics Based Execution Phase Detection through Temporal Analysis with LSTM',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}