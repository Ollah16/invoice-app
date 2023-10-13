
export const initialState = {
    discount_title: 'Discount',
    terms_title: 'Terms',
    tax_title: 'Tax',
    shipping_title: 'Shipping',
    note_title: 'Notes',
    balancedue_title: 'Balance Due',
    total_title: 'Total',
    subtotal_title: 'Subtotal',
    amountpaid_title: 'Amount Paid',
    billTo_title: 'Receiver',
    address_title: 'Ship To',
    due_Date_title: 'Due date',
    po_title: 'PO Number',
    payment_title: 'Payment Terms',
    date_title: 'Date',
    logo: '',
    whoisFrom: '',
    billTo: '',
    address: '',
    poNumber: '',
    terms: '',
    invoiceNum: '',
    date: '',
    dueDate: '',
    paymentTerms: '',
    note: '',
    invoice: [],
    total: 0,
    discount: 0,
    tax: 0,
    ship: 0,
    balance: 0,
    subTotal: 0,
    amountPaid: '',
    isShipping: false,
    isDiscount: false,
    isTax: false,
    currency: 'US$',
    data: [{ description: '', quantity: '', rate: '', amount: 0 }]
}

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TERMS":
            return {
                ...state,
                terms: action.payload.value
            }
        case "TERMS-TITLE":
            return {
                ...state,
                terms_title: action.payload.value
            }
        case "NOTE":
            return {
                ...state,
                note: action.payload.value
            }
        case "NOTE-TITLE":
            return {
                ...state,
                note_title: action.payload.value
            }
        case "DISCOUNT_TITLE":
            return {
                ...state,
                discount_title: action.payload.value
            }
        case 'ADD_ROW':
            return {
                ...state,
                data: [...state.data, { description: '', quantity: '', rate: '', amount: 0 }]
            }
        case 'DELETE_ROW':
            return {
                ...state,
                data: state.data.filter((_, index) => action.payload.index !== index)
            }
        case 'ADD_RATE':
            return {
                ...state,
                data: state.data.map((datas, index) => action.payload.index === index ?
                    ({
                        ...datas,
                        rate: action.payload.rate
                    }) : datas)
            }
        case 'ADD_QUANTITY':
            return {
                ...state,
                data: state.data.map((datas, index) => action.payload.index === index ?
                    ({
                        ...datas,
                        quantity: action.payload.quantity
                    }) : datas)
            }
        case 'ADD_DESCRIPTION':
            return {
                ...state,
                data: state.data.map((datas, index) => action.payload.index === index ? ({
                    ...datas,
                    description: action.payload.description
                }) : datas)
            }
        case 'ADD_AMOUNT':
            return {
                ...state,
                data: state.data.map((datas, index) => action.payload.index === index ? ({
                    ...datas,
                    amount: datas.rate * datas.quantity
                }) : datas)
            }
        case 'SUB-TOTAL':
            return {
                ...state,
                subTotal: state.data.reduce((acc, each) => acc + each.amount, 0)
            }
        case 'TOTAL':
            return {
                ...state,
                total: (state.subTotal + state.tax) - (state.discount) + (state.ship)
            }
        case 'AMOUNT_PAID':
            return {
                ...state,
                amountPaid: action.payload.value
            }
        case 'BALANCE':
            return {
                ...state,
                balance: state.amountPaid - state.total
            }
        case 'DISCOUNT':
            return {
                ...state,
                discount: (action.payload.value / 100) * state.subTotal
            }
        case 'TAX':
            return {
                ...state,
                tax: (action.payload.value / 100) * state.subTotal
            }
        case 'SHIPPING':
            return {
                ...state,
                ship: action.payload.value
            }
        case 'IS_SHIPPING':
            return {
                ...state,
                isShipping: true
            }
        case 'IS_TAX':
            return {
                ...state,
                isTax: true
            }
        case 'IS_DISCOUNT':
            return {
                ...state,
                isDiscount: true
            }
        case 'IS_NOTDISCOUNT':
            return {
                ...state,
                isDiscount: false,
                discount: 0
            }
        case 'IS_NOTSHIPPING':
            return {
                ...state,
                isShipping: false,
                ship: 0
            }
        case 'IS_NOTTAX':
            return {
                ...state,
                isTax: false,
                tax: 0
            }
        case 'PO_TITLE':
            return {
                ...state,
                po_title: action.payload.value
            }
        case 'DUEDATE_TITLE':
            return {
                ...state,
                due_Date_title: action.payload.value
            }
        case 'PAYMENT_TITLE':
            return {
                ...state,
                payment_title: action.payload.value
            }
        case 'DATE_TITLE':
            return {
                ...state,
                date_title: action.payload.value
            }
        case 'ADDRESS_TITLE':
            return {
                ...state,
                address_title: action.payload.value
            }
        case 'BILL_TITLE':
            return {
                ...state,
                billTo_title: action.payload.value
            }
        case 'SUBTOTAL_TITLE':
            return {
                ...state,
                subtotal_title: action.payload.value
            }
        case 'TAX_TITLE':
            return {
                ...state,
                tax_title: action.payload.value
            }
        case 'SHIPPING_TITLE':
            return {
                ...state,
                shipping_title: action.payload.value
            }
        case 'AMOUNTPAID_TITLE':
            return {
                ...state,
                amountpaid_title: action.payload.value
            }
        case 'TOTAL_TITLE':
            return {
                ...state,
                total_title: action.payload.value
            }
        case 'BALANCEDUE_TITLE':
            return {
                ...state,
                balancedue_title: action.payload.value
            }
        case 'WHOISFROM':
            return {
                ...state,
                whoisFrom: action.payload.value
            }
        case 'BILL':
            return {
                ...state,
                billTo: action.payload.value
            }
        case 'ADDRESS':
            return {
                ...state,
                address: action.payload.value
            }
        case 'DATE':
            return {
                ...state,
                date: action.payload.value
            }
        case 'PAYMENT_TERMS':
            return {
                ...state,
                paymentTerms: action.payload.value
            }
        case 'DUE_DATE':
            return {
                ...state,
                dueDate: action.payload.value
            }
        case 'PO_NUMBER':
            return {
                ...state,
                poNumber: action.payload.value
            }
        case 'INVOICE_NUMBER':
            return {
                ...state,
                invoiceNum: action.payload.value
            }
        case 'LOGO':
            console.log(action.payload)
            return {
                ...state,
                logo: action.payload.value
            }
        case 'CURRENCY':
            return {
                ...state,
                currency: action.payload.value
            }
        case 'DOWNLOAD':
            return {
                ...state,
                invoice: [...state.invoice, {
                    discount_title: state.discount_title,
                    terms_title: state.terms_title,
                    tax_title: state.tax_title,
                    shipping_title: state.shipping_title,
                    note_title: state.note_title,
                    balancedue_title: state.balancedue_title,
                    total_title: state.total_title,
                    subtotal_title: state.subtotal_title,
                    amountpaid_title: state.amountpaid_title,
                    billTo_title: state.billTo_title,
                    address_title: state.address_title,
                    due_Date_title: state.due_Date_title,
                    po_title: state.po_title,
                    payment_title: state.payment_title,
                    date_title: state.date_title,
                    logo: state.logo,
                    reciever: state.reciever,
                    billTo: state.billTo,
                    address: state.address,
                    poNumber: state.poNumber,
                    terms: state.terms,
                    invoiceNum: state.invoiceNum,
                    date: state.date,
                    dueDate: state.dueDate,
                    paymentTerms: state.paymentTerms,
                    note: state.note,
                    total: state.total,
                    discount: state.discount,
                    tax: state.tax,
                    ship: state.ship,
                    balance: state.balance,
                    subTotal: state.subTotal,
                    amountPaid: state.amountPaid,
                    currency: state.currency,
                    data: state.data,
                    isDiscount: state.isDiscount,
                    isShipping: state.isShipping,
                    isTax: state.isTax,
                    whoisFrom: state.whoisFrom
                }]
            }
    }
    return state
}
export default myReducer


