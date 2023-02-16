import { API_URL } from '../../utils/constants';

//TODO: Create a func to handle api request with proper error handling.

export function getProducts() {
  const URL = `${API_URL}/products`;

  return fetch(URL);
}

export function getProduct(id) {
  const URL = `${API_URL}/products/${id}`;

  return fetch(URL);
}

export function searchProducts(query) {
  const URL = `${API_URL}/products/search?q=${query}`

  return fetch(URL);
}
