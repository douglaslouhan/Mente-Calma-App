
import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { DiaryEntry } from '../types';

const AppHeader: React.FC<{ title: string; subtitle: React.ReactNode }> = ({ title, subtitle }) => (
    <header className="bg-gradient-to-br from-[#D4C4F3] to-[#A185D7] text-white p-5 -mx-5 -mt-5 mb-5 rounded-b-2xl">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-base font-normal opacity-90">{subtitle}</p>
    </header>
);

const DiaryScreen: React.FC = () => {
    const [entries, setEntries] = useLocalStorage<DiaryEntry[]>('menteCalmaDiary', []);
    const [emotion, setEmotion] = useState('');
    const [sleep, setSleep] = useState('');

    const addEntry = (type: 'Emoção' | 'Sono', text: string) => {
        if (!text.trim()) return;
        const newEntry: DiaryEntry = { type, text, date: new Date().toISOString() };
        setEntries([...entries, newEntry]);
    };

    const handleAddEmotion = () => {
        addEntry('Emoção', emotion);
        setEmotion('');
    };

    const handleAddSleep = () => {
        addEntry('Sono', sleep);
        setSleep('');
    };

    return (
        <div className="p-5">
            <AppHeader title="Seu Diário" subtitle="Registre seus sentimentos e sono." />
            <div className="content-area space-y-5">
                <div className="bg-[#fdfcff] p-5 rounded-2xl shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Registrar Emoção</h3>
                    <input type="text" value={emotion} onChange={(e) => setEmotion(e.target.value)} placeholder="Como você está se sentindo?" className="w-full p-3 border border-[#E0E0E0] rounded-lg mb-2.5 focus:outline-none focus:ring-2 focus:ring-[#A185D7]" />
                    <button onClick={handleAddEmotion} className="w-full p-3 border-none rounded-lg bg-[#D4C4F3] text-[#A185D7] font-semibold cursor-pointer hover:bg-[#c9b8e9]">Salvar Emoção</button>
                </div>
                <div className="bg-[#fdfcff] p-5 rounded-2xl shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Registrar Sono</h3>
                    <input type="text" value={sleep} onChange={(e) => setSleep(e.target.value)} placeholder="Como foi sua noite?" className="w-full p-3 border border-[#E0E0E0] rounded-lg mb-2.5 focus:outline-none focus:ring-2 focus:ring-[#A185D7]" />
                    <button onClick={handleAddSleep} className="w-full p-3 border-none rounded-lg bg-[#D4C4F3] text-[#A185D7] font-semibold cursor-pointer hover:bg-[#c9b8e9]">Salvar Sono</button>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4 mt-5 text-[#333]">Últimos Registros</h3>
                    <ul className="space-y-2.5">
                        {entries.length === 0 ? (
                            <li className="bg-white p-4 rounded-lg shadow-md text-center text-gray-500">Nenhum registro ainda.</li>
                        ) : (
                            [...entries].reverse().map((entry, index) => (
                                <li key={index} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
                                    <span><strong>{entry.type}:</strong> {entry.text}</span>
                                    <span className="text-xs text-[#555]">{new Date(entry.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}</span>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DiaryScreen;
