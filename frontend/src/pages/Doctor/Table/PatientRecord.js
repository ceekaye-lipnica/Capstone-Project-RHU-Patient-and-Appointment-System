import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { UsePatientContext } from '../../../hooks/usePatientContext'
// import barangays from '../../../data/barangay';
// import Modal from 'react-modal';


const PatientRecord = () => {

    const [item, setItem] = useState([]);
    const {dispatch} = UsePatientContext()

    // FOR UPDATE AND DELETE 
    const [id ,setId] = useState("");

    // const [RowData, SetRowData] = useState([])
    // const [ViewShow, SetViewShow] = useState(false)
    // const handleViewShow = () => { SetViewShow(true) }
    // const handleViewClose = () => { SetViewShow(false) }

    //For Edit Model
    // const [ViewEdit, SetEditShow] = useState(false)
    // const handleEditShow = () => { SetEditShow(true) }
    // const handleEditClose = () => { SetEditShow(false) }

    //For Delete Model
    // const [ViewDelete, SetDeleteShow] = useState(false)
    // const handleDeleteShow = () => { SetDeleteShow(true) }
    // const hanldeDeleteClose = () => { SetDeleteShow(false) }

    //For Add New Data Model
    // const [ViewPost, SetPostShow] = useState(false)
    // const handlePostShow = () => { SetPostShow(true) }
    // const handlePostClose = () => { SetPostShow(false) }

       //Define here local state that store the form Data
      //  const [fname, setFname] = useState("")
      //  const [mname, setMname] = useState("")
      //  const [lname, setLname] = useState("")
      //  const [gender, setGender] = useState("")
      //  const [age, setAge] = useState("")
      //  const [address, setAddress] = useState("")
      //  const [contact, setContact] = useState("")
      //  const [Delete,setDelete] = useState(false)

    // DISPLAY PATIENT RECORD 
    const GetPatientData = () => {
    const url = "http://localhost:3000/portal/health";
    useEffect(() => {
      const getItem = async () => {
        const { data: res } = await axios.get(url);
        setItem(res);
        console.log(res);
      };
      getItem();
    }, [])
  }

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

//   const handleSubmit = () => {
//     const url = "http://localhost:3000/portal/health";
//     const Credentials = {fname, mname, lname, gender, age, address, contact};
//         axios.post(url, Credentials)
//         .then(response => {
//           const result = response.data;
//           if (result.ok) {
//             console.log(result)
//           }
//           else {
//               console.log("error")
//           }
//       })
//       .catch(err => {
//           console.log(err)
//       })
// }


  //EDIT FUNCTION 
  // NEXT NA GAGAWIN AY EDIT MODAL 
  // const handleEdit = async () =>{
  //   const url =   `http://localhost:3000/portal/health/${id}`
  //   const Credentials = {fname, mname, lname, gender, age, address, contact}
  //   axios.put(url, Credentials)
  //       .then(response => {
  //           const result = response.data;
  //          console.log(result)
  //       })
  //       .catch(err => {
  //           console.log(err)
  //       })

  //         // const response = await fetch(`http://localhost:3000/portal/health/${id}` , {
  //         //   method: "UPDATE"
  //         // });

  //         // const json = await response.json();

  //         // if (response.ok) {
  //         //   dispatch({type:'UPDATE_PATIENT', payload: json})
  //         // }
  // }

   //call this function in useEffect
  //  console.log(ViewShow, RowData)
   useEffect(() => {
    GetPatientData();
   }, [])

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

                        {/* <Button size='sm' variant='primary' onClick={() => {handleViewShow(SetRowData(item))}}>View</Button>|
                        <Button size='sm' variant='warning' onClick={()=> {handleEditShow(SetRowData(item),setId(item._id))}}>Edit</Button>|
                        <Button size='sm' variant='danger' onClick={() => {handleViewShow(SetRowData(item),setId(item._id), setDelete(true))}}>Delete</Button>|
                       */}
                     
                      <button >View</button> |
                      <button >Edit</button> |
                      <button onClick={() => {handleDelete(setId(item._id))}}>Delete</button> |

                    </td>
                </tr>
                )}
            </tbody>
        </table>

        {/* VIEW MODAL */}
        {/* <div className='model-box-view'>
            <Modal
              show={ViewShow}
              onHide={handleViewClose}
              backdrop="static"
              keyboard={false}
            >
            <Modal.Header closeButton>
                <Modal.Title>View Patient Data</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <div>
                  <div className='form-group'>
                      <input type="text" className='form-control' value={RowData.fname} readOnly /> </div> 
                  <div className='form-group'>
                      <input type="text" className='form-control' value={RowData.mname} readOnly /> </div> 
                  <div className='form-group'>
                      <input type="text" className='form-control' value={RowData.lname} readOnly /> </div> 
                  <div className='form-group'>
                      <input type="text" className='form-control' value={RowData.gender} readOnly /> </div> 
                  <div className='form-group'>
                      <input type="number" className='form-control' value={RowData.age} readOnly /> </div> 
                  <div className='form-group'>
                      <input type="text" className='form-control' value={RowData.address} readOnly /> </div> 
                  <div className='form-group'>
                      <input type="tel" className='form-control' value={RowData.contact} readOnly /> </div>
                  
                      {
                        Delete && (
                                  <Button type='submit' className='btn btn-danger mt-4' onClick={handleDelete}>Delete Record</Button> )}
            </div>

            </Modal.Body>

            <Modal.Footer>
                <Button variant='secondary' onClick={handleViewClose}>Close</Button>
            </Modal.Footer>


            </Modal>

        </div> */}
        
        
        {/* MODAL FOR SUBMIT DATA TO DATABASE */}
        {/* <div className='model-box-view'>
            <Modal
                show={ViewPost}
                onHide={handlePostClose}
                backdrop="static"
                keyboard={false}
                >

            <Modal.Header closeButton>
                <Modal.Title>Add new Patient</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div>
                    <div className='form-group'>
                        <input type="text" className='form-control' onChange={(e) => setFname(e.target.value)} placeholder="Please enter First Name" /> </div>
                    <div className='form-group'>
                          <input type="text" className='form-control' onChange={(e) => setMname(e.target.value)} placeholder="Please enter Middle Name" /> </div>
                    <div className='form-group'>
                            <input type="text" className='form-control' onChange={(e) => setLname(e.target.value)} placeholder="Please enter Last Name" /> </div>
                    <div className='form-group mt-3'>
                            <input type="text" className='form-control' onChange={(e) => setGender(e.target.value)} placeholder="Gender" /> </div>
                    <div className='form-group mt-3'>
                            <input type="number" className='form-control' onChange={(e) => setAge(e.target.value)} placeholder="Please enter Age" /> </div>
                    <div className='form-group mt-3'>
                            <input type="text" className='form-control' onChange={(e) => setAddress(e.target.value)} placeholder="Please enter Address" /> </div>
                    <div className='form-group mt-3'>
                            <input type="tel" maxlength="11" className='form-control' onChange={(e) => setContact(e.target.value)} placeholder="Please enter Contact" /> </div>
                            
                            <Button type='submit' className='btn btn-success mt-4' onClick={handleSubmit}>Add Patient</Button>

                </div>
              </Modal.Body>

              <Modal.Footer>
                  <Button variant='secondary' onClick={handlePostClose}>Close</Button>
              </Modal.Footer>

            </Modal>
        </div>
 */}

        {/* EDIT MODAL */}
        {/* <div className="Edit-Modal">
          <Modal
            show={ViewEdit}
            onHide={handleEditClose}
            backdrop="static"
            keyboard={false}
          >

              <Modal.Header closeButton>
                  <Modal.Title>Edit Record</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <div>
                    <div className='form-group'>
                          <label>Name</label>
                          <input type="text" className='form-control' onChange={(e) => setFname(e.target.value)} placeholder="First Name" defaultValue={RowData.fname}/>
                    </div>
                    <div className='form-group'>
                          <label>Name</label>
                          <input type="text" className='form-control' onChange={(e) => setMname(e.target.value)} placeholder="Middle Name" defaultValue={RowData.mname}/>
                    </div>
                    <div className='form-group'>
                          <label>Name</label>
                          <input type="text" className='form-control' onChange={(e) => setLname(e.target.value)} placeholder="Last Name" defaultValue={RowData.lname}/>
                    </div>
                    <div className='form-group'>
                          <label>Name</label>
                          <select value={gender}  onChange={(e) => setGender(e.target.value)} 
                              placeholder="Gender" defaultValue={RowData.gender} >

                                <option value="" selected="selected" hidden="hidden">
                                  Choose here
                                </option>
                                <option value = "Female" selected> Female </option>
                                <option value = "Male" selected> Male </option>
                          </select>
                    </div>
                    <div className='form-group'>
                          <label>Name</label>
                          <input type="number" className='form-control' onChange={(e) => setAge(e.target.value)} placeholder="Age" defaultValue={RowData.age}/>
                    </div>
                    <div className='form-group'>
                          <label>Name</label>
                          <select className='form-control' onChange={(e) => setAddress(e.target.value)}     placeholder="Address" defaultValue={RowData.address} >
                                {barangays.map((item) => (  
                                  <>
                                    <option value="" selected="selected" hidden="hidden">
                                      Choose here
                                    </option>
                                    <option key={item.name} value={item.name}>{item.name}</option>
                                  </>
                                ))}
                          </select> 
                    </div>
                    <div className='form-group'>
                          <label>Name</label>
                          <input type="tel" maxLength="11" className='form-control' onChange={(e) => setContact(e.target.value)} placeholder="Contact Number" defaultValue={RowData.contact}/>
                    </div>
                    
                    <Button type='submit' className='btn btn-warning mt-4' onClick={handleEdit}>Edit Patient</Button>
              </div>
              </Modal.Body>

              <Modal.Footer>
                    <Button variant='secondary' onClick={handleEditClose}>Close</Button>
              </Modal.Footer>

          </Modal>
        </div> */}
    </div>
    
  )
}


export default PatientRecord;