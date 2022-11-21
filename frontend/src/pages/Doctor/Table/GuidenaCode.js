import React, { useEffect, useState 
} from 'react';
import { Button, Modal} from 'react-bootstrap'
import axios from 'axios'
// import { UsePatientContext } from '../hooks/usePatientContext'

const tblPatient = () => {

    const [Data, setData] = useState([]);
    const [RowData, SetRowData] = useState([])
    const [ViewShow, SetViewShow] = useState(false)
    const handleViewShow = () => { SetViewShow(true) }
    const handleViewClose = () => { SetViewShow(false) }

    //For Edit Model
    const [ViewEdit, SetEditShow] = useState(false)
    const handleEditShow = () => { SetEditShow(true) }
    const handleEditClose = () => { SetEditShow(false) }

    //For Delete Model
    const [ViewDelete, SetDeleteShow] = useState(false)
    const handleDeleteShow = () => { SetDeleteShow(true) }
    const hanldeDeleteClose = () => { SetDeleteShow(false) }

    //For Add New Data Model
    const [ViewPost, SetPostShow] = useState(false)
    const handlePostShow = () => { SetPostShow(true) }
    const handlePostClose = () => { SetPostShow(false) }

    //Define here local state that store the form Data
    const [fname, setFname] = useState("")
    const [mname, setMname] = useState("")
    const [lname, setLname] = useState("")
    const [gender, setGender] = useState("")
    const [age, setAge] = useState("")
    const [address, setAddress] = useState("")
    const [contact, setContact] = useState("")
    const [Delete,setDelete] = useState(false)

    //Id for update record and Delete
    const [id,setId] = useState("");

    const GetPatientData = () => {
        //here we will get all employee data
        const url = 'http://localhost:3000/tblPatient'
        axios.get(url)
            .then(response => {
                const result = response.data;
                const { status, message, data } = result;
                if (status !== 'SUCCESS') {
                    alert(message, status)
                }
                else {
                    setData(data)
                    console.log(data)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleSubmite = () => {
        const url = 'http://localhost:3000/tblPatient'
        const Credentials = {fname, mname, lname, gender, age, address, contact}
        axios.post(url, Credentials)
            .then(response => {
                const result = response.data;
                const { status, message, data } = result;
                if (status !== 'SUCCESS') {
                    alert(message, status)
                }
                else {
                    alert(message)
                    window.location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleEdit = () =>{
        const url =  `http://localhost:3000/tblPatient/${id}`
        const Credentials = {fname, mname, lname, gender, age, address, contact}
        axios.put(url, Credentials)
            .then(response => {
                const result = response.data;
                const { status, message } = result;
                if (status !== 'SUCCESS') {
                    alert(message, status)
                }
                else {
                    alert(message)
                    window.location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    //handle Delete Function 
    const handleDelete = () =>{
        const url =  `http://localhost:3000/portal/health/${id}`
        axios.delete(url)
            .then(response => {
                const result = response.data;
                const { status, message } = result;
                if (status !== 'SUCCESS') {
                    alert(message, status)
                }
                else {
                    alert(message)
                    window.location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    //call this function in useEffect
    console.log(ViewShow, RowData)
    useEffect(() => {
        GetPatientData();
    }, [])

    return (
        <div>
            <div className='row'>
                <div className='mt-5 mb-4'>
                    <Button variant='primary' onClick={() => { handlePostShow() }}><i className='fa fa-plu'></i>
                        Add New Patient
                    </Button>
                </div>
            </div>
            <div className='row'>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
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
                            {Data.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.fname}</td>
                                    <td>{item.mname}</td>
                                    <td>{item.lname}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.age}</td>
                                    <td>{item.address}</td>
                                    <td>{item.contact}</td>
                                    <td style={{ minWidth: 190 }}>
                                        <Button size='sm' variant='primary' onClick={() => { handleViewShow(SetRowData(item)) }}>View</Button>|
                                        <Button size='sm' variant='warning' onClick={()=> {handleEditShow(SetRowData(item),setId(item._id))}}>Edit</Button>|
                                        <Button size='sm' variant='danger' onClick={() => {handleViewShow(SetRowData(item),setId(item._id), setDelete(true))}}>Delete</Button>|
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* View Modal */}
            <div className='model-box-view'>
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
                                <input type="text" className='form-control' value={RowData.fname} readOnly />
                            </div>
                            <div className='form-group'>
                                <input type="text" className='form-control' value={RowData.mname} readOnly />
                            </div>
                            <div className='form-group'>
                                <input type="text" className='form-control' value={RowData.lname} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="email" className='form-control' value={RowData.gender} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.age} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.address} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.contact} readOnly />
                            </div>
                            {
                                Delete && (
                                    <Button type='submit' className='btn btn-danger mt-4' onClick={handleDelete}>Delete Record</Button>
                                )
                            }
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleViewClosee}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>

            {/* Modal for submit data to database */}
            <div className='model-box-view'>
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
                                <input type="text" className='form-control' onChange={(e) => setFname(e.target.value)} placeholder="Please enter First Name" />
                            </div>
                            <div className='form-group'>
                                <input type="text" className='form-control' onChange={(e) => setMname(e.target.value)} placeholder="Please enter Middle Name" />
                            </div>
                            <div className='form-group'>
                                <input type="text" className='form-control' onChange={(e) => setLname(e.target.value)} placeholder="Please enter Last Name" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setGender(e.target.value)} placeholder="Gender" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setAge(e.target.value)} placeholder="Please enter Age" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setAddress(e.target.value)} placeholder="Please enter Address" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setContact(e.target.value)} placeholder="Please enter Contact" />
                            </div>
                            <Button type='submit' className='btn btn-success mt-4' onClick={handleSubmite}>Add Patient</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handlePostClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>

            {/* Modal for Edit employee record */}
            <div className='model-box-view'>
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
                                <input type="text" className='form-control' onChange={(e) => setname(e.target.value)} placeholder="First Name" defaultValue={RowData.fname}/>
                            </div>
                            <div className='form-group'>
                                <label>Name</label>
                                <input type="text" className='form-control' onChange={(e) => setname(e.target.value)} placeholder="Middle Name" defaultValue={RowData.mname}/>
                            </div>
                            <div className='form-group'>
                                <label>Name</label>
                                <input type="text" className='form-control' onChange={(e) => setname(e.target.value)} placeholder="Last Name" defaultValue={RowData.lname}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Email</label>
                                <input type="text" className='form-control' onChange={(e) => setemail(e.target.value)} placeholder="Gender" defaultValue={RowData.gender} />
                            </div>
                            <div className='form-group mt-3'>
                                <label>Number</label>
                                <input type="text" className='form-control' onChange={(e) => setnumber(e.target.value)} placeholder="Age" defaultValue={RowData.age}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>NIC</label>
                                <input type="text" className='form-control' onChange={(e) => setnic(e.target.value)} placeholder="Address" defaultValue={RowData.address}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Address</label>
                                <input type="text" className='form-control' onChange={(e) => setaddress(e.target.value)} placeholder="Contact Number" defaultValue={RowData.contact}/>
                            </div>
                            <Button type='submit' className='btn btn-warning mt-4' onClick={handleEdit}>Edit Patient</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleEditClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default tblPatient;