import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


// import { Navigate} from 'react-router-dom'
// import { UseAuthContext } from './hooks/useAuthContext';

//pages and components 
import Home from "./pages/Home";
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Navbar from './components/Navbar';
import DoctorPage from "./pages/DoctorPage";
import ConsultPage from "./pages/ConsultPage";
import Page404 from "./pages/Page404";
import ManagePatient from "./pages/Doctor/ManagePatient";
import AddPatient from "./pages/Doctor/AddPatient";
import AddDoctor from "./pages/Admin/AddDoctor";
import ManageDoctor from "./pages/Admin/ManageDoctor";
// import ViewHistory from "./pages/Doctor/ViewHistory";
import AddConsult from "./pages/Doctor/AddConsult";
import ViewConsult from "./pages/Doctor/ViewConsult";
import TablePatient from "./pages/Doctor/charts/tablepatient";
import PatientRecord from "./pages/Doctor/Table/PatientRecord";

//SIDEBAR
// import Sidebar from './components/Sidebar';
// import SideBar from './components/Sidebar/SideBar';
import SideNav from "./components/SideNav/SideNav";
import Dashboard from "./pages/Doctor/Dashboard";
import Report from "./pages/Doctor/Report";

function App() {
  //  const {user} = UseAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <SideNav />

        <div className="pages">
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/report" element={<Report />} />

            <Route path="/home" element={<Home />} />
            <Route path="/doctor" element={<DoctorPage />} />
            <Route path="/consult" element={<ConsultPage />} />
            <Route path="/managepatient" element={<ManagePatient />} />
            <Route path="/addpatient" element={<AddPatient />} />
            <Route path="/managedoctor" element={<ManageDoctor />} />
            <Route path="/adddoctor" element={<AddDoctor />} />
            {/* <Route path="/viewhistory" element={<ViewHistory />} /> */}
            <Route path="/addconsult" element={<AddConsult />} />
            <Route path="/viewconsult" element={<ViewConsult />} />
            <Route path="/tablepatient" element={<TablePatient />} />
            <Route path="/patientRecord" element={<PatientRecord />} />
            
            <Route path="*" element={<Page404 />} />

            {/* <Route path= "/" element={user ? <Home /> : <Navigate to="/login" />} />
            <Route path= "/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path= "/signup" element={!user ? <Signup /> : <Navigate to="/" />} /> */}
            {/* <Route path= "/doctor" element={user ? <DoctorPage /> : <Navigate to="/doctor" />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
