import currencies from '../data/supported-currencies.json'
import React, {useState} from 'react'

const CurrencySelector = () => {
    // define state using hooks
    const initialCurrency = "AUD"
    const [currency, setCurrency] = useState(initialCurrency) 

    const handleCurrency = (value) => {
        console.log(value)
        setCurrency(value)
    }

    return (
        <div>
            <span>Select your currency: </span>
            <select value={currency} onChange={(e)=>{handleCurrency(e.target.value)}}>
                {currencies.map(obj =>
                    <option key={obj.currency} value={obj.currency}>{obj.country}</option>    
                )}
            </select>
        </div>
    )
}

export default CurrencySelector