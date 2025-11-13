// Copie e cole este conteúdo TODO no seu arquivo constants.ts
// Eu criei este arquivo para você com os seus guias bônus e os links corretos.

// Define o formato de um Guia
export interface Guide {
  id: string;
  title: string;
  description: string;
  mockupUrl: string; // Imagem de capa
  pdfUrl: string; // Link do PDF
  type: 'daily' | 'bonus';
  day?: number; // Somente para 'daily'
  buyUrl?: string; // Somente para 'bonus' (link de compra)
}

// Lista de todos os guias
export const guidesData: Guide[] = [
  
  // --- GUIAS DIÁRIOS (Exemplos) ---
  // (Você pode adicionar os outros guias diários aqui)
  {
    id: 'dia1',
    title: 'Dia 1: O Poder da Respiração',
    description: 'Aprenda a controlar sua ansiedade com técnicas simples de respiração que você pode fazer em qualquer lugar.',
    mockupUrl: 'https://placehold.co/600x400/A9B2FF/333?text=Guia+Dia+1',
    pdfUrl: 'https://drive.google.com/file/d/1...../preview', // ⚠️ TROCAR PELO SEU LINK DE PDF
    type: 'daily',
    day: 1,
  },
  {
    id: 'dia2',
    title: 'Dia 2: Entendendo seus Gatilhos',
    description: 'Identifique o que dispara sua ansiedade e comece a criar um plano de ação para lidar com esses momentos.',
    mockupUrl: 'https://placehold.co/600x400/A9B2FF/333?text=Guia+Dia+2',
    pdfUrl: 'https://drive.google.com/file/d/1...../preview', // ⚠️ TROCAR PELO SEU LINK DE PDF
    type: 'daily',
    day: 2,
  },
  
  // --- GUIAS BÔNUS (Order Bump) ---
  // (Aqui estão os guias que você me passou)
  {
    id: 'bonus1',
    title: 'Guia: Código Mental Antiansiedade',
    description: 'Um guia completo para reprogramar sua mente e quebrar os padrões de pensamento ansioso.',
    mockupUrl: 'https://placehold.co/600x400/8EEA95/333?text=Bônus+1',
    // ⬇️ Corrigi o link do Drive para abrir no app
    pdfUrl: 'https://drive.google.com/file/d/1Gn_I7E1qsMWwpNNRiyKbnfnAwK-6NySM/preview', 
    type: 'bonus',
    // ⬇️ Link de compra da Caktus (do seu 1º print)
    buyUrl: 'https://pay.caktus.com.br/3l6dth4_648244', 
  },
  {
    id: 'bonus2',
    title: 'Guia: Detox Emocional em 21 Dias',
    description: 'Um reset profundo para limpar sua carga emocional e encontrar mais leveza e paz no dia a dia.',
    mockupUrl: 'https://placehold.co/600x400/8EEA95/333?text=Bônus+2',
    // ⬇️ Corrigi o link do Drive para abrir no app
    pdfUrl: 'https://drive.google.com/file/d/1BV_kI775SFkiQySbn9QjAuHYHsuzEmCE/preview', 
    type: 'bonus',
    // ⬇️ Link de compra da Caktus (do seu 1º print)
    buyUrl: 'https://pay.caktus.com.br/3l6dth4_648244', 
  },

];
