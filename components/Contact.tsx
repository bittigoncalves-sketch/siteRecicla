import React from 'react';
import { PhoneIcon, MailIcon, LocationMarkerIcon } from './IconComponents';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-20 bg-emerald-700 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
        <p className="max-w-3xl mx-auto mb-12">
          Estamos prontos para ajudar sua empresa a ser mais sustentável. Fale conosco para saber mais sobre nossas soluções de reciclagem.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16">
          <div className="flex items-center gap-4">
            <PhoneIcon className="h-8 w-8 text-emerald-200" />
            <div>
              <h3 className="font-semibold text-lg">Telefone</h3>
              <a href="tel:+552730773775" className="hover:text-emerald-100 transition-colors">+55 (27) 3077-3775</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MailIcon className="h-8 w-8 text-emerald-200" />
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <a href="mailto:reciclacapixaba2021@gmail.com" className="hover:text-emerald-100 transition-colors">reciclacapixaba2021@gmail.com</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <LocationMarkerIcon className="h-8 w-8 text-emerald-200" />
            <div>
              <h3 className="font-semibold text-lg">Endereço</h3>
              <p>Rua Antonio Aleixo, 601, Vitória - ES</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;