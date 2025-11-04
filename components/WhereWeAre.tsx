import React from 'react';
import { LocationMarkerIcon } from './IconComponents';

const WhereWeAre: React.FC = () => {
  const locations = [
    'São Paulo, Brasil',
    'Rio de Janeiro, Brasil',
    'Lisboa, Portugal',
    'Porto, Portugal',
    'Berlim, Alemanha',
    'Buenos Aires, Argentina',
  ];

  return (
    <section id="onde-estamos" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Onde Estamos: Nossa Presença Global</h2>
          <p className="max-w-3xl mx-auto text-slate-600">
            A Recicla expandiu suas operações para diversos cantos do mundo, levando soluções inovadoras em reciclagem para novas fronteiras.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 w-full">
            <h3 className="text-2xl font-semibold text-slate-700 mb-6">Nossos Escritórios</h3>
            <ul className="space-y-4">
              {locations.map((location, index) => (
                <li key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:bg-emerald-50 transition-colors duration-300">
                  <LocationMarkerIcon className="h-6 w-6 text-emerald-500 mr-4 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{location}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-2/3 w-full">
            <img 
              src="https://picsum.photos/800/600?map,world" 
              alt="Mapa mundial mostrando as localizações da Recicla" 
              className="rounded-lg shadow-2xl w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereWeAre;