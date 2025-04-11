import React from 'react';
import './App.css'
import './modal.css'
import './thanksPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import AppRoutes from './AppRoutes';

const App = () => {

  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}


export default App;