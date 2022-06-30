import axios from 'axios';

const URL_FECTH = 'https://api.escuelajs.co/api/v1/products';

export function getAllProducts() {
  return axios.get(URL_FECTH);
}
