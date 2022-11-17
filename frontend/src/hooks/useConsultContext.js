import { ConsultContext } from '../context/consultContext'
import { useContext } from 'react'

export const UseConsultContext = () => {
    const context = useContext(ConsultContext)

    if (!context) {
    throw Error('UseConsultContext must be used inside an ConsultContextProvider')
    }
    
    return context
}