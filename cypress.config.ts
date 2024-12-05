import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "besj2m",
  e2e: {
    baseUrl: 'http://localhost:3000'
  },
  env: {
    apiBaseUrl: 'http://localhost:8080/api',
  },
});
