import { UseDoctorContext } from '../hooks/useDoctorContext'
import {FaTrashAlt} from 'react-icons/fa'
//import { UseAuthContext } from '../hooks/useAuthContext'

//Date Fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const DoctorDetails = ({ doctorinfo }) => {

    const {dispatch} = UseDoctorContext()
    //const {user} = UseAuthContext()

    const handleClick = async () => {
        
        // if (!user) {
        //     return
        // }

        const response = await fetch('/portal/doctor/' + doctorinfo._id, {
            method: 'DELETE',
            headers: {
                // 'Authorization': `Bearer ${user.token}`
            }
        }) 

        const json = await response.json()

        if (response.ok) {
            dispatch({type:'DELETE_DOCTOR', payload: json})
        }
    }


    return (
        <div className="doctor-details">
            <h4>{doctorinfo.fname} {doctorinfo.mname} {doctorinfo.lname}</h4>
            <p><strong> Specialization:</strong> {doctorinfo.specialization}</p>
            <p><strong> Gender:</strong> {doctorinfo.gender}</p>
            <p><strong> Age:</strong> {doctorinfo.age}</p>
            <p><strong> Address:</strong> {doctorinfo.address}</p>
            <p><strong> Contact Number:</strong> {doctorinfo.contact}</p>
            <p>{formatDistanceToNow(new Date (doctorinfo.createdAt), {addSuffix: true})}</p>

            <span  onClick={handleClick}><FaTrashAlt className='trash-icon'/></span>

        </div>
    )
}

export default DoctorDetails