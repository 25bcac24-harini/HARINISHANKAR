// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/HARINISHANKAR/'  // <-- important for GitHub Pages; match your repository name
});
