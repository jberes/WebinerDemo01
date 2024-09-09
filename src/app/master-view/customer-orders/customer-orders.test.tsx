import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import CustomerOrders from './customer-orders';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders CustomerOrders component', () => {
  const wrapper = render(<CustomerOrders />);
  expect(wrapper).toBeTruthy();
});