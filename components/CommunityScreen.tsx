
import React from 'react';
import { UsersIcon, BoltIcon } from './icons';

const AppHeader: React.FC<{ title: string; subtitle: React.ReactNode }> = ({ title, subtitle }) => (
    <header className="bg-gradient-to-br from-[#D4C4F3] to-[#A185D7] text-white p-5 -mx-5 -mt-5 mb-5 rounded-b-2xl">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-base font-normal opacity-90">{subtitle}</p>
    </header>
);

const CommunityScreen: React.FC = () => {
    return (
        <div className="p-5">
            <AppHeader title="Nossos Espaços" subtitle="Conecte-se, compartilhe e evolua." />
            <div className="content-area space-y-5">
                <div className="rounded-2xl p-6 text-center text-white bg-gradient-to-br from-[#D4C4F3] to-[#A185D7]">
                    <UsersIcon className="w-7 h-7 mx-auto mb-2.5 opacity-80" />
                    <h2 className="text-xl font-bold mb-2.5">Mente & Calma - Ansiedade</h2>
                    <p className="text-sm leading-normal mb-5 opacity-90">Participe do nosso espaço de apoio emocional. Compartilhe experiências e receba acolhimento de mulheres que compreendem você.</p>
                    <a href="#" className="block w-full py-3.5 rounded-lg font-semibold bg-white text-[#A185D7] transition-colors hover:bg-gray-100">Entrar no Grupo Gratuito</a>
                </div>
                <div className="rounded-2xl p-6 text-center text-[#00522E] bg-gradient-to-br from-[#C4F3E0] to-[#86D9B5]">
                    <BoltIcon className="w-7 h-7 mx-auto mb-2.5 opacity-80" />
                    <h2 className="text-xl font-bold mb-2.5">Comunidade OFFANSIEDADE</h2>
                    <p className="text-sm leading-normal mb-5 opacity-90">Um refúgio exclusivo para quem busca evolução real. Aqui você recebe áudios, técnicas, mentorias e apoio direto da nossa equipe.</p>
                    <a href="#" className="block w-full py-3.5 rounded-lg font-semibold bg-transparent border-2 border-[#00522E] text-[#00522E] transition-colors hover:bg-white/30">Acessar Chat Exclusivo</a>
                </div>
            </div>
        </div>
    );
};

export default CommunityScreen;
