import { useEffect } from 'react'
import { UsePatientContext } from '../hooks/usePatientContext'
// import { UseAuthContext} from '../hooks/useAuthContext'

//components
import PatientDetails from '../components/patientDetails'
import PatientForm from '../components/patientForm'

const Home = () => {
    const {info, dispatch} = UsePatientContext()
    // const {user} = UseAuthContext()
    
    useEffect(() => {

        const fetchPatients = async () => {

            const response = await fetch('/portal/health')

            // const response = await fetch('/portal/health', {
            //     headers: {
            //         'Authorization': `Bearer ${user.token}`
            //     }
            // }) FOR AUTHENTICATION

            const json = await response.json()

            if (response.ok) {
                dispatch ({type: 'SET_PATIENT', payload: json})
            }
        }

        // if (user) {
        //     fetchPatients()
        // }

        fetchPatients()

    }, [dispatch] )

    // [dispatch, user]

    return (
        <div className="home">
            <div className="workouts"> 
                {info && info.map((patientinfo) => (
                    <PatientDetails key={patientinfo._id} patientinfo={patientinfo} />

                ))}
            </div>
            <PatientForm />  
        </div>
    )
}

export default Home