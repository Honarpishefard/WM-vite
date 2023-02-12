import { Home } from 'pages/home';
import { Login } from 'pages/login';
import { Jackets } from 'pages/productsCategories/mans';
import { SignUp } from 'pages/signup';

export const routes = {
  Home: {
    path: '/',
    element: <Home />
  },
  Signup: {
    path: '/signup',
    element: <SignUp />
  },
  Login: {
    path: '/login',
    element: <Login />
  },
  Mans: {
    path: '/mans',
    children: [
      { path: '/mans/jackets', element: <Jackets /> },
      { path: '/mans/jackets', element: <Home /> }
    ]
  }
};
