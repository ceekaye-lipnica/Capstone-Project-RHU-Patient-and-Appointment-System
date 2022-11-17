import { UsePatientContext } from '../hooks/usePatientContext'
import {FaTrashAlt} from 'react-icons/fa'
import {GrView} from 'react-icons/gr'
import {GrEdit} from 'react-icons/gr'
import { Link } from 'react-router-dom'
// import { UseAuthContext } from '../hooks/useAuthContext'

//Date Fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const PatientDetails = ({ patientinfo }) => {

    const {dispatch} = UsePatientContext()
    // const {user} = UseAuthContext()

    const handleClick = async () => {
        
        // if (!user) {
        //     return
        // }

        const response = await fetch('/portal/health/' + patientinfo._id, {
            method: 'DELETE',
            // headers: {
            //     'Authorization': `Bearer ${user.token}`
            // }
        }) 

        const json = await response.json()

        if (response.ok) {
            dispatch({type:'DELETE_PATIENT', payload: json})
        }
    }

    


    return (
        <div className="patient-details">
            <h4>{patientinfo.fname} {patientinfo.mname} {patientinfo.lname}</h4>
            <p><strong> Gender:</strong> {patientinfo.gender}</p>
            <p><strong> Age:</strong> {patientinfo.age}</p>
            <p><strong> Address:</strong> {patientinfo.address}</p>
            <p><strong> Contact Number:</strong> {patientinfo.contact}</p>
            <p>{formatDistanceToNow(new Date (patientinfo.createdAt), {addSuffix: true})}</p>

            <span  onClick={handleClick}><FaTrashAlt className='trash-icon'/></span>

            <div className="view-btn"> <Link to="/viewconsult"> View <GrView className='view-icon'/> </Link></div>
            <div className="edit-btn"> <Link to="/addconsult"> Edit <GrEdit className='edit-icon'/> </Link></div>
            

        </div>
    )
}

export default PatientDetails