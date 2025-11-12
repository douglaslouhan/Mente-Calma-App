
export interface User {
  name: string;
  email: string;
}

export interface Guide {
  day: number;
  title: string;
  description: string;
  pdfUrl: string;
  mockupUrl: string;
}

export interface DiaryEntry {
  type: 'Emoção' | 'Sono';
  text: string;
  date: string;
}

export interface Tasks {
  pending: string[];
  completed: string[];
}

export type Screen = 'guides' | 'diary' | 'tasks' | 'community' | 'rilane';
