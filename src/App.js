import React, { useEffect, useReducer, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DownloadPage from './downloadPage';
import HomePage from './homePage';
import RegisterPage from './authenticatePage';
import RecordPage from './recordPage';
import myReducer, { initialState } from './useReducer/reducer';

const App = () => {
  const [state, dispatch] = useReducer(myReducer, initialState)
  let [proceedDownload, setProceed] = useState('');

  useEffect(() => {
    const isDataValid = state.data.every(item => (item.description && item.amount && item.rate && item.quantity));
    const requiredFields = [
      state.total,
      state.logo,
      state.whoIsFrom,
      state.billTo,
      state.address,
      state.poNumber,
      state.terms,
      state.invoiceNum,
      state.date,
      state.dueDate,
      state.paymentTerms,
      state.note,
      state.amountPaid
    ];
    const areFieldsValid = requiredFields.every((value) => value);
    setProceed(isDataValid && areFieldsValid ? true : false)
  }, [state])

  const actionTypes = {
    IS_LOGGED: 'IS_LOGGED',
    LOG_OUT: 'LOG_OUT',
    CLEAR_STATE: 'CLEAR_STATE',
    IS_REGISTER: 'IS_REGISTER',
    ADD_AMOUNT: 'ADD_AMOUNT',
    SUB_TOTAL: 'SUB_TOTAL',
    TOTAL: 'TOTAL',
    SHIPPING: 'SHIPPING',
    TAX: 'TAX',
    BALANCE: 'BALANCE',
    LOGO: 'LOGO',
    CLOSE_MESSAGE: 'CLOSE_MESSAGE'
  }

  const navigate = useNavigate()

  const handleDataInp = (paramId, event, index) => {

    dispatch({ type: paramId, payload: { [paramId.toLowerCase()]: event, index } })

    dispatch({ type: actionTypes.ADD_AMOUNT, payload: { index } })
    dispatch({ type: actionTypes.SUB_TOTAL })
    dispatch({ type: actionTypes.TOTAL })
    dispatch({ type: actionTypes.BALANCE })
  }

  const handleCustomInputs = (paramId, value) => {
    dispatch({ type: paramId, payload: { value } })

  }

  const handleAddRow = () => {
    dispatch({ type: 'ADD_ROW' })
  }

  const handleDeleteRow = (index) => {
    dispatch({ type: 'DELETE_ROW', payload: { index } })
    dispatch({ type: actionTypes.SUB_TOTAL })
    dispatch({ type: actionTypes.TOTAL })
    dispatch({ type: actionTypes.BALANCE })
  }

  const handleInputValue = (paramId, value) => {

    dispatch({ type: paramId, payload: { value } })
    dispatch({ type: actionTypes.SUB_TOTAL })
    dispatch({ type: actionTypes.TOTAL })
    dispatch({ type: actionTypes.BALANCE })
  }

  const handleInputsBtn = (paramId) => {

    dispatch({ type: paramId })
    dispatch({ type: actionTypes.TOTAL })
    dispatch({ type: actionTypes.BALANCE })
  }

  const handleAuth = () => {
    dispatch({ type: actionTypes.IS_LOGGED });
  };

  const toggleAuth = (type) => {
    handleNavigation(`/authenticate/${type}`)
  }

  const handleDownload = (data) => {
    const { userSalesId, page } = data;

    if (!state.isLogged) {
      handleNavigation(`/authenticate/${page}`);
      return;
    }

    if (page && userSalesId) {
      handleNavigation(`/download/${userSalesId}/${page}`);
    } else if (page) {
      handleNavigation(`/download/${userSalesId}/${page}`);
    }
  }

  const handleClearState = () => {
    dispatch({ type: actionTypes.CLEAR_STATE })
  }

  const handleNavigation = (page) => {

    if (page.includes('records')) {
      navigate('authenticate/homepage')
    } else {
      navigate(page)
    }

  }

  const handleSignOut = () => {
    dispatch({ type: actionTypes.LOG_OUT })
  }

  const handleLogo = (e) => {

    dispatch({ type: actionTypes.LOGO, payload: { logo: e.target.files[0] } })

  }

  const handleMessage = (message) => {

    dispatch({ type: actionTypes.MESSAGE, payload: { message } })

    const message_col = document.querySelector('.message-col')

    message_col.classList.add('visible')

    setTimeout(() => {
      message_col.classList.remove('visible')
    }, 5000)
  }

  return (
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
          handleDownload={handleDownload}
          handleNavigation={handleNavigation}
          handleMessage={handleMessage} />} />

      <Route path='/download/:userSalesId/:page'
        element={<DownloadPage
          state={state}
          handleClearState={handleClearState}
          handleNavigation={handleNavigation} />} />

      <Route path='/authenticate/:page'
        element={<RegisterPage
          state={state}
          handleAuth={handleAuth}
          handleNavigation={handleNavigation}
          handleDownload={handleDownload}
          handleMessage={handleMessage}
        />} />

      <Route path='/records'
        element={<RecordPage
          state={state}
          handleDownload={handleDownload}
          handleNavigation={handleNavigation} />} />
    </Routes>
  )
}


export default App;