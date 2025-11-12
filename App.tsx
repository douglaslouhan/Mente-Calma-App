import React, { useState, useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import { User, Screen } from './types';
import LoginScreen from './components/LoginScreen';
import GuidesScreen from './components/GuidesScreen';
import DiaryScreen from './components/DiaryScreen';
import TasksScreen from './components/TasksScreen';
import CommunityScreen from './components/CommunityScreen';
import RilaneScreen from './components/RilaneScreen';
import BottomNav from './components/BottomNav';
import PdfViewer from './components/PdfViewer';
import { DownloadIcon } from './components/icons';

const App: React.FC = () => {
    const [user, setUser] = useLocalStorage<User | null>('menteCalmaUser', null);
    const [firstLogin, setFirstLogin] = useLocalStorage<string | null>('menteCalmaFirstLogin', null);
    const [activeScreen, setActiveScreen] = useState<Screen>('guides');
    const [pdfViewerState, setPdfViewerState] = useState<{ visible: boolean; url: string; title: string }>({
        visible: false,
        url: '',
        title: '',
    });
    const [installPrompt, setInstallPrompt] = useState<any>(null);

    useEffect(() => {
        const handleBeforeInstallPrompt = (e: Event) => {
          e.preventDefault();
          setInstallPrompt(e);
        };

        const handleAppInstalled = () => {
          setInstallPrompt(null);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        window.addEventListener('appinstalled', handleAppInstalled);

        return () => {
          window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
          window.removeEventListener('appinstalled', handleAppInstalled);
        };
    }, []);

    const handleInstallClick = async () => {
        if (!installPrompt) return;
        installPrompt.prompt();
        setInstallPrompt(null);
    };

    const handleLogin = (loggedInUser: User) => {
        setUser(loggedInUser);
        if (!firstLogin) {
            setFirstLogin(new Date().toISOString());
        }
        setActiveScreen('guides');
    };

    const openPdf = (url: string, title: string) => {
        setPdfViewerState({ visible: true, url, title });
    };

    const closePdf = () => {
        setPdfViewerState({ visible: false, url: '', title: '' });
    };

    if (!user) {
        return <LoginScreen onLogin={handleLogin} />;
    }

    const renderScreen = () => {
        switch (activeScreen) {
            case 'guides':
                return <GuidesScreen user={user} onOpenPdf={openPdf} />;
            case 'diary':
                return <DiaryScreen />;
            case 'tasks':
                return <TasksScreen />;
            case 'community':
                return <CommunityScreen />;
            case 'rilane':
                return <RilaneScreen />;
            default:
                return <GuidesScreen user={user} onOpenPdf={openPdf} />;
        }
    };

    return (
        <div className="max-w-3xl mx-auto bg-white min-h-screen pb-[80px] relative">
             {installPrompt && (
                <button
                    onClick={handleInstallClick}
                    className="absolute top-5 right-5 bg-[#A185D7] text-white font-semibold py-2 px-4 rounded-full shadow-lg z-20 flex items-center gap-2 transition-transform transform hover:scale-105 hover:bg-[#8a6ec1]"
                    aria-label="Instalar App"
                >
                    <DownloadIcon className="w-5 h-5" />
                    <span>Instalar</span>
                </button>
            )}
            <div id="app-container">
                {renderScreen()}
                <BottomNav activeScreen={activeScreen} onNavigate={setActiveScreen} />
                <PdfViewer
                    visible={pdfViewerState.visible}
                    url={pdfViewerState.url}
                    title={pdfViewerState.title}
                    onClose={closePdf}
                />
            </div>
        </div>
    );
};

export default App;
