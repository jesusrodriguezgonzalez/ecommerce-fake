import axios from 'axios';

const URL_FECTH = 'https://api.escuelajs.co/api/v1/';

export function getAllProducts() {
  return axios.get(URL_FECTH + 'products');
}

export function getAllCategories() {
  return axios.get(URL_FECTH + 'categories');
}
