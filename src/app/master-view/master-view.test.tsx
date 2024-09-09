import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import MasterView from './master-view';
import 'element-internals-polyfill';

test('renders MasterView component', () => {
  const wrapper = render(<MasterView />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});