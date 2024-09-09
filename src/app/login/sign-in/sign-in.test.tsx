import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import SignIn from './sign-in';
import 'element-internals-polyfill';

test('renders SignIn component', () => {
  const wrapper = render(<SignIn />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});