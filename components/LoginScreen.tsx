
import React, { useState } from 'react';
import { User } from '../types';

interface LoginScreenProps {
  onLogin: (user: User) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLoginClick = () => {
    if (name.trim() && email.trim() && email.includes('@')) {
      onLogin({ name: name.trim(), email: email.trim() });
    } else {
      alert("Por favor, preencha seu nome e um e-mail válido.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-[#D4C4F3] to-[#A185D7] p-5">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-sm w-full">
        <h1 className="text-3xl font-extrabold text-[#A185D7] mb-2">Mente & Calma</h1>
        <h2 className="text-xl text-[#333] mb-2">Entre com seu e-mail de compra</h2>
        <p className="text-sm text-[#555] mb-5">Use o mesmo nome e e-mail informados no momento da compra para acessar seu conteúdo.</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Seu nome"
          className="w-full px-4 py-3.5 mb-2.5 border border-[#E0E0E0] rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#A185D7]"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu e-mail"
          className="w-full px-4 py-3.5 mb-2.5 border border-[#E0E0E0] rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#A185D7]"
          required
        />
        <button
          onClick={handleLoginClick}
          className="w-full py-4 bg-[#A185D7] text-white rounded-lg text-base font-semibold cursor-pointer transition-colors hover:bg-[#8a6ec1]"
        >
          Acessar
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
