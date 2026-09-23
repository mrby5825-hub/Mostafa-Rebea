import type { ReactNode } from 'react';
import { BackToTop } from '@/components/BackToTop';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { ScrollProgressBar } from '@/components/ScrollProgressBar';

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip">
      <ScrollProgressBar />
      <Navbar />
      <main className="flex-1 pt-28 sm:pt-32">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
}
