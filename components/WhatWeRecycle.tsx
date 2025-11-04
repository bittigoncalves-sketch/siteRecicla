import React from 'react';
import { PaperIcon, PlasticIcon, GlassIcon, MetalIcon, ElectronicsIcon } from './IconComponents';

const WhatWeRecycle: React.FC = () => {
  const items = [
    { icon: <PaperIcon className="h-12 w-12 text-emerald-600" />, name: 'Papel e Papelão' },
    { icon: <PlasticIcon className="h-12 w-12 text-emerald-600" />, name: 'Plásticos' },
    { icon: <GlassIcon className="h-12 w-12 text-emerald-600" />, name: 'Vidros' },
    { icon: <MetalIcon className="h-12 w-12 text-emerald-600" />, name: 'Metais' },
    { icon: <ElectronicsIcon className="h-12 w-12 text-emerald-600" />, name: 'Eletrônicos' },
  ];

  return (
    <section id="o-que-reciclamos" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">O Que Reciclamos?</h2>
        <p className="max-w-3xl mx-auto text-slate-600 mb-12">
          Coletamos e processamos uma vasta gama de materiais, garantindo que eles retornem ao ciclo produtivo e não poluam nosso meio ambiente.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-slate-50 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              {item.icon}
              <h3 className="mt-4 font-semibold text-lg text-slate-700">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeRecycle;
