import { createContext, useContext, useEffect, useReducer, useState } from "react";
import myReducer, { initialState } from "../useReducer/reducer";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(myReducer, initialState)
    let [proceedDownload, setProceed] = useState(false);

    useEffect(() => {
        const { data, total, logo, whoIsFrom, billTo, address, poNumber, terms, invoiceNum, date, dueDate, paymentTerms, note, amountPaid } = state;

        const isDataValid = data.every(item => (item.description && item.amount && item.rate && item.quantity));
        const requiredFields = [
            total,
            logo,
            whoIsFrom,
            billTo,
            address,
            poNumber,
            terms,
            invoiceNum,
            date,
            dueDate,
            paymentTerms,
            note,
            amountPaid
        ];
        const areFieldsValid = isDataValid && requiredFields.every((value) => value);
        setProceed(areFieldsValid)
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

    const handleInputChange = (fieldName, event, index) => {
        dispatch({ type: fieldName, payload: { [paramId.toLowerCase()]: event, index } })
    }

    const handleCustomInputs = (paramId, value) => {
        dispatch({ type: paramId, payload: { value } })

    }

    const handleAddRow = () => {
        dispatch({ type: 'ADD_ROW' })
    }

    const handleDeleteRow = (index) => {
        dispatch({ type: 'DELETE_ROW', payload: { index } })
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

    const handleClearState = () => {
        dispatch({ type: actionTypes.CLEAR_STATE })
    }

    const handleNavigation = (page) => {

        if (page.includes('records')) {

            navigate('authenticate/homepage')

        } else if (page.includes('clearState')) {

            handleClearState()
            navigate('/')

        } else if (page.includes('thanks')) {
            navigate(page)

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

    const removeLogo = (type) => {
        dispatch({ type })
    }

    const handleMessage = (message) => {

        dispatch({ type: actionTypes.MESSAGE, payload: { message } })

        const message_col = document.querySelector('.message-col')

        message_col.classList.add('visible')

        setTimeout(() => {
            message_col.classList.remove('visible')
        }, 5000)
    }

    return (<AppContext.Provider value={{ state, handleInputChange, handleDeleteRow }}>
        {children}
    </AppContext.Provider>)
}

export const useAppContext = () => useContext(AppContext)