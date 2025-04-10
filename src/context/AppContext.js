import { createContext, useContext, useEffect, useReducer, useState } from "react";
import myReducer, { initialState } from "../useReducer/reducer";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const AppProvider = ({ children }) => {


    return (<AppContext.Provider value={{}}>
        {children}
    </AppContext.Provider>)
}

export const useStore = () => useContext(AppContext)