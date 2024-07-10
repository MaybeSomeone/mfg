import ReactDOM from'react-dom/client';
import React from'react';
import App from './App';

// mount function to start up the app
const mount = (el) => {
    const root = ReactDOM.createRoot(el);
    root.render(<App />)
}

// if we are in development and in isolation.
// call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.getElementById('_marketing-dev-root');
    if (devRoot) {
        mount(devRoot);
    }
}

export { mount }