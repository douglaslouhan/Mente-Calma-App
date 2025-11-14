Peço mil desculpas\! Eu falhei em enviar o bloco de código.

Aqui está o código completo. Por favor, copie e cole este conteúdo para dentro do seu arquivo `components/GuidesScreen.tsx`.

```typescript
import React from 'react';
import { guidesData, Guide } from '../constants';

// ⚠️ AQUI ESTAVA O ERRO!
// A linha que importava 'react-icons' foi AGORA TOTALMENTE APAGADA.

// Define as propriedades que este componente recebe
interface GuidesScreenProps {
  user: { name: string };
  firstLoginDate: string;
  unlockedPacks: string[]; // <-- A NOVA PROPRIEDIADE
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
            <span className="mr-2">🔒</span>
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
      return (
        <a 
          href={guide.buyUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="guide-card-button btn-buy"
        >
          <span className="mr-2">🛍️</span>
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
```
