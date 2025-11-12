
import React from 'react';
import { Screen } from '../types';
import { BrainIcon, BookOpenIcon, HeartPulseIcon, CheckSquareIcon, UsersIcon } from './icons';

interface BottomNavProps {
  activeScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

interface NavItemProps {
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const NavButton: React.FC<NavItemProps> = ({ label, icon, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center flex-1 bg-none border-none cursor-pointer text-xs transition-colors ${isActive ? 'text-[#A185D7] font-semibold' : 'text-[#888]'}`}
  >
    <div className="w-6 h-6 mb-1">{icon}</div>
    <span>{label}</span>
  </button>
);


const BottomNav: React.FC<BottomNavProps> = ({ activeScreen, onNavigate }) => {
  const navItems: { id: Screen, label: string, icon: React.ReactNode }[] = [
    { id: 'rilane', label: 'Rilane', icon: <BrainIcon /> },
    { id: 'guides', label: 'Guias', icon: <BookOpenIcon /> },
    { id: 'diary', label: 'Diário', icon: <HeartPulseIcon /> },
    { id: 'tasks', label: 'Tarefas', icon: <CheckSquareIcon /> },
    { id: 'community', label: 'Comunidade', icon: <UsersIcon /> },
  ];
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-3xl mx-auto h-[70px] bg-white flex justify-around items-center shadow-[0_-2px_10px_rgba(0,0,0,0.08)] rounded-t-2xl">
      {navItems.map(item => (
        <NavButton
            key={item.id}
            label={item.label}
            icon={item.icon}
            isActive={activeScreen === item.id}
            onClick={() => onNavigate(item.id)}
        />
      ))}
    </nav>
  );
};

export default BottomNav;
