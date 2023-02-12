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
    path: '/men',
    children: [
      { path: '/men/jackets', element: <Jackets /> },
      { path: '/men/jackets', element: <Home /> }
    ]
  }
};
