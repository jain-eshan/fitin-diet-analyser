import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--color-background)] border-t border-[var(--color-border)] py-6 px-5 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[var(--color-neutral-500)] text-sm">
          © {new Date().getFullYear()} Fitin. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm text-[var(--color-neutral-500)]">
          <Link to="/" className="hover:text-[var(--color-primary)] transition-colors">Reccos</Link>
          <a href="https://fitin.club" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary)] transition-colors">fitin.club</a>
        </div>
      </div>
    </footer>
  );
};
