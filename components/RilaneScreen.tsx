
import React from 'react';
import { BrainIcon } from './icons';

const AppHeader: React.FC<{ title: string; subtitle: React.ReactNode }> = ({ title, subtitle }) => (
    <header className="bg-gradient-to-br from-[#D4C4F3] to-[#A185D7] text-white p-5 -mx-5 -mt-5 mb-5 rounded-b-2xl">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-base font-normal opacity-90">{subtitle}</p>
    </header>
);

const RilaneScreen: React.FC = () => {
    const handleStartChat = () => {
        // Placeholder for chat functionality
        alert("A funcionalidade de chat com a Rilane será implementada em breve!");
    };

    return (
        <div className="p-5">
            <AppHeader title="Converse com a Rilane" subtitle="Sua psicóloga com IA para uma mente mais calma." />
            <div className="content-area text-center flex flex-col items-center">
                <div className="bg-gradient-to-br from-[#D4C4F3] to-[#A185D7] p-4 rounded-full inline-block mb-6 shadow-lg">
                    <BrainIcon className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#333] mb-4">Sua Jornada de Autoconhecimento Começa Agora</h2>
                <p className="text-md text-[#555] leading-relaxed mb-8 max-w-xl">
                    Rilane é uma inteligência artificial avançada, treinada em psicologia e neurociência,
                    projetada para ser sua companheira de confiança. Ela oferece um espaço seguro para você
                    explorar seus pensamentos, receber conselhos práticos e aprender técnicas validadas
                    para gerenciar a ansiedade e cultivar o bem-estar emocional.
                </p>
                <button 
                    onClick={handleStartChat}
                    className="w-full max-w-xs py-4 px-6 bg-[#A185D7] text-white rounded-lg text-lg font-semibold cursor-pointer transition-all hover:bg-[#8a6ec1] hover:shadow-xl transform hover:-translate-y-1"
                >
                    Começar a Conversar
                </button>
            </div>
        </div>
    );
};

export default RilaneScreen;
