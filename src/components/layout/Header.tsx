import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

export const Header: React.FC = () => {
  const { user, signOut, isAdmin } = useAuth();
  const location = useLocation();
  const isMobile = useIsMobile();
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <header className="bg-[var(--color-background)] border-b border-[var(--color-border)] py-4 px-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-xl text-[var(--color-primary)]">Fitin</span>
          <span className="text-[var(--color-neutral-500)] text-sm">Diet Analyser</span>
        </Link>

        <nav className="flex items-center gap-4">
          {user && (
            <>
              <Link
                to="/dashboard"
                className="text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors text-sm"
              >
                Dashboard
              </Link>
              <Link
                to="/log"
                className="text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors text-sm"
              >
                Log Meals
              </Link>
              {isAdmin && (
                <Link
                  to="/admin"
                  className={`text-sm transition-colors ${isAdminPage ? 'font-semibold text-[var(--color-primary)]' : 'text-[var(--color-foreground)] hover:text-[var(--color-primary)]'}`}
                >
                  Admin
                </Link>
              )}
            </>
          )}

          {user ? (
            <Button
              variant="outline"
              size="sm"
              onClick={signOut}
              className="rounded-full border border-[var(--color-neutral-300)]"
            >
              Sign Out
            </Button>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/login">
                <Button variant="outline" size="sm" className="rounded-full border border-[var(--color-neutral-300)]">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="sm" className="rounded-full bg-[var(--color-foreground)] text-white hover:bg-black/80">
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
