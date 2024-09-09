import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import Backlog from './backlog';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders Backlog component', () => {
  const wrapper = render(<Backlog />);
  expect(wrapper).toBeTruthy();
});