import React, { useState } from "react"
import Chart from "../components/Chart"




function Spending({chartData}) {

  return (
    <section className="spending-container">
      <h1>Spending - Last 7 Days</h1>
      <Chart chartData={chartData} />
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