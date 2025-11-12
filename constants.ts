// Copie e cole este conteúdo TODO no seu arquivo constants.ts

export interface Guide {
  id: number;
  type: 'daily' | 'bonus'; // 'daily' para liberação por dia, 'bonus' para order bumps
  day?: number; // Opcional, usado apenas por 'daily'
  title: string;
  description: string;
  pdfUrl: string;
  mockupUrl: string;
  buyUrl?: string; // Link para a página de compra do order bump
}

export const guidesData: Guide[] = [
  // --- GUIAS DE LIBERAÇÃO DIÁRIA ---
  {
    id: 1,
    type: 'daily',
    day: 1,
    title: "Resiliência Emocional",
    description: "Fortaleça sua mente para enfrentar desafios e manter o equilíbrio em tempos de crise.",
    pdfUrl: "https://drive.google.com/file/d/1iqbfGr-y2mp0ltCiQwl_JTGsH5uHaU7a/preview",
    mockupUrl: "https://drive.google.com/uc?export=view&id=13wpSMKYmIrpaQc0j5pivAFc2pZ72yWYY"
  },
  {
    id: 2,
    type: 'daily',
    day: 2,
    title: "Planner Mente & Calma – 7 Dias para Dominar a Ansiedade",
    description: "Um plano prático de 7 dias para organizar sua mente, criar rotinas saudáveis e conquistar serenidade.",
    pdfUrl: "https://drive.google.com/file/d/1McF7-quED96at4fKnhWlOq5DuZbz_bjO/preview",
    mockupUrl: "https://drive.google.com/uc?export=view&id=1KmE-KRDiQ7Ac5sgNjmvkto-Mhyf8dw-c"
  },
  {
    id: 3,
    type: 'daily',
    day: 3,
    title: "Respiração Consciente: Domine a Ansiedade",
    description: "Descubra o poder da respiração como ferramenta para equilibrar corpo e mente.",
    pdfUrl: "https://drive.google.com/file/d/1tZEpKrE4hqrlrxfmokBf6MEIDGQzzbe3/preview",
    mockupUrl: "https://drive.google.com/uc?export=view&id=1uPZtJMwG3x2OmoH4WpDVHmSaNLnD9fuZ"
  },
  {
    id: 4,
    type: 'daily',
    day: 4,
    title: "Desafio 7 Dias: Reduza a Ansiedade e Transforme Sua Vida",
    description: "Um passo a passo leve e transformador para cultivar calma e foco em apenas uma semana.",
    pdfUrl: "https://drive.google.com/file/d/18h5zx42WVgpv7UPNmQQ6_DgX9oQl__a7/preview",
    mockupUrl: "https://drive.google.com/uc?export=view&id=1ajwu0UAK4ifxBz6MY8uFAKL-jDuNcy1Z"
  },
  {
    id: 5,
    type: 'daily',
    day: 5,
    title: "Desafio 7 Dias: Hábitos Anti-Ansiedade",
    description: "Desenvolve hábitos simples e eficazes para manter sua mente em estado de paz.",
    pdfUrl: "https://drive.google.com/file/d/1hD4b4m_-gc8VnjIAUkDRnw32b5XH-IIN/preview",
    mockupUrl: "https://drive.google.com/uc?export=view&id=1TAh8Vt7ylECKrPLMyLeoprEf-y0lVKtl"
  },
  {
    id: 6,
    type: 'daily',
    day: 6,
    title: "Diário da Calma: Autoconhecimento e Controle Emocional",
    description: "Registre emoções, compreenda padrões e fortaleça seu autocontrole emocional.",
    pdfUrl: "https://drive.google.com/file/d/1WsHS6wnHFFhhcNeiRGOyychYnUN80xDQ/preview",
    mockupUrl: "https://drive.google.com/uc?export=view&id=1kfu6eWCoQthZnVDDS1wqBqKymljDuhE0"
  },
  {
    id: 7,
    type: 'daily',
    day: 7,
    title: "Método 3XR: Reconheça. Reprograme. Respire.",
    description: "Um método prático baseado em psicologia e neurociência para transformar sua relação com a ansiedade.",
    pdfUrl: "https://drive.google.com/file/d/1Q_-u-BtDhSgWtA-KyOTdb2Qp7mAcP5go/preview",
    mockupUrl: "https://drive.google.com/uc?export=view&id=1FRaNWce78GiaNMA77wDgzYkwelaRz6eX"
  },

  // --- GUIAS BÔNUS (ORDER BUMPS) ---
  {
    id: 8,
    type: 'bonus',
    title: "Código Mental Antiansiedade: Reprogramação Emocional para Eliminar Ciclos de Ansiedade",
    description: "Um método avançado de reprogramação emocional fundamentado na neurociência para eliminar os ciclos recorrentes de ansiedade.",
    pdfUrl: "https://drive.google.com/file/d/1Gn_I7E1qsMWwpNNRiyKbnfnAwK-6NySM/preview",
    mockupUrl: "https://drive.google.com/uc?export=view&id=1d1qMoiyKpC5ELpgTDzZk4rJUHyFwWj5S",
    buyUrl: "#" // ⚠️ ATENÇÃO: Substitua '#' pelo link de checkout da Cakto para ESTE produto
  },
  {
    id: 9,
    type: 'bonus',
    title: "Detox Emocional em 21 Dias: Um Reset Profundo",
    description: "Este protocolo completo de 21 dias é projetado para limpar sua mente e reequilibrar suas emoções.",
    pdfUrl: "https://drive.google.com/file/d/1BV_kI775SFkiQySbn9QjAuHYHsuzEmCE/preview",
    mockupUrl: "https://drive.google.com/uc?export=view&id=1EU5DxtHjyhYgcJWEALyR_jETP_D25hgQ",
    buyUrl: "#" // ⚠️ ATENÇÃO: Substitua '#' pelo link de checkout da Cakto para ESTE produto
  }
];
