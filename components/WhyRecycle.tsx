import React from 'react';
import { CheckCircleIcon } from './IconComponents';

const WhyRecycle: React.FC = () => {
  const benefits = [
    "Reduz a quantidade de lixo em aterros sanitários.",
    "Conserva recursos naturais como água, madeira e minerais.",
    "Economiza energia em comparação com a produção a partir de matérias-primas.",
    "Diminui a emissão de gases de efeito estufa.",
    "Gera empregos e estimula a economia local."
  ];

  return (
    <section id="por-que-reciclar" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/600/400?recycle,planet" 
              alt="Mãos segurando um globo terrestre" 
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Por Que Reciclar é Essencial?</h2>
            <p className="text-slate-600 mb-8">
              Reciclar é um dos atos mais simples e impactantes que podemos fazer pelo nosso planeta. Cada item que você separa contribui para um futuro mais limpo e sustentável.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRecycle;
