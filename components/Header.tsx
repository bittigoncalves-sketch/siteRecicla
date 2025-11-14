import React from 'react';
import { LeafIcon } from './IconComponents';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-2xl font-bold text-emerald-700">
          <LeafIcon className="h-7 w-7" />
          <span>Recicla Capixaba</span>
        </a>
        {/* Mobile menu could be added here */}
      </div>
    </header>
  );
};

export default Header;
