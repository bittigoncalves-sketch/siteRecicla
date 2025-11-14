import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <img 
        src="https://picsum.photos/1600/900?nature,green" 
        alt="Paisagem natural" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Juntos por um Planeta Mais Verde.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-md">
          A Recicla é sua parceira na construção de um futuro sustentável, transformando resíduos em recursos valiosos.
        </p>
      </div>
    </section>
  );
};

export default Hero;