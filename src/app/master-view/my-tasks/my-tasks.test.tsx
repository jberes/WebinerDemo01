import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import MyTasks from './my-tasks';
import 'element-internals-polyfill';

test('renders MyTasks component', () => {
  const wrapper = render(<MyTasks />);
  expect(wrapper).toBeTruthy();
});