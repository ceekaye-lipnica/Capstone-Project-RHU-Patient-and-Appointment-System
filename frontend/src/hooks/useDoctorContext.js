import { DoctorContext } from '../context/doctorContext'
import { useContext } from 'react'

export const UseDoctorContext = () => {
    const context = useContext(DoctorContext)

    if (!context) {
    throw Error('useDoctorContext must be used inside an DoctorContextProvider')
    }
    
    return context
}