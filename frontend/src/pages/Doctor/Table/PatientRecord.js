import React from 'react'
import { Button, Modal} from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { UsePatientContext } from '../../../hooks/usePatientContext'


const PatientRecord = () => {

    const [item, setItem] = useState([]);
    const [RowData, SetRowData] = useState([]);
    const {dispatch} = UsePatientContext()

    // FOR EDIT MODAL
    const handleEditShow = () => { SetEditShow(true) }
    const handleEditClose = () => { SetEditShow(false) }


    // FOR UPDATE AND DELETE 
    const [id ,setId] = useState("");

       //Define here local state that store the form Data
      //  const [fname, setFname] = useState("")
      //  const [mname, setMname] = useState("")
      //  const [lname, setLname] = useState("")
      //  const [gender, setGender] = useState("")
      //  const [age, setAge] = useState("")
      //  const [address, setAddress] = useState("")
      //  const [contact, setContact] = useState("")
      //  const [Delete,setDelete] = useState(false)

    //  EDIT MODAL
    // const [ViewEdit, SetEditShow] = useState(false)
    // const handleEditShow = () => { SetEditShow(true) }
    // const handleEditClose = () => { SetEditShow(false) }



    // DISPLAY PATIENT RECORD 
    const url = "http://localhost:3000/portal/health";
    useEffect(() => {
      const getItem = async () => {
        const { data: res } = await axios.get(url);
        setItem(res);
        console.log(res);
      };
      getItem();
    }, [])

    // DELETE FUNCTION
    const handleDelete = async () =>{
      // const url =  `http://localhost:3000/portal/health/${id}`
      // axios.delete(url)
      //     .then(response => {
      //         const result = response.data;
      //         // const { status, message } = result;
      //           if (result.ok) {
      //               console.log(result.data)
      //           }
      //     })

      // const response = await axios.delete(`http://localhost:3000/portal/health/${id}`);
      //     .then((response) => response.data())
      //     if (response.data){
      //       console.log("success"); 
      //     }
          // .catch(err => {
          //     console.log(err)
          // })

          //fetch function & neec ng context para mag auto update sa page 

          const response = await fetch(`http://localhost:3000/portal/health/${id}` , {
            method: "DELETE"
          });
      
          const json = await response.json();
      
          if (response.ok) {
            dispatch({type:'DELETE_PATIENT', payload: json})
          }

  }

  //EDIT FUNCTION 
  // NEXT NA GAGAWIN AY EDIT MODAL 
  const handleEdit = async () =>{
//     const url =   `http://localhost:3000/portal/health/${id}`
//     const Credentials = {fname, mname, lname, gender, age, address, contact}
//     axios.put(url, Credentials)
//         .then(response => {
//             const result = response.data;
//             const { status, message } = result;
//             if (status !== 'SUCCESS') {
//                 alert(message, status)
//             }
//             else {
//                 alert(message)
//                 window.location.reload()
//             }
//         })
//         .catch(err => {
//             console.log(err)
//         })

          const response = await fetch(`http://localhost:3000/portal/health/${id}` , {
            method: "UPDATE"
          });

          const json = await response.json();

          if (response.ok) {
            dispatch({type:'UPDATE_PATIENT', payload: json})
          }

}

  return (
    <div className='tbl-patient'>
        <table className='tablePatient'>
            <thead className='thead'>
            <tr>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Action</th>
                
            </tr>
            </thead>
            <tbody>
            {item.map(item => 
                <tr key={item.id}>
                    <td>{item.fname}</td>
                    <td>{item.mname}</td>
                    <td>{item.lname}</td>
                    <td>{item.gender}</td>
                    <td>{item.age}</td>
                    <td>{item.address}</td>
                    <td>{item.contact}</td>
                    <td>
                      <button>View</button>
                      {/* <button onClick={() => {handleEdit(setId(item._id))}}>Edit</button> */}
                      <Button size='sm' variant='warning' onClick={()=> {handleEditShow(SetRowData(item),setId(item._id))}}>Edit</Button>|
                      <button onClick={() => {handleDelete(setId(item._id))}}>Delete</button>
                      
                    </td>
                </tr>
                )}
            </tbody>
        </table>
    </div>
    <div className="edit-modal">
        <Modal>

        </Modal>

    </div>
  )


export default PatientRecord