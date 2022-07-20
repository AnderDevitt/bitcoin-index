import currencies from '../data/supported-currencies.json'


const CurrencySelector = ({currency, handleCurrency}) => {
    

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