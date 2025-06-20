
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image?: string;
  tags: string[];
}

export type Category = 'Maths' | 'Physics' | 'Universe' | 'Music' | 'Coding';

export const CATEGORIES: Category[] = ['Maths', 'Physics', 'Universe', 'Music', 'Coding'];
