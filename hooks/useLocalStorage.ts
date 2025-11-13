import { useState } from 'react';

// Eu removi o 'useEffect' que não era necessário

function useLocalStorage<T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  
  // 1. LÊ O VALOR INICIAL (A forma correta)
  // Esta função só roda UMA VEZ quando o app carrega
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Tenta pegar o valor salvo no navegador
      const item = window.localStorage.getItem(key);
      // Se achou, usa ele. Se não, usa o valor inicial.
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Se der erro, usa o valor inicial
      console.error(error);
      return initialValue;
    }
  });

  // 2. FUNÇÃO PARA SALVAR O VALOR
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Descobre qual valor salvar
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Salva no estado do app
      setStoredValue(valueToStore);
      // Salva no navegador para não perder
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };
  
  // 3. O 'useEffect' que estava aqui foi REMOVIDO.
  // Ele era a causa do bug.

  return [storedValue, setValue];
}

export default useLocalStorage;
