import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/project123",
  server: { watch: { awaitWriteFinish: true } },
  plugins: [react()],
});
