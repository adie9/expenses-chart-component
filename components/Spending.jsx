import React, { useState } from "react"
import Chart from "../components/Chart"




function Spending({chartData}) {

  const amounts = chartData.datasets[0].data
  const total = amounts.reduce((total, num) => total + num, 0)
  

  return (
    <section className="spending-container">
      <h1>Spending - Last 7 Days</h1>
      <Chart chartData={chartData} />
      <div class="spending-footer">
          <div class="spending-values">
              <h3>Total this week: </h3>
              <h1>${total}</h1>
          </div>
          <h3 id="percent">+2.4% <br></br><span>from last week</span></h3>
      </div>
    </section>
  )
}

  export default Spending