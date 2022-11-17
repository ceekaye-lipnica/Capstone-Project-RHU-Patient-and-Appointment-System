import { createContext, useReducer } from 'react'

export const DoctorContext = createContext()

export const doctorReducer = (state, action) => {
    switch (action.type) {
        case 'SET_DOCTOR': 
            return {
                docInfo: action.payload
            }
        case 'CREATE_DOCTOR': 
            return {
                docInfo: [action.payload, ...state.docInfo]
            }
        case 'DELETE_DOCTOR':
            return {
                docInfo : state.docInfo.filter((w) => w.id !== action.payload._id)
            } 
        default:
            return state
    }
}

export const DoctorContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(doctorReducer, {
        docInfo: null
    })

    return (
        <DoctorContext.Provider value={{...state, dispatch}}>
            {children}
        </DoctorContext.Provider>
    )
}