import { createContext, useReducer } from 'react'

export const ConsultContext = createContext()

export const consultReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CONSULT': 
            return {
                conInfo: action.payload
            }
        case 'CREATE_CONSULT': 
            return {
                conInfo: [action.payload, ...state.conInfo]
            }
        case 'DELETE_CONSULT':
            return {
                conInfo : state.conInfo.filter((w) => w.id !== action.payload._id)
            } 
        default:
            return state
    }
}

export const ConsultContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(consultReducer, {
        conInfo: null
    })

    return (
        <ConsultContext.Provider value={{...state, dispatch}}>
            {children}
        </ConsultContext.Provider>
    )
}