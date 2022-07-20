import React, {useEffect, useState} from 'react'
import CurrencySelector from './CurrencySelector'
import DisplayData from './DisplayData'


const App = () => {
  // define state using hooks
  const initialCurrency = "AUD"
  // const initialData = {"2022-04-18":39036.355,"2022-04-19":40661.67}
  const [currency, setCurrency] = useState(initialCurrency) 
  const [bitcoinData, setBitcoinData] = useState({})
  const url = "https://api.coindesk.com/v1/bpi/historical/close.json?currency="
  
  useEffect( () => {
    console.log("Hi, I'm using useEfect")
    fetch(`${url}${currency}`)
    .then(response => response.json())
    .then(data => setBitcoinData(data.bpi))
    .catch(e => console.log(e))
  }
  , 
  [currency]
  )

  const handleCurrency = (value) => {
      console.log(value)
      setCurrency(value)
  }

  return (
    <div >
          <h1>Bitcoin Index</h1>
          <CurrencySelector currency={currency} handleCurrency={handleCurrency}/>
          <DisplayData bitcoinData={bitcoinData}/>
    </div>
  )
}

export default App
