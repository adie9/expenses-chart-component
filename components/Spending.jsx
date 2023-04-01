import React, { useState } from "react"
import Chart from "../components/Chart"
import Data from "../data.json"



function Spending() {
  const [userData, setUserData] = useState({
    labels: ['monday', 'tuesday', 'wednesday', 'thursday',
                'friday', 'saturday', 'sunday'],
    datasets: [
        {
            label: '$',
            data: [25, 55, 40, 30, 20, 35, 10],
            backgroundColor: ['rgba(255, 0, 0, 0.5)'],
            borderWidth: 1,
            color: '#eb755d'
        }
    ]
  })

  // const [Data, setData] = useState({
  //   labels: Data.map((data) => data.day),
  //   datasets: [{
  //     label: "$",
  //     data: Data.map((data) => data.amount),
  //     backgroundColor: ['rgba(255, 0, 0, 0.5)'],
  //           borderWidth: 1,
  //           color: '#eb755d'
  //   }]
  // })


  
  

  return (
    <section className="spending-container">
      <h1>Spending - Last 7 Days</h1>
      <Chart chartData={userData}  />
      <div class="spending-footer">
          <div class="spending-values">
              <h3>Total this month: </h3>
              <h1>$478.33</h1>
          </div>
          <h3 id="percent">+2.4% <br></br><span>from last month</span></h3>
      </div>
    </section>
  )
}

  export default Spending