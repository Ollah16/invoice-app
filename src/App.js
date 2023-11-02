import React, { useEffect, useReducer, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DownloadPage from './downloadPage';
import myReducer, { initialState } from './reducer';
import HomePage from './homePage';
import RegisterPage from './authenticatePage';
import RecordPage from './recordPage';

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
    ADD_RATE: 'ADD_RATE',
    addQuantity: 'ADD_QUANTITY',
    ADD_AMOUNT: 'ADD_AMOUNT',
    ADD_DESCRIPTION: 'ADD_DESCRIPTION',
    SUB_TOTAL: 'SUB_TOTAL',
    TOTAL: 'TOTAL',
    SHIPPING: 'SHIPPING',
    TAX: 'TAX',
    DISCOUNT: 'DISCOUNT',
    IS_SHIPPING: 'IS_SHIPPING',
    IS_TAX: 'IS_TAX',
    IS_DISCOUNT: 'IS_DISCOUNT',
    IS_NOT_DISCOUNT: 'IS_NOT_DISCOUNT',
    IS_NOT_SHIPPING: 'IS_NOT_SHIPPING',
    IS_NOT_TAX: 'IS_NOT_TAX',
    AMOUNT_PAID: 'AMOUNT_PAID',
    BALANCE: 'BALANCE',
    PO_TITLE: 'PO_TITLE',
    DUE_DATE_TITLE: 'DUE_DATE_TITLE',
    PAYMENT_TITLE: 'PAYMENT_TITLE',
    DATE_TITLE: 'DATE_TITLE',
    ADDRESS_TITLE: 'ADDRESS_TITLE',
    BILL_TITLE: 'BILL_TITLE',
    SUB_TOTAL_TITLE: 'SUB_TOTAL_TITLE',
    DISCOUNT_TITLE: 'DISCOUNT_TITLE',
    TAX_TITLE: 'TAX_TITLE',
    SHIPPING_TITLE: 'SHIPPING_TITLE',
    AMOUNT_PAID_TITLE: 'AMOUNT_PAID_TITLE',
    TOTAL_TITLE: 'TOTAL_TITLE',
    BALANCE_DUE_TITLE: 'BALANCE_DUE_TITLE',
    WHOISFROM: 'WHOISFROM',
    BILL: 'BILL',
    ADDRESS: 'ADDRESS',
    DATE: 'DATE',
    PAYMENT_TERMS: 'PAYMENT_TERMS',
    DUE_DATE: 'DUE_DATE',
    PO_NUMBER: 'PO_NUMBER',
    INVOICE_NUMBER: 'INVOICE_NUMBER',
    LOGO: 'LOGO',
    NOTE_TITLE: 'NOTE_TITLE',
    NOTE: 'NOTE',
    TERMS_TITLE: 'TERMS_TITLE',
    TERMS: 'TERMS',
    CURRENCY: 'CURRENCY',
    MESSAGE: 'MESSAGE',
    CLOSE_MESSAGE: 'CLOSE_MESSAGE'
  }

  const navigate = useNavigate()

  const handleDataInp = (type, event, index) => {
    switch (type) {
      case 'rate':
        dispatch({ type: actionTypes.ADD_RATE, payload: { rate: event, index } })
        break;
      case 'quantity':
        dispatch({ type: actionTypes.addQuantity, payload: { quantity: event, index } })
        break;
      case 'description':
        dispatch({ type: actionTypes.ADD_DESCRIPTION, payload: { description: event, index } })
        break;
    }
    dispatch({ type: actionTypes.ADD_AMOUNT, payload: { index } })
    dispatch({ type: actionTypes.SUB_TOTAL })
    dispatch({ type: actionTypes.TOTAL })
    dispatch({ type: actionTypes.BALANCE })
  }

  const handleCustomInputs = (type, value) => {
    switch (type) {
      case 'currency':
        dispatch({ type: actionTypes.CURRENCY, payload: { value } })
        break;
      case 'note_title':
        dispatch({ type: actionTypes.NOTE_TITLE, payload: { value } })
        break;
      case 'note':
        dispatch({ type: actionTypes.NOTE, payload: { value } })
        break;
      case 'terms_title':
        dispatch({ type: actionTypes.TERMS_TITLE, payload: { value } })
        break;
      case 'terms':
        dispatch({ type: actionTypes.TERMS, payload: { value } })
        break
      case 'po_title':
        dispatch({ type: actionTypes.PO_TITLE, payload: { value } })
        break;
      case 'duedate_title':
        dispatch({ type: actionTypes.DUE_DATE_TITLE, payload: { value } })
        break;
      case 'payment_title':
        dispatch({ type: actionTypes.PAYMENT_TITLE, payload: { value } })
        break
      case 'date_title':
        dispatch({ type: actionTypes.DATE_TITLE, payload: { value } })
        break;
      case 'address_title':
        dispatch({ type: actionTypes.ADDRESS_TITLE, payload: { value } })
        break;
      case 'bill_title':
        dispatch({ type: actionTypes.BILL_TITLE, payload: { value } })
        break;
      case 'subtotal_title':
        dispatch({ type: actionTypes.SUB_TOTAL_TITLE, payload: { value } })
        break;
      case 'discount_title':
        dispatch({ type: actionTypes.DISCOUNT_TITLE, payload: { value } })
        break
      case 'tax_title':
        dispatch({ type: actionTypes.TAX_TITLE, payload: { value } })
        break
      case 'shipping_title':
        dispatch({ type: actionTypes.SHIPPING_TITLE, payload: { value } })
        break;
      case 'amountpaid_title':
        dispatch({ type: actionTypes.AMOUNT_PAID_TITLE, payload: { value } })
        break;
      case 'total_title':
        dispatch({ type: actionTypes.TOTAL_TITLE, payload: { value } })
        break;
      case 'balancedue_title':
        dispatch({ type: actionTypes.BALANCE_DUE_TITLE, payload: { value } })
        break;
      case 'whoisfrom':
        dispatch({ type: actionTypes.WHOISFROM, payload: { value } })
        break;
      case 'bill':
        dispatch({ type: actionTypes.BILL, payload: { value } })
        break;
      case 'address':
        dispatch({ type: actionTypes.ADDRESS, payload: { value } })
        break;
      case 'date':
        dispatch({ type: actionTypes.DATE, payload: { value } })
        break;
      case 'paymentterms':
        dispatch({ type: actionTypes.PAYMENT_TERMS, payload: { value } })
        break;
      case 'duedate':
        dispatch({ type: actionTypes.DUE_DATE, payload: { value } })
        break;
      case 'ponumber':
        dispatch({ type: actionTypes.PO_NUMBER, payload: { value } })
        break;
      case 'invoiceno':
        dispatch({ type: actionTypes.INVOICE_NUMBER, payload: { value } })
        break;
      case 'logo':
        let newValue = value.substring(12)
        dispatch({ type: actionTypes.LOGO, payload: { value: newValue } })
        break;
    }
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

  const handleInputs = (type, value) => {
    switch (type) {
      case 'discount':
        dispatch({ type: actionTypes.DISCOUNT, payload: { value } })
        break;
      case 'shipping':
        dispatch({ type: actionTypes.SHIPPING, payload: { value } })
        break;
      case 'tax':
        dispatch({ type: actionTypes.TAX, payload: { value } })
        break;
      case 'amountpaid':
        dispatch({ type: actionTypes.AMOUNT_PAID, payload: { value } })
    }
    dispatch({ type: actionTypes.SUB_TOTAL })
    dispatch({ type: actionTypes.TOTAL })
    dispatch({ type: actionTypes.BALANCE })
  }

  const handleInputsBtn = (type) => {
    switch (type) {
      case 'xdiscount':
        dispatch({ type: actionTypes.IS_NOT_DISCOUNT })
        dispatch({ type: actionTypes.TOTAL })
        break;
      case 'xshipping':
        dispatch({ type: actionTypes.IS_NOT_SHIPPING })
        break;
      case 'xtax':
        dispatch({ type: actionTypes.IS_NOT_TAX })
        break;
      case '+discount':
        dispatch({ type: actionTypes.IS_DISCOUNT })
        break;
      case '+shipping':
        dispatch({ type: actionTypes.IS_SHIPPING })
        break;
      case '+tax':
        dispatch({ type: actionTypes.IS_TAX })
        break;
    }
    dispatch({ type: actionTypes.TOTAL })
    dispatch({ type: actionTypes.BALANCE })
  }

  const handleAuth = () => {
    dispatch({ type: actionTypes.IS_LOGGED });
  };

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
    navigate(page)
  }

  const handleSignOut = () => {
    dispatch({ type: actionTypes.LOG_OUT })
  }

  const handleLogo = (e) => {
    dispatch({ type: actionTypes.LOGO, payload: { logo: e.target.files[0] } })
  }

  const handleMessage = (message) => {
    dispatch({ type: actionTypes.MESSAGE, payload: { message } })
  }

  const handleCloseMessage = () => {
    dispatch({ type: actionTypes.CLOSE_MESSAGE })
  }

  return (
    <Routes>
      <Route
        path='/*' element={<HomePage
          proceedDownload={proceedDownload}
          handleLogo={handleLogo}
          handleSignOut={handleSignOut}
          handleInputs={handleInputs}
          handleDataInp={handleDataInp}
          state={state}
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
          handleCloseMessage={handleCloseMessage}
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