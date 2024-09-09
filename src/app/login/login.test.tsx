import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Login from './login';
import 'element-internals-polyfill';

test('renders Login component', () => {
  const wrapper = render(<Login />);
  expect(wrapper).toBeTruthy();
});