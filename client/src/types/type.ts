export interface Errors {
  [key: string]: string;
}
export interface IApiError {
  message: string;
  status?: number;
}
export interface Data {
  login: string;
  password: string;
  confirmPassword: string;
}
export interface ProductData {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  maxPrice: number;
  minPrice: number;
  data: Product[];
}
export interface Product {
  id: number;
  price: number;
  pathimg: string;
  main_info: {
    Бренд: string;
    Модель: string;
  };
}
export interface Equipment {
  type_equip: string;
  price: number;
  pathimg: string;
  brand: string;
  model: string;
}
export interface BasketItem {
  id: number;
  idBasket: number;
  id_equipment: number;
  id_user: number;
  count: number;
  equipment: Equipment;
}
export interface Order {
  id: number;
  pathimg: string;
  main_info: { [key: string]: string };
  short_info: { [key: string]: string };
  description: { [key: string]: string };
  price: number;
}

export interface IInfoOrder {
  id?: number;
  name: string;
  surname: string;
  number: string;
  address: string;
  id_order?: string;
  id_user: number;
  date?: string;
  price: number;
  allCount: number;
  status?: string;
  info: Array<{
    id_equipment: number;
    equipment: { brand: string; model: string; price: number };
    count: number;
  }>;
}
