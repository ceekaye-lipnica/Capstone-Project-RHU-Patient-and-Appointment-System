import React from 'react'

function Report() {
  return (

  <div className='donut-gender'>

      {/* pie chart - gender  */}
    <div className='reports'>
      <iframe 
          title="donut-gender"
          style={{
            background: "#FFFFFF",
            border: "none",
            borderRadius: "2px",
            boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
            width: "100%",
            height: "400px", }}
          
            src="https://charts.mongodb.com/charts-capstone-rdggn/embed/charts?id=636f9a03-3d08-4f35-8a11-2618c96b5e1c&maxDataAge=10&theme=light&autoRefresh=true"></iframe>

  </div>

    {/* Chart for address */}
  <div className='chart-address'>
    <iframe 
        title='chartaddress'
        style=
         {{
          background: "#FFFFFF",
          border: "none",
          borderRadius:" 2px",
          boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
          width: "100%",
          height: "400px", }}

          src="https://charts.mongodb.com/charts-capstone-rdggn/embed/charts?id=636f9c40-bbc8-4d24-8f07-ebbe86ffb1c1&maxDataAge=10&theme=light&autoRefresh=true"></iframe>
  </div>

    {/* Chart for age */}
  <div className='chart-age'>
      <iframe 
        title='chartage'
        style={{
          background: "#FFFFFF",
          border: "none",
          borderRadius: "2px",
          boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
          width: "100%",
          height: "400px", }}

          src="https://charts.mongodb.com/charts-capstone-rdggn/embed/charts?id=636f9e9e-02c9-4000-80d9-f6da73e7c7ea&maxDataAge=10&theme=light&autoRefresh=true"></iframe>

  </div>




    </div>
  )
}

export default Report