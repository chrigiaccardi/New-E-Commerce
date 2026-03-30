// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      reportsDirectory: './coverage',
      include: [
        'src/app/**/*.ts'
      ],
      exclude: [
        'src/**/*.spec.ts',
        'src/**/*.test.ts',
        'node_modules/**',
        'dist/**',
        'coverage/**'
      ]
    }
  }
});