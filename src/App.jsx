import React, {useState} from "react"
import Balance from "../components/Balance"
import Spending from "../components/Spending"
import Footer from "../components/Footer"
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
            hoverBackgroundColor: ['#ff9b87'],
            borderWidth: 1,
        }
    ]
  };

  const options = { }
  


  return (
    <main className="container">
      <Balance  />
      <Spending chartData={data} />
      <Footer />
    </main>
  )
}

export default App
