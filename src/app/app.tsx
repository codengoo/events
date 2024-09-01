import './App.css';
import { createRoot } from 'react-dom/client';
import MainLayout from './layouts';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

const root = createRoot(document.querySelector("#events-app"));
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <MainLayout />
        </PersistGate>
    </Provider>

);