import { UseConsultContext } from '../hooks/useConsultContext'
import {FaTrashAlt} from 'react-icons/fa'
//import { UseAuthContext } from '../hooks/useAuthContext'

//Date Fns
// import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const ConsultDetails = ({ consultinfo }) => {

    const {dispatch} = UseConsultContext()
    //const {user} = UseAuthContext()

    const handleClick = async () => {
        
        // if (!user) {
        //     return
        // }

        const response = await fetch('/portal/consult/' + consultinfo._id, {
            method: 'DELETE',
            headers: {
                // 'Authorization': `Bearer ${user.token}`
            }
        }) 

        const json = await response.json()

        if (response.ok) {
            dispatch({type:'DELETE_CONSULT', payload: json})
        }
    }


    return (
        <div className="consult-details">

            {/* consultinfo  */}
           
            <p><strong> Purpose of Visit:</strong> {consultinfo.purpose}</p>
            <p><strong> Diagnosis:</strong> {consultinfo.diagnosis}</p>
            <p><strong> Description:</strong> {consultinfo.description}</p>
            <p><strong> Prescription:</strong> {consultinfo.treatment}</p>
            <p><strong> Blood Pressure:</strong> {consultinfo.bp}</p>
            <p><strong> Bloodsugar:</strong> {consultinfo.bloodsugar}</p>
            <p><strong> Weight:</strong> {consultinfo.weight}</p>
            <p><strong> Height:</strong> {consultinfo.height}</p>
            <p><strong> Attending Physician:</strong> {consultinfo.attendingDoc}</p>
            {/* <p>{formatDistanceToNow(new Date (doctorinfo.createdAt), {addSuffix: true})}</p> */}

            <span  onClick={handleClick}><FaTrashAlt className='trash-icon'/></span>

        </div>
    )
}

export default ConsultDetails