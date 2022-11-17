import React from 'react';
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import { BiNotepad } from "react-icons/bi";
// import { MdPendingActions } from "react-icons/md";
// import { AiOutlineFileDone } from "react-icons/ai";


const Count = () => {
  const [patientCount, setPatient] = useState();
  
  useEffect(() => {
    const fetchCount = async () => {
      const response = await fetch("portal/health/count");
      const json = await response.json();

      try {
        if (response.ok) {
          setPatient(json);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchCount();
  }, [patientCount]);

  return (
    <div className="board">
      {/* <div className="dash">
        <BiNotepad className="dash-icon"/>
        <div className="dash-text">
          <p className="dash-p">
            Number of Total Patients:{" "}
          </p>
          <span className="dash-count">
            {patientCount && patientCount.totalPatient}
          </span>
        </div>
      </div> */}

      {/* chart for count patients */}
      <iframe 

        title='count-patient'
        style={{
        background: "#FFFFFF",
        border: "none",
        borderRadius: "2px",
        boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)", 
        width: "740", 
        height: "580", }}

        src="https://charts.mongodb.com/charts-capstone-rdggn/embed/charts?id=636dbd3c-204e-47fc-867e-629819aaf790&maxDataAge=10&theme=light&autoRefresh=true"></iframe>

    </div>
  );
};

export default Count;