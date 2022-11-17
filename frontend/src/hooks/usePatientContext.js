import { PatientContext } from '../context/patientContext'
import { useContext } from 'react'

export const UsePatientContext = () => {
    const context = useContext(PatientContext)

    if (!context) {
    throw Error('usePatientContext must be used inside an PatientContextProvider')
    }
    
    return context
}