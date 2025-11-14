import React from 'react';
import { LeafIcon } from './IconComponents';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-400">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <LeafIcon className="h-6 w-6 text-emerald-500" />
          <span className="font-bold text-xl text-white">Recicla Capixaba</span>
        </div>
        <div className="text-sm md:text-right">
          <p>
            &copy; {new Date().getFullYear()} Recicla Capixaba. Todos os direitos reservados.
          </p>
          <p className="mt-1">
            CNPJ: 35.457.861/0001-88
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;