import { Home } from 'pages/home';
import { Login } from 'pages/login';
import { Jackets, Shoes, Tshirts } from 'pages/productsCategories/mans';
import { Bags, Coats, Dresses } from 'pages/productsCategories/womans';
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
      { path: '/men/Shoes', element: <Shoes /> },
      { path: '/men/tshirts', element: <Tshirts /> },
    ]
  },
  Womans: {
    path: '/women',
    children: [
      { path: '/women/Coats', element: <Coats /> },
      { path: '/women/Dresses', element: <Dresses /> },
      { path: '/women/Bags', element: <Bags /> },
    ]
  }
};
