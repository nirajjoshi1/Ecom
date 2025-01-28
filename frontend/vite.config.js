import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Directly setting the URL for the API base URL
      "/api": {
        target: "https://ecom-nvp3.onrender.com",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
