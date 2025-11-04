import React from 'react';
import { ArrowRightIcon } from './IconComponents';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
      {number}
    </div>
    <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-600 max-w-xs">{description}</p>
  </div>
);

const Process: React.FC = () => {
  return (
    <section id="nosso-processo" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Nosso Processo de Reciclagem</h2>
        <p className="max-w-3xl mx-auto text-slate-600 mb-16">
          Seguimos um processo eficiente e transparente para garantir que cada material seja tratado da forma correta.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
          <ProcessStep
            number="1"
            title="Coleta Seletiva"
            description="Recolhemos os materiais recicláveis diretamente em sua empresa ou condomínio."
          />
          <ArrowRightIcon className="h-8 w-8 text-slate-300 my-4 md:my-0 md:mx-4 rotate-90 md:rotate-0" />
          <ProcessStep
            number="2"
            title="Triagem"
            description="Separamos os materiais por tipo e qualidade em nosso centro de triagem."
          />
          <ArrowRightIcon className="h-8 w-8 text-slate-300 my-4 md:my-0 md:mx-4 rotate-90 md:rotate-0" />
          <ProcessStep
            number="3"
            title="Processamento"
            description="Os materiais são prensados, limpos e preparados para serem enviados à indústria."
          />
          <ArrowRightIcon className="h-8 w-8 text-slate-300 my-4 md:my-0 md:mx-4 rotate-90 md:rotate-0" />
          <ProcessStep
            number="4"
            title="Nova Matéria-Prima"
            description="O material reciclado se transforma em matéria-prima para novos produtos."
          />
        </div>
      </div>
    </section>
  );
};

export default Process;
