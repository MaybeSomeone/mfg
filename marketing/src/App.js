import React from'react';
import { Route, BrowserRouter, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './components/Landing'
import Pricing from './components/Pricing'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Landing />
    },
    {
        path: '/pricing/*',
        element: <Pricing />
    }
])

const App = () => {

    return (
        <RouterProvider router={routes}>
            {/* <Routes>
                <Route exact path="/" element={<Landing />} />
                <Route path="/pricing" element={<Pricing />} />
            </Routes> */}
        </RouterProvider>
    );
}

export default App;

