import axios from 'axios';

const URL_FECTH = 'https://api.escuelajs.co/api/v1/';
const URL_CATEGORIES = 'https://api.escuelajs.co/api/v1/categories';
export function getAllProducts() {
  return axios.get(URL_FECTH + 'products');
}

export function getAllCategories() {
  return axios.get(URL_CATEGORIES);
}
