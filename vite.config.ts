import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

// https://vite.dev/config/
export default defineConfig({

  plugins: [
    TanStackRouterVite(),
    react(),
    vanillaExtractPlugin({
      identifiers: ({ hash }) => `megha-todo_${hash}`
    }),
    tsconfigPaths(),
  ],

  server: {
    host: true,
    port: 3000,
  },
});
