function Balance() {
  return (
    <div className="balance-container">
        <div className="balance-values">
          <h2>My balance</h2>
          <h1>$921.48</h1>
        </div>
        <img src="../images/logo.svg" alt="logo"></img>
    </div>
  )
}

function Spending() {

}

function App() {
  return (
    <div>
      <Balance />
      <Spending />
    </div>
  )
}

export default App
