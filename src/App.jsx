import React, {useState} from "react"
import Balance from "../components/Balance"
import Spending from "../components/Spending"
import Data from "../data.json"


function App() {
  const days = Data.map(data => data.day)
  const amounts = Data.map(data => data.amount)
  
  const data = {
    labels: days,
    datasets: [
        {
            label: '$',
            data: amounts,
            backgroundColor: ['#eb755d'],
            borderWidth: 1,
        }
    ]
  };

  const options = { }
  


  return (
    <main className="container">
      <Balance  />
      <Spending chartData={data} />
    </main>
  )
}

export default App
