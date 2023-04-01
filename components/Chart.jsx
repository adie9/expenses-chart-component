import React from "react"
import { Bar } from "react-chartjs-2"
import {Chart as ChartJS} from 'chart.js/auto'

function Chart({chartData}) {
  console.log(chartData)

  return (
      <div id="chart">
        <Bar data={chartData} />
      </div>
    )
  }

  export default Chart