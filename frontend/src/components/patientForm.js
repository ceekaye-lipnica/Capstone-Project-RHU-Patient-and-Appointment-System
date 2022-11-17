import { useState } from "react"
import { UsePatientContext } from "../hooks/usePatientContext"
import barangays from '../data/barangay'
// import { UseAuthContext } from "../hooks/useAuthContext"

const PatientForm = () => {
        const {dispatch} = UsePatientContext()
        // const {user} = UseAuthContext()

        const [fname, setFname] = useState('')
        const [mname, setMname] = useState('')
        const [lname, setLname] = useState('')
        const [gender, setGender] = useState('')
        const [age, setAge] = useState('')
        const [address, setAddress] = useState('')
        const [contact, setContact] = useState('')
        const [error, setError] = useState(null)
        const [emptyFields, setEmptyFields] = useState([])

        const handleAddress =(e)=>{
             setAddress(e.target.value)
        }

        const handleSubmit = async (e) => {
            e.preventDefault()

            // if (!user) {
            //     setError('You must be logged in')
            //     return
            // }

            const patientinfo = {fname, mname, lname, gender, age, address, contact}

            const response = await fetch('/portal/health', {
                method: 'POST',
                body: JSON.stringify(patientinfo),
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (!response.ok) {
                setError(json.error)
                setEmptyFields(json.emptyFields)
            }
            if (response.ok) {
                setError(null)
                setEmptyFields([])
                setFname('')
                setMname('')
                setLname('')
                setGender('')
                setAge('')
                setAddress('')
                setContact('')
                console.log('Patient Added!', json)
                dispatch({type: 'CREATE_PATIENT', payload: json})
            }


        }

        return (
            <form className="create" onSubmit={handleSubmit}>
            <h3>Add Patient Information</h3>

            <label>First Name: </label>
            <input 
                type="text"
                onChange={(e) => setFname(e.target.value)}
                value={fname}
                className = {emptyFields.includes('fname') ? 'error': ''}
            />

            <label>Middle Name: </label>
            <input 
                type="text"
                onChange={(e) => setMname(e.target.value)}
                value={mname}
                className = {emptyFields.includes('mname') ? 'error': ''}
            />

            <label>Last Name: </label>
            <input 
                type="text"
                onChange={(e) => setLname(e.target.value)}
                value={lname}
                className = {emptyFields.includes('lname') ? 'error': ''}
            />
            <label> Gender: </label>
            <select value={gender} onChange ={(e)=>setGender(e.target.value)}>
                <option value="" selected="selected" hidden="hidden">
                  Choose here
                </option>
                <option value = "Female" selected> Female </option>
                <option value = "Male" selected> Male </option>
            </select>

            <label>Age: </label>
            <input 
                type="number"
                onChange={(e) => setAge(e.target.value)}
                value={age}
                className = {emptyFields.includes('age') ? 'error': ''}
            />

            <label>Address: </label>
            <select
            value={address}
            onChange={handleAddress}
            className = {emptyFields.includes('address') ? 'error': ''}
             
          >
            {barangays.map((item) => (  
              <>
                <option value="" selected="selected" hidden="hidden">
                  Choose here
                </option>
                <option key={item.name} value={item.name}>{item.name}</option>
              </>
            ))}
          </select> 

            <label>Contact Number: </label>
            <input 
                type="tel" 
                maxLength="11"
                onChange={(e) => setContact(e.target.value)}
                value={contact}
                className = {emptyFields.includes('contact') ? 'error': ''}
            />

            <button>Submit</button>
            {error && <div className="error">{error}</div>}

            </form>
        )
}

export default PatientForm