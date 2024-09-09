import { redirect } from 'react-router-dom';
import CreateAccount from './create-account/create-account';
import SignIn from './sign-in/sign-in';

export const routes = [
  { index: true, loader: () => redirect('create-account') },
  { path: 'create-account', element: <CreateAccount />, text: 'Create Account' },
  { path: 'sign-in', element: <SignIn />, text: 'Sign In' }
];
