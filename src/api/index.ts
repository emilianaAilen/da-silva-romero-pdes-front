const baseUrl = process.env.REACT_APP_API_URL;

export const API = {
  createUser: `${baseUrl}/user/create`,
  loginUser: `${baseUrl}/auth/login`,
  session: `${baseUrl}/auth/session`,
  getFavorites: `${baseUrl}/products/favorites`,
  getPurchases: (userId: string) => `${baseUrl}/purchase/${userId}`,
  getProducts: (query: string) => `${baseUrl}/products/search?query=${query}`,
  getComments: (productId: string) => `${baseUrl}/products/${productId}/comments`,
  addToFavorites: (productId: string) => `${baseUrl}/products/favorite/${productId}`,
  buyProduct: (productId: string) => `${baseUrl}/purchase/${productId}`,
  addComment: (purchaseID: string) => `${baseUrl}/purchase/comment/${purchaseID}`,
  admin: {
    getFavorites: `${baseUrl}/products/favorites/admin`,
    getPurchases: `${baseUrl}/purchase/admin`,
    getTopPurchases: `${baseUrl}/purchase/admin/top`,
    getTopFavorites: `${baseUrl}/products/favorites/admin/top`,
    getAllUsers: `${baseUrl}/user/admin/all`,
    deleteUser: (email: string) => `${baseUrl}/user/admin/delete/${email}`,
  }
};