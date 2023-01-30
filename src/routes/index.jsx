import { Home } from 'pages/home';
import { Login } from 'pages/login';
import { SignUp } from 'pages/signup';

export const routes = {
    Home: {
        path: '/',
        element: <Home />,
    },
    Signup: {
        path: '/signup',
        element: <SignUp />
    },
    Login: {
        path: '/login',
        element: <Login />
    }
};
