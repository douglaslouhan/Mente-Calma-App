// Copie e cole este conteúdo TODO no seu arquivo components/GuidesScreen.tsx

import React from 'react';
import { guidesData, Guide } from '../constants';
import { FaLock, FaShoppingBag } from 'react-icons/fa'; // Ícones para os botões

// Define as propriedades que este componente recebe
interface GuidesScreenProps {
  user: { name: string };
  firstLoginDate: string;
  unlockedPacks: string[]; // <-- A NOVA PROPRIEDADE
  onOpenGuide: (url: string, title: string) => void;
}

const GuidesScreen: React.FC<GuidesScreenProps> = ({ user, firstLoginDate, unlockedPacks, onOpenGuide }) => {
  
  const getDaysSinceLogin = () => {
    const firstLogin = new Date(firstLoginDate);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - firstLogin.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const daysSinceLogin = getDaysSinceLogin();

  // Função para renderizar o botão correto
  const renderGuideButton = (guide: Guide) => {
    
    // --- Lógica para GUIAS DIÁRIOS ---
    if (guide.type === 'daily') {
      const isLocked = (guide.day || 0) > daysSinceLogin;
      const daysRemaining = (guide.day || 0) - daysSinceLogin;

      if (isLocked) {
        return (
          <button className="guide-card-button btn-locked" disabled>
            <FaLock className="inline-block mr-2" />
            Libera em {daysRemaining} {daysRemaining > 1 ? 'dias' : 'dia'}
          </button>
        );
      }
      return (
        <button 
          className="guide-card-button btn-open"
          onClick={() => onOpenGuide(guide.pdfUrl, guide.title)}
        >
          Abrir Guia
        </button>
      );
    }

    // --- Lógica para GUIAS BÔNUS (Order Bumps) ---
    if (guide.type === 'bonus') {
      // AQUI ESTÁ A MÁGICA:
      // Verificamos se o array 'unlockedPacks' (do LocalStorage)
      // inclui 'completo' (ou o nome do pacote que destrava este guia)
      // ⚠️ Vamos assumir que ?pacote=completo destrava os dois.
      const isUnlocked = unlockedPacks.includes('completo'); 

      if (isUnlocked) {
        // O cliente comprou! Mostra o botão de abrir.
        return (
          <button 
            className="guide-card-button btn-open"
            onClick={() => onOpenGuide(guide.pdfUrl, guide.title)}
          >
            Abrir Guia Bônus
          </button>
        );
      }
      
      // O cliente não comprou. Mostra o botão de comprar.
      // O 'buyUrl' é o link de checkout da Cakto para este item.
      return (
        <a 
          href={guide.buyUrl}
          target="_blank" // Abre o checkout em nova aba
          rel="noopener noreferrer"
          className="guide-card-button btn-buy"
        >
          <FaShoppingBag className="inline-block mr-2" />
          Comprar Guia Extra
        </a>
      );
    }
    
    return null; // Caso algo dê errado
  };

  return (
    <div>
      <header className="app-header">
        <h1 className="logo-text">Mente & Calma</h1>
        <h2 className="text-lg font-light text-white opacity-90">Olá, {user.name}!</h2>
        {/* Adicionamos o botão de instalar de volta, caso ele exista no seu HTML */}
        <button id="btn-install-pwa" className="btn-install hidden">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M..."></path></svg>
          Instalar App
        </button>
      </header>
      
      <div className="content-area">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Biblioteca de Guias</h3>
        <div className="guides-container">
          {guidesData.map(guide => (
            <div key={guide.id} className="guide-card">
              <div className="guide-card-image">
                <img src={guide.mockupUrl} alt={guide.title} />
              </div>
              <div className="guide-card-content">
                <span className="day-tag">
                  {guide.type === 'daily' ? `DIA ${guide.day}` : 'GUIA BÔNUS'}
                </span>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{guide.title}</h4>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{guide.description}</p>
                {renderGuideButton(guide)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuidesScreen;
