import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';

function App() {
    return (
        <Routes>
            {Object.keys(routes).map((route) => (
                <Route
                    element={routes[route].element}
                    path={routes[route].path}
                />
            ))}
        </Routes>
    );
}

export default App;
