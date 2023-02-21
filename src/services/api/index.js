import { API_URL } from '../../utils/constants';

//TODO: Create a func to handle api request with proper error handling.

function apiHandler(url, data = {}) {
  try {
    return fetch(url).then(resp => resp.json());
  } catch (error) {
    return error;
  }
}

export function getProducts() {
  const URL = `${API_URL}/products`;

  return apiHandler(URL);
}

export function getProduct(id) {
  const URL = `${API_URL}/products/${id}`;

  return apiHandler(URL);
}

export function searchProducts(query) {
  const URL = `${API_URL}/products/search?q=${query}`;

  return apiHandler(URL);
}
