import currencies from '../data/supported-currencies.json'


const CurrencySelector = () => {
    return (
        <div>
            <span>Select your currency: </span>
            <select>
                {currencies.map(obj =>
                    <option>{obj.country}</option>    
                )}
            </select>
        </div>
    )
}

export default CurrencySelector