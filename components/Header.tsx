import React from 'react';

const Header: React.FC = () => {
  
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 text-2xl font-bold text-emerald-700">
          <img src="/logo.jpg" alt="Recicla Capixaba Logo" className="h-14 w-14 object-cover rounded-full" />
          <span className="text-xl font-semibold text-emerald-800">Recicla Capixaba</span>
        </a>
        {/* Mobile menu could be added here */}
      </div>
    </header>
  );
};

export default Header;