import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'there';

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)]">
      <Header />
      <main className="flex-grow py-8 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <h1 className="text-2xl font-bold text-[var(--color-foreground)] mb-2">
          Hi, {displayName} 👋
        </h1>
        <p className="text-[var(--color-neutral-500)] mb-8">Here's your diet overview.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[var(--color-neutral-50)] border border-[var(--color-border)] rounded-lg p-6">
            <p className="text-sm text-[var(--color-neutral-500)] mb-1">Health Score</p>
            <p className="text-4xl font-bold text-[var(--color-primary)]">—</p>
            <p className="text-xs text-[var(--color-neutral-400)] mt-1">Run your first analysis</p>
          </div>
          <div className="bg-[var(--color-neutral-50)] border border-[var(--color-border)] rounded-lg p-6">
            <p className="text-sm text-[var(--color-neutral-500)] mb-1">Meals Logged</p>
            <p className="text-4xl font-bold text-[var(--color-foreground)]">0</p>
            <p className="text-xs text-[var(--color-neutral-400)] mt-1">This week</p>
          </div>
          <div className="bg-[var(--color-neutral-50)] border border-[var(--color-border)] rounded-lg p-6">
            <p className="text-sm text-[var(--color-neutral-500)] mb-1">Analyses Done</p>
            <p className="text-4xl font-bold text-[var(--color-foreground)]">0</p>
            <p className="text-xs text-[var(--color-neutral-400)] mt-1">All time</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link to="/profile">
            <Button variant="outline">Complete Diet Profile</Button>
          </Link>
          <Link to="/log">
            <Button>Log Today's Meals</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
