import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import CreateAccount from './create-account';
import 'element-internals-polyfill';

test('renders CreateAccount component', () => {
  const wrapper = render(<CreateAccount />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});