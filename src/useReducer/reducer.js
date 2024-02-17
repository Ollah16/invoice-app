
export const initialState = {
    isLogged: false,
    discountTitle: 'Discount',
    termsTitle: 'Terms',
    taxTitle: 'Tax',
    shippingTitle: 'Shipping',
    noteTitle: 'Notes',
    balanceDueTitle: 'Balance Due',
    totalTitle: 'Total',
    subTotalTitle: 'Subtotal',
    amountPaidTitle: 'Amount Paid',
    billToTitle: 'Receiver',
    addressTitle: 'Ship To',
    dueDateTitle: 'Due date',
    poTitle: 'PO Number',
    paymentTitle: 'Payment Terms',
    dateTitle: 'Date',
    logo: '',
    whoIsFrom: '',
    billTo: '',
    address: '',
    poNumber: '',
    terms: '',
    invoiceNum: '',
    date: '',
    dueDate: '',
    paymentTerms: '',
    note: '',
    total: 0,
    discountAmount: 0,
    taxAmount: 0,
    shippingAmount: 0,
    balance: 0,
    subTotal: 0,
    amountPaid: '',
    isShipping: 0,
    isDiscount: 0,
    isTax: 0,
    currency: 'US$',
    data: [{ description: '', quantity: '', rate: '', amount: 0 }],
    message: ''
}

const myReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case "IS_LOGGED":
            return {
                ...state,
                isLogged: true
            }

        case "MESSAGE":
            const { message } = action.payload
            return {
                ...state,
                message
            }

        case 'CLOSE_MESSAGE':
            return {
                ...state,
                message: ''
            }

        case "LOG_OUT":
            localStorage.removeItem('accessToken')
            return {
                ...state,
                isLogged: false
            }

        case "TERMS":
            return {
                ...state,
                terms: action.payload.value
            }

        case "TERMS_TITLE":
            return {
                ...state,
                termsTitle: action.payload.value
            }

        case "NOTE":
            return {
                ...state,
                note: action.payload.value
            }

        case "NOTE_TITLE":
            return {
                ...state,
                noteTitle: action.payload.value
            }

        case "DISCOUNT_TITLE":
            return {
                ...state,
                discountTitle: action.payload.value
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

        case 'RATE':
            const data = state.data.map((datas, index) => action.payload.index === index ?
                ({
                    ...datas,
                    rate: action.payload.rate
                }) : datas)
            return {
                ...state,
                data
            }

        case 'QUANTITY':
            const updatedata = state.data.map((datas, index) =>
                action.payload.index === index ?
                    ({
                        ...datas,
                        quantity: action.payload.quantity
                    }) : datas)

            return {
                ...state,
                data: updatedata
            }

        case 'DESCRIPTION':
            const dataUpdate = state.data.map((datas, index) => action.payload.index === index ? ({
                ...datas,
                description: action.payload.description
            }) : datas)

            return {
                ...state,
                data: dataUpdate
            }

        case 'ADD_AMOUNT':
            return {
                ...state,
                data: state.data.map((datas, index) => action.payload.index === index ? ({
                    ...datas,
                    amount: datas.rate * datas.quantity
                }) : datas)
            }

        case 'SUB_TOTAL':
            return {
                ...state,
                subTotal: state.data.reduce((acc, each) => acc + each.amount, 0)
            }

        case 'TOTAL':
            return {
                ...state,
                total: (state.subTotal + state.taxAmount) - (state.discountAmount) + (state.shippingAmount)
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
                discountAmount: (action.payload.value / 100) * state.subTotal
            }

        case 'TAX':
            return {
                ...state,
                taxAmount: (action.payload.value / 100) * state.subTotal
            }

        case 'SHIPPING':
            return {
                ...state,
                shippingAmount: action.payload.value
            }

        case 'IS_SHIPPING':
            return {
                ...state,
                isShipping: 1
            }

        case 'IS_TAX':
            return {
                ...state,
                isTax: 1
            }

        case 'IS_DISCOUNT':
            return {
                ...state,
                isDiscount: 1
            }

        case 'IS_NOT_DISCOUNT':
            return {
                ...state,
                isDiscount: 0,
                discountAmount: 0
            }

        case 'IS_NOT_SHIPPING':
            return {
                ...state,
                isShipping: 0,
                shippingAmount: 0
            }

        case 'IS_NOT_TAX':
            return {
                ...state,
                isTax: 0,
                taxAmount: 0
            }

        case 'PO_TITLE':
            return {
                ...state,
                poTitle: action.payload.value
            }

        case 'DUE_DATE_TITLE':
            return {
                ...state,
                dueDateTitle: action.payload.value
            }

        case 'PAYMENT_TITLE':
            return {
                ...state,
                paymentTitle: action.payload.value
            }

        case 'DATE_TITLE':
            return {
                ...state,
                dateTitle: action.payload.value
            }

        case 'ADDRESS_TITLE':
            return {
                ...state,
                addressTitle: action.payload.value
            }

        case 'BILL_TITLE':
            return {
                ...state,
                billToTitle: action.payload.value
            }

        case 'SUB_TOTAL_TITLE':
            return {
                ...state,
                subTotalTitle: action.payload.value
            }

        case 'TAX_TITLE':
            return {
                ...state,
                taxTitle: action.payload.value
            }

        case 'SHIPPING_TITLE':
            return {
                ...state,
                shippingTitle: action.payload.value
            }

        case 'AMOUNT_PAID_TITLE':
            return {
                ...state,
                amountPaidTitle: action.payload.value
            }

        case 'TOTAL_TITLE':
            return {
                ...state,
                totalTitle: action.payload.value
            }

        case 'BALANCE_DUE_TITLE':
            return {
                ...state,
                balanceDueTitle: action.payload.value
            }

        case 'WHOISFROM':
            return {
                ...state,
                whoIsFrom: action.payload.value
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
            const { logo } = action.payload
            return {
                ...state,
                logo
            }

        case 'CURRENCY':
            return {
                ...state,
                currency: action.payload.value
            }

        case 'CLEAR_STATE':
            return {
                ...state,
                logo: '',
                whoIsFrom: '',
                billTo: '',
                address: '',
                poNumber: '',
                terms: '',
                invoiceNum: '',
                date: '',
                dueDate: '',
                paymentTerms: '',
                note: '',
                total: 0,
                discountAmount: 0,
                taxAmount: 0,
                shippingAmount: 0,
                balance: 0,
                subTotal: 0,
                amountPaid: '',
                isShipping: 0,
                isDiscount: 0,
                isTax: 0,
                currency: 'US$',
                data: [{ description: '', quantity: '', rate: '', amount: 0 }]
            }

    }
    return state
}
export default myReducer


