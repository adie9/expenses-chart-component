import React, {useState} from "react"
import Balance from "../components/Balance"
import Spending from "../components/Spending"
import Data from "../data.json"


function App() {
  
  const data = {
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
