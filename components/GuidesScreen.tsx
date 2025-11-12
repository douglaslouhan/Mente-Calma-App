
import React from 'react';
import { User, Guide } from '../types';
import { GUIDES_DATA } from '../constants';
import { LockIcon } from './icons';

interface GuidesScreenProps {
  user: User;
  onOpenPdf: (url: string, title: string) => void;
}

const AppHeader: React.FC<{ title: string; subtitle: React.ReactNode }> = ({ title, subtitle }) => (
    <header className="bg-gradient-to-br from-[#D4C4F3] to-[#A185D7] text-white p-5 -mx-5 -mt-5 mb-5 rounded-b-2xl">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h2 className="text-lg font-normal opacity-90">{subtitle}</h2>
    </header>
);

const GuideCard: React.FC<{ guide: Guide; isLocked: boolean; daysRemaining: number; onOpenPdf: (url: string, title: string) => void }> = ({ guide, isLocked, daysRemaining, onOpenPdf }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-200 hover:-translate-y-1">
            <div className="w-full h-52 bg-[#f0f0f0] overflow-hidden">
                <img src={guide.mockupUrl} alt={guide.title} className="w-full h-full object-contain" />
            </div>
            <div className="p-5">
                <span className="text-xs font-semibold text-[#A185D7] uppercase">Dia {guide.day}</span>
                <h4 className="text-lg font-bold my-1">{guide.title}</h4>
                <p className="text-sm text-[#555] mb-4 leading-normal">{guide.description}</p>
                {isLocked ? (
                    <button className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-[#E0E0E0] text-[#888] font-semibold cursor-not-allowed">
                        <LockIcon className="w-4 h-4" />
                        Libera em {daysRemaining} {daysRemaining > 1 ? 'dias' : 'dia'}
                    </button>
                ) : (
                    <button 
                        onClick={() => onOpenPdf(guide.pdfUrl, guide.title)}
                        className="w-full py-3.5 rounded-lg bg-[#D4C4F3] text-[#A185D7] font-semibold transition-colors hover:bg-[#c9b8e9]">
                        Abrir Guia
                    </button>
                )}
            </div>
        </div>
    );
};

const GuidesScreen: React.FC<GuidesScreenProps> = ({ user, onOpenPdf }) => {
    const firstLoginString = localStorage.getItem("menteCalmaFirstLogin");
    const firstLoginDate = firstLoginString ? new Date(JSON.parse(firstLoginString)) : new Date();
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - firstLoginDate.getTime());
    const daysSinceLogin = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return (
        <div className="p-5">
            <AppHeader title="Mente & Calma" subtitle={<>Olá, <strong>{user.name}</strong>!</>} />
            <div className="content-area">
                <h3 className="text-lg font-semibold mb-4 text-[#333]">Biblioteca de Guias</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {GUIDES_DATA.map((guide) => {
                        const isLocked = !(guide.day <= daysSinceLogin || guide.day === 7);
                        const daysRemaining = guide.day - daysSinceLogin;
                        return (
                            <GuideCard 
                                key={guide.day}
                                guide={guide}
                                isLocked={isLocked}
                                daysRemaining={daysRemaining}
                                onOpenPdf={onOpenPdf}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default GuidesScreen;
