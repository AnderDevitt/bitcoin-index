import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables) // for dependancy issues and to avoid errors

const DisplayData = ({bitcoinData}) => {
    
    const formatChartData = () => {
        return {
            labels: Object.keys(bitcoinData),
            datasets: [
                // {
                //     data: Object.values(bitcoinData)
                // }
                {
                    label: "Bitcoin",
                    fill: true,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Object.values(bitcoinData)
                }
            ]
        }
    }
    return (
        <Bar data={formatChartData()} />
    )
}

export default DisplayData