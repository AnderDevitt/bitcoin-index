import React, {useState} from 'react'
import CurrencySelector from './CurrencySelector'
import DisplayData from './DisplayData'


const App = () => {
  // define state using hooks
  const initialCurrency = "AUD"
  const [currency, setCurrency] = useState(initialCurrency) 

  const handleCurrency = (value) => {
      console.log(value)
      setCurrency(value)
  }

  return (
    <div >
          <h1>Bitcoin Index</h1>
          <CurrencySelector currency={currency} handleCurrency={handleCurrency}/>
          <DisplayData />
    </div>
  )
}

export default App
