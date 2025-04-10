import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import './modal.css'
import './thanksPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DownloadPage from './downloadPage';
import HomePage from './homePage';
import RegisterPage from './authenticatePage';
import RecordPage from './recordPage';
import ThanksPage from './thanksPage';
import { AppProvider } from './context/AppContext';

const App = () => {

  return (
    <AppProvider>
      <Routes>
        <Route
          path='/*' element={<HomePage
            proceedDownload={proceedDownload}
            handleLogo={handleLogo}
            handleSignOut={handleSignOut}
            handleInputValue={handleInputValue}
            handleDataInp={handleDataInp}
            state={state}
            toggleAuth={toggleAuth}
            handleCustomInputs={handleCustomInputs}
            handleAddRow={handleAddRow}
            handleDeleteRow={handleDeleteRow}
            handleInputsBtn={handleInputsBtn}
            handleNavigation={handleNavigation}
            handleMessage={handleMessage}
            removeLogo={removeLogo}
          />} />

        <Route path='/download'
          element={<DownloadPage
            state={state}
            handleClearState={handleClearState}
            handleNavigation={handleNavigation}
          />} />

        <Route path='/authenticate/:page'
          element={<RegisterPage
            state={state}
            handleAuth={handleAuth}
            handleNavigation={handleNavigation}
            handleMessage={handleMessage}
          />} />

        <Route path='/records'
          element={<RecordPage
            state={state}
            handleNavigation={handleNavigation} />} />

        <Route path='/thanks'
          element={<ThanksPage
            toggleAuth={toggleAuth}
            handleNavigation={handleNavigation}
            state={state}
          />
          } />
      </Routes>
    </AppProvider>
  )
}


export default App;