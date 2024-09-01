import './App.css';
import { createRoot } from 'react-dom/client';
import MainLayout from './layouts';

const root = createRoot(document.querySelector("#events-app"));
root.render(<MainLayout />);