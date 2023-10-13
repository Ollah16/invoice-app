import React, { useReducer } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DownloadPage from './downloadPage';
import myReducer, { initialState } from './reducer';
import HomePage from './homePage';

const App = () => {
  let [state, dispatch] = useReducer(myReducer, initialState)

  const actionTypes = {
    addRate: 'ADD_RATE',
    addAmount: 'ADD_AMOUNT',
    addQuantity: 'ADD_QUANTITY',
    addAmount: 'ADD_AMOUNT',
    addDescription: 'ADD_DESCRIPTION',
    subtotal: 'SUB-TOTAL',
    total: 'TOTAL',
    shipping: 'SHIPPING',
    tax: 'TAX',
    discount: 'DISCOUNT',
    isShipping: 'IS_SHIPPING',
    isTax: 'IS_TAX',
    isDiscount: 'IS_DISCOUNT',
    isNotDiscount: 'IS_NOTDISCOUNT',
    isNotShipping: 'IS_NOTSHIPPING',
    isNotTax: 'IS_NOTTAX',
    amountPaid: 'AMOUNT_PAID',
    balance: 'BALANCE',
    poTitle: 'PO_TITLE',
    dueDateTitle: 'DUEDATE_TITLE',
    paymentTitle: 'PAYMENT_TITLE',
    dateTitle: 'DATE_TITLE',
    addressTitle: 'ADDRESS_TITLE',
    billTitle: 'BILL_TITLE',
    subtotalTitle: 'SUBTOTAL_TITLE',
    discountTitle: 'DISCOUNT_TITLE',
    taxTitle: 'TAX_TITLE',
    shippingTitle: 'SHIPPING_TITLE',
    amountPaidTitle: 'AMOUNTPAID_TITLE',
    totalTitle: 'TOTAL_TITLE',
    balanceDueTitle: 'BALANCEDUE_TITLE',
    whoisfrom: 'WHOISFROM',
    bill: 'BILL',
    address: 'ADDRESS',
    date: 'DATE',
    paymentTerms: 'PAYMENT_TERMS',
    dueDate: 'DUE_DATE',
    poNumber: 'PO_NUMBER',
    invoiceNumber: 'INVOICE_NUMBER',
    logo: 'LOGO',
    noteTitle: 'NOTE-TITLE',
    note: 'NOTE',
    termsTitle: 'TERMS-TITLE',
    terms: 'TERMS',
    download: 'DOWNLOAD',
    currency: 'CURRENCY'
  }

  const navigate = useNavigate()

  const handleDataInp = (type, event, index) => {
    switch (type) {
      case 'rate':
        dispatch({ type: actionTypes.addRate, payload: { rate: event, index } })
        break;
      case 'quantity':
        dispatch({ type: actionTypes.addQuantity, payload: { quantity: event, index } })
        break;
      case 'description':
        dispatch({ type: actionTypes.addDescription, payload: { description: event, index } })
        break;
    }
    dispatch({ type: actionTypes.addAmount, payload: { index } })
    dispatch({ type: actionTypes.subtotal })
    dispatch({ type: actionTypes.total })
    dispatch({ type: actionTypes.balance })
  }

  const handleCustomInputs = (type, value) => {
    switch (type) {
      case 'currency':
        dispatch({ type: actionTypes.currency, payload: { value } })
        break;
      case 'note-title':
        dispatch({ type: actionTypes.noteTitle, payload: { value } })
        break;
      case 'note':
        dispatch({ type: actionTypes.note, payload: { value } })
        break;
      case 'terms-title':
        dispatch({ type: actionTypes.termsTitle, payload: { value } })
        break;
      case 'terms':
        dispatch({ type: actionTypes.terms, payload: { value } })
        break
      case 'po-title':
        dispatch({ type: actionTypes.poTitle, payload: { value } })
        break;
      case 'duedate-title':
        dispatch({ type: actionTypes.dueDateTitle, payload: { value } })
        break;
      case 'payment-title':
        dispatch({ type: actionTypes.paymentTitle, payload: { value } })
        break
      case 'date-title':
        dispatch({ type: actionTypes.dateTitle, payload: { value } })
        break;
      case 'address-title':
        dispatch({ type: actionTypes.addressTitle, payload: { value } })
        break;
      case 'bill-title':
        dispatch({ type: actionTypes.billTitle, payload: { value } })
        break;
      case 'subtotal-title':
        dispatch({ type: actionTypes.subtotalTitle, payload: { value } })
        break;
      case 'discount-title':
        dispatch({ type: actionTypes.discountTitle, payload: { value } })
        break
      case 'tax-title':
        dispatch({ type: actionTypes.taxTitle, payload: { value } })
        break
      case 'shipping-title':
        dispatch({ type: actionTypes.shippingTitle, payload: { value } })
        break;
      case 'amountpaid-title':
        dispatch({ type: actionTypes.amountPaidTitle, payload: { value } })
        break;
      case 'total-title':
        dispatch({ type: actionTypes.totalTitle, payload: { value } })
        break;
      case 'balancedue-title':
        dispatch({ type: actionTypes.balanceDueTitle, payload: { value } })
        break;
      case 'whoisfrom':
        dispatch({ type: actionTypes.whoisfrom, payload: { value } })
        break;
      case 'bill':
        dispatch({ type: actionTypes.bill, payload: { value } })
        break;
      case 'address':
        dispatch({ type: actionTypes.address, payload: { value } })
        break;
      case 'date':
        dispatch({ type: actionTypes.date, payload: { value } })
        break;
      case 'paymentterms':
        dispatch({ type: actionTypes.paymentTerms, payload: { value } })
        break;
      case 'duedate':
        dispatch({ type: actionTypes.dueDate, payload: { value } })
        break;
      case 'ponumber':
        dispatch({ type: actionTypes.poNumber, payload: { value } })
        break;
      case 'invoiceno':
        dispatch({ type: actionTypes.invoiceNumber, payload: { value } })
        break;
      case 'logo':
        let newValue = value.substring(12)
        dispatch({ type: actionTypes.logo, payload: { value: newValue } })
        break;
    }
  }

  const handleAddRow = () => {
    dispatch({ type: 'ADD_ROW' })
  }

  const handleDeleteRow = (index) => {
    dispatch({ type: 'DELETE_ROW', payload: { index } })
    dispatch({ type: actionTypes.subtotal })
    dispatch({ type: actionTypes.total })
    dispatch({ type: actionTypes.balance })
  }

  const handleInputs = (type, value) => {
    switch (type) {
      case 'discount':
        dispatch({ type: actionTypes.discount, payload: { value } })
        break;
      case 'shipping':
        dispatch({ type: actionTypes.shipping, payload: { value } })
        break;
      case 'tax':
        dispatch({ type: actionTypes.tax, payload: { value } })
        break;
      case 'amountpaid':
        dispatch({ type: actionTypes.amountPaid, payload: { value } })
    }
    dispatch({ type: actionTypes.subtotal })
    dispatch({ type: actionTypes.total })
    dispatch({ type: actionTypes.balance })
  }

  const handleInputsBtn = (type) => {
    switch (type) {
      case 'xdiscount':
        dispatch({ type: actionTypes.isNotDiscount })
        dispatch({ type: actionTypes.total })
        break;
      case 'xshipping':
        dispatch({ type: actionTypes.isNotShipping })
        break;
      case 'xtax':
        dispatch({ type: actionTypes.isNotTax })
        break;
      case '+discount':
        dispatch({ type: actionTypes.isDiscount })
        break;
      case '+shipping':
        dispatch({ type: actionTypes.isShipping })
        break;
      case '+tax':
        dispatch({ type: actionTypes.isTax })
        break;
    }
    dispatch({ type: actionTypes.total })
    dispatch({ type: actionTypes.balance })
  }

  const handleDownload = () => {
    dispatch({ type: actionTypes.download })
    navigate('/download')
  }

  return (
    <Routes>
      <Route
        path='/*' element={<HomePage handleInputs={handleInputs} handleDataInp={handleDataInp} state={state} handleCustomInputs={handleCustomInputs} handleAddRow={handleAddRow} handleDeleteRow={handleDeleteRow}
          handleInputsBtn={handleInputsBtn} handleDownload={handleDownload} />} />

      <Route path='/download' element={<DownloadPage state={state} />} />
    </Routes>
  )
}


export default App;