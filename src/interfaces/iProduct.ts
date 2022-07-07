import { iCategoria } from './iCategories';

export interface iProduct {
  category: iCategoria;
  description: string;
  id: number;
  images: Array<String>;
  price: number;
  title: string;
}
