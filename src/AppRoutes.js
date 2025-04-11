import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './homePage'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/*' element={<HomePage />} />

            {/* <Route path='/download'
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
                } /> */}
        </Routes>)
}

export default AppRoutes