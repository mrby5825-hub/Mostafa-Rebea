import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(process.cwd(), 'src') }],
  },
  build: {
    sourcemap: false,
    target: 'es2020',
  },
});
