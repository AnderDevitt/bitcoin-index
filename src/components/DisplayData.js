const DisplayData = ({bitcoinData}) => {
    return (
        <div>
            {/* use object dot keys to iterate through the object with the map function */}
            {Object.keys(bitcoinData).map(date =>
                <div key={date}>
                    Date: {date} Value: {bitcoinData[date]}
                </div>
            )}
        </div>
    )
}

export default DisplayData