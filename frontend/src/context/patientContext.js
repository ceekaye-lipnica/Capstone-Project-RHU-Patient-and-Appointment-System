import { createContext, useReducer } from 'react'

export const PatientContext = createContext()

export const patientReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PATIENT': 
            return {
                info: action.payload
            };
        case 'CREATE_PATIENT': 
            return {
                info: [action.payload, ...state.info]
            };
        case 'DELETE_PATIENT':
            return {
                info : state.info.filter((w) => w.id !== action.payload._id)
            };
        default:
            return state;
    };
}

export const PatientContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(patientReducer, {
        info: null
    })

    return (
        <PatientContext.Provider value={{...state, dispatch}}>
            {children}
        </PatientContext.Provider>
    )
}