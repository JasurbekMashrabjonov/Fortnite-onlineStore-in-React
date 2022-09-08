import React from "react";
import { createContext, useReducer } from "react";
import reducer from "./reducer";

export const ContextProvider = createContext();

export default function ShopContext({children}){
    const initialState = {
        
        data:[],
        limitedData:[],
        order:[],
        isOpen:false
    }

    const [value,dispatch] = useReducer(reducer,initialState)

    value.setData = (posts) => {
        dispatch({type:"PENDING",payload:posts})
    }
    value.getData = (arg) => {
        dispatch({type:"SET_TO_BUSCET",payload:arg})
    }
    value.add = (item) => {
        dispatch({type:"PLUS",payload:item})
    }
    value.remove = (item) => {
        dispatch({type:"REMOVE",payload:item})
    }
    value.changeState = () => {
        dispatch({type:"CHANGE_STATE",})
    }
    

    return(
    <ContextProvider.Provider value = {value}>
        {children}
    </ContextProvider.Provider>
    )
}