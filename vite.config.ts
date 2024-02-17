/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import browserslistToEsbuild from 'browserslist-to-esbuild';

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    plugins: [react(), viteTsconfigPaths()],
    build: {
      outDir: 'build',
      target: browserslistToEsbuild(),
      sourcemap: mode === 'development',
    },
    esbuild: {
      target: 'esnext',
    },
    server: {
      open: true,
      port: 5173,
    },
    test: {
      globals: true,
      environment: 'jsdom',
      environmentOptions: {
        jsdom: {
          url: 'http://localhost',
        },
      },
      setupFiles: './src/setupTests.ts',
      coverage: {
        provider: 'istanbul',
        reporter: ['text', 'html'],
        exclude: ['node_modules/', 'src/setupTests.ts'],
      },
    },
  });
};
