import React, { useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import useAuth from './hooks/useAuth';
import { ToastContainer } from 'react-toastify';

function App() {
  useAuth();
  const generateRoutes = useCallback(() => {
    return Object.keys(routes).map((route) => (
      <Route element={routes[route].element} path={routes[route].path}>
        {routes[route]?.children?.map((i) => (
          <Route element={i.element} path={i.path} />
        ))}
      </Route>
    ));
  }, [routes]);

  return (
    <>
      <ToastContainer />
      <Routes>{generateRoutes()}</Routes>
    </>
  );
}

export default App;
