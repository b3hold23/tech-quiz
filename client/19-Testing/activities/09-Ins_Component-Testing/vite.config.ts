import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './src/tests/setup.js',
  },
});

// vitest and @types/jest packages are needed for Vitest integration.

// The @testing-library/react package give us the ability to test React functionality within the Vitest framework.

// The happy-dom package simulates a browser environment which we can use for testing purposes.

// The pretty and @types/pretty packages are used to neatly format HTML so that it can be repeatedly compared for testing purposes.
