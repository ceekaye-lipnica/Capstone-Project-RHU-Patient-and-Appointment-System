import React from 'react';

const TablePatient = () => {

    return (

        // table/chart for patient

    <div>
       <iframe 
            title='tbl-patient'
            style=
           {{ background: "#FFFFFF",
            border: "none",
            borderRadius: "2px",
            boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
            width: "100%", 
            height: "400px",
        }}
           
        src="https://charts.mongodb.com/charts-capstone-rdggn/embed/charts?id=636dbaf4-ef5e-4eb1-883c-bf0dc869dca4&maxDataAge=10&theme=light&autoRefresh=true"></iframe>
        </div>
    )

}

export default TablePatient;

