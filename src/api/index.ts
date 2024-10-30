const baseUrl = process.env.REACT_APP_API_URL;

export const API = {
  createUser: `${baseUrl}/user/create`,
  loginUser:  `${baseUrl}/auth/login`,
  getProducts: (query: string) => `${baseUrl}/products/search?query=${query}`
}