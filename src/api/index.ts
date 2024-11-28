const baseUrl = process.env.REACT_APP_API_URL;

export const API = {
  createUser: `${baseUrl}/user/create`,
  loginUser: `${baseUrl}/auth/login`,
  session: `${baseUrl}/auth/session`,
  getFavorites: `${baseUrl}/products/favorites`,
  getProducts: (query: string) => `${baseUrl}/products/search?query=${query}`,
  addToFavorites: (productId: string) => `${baseUrl}/products/favorite/${productId}`,
  buyProduct: (productId: string) => `${baseUrl}/purchase/${productId}`
}