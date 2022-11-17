import { useState } from "react"
import{ UseConsultContext } from "../hooks/useConsultContext"
import { Link } from 'react-router-dom'
import RHUServices from "../data/rhuServices"
// import { UseAuthContext } from "../hooks/useAuthContext"

const ConsultForm = () => {
        const {dispatch} = UseConsultContext()
        // const {user} = UseAuthContext()

        const [purpose, setPurpose] = useState('')
        const [diagnosis, setDiagnosis] = useState('')
        const [description, setDescription] = useState('')
        const [treatment, setTreatment] = useState('')
        const [bp, setBp] = useState('')
        const [weight, setWeight] = useState('')
        const [height, setHeight] = useState('')
        const [bloodsugar, setBloodsugar] = useState('')
        const [attendingDoc, setAttendingDoc] = useState('')
        
        const [error, setError] = useState(null)
        // const [emptyFields, setEmptyFields] = useState([])

        const handlePurpose =(e)=>{
            setPurpose(e.target.value)
       }


        const handleSubmit = async (e) => {
            e.preventDefault()

            // if (!user) {
            //     setError('You must be logged in')
            //     return
            // }

            const consultinfo = {purpose, diagnosis, description, treatment, bp, weight, height, bloodsugar, attendingDoc}

            const response = await fetch('/portal/consult', {
                method: 'POST',
                body: JSON.stringify(consultinfo),
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (!response.ok) {
                setError(json.error)
                // setEmptyFields(json.emptyFields)
            }
            
            if (response.ok) {
                setError(null)
                // setEmptyFields([])
                setPurpose('')
                setDiagnosis('')
                setDescription('')
                setTreatment('')
                setBp('')
                setWeight('')
                setHeight('')
                setBloodsugar('')
                setAttendingDoc('')
                console.log('Consult Added!', json)
                dispatch({type: 'CREATE_CONSULT', payload: json})
            }
        }

        return (
            <form className="create" onSubmit={handleSubmit}>
            <h3>Add Patient Record</h3>

            <label>Purpose of Visit: </label>

            <select
            value={purpose}
            onChange={handlePurpose}
            // className = {emptyFields.includes('purpose') ? 'error': ''}
             >
          
            {RHUServices.map((item) => (
              <>
                <option value="" selected="selected" hidden="hidden">
                  Choose here
                </option>
                <option key={item.name} value={item.name}>{item.name}</option>
              </>
            ))}
          </select> 

            <label>Diagnosis: </label>
            <input 
                type="text"
                onChange={(e) => setDiagnosis(e.target.value)}
                value={diagnosis}
                // className = {emptyFields.includes('mname') ? 'error': ''}
            />

            <label>Description: </label>
            <input 
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                // className = {emptyFields.includes('lname') ? 'error': ''}
            />

            <label>Prescription: </label>
            <input 
                type="text"
                onChange={(e) => setTreatment(e.target.value)}
                value={treatment}
                // className = {emptyFields.includes('lname') ? 'error': ''}
            />
        
            <label>Blood Pressure: </label>
            <input 
                type="text"
                onChange={(e) => setBp(e.target.value)}
                value={bp}
                // className = {emptyFields.includes('age') ? 'error': ''}
            /> 

            <label>Bloodsugar: </label>
            <input 
                type="text"
                onChange={(e) => setBloodsugar(e.target.value)}
                value={bloodsugar}
                // className = {emptyFields.includes('age') ? 'error': ''}
            /> 

            <label>Weight: </label>
            <input 
                type="text"
                onChange={(e) => setWeight(e.target.value)}
                value={weight}
                // className = {emptyFields.includes('age') ? 'error': ''}
            /> 

            <label>Height: </label>
            <input 
                type="text"
                onChange={(e) => setHeight(e.target.value)}
                value={height}
                // className = {emptyFields.includes('age') ? 'error': ''}
            /> 

            <label>Attending Physician: </label>
            <select value={attendingDoc} onChange ={(e)=>setAttendingDoc(e.target.value)}>
                <option value="" selected="selected" hidden="hidden">
                  Choose here
                </option>
                <option value = "Dra" selected> Dra. Katherine Pulgar-Ruby </option>
                {/* className = {emptyFields.includes('attendingDoc') ? 'error': ''} */}
            </select>
            

            <button>Submit</button>
            {error && <div className="error">{error}</div>}

            <Link to="/managepatient"> <button>Back</button> </Link>

            
            </form>
        )
}

export default ConsultForm