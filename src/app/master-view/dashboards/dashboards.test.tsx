import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Dashboards from './dashboards';
import 'element-internals-polyfill';

test('renders Dashboards component', () => {
  const wrapper = render(<Dashboards />);
  expect(wrapper).toBeTruthy();
});