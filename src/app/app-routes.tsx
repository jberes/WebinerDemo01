import { redirect } from 'react-router-dom';
import Login from './login/login';
import { routes as loginRoute } from './login/login-routes';
import MasterView from './master-view/master-view';
import { routes as masterViewRoute } from './master-view/master-view-routes';

export const routes = [
  { index: true, loader: () => redirect('login') },
  { path: 'login', element: <Login />, text: 'Login', children: loginRoute },
  { path: 'master-view', element: <MasterView />, text: 'Master View', children: masterViewRoute }
];
