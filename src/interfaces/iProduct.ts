export interface iProduct {
  category: iCategoria;
  description: string;
  id: number;
  images: Array<String>;
  price: number;
  title: string;
}

export interface iCategoria {
  id: number;
  name: string;
  image: string;
}
