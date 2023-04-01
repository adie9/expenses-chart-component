import React from "react"
import Balance from "../components/Balance"
import Spending from "../components/Spending"


const data = {
  labels: ['monday', 'tuesday', 'wednesday', 'thursday',
              'friday', 'saturday', 'sunday'],
  datasets: [
      {
          data: [25, 55, 40, 30, 20, 35, 10],
          backgroundColor: ['rgba(255, 0, 0, 0.5)'],
          borderWidth: 1,
      }
  ]
}

function App() {
  return (
    <div className="container">
      <Balance />
      <Spending />
    </div>
  )
}

export default App
