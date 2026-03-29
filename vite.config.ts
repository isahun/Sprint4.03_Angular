/// <reference types="vitest" />
import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig(({ mode }) => ({
  plugins: [angular()],
  test: {
    globals: true,
    setupFiles: ['src/test-setup.ts'], // Aquí li diem que llegeixi el fitxer del Pas 1
    environment: 'jsdom',
    include: ['src/**/*.spec.ts'],
  },
}));
