export type CategoryField = {
  id: number;
  name: string;
};

export type ProductForm = {
  id: number;
  title: string;
  price: number;
  description: string;
  category_id: number;
};
