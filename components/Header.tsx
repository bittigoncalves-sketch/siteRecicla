import React from 'react';
import { LeafIcon } from './IconComponents';

const Header: React.FC = () => {
  const navLinks = [
    { href: '#o-que-reciclamos', label: 'O Que Reciclamos' },
    { href: '#por-que-reciclar', label: 'Por Que Reciclar' },
    { href: '#nosso-processo', label: 'Processo' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-2xl font-bold text-emerald-700">
          <LeafIcon className="h-7 w-7" />
          <span>Recicla</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-slate-600 hover:text-emerald-600 transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contato" className="hidden md:inline-block bg-emerald-600 text-white px-5 py-2 rounded-full hover:bg-emerald-700 transition-colors duration-300 shadow-md">
          Fale Conosco
        </a>
        {/* Mobile menu could be added here */}
      </div>
    </header>
  );
};

export default Header;