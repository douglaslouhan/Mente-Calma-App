// Copie e cole este conteúdo TODO no seu arquivo App.tsx
// Eu corrigi a linha 33 para ?plano=completo

import React, { useState, useEffect } from 'react';
import LoginScreen from './components/LoginScreen';
import GuidesScreen from './components/GuidesScreen';
import DiaryScreen from './components/DiaryScreen';
import TasksScreen from './components/TasksScreen';
import CommunityScreen from './components/CommunityScreen';
import PdfViewer from './components/PdfViewer';
import BottomNav from './components/BottomNav';
import RilaneScreen from './components/RilaneScreen';
import useLocalStorage from './hooks/useLocalStorage';

// Define as chaves de LocalStorage
const USER_KEY = 'menteCalmaUser';
const FIRST_LOGIN_KEY = 'menteCalmaFirstLogin';
const UNLOCKED_PACKS_KEY = 'menteCalmaUnlockedPacks'; // <-- NOSSA NOVA CHAVE

type Screen = 'login' | 'guides' | 'diary' | 'tasks' | 'community' | 'rilane';

const App: React.FC = () => {
  const [user, setUser] = useLocalStorage<any>(USER_KEY, null);
  const [firstLogin, setFirstLogin] = useLocalStorage<string | null>(FIRST_LOGIN_KEY, null);
  
  // Estado para os pacotes desbloqueados
  const [unlockedPacks, setUnlockedPacks] = useLocalStorage<string[]>(UNLOCKED_PACKS_KEY, []);
  
  const [currentScreen, setCurrentScreen] = useState<Screen>('guides');
  const [pdfViewerUrl, setPdfViewerUrl] = useState<string | null>(null);
  const [pdfViewerTitle, setPdfViewerTitle] = useState<string>('');

  // --- LÓGICA DE DESBLOQUEIO POR URL ---
  // Este código corre *uma vez* quando o app carrega
  useEffect(() => {
    // 1. Pega os parâmetros da URL (ex: ?plano=completo)
    const params = new URLSearchParams(window.location.search);
    
    // ⚠️ CORREÇÃO AQUI: Mudei de 'pacote' para 'plano'
    const purchasedPack = params.get('plano'); // 'plano' é a chave que vamos usar

    if (purchasedPack) {
      // 2. Se encontrou um ?plano=... na URL, salva no LocalStorage
      // para não perder
      if (!unlockedPacks.includes(purchasedPack)) {
        setUnlockedPacks(prevPacks => [...prevPacks, purchasedPack]);
      }
      
      // 3. Limpa a URL para que a chave secreta desapareça
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []); // O array vazio [] garante que isto só corre uma vez

  // --- Funções de Navegação e Login ---

  const handleLogin = (name: string, email: string) => {
    setUser({ name, email });
    if (!firstLogin) {
      setFirstLogin(new Date().toISOString());
    }
    setCurrentScreen('guides');
  };

  const handleNavClick = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const handleOpenGuide = (url: string, title: string) => {
    setPdfViewerUrl(url);
    setPdfViewerTitle(title);
  };

  const handleClosePdf = () => {
    setPdfViewerUrl(null);
  };

  // --- Renderização ---

  if (pdfViewerUrl) {
    return <PdfViewer url={pdfViewerUrl} title={pdfViewerTitle} onClose={handleClosePdf} />;
  }

  if (!user) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className="pb-20"> {/* Padding para o menu inferior */}
      
      {currentScreen === 'guides' && (
        <GuidesScreen 
          user={user} 
          firstLoginDate={firstLogin!} 
          onOpenGuide={handleOpenGuide}
          // Passamos os pacotes desbloqueados para a tela de Guias
          unlockedPacks={unlockedPacks} 
        />
      )}
      {currentScreen === 'diary' && <DiaryScreen />}
      {currentScreen === 'tasks' && <TasksScreen />}
      {currentScreen === 'community' && <CommunityScreen />}
      {currentScreen === 'rilane' && <RilaneScreen />}
      
      <BottomNav currentScreen={currentScreen} onNavClick={handleNavClick} />
    </div>
  );
};

export default App;
