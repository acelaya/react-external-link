import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => {
  // Clears all mocks after every test
  vi.clearAllMocks();
  // Run a cleanup after each test case (e.g. clearing jsdom)
  cleanup();
});
