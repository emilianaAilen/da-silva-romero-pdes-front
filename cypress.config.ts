import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
     baseUrl: 'http://localhost:3000'
  },
  env: {
    apiBaseUrl: 'http://localhost:8080/api',
  },
});
