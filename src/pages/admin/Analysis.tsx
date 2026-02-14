import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const Analysis: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)]">
      <Header />
      <main className="flex-grow py-8 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <h1 className="text-2xl font-bold text-[var(--color-foreground)] mb-2">Review Analysis</h1>
        <p className="text-[var(--color-neutral-500)]">Review AI output, add coach notes, and flag for follow-up.</p>
        <div className="mt-8 text-[var(--color-neutral-400)]">Analysis review coming soon — Step 7 of MVP.</div>
      </main>
      <Footer />
    </div>
  );
};

export default Analysis;
