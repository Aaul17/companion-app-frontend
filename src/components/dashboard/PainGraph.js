import React from 'react'
import {Line} from 'react-chartjs-2'
import dateFns from 'date-fns'

let seventhDay = new Date()
let sixthDay = dateFns.subDays(seventhDay, 1)
let fifthDay = dateFns.subDays(sixthDay, 1)
let fourthDay = dateFns.subDays(fifthDay, 1)
let thirdDay = dateFns.subDays(fourthDay, 1)
let secondDay = dateFns.subDays(thirdDay, 1)
let firstDay = dateFns.subDays(secondDay, 1)
let formattedSeventhDay = dateFns.format(seventhDay, 'YYYY-M-D')
let formattedSixthDay = dateFns.format(sixthDay, 'YYYY-M-D')
let formattedFifthDay = dateFns.format(fifthDay, 'YYYY-M-D')
let formattedFourthDay = dateFns.format(fourthDay, 'YYYY-M-D')
let formattedThirdDay = dateFns.format(thirdDay, 'YYYY-M-D')
let formattedSecondDay = dateFns.format(secondDay, 'YYYY-M-D')
let formattedFirstDay = dateFns.format(firstDay, 'YYYY-M-D')

let daysArray = [formattedFirstDay, formattedSecondDay, formattedThirdDay, formattedFourthDay, formattedFifthDay, formattedSixthDay, formattedSeventhDay]



const PainGraph = (props) => {
  let painArray = props.myPains
  let painDays = painArray.map(painObj => painObj.date)

  let painData = daysArray.map( dayObj => {
    if (painDays.includes(dayObj)) {
      return painArray.find(painObj => painObj.date === dayObj).level
    } else {
      return 0
    }
  })

  const data = {
    labels: daysArray,
    datasets: [
      {
        label: 'Pain Level',
        fill: true,
        lineTension: 0.2,
        backgroundColor: 'rgba(214, 143, 149,0.3)',
        borderColor: 'rgba(214, 143, 149,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(214, 143, 149,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 7,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: 'rgba(214, 143, 149,1)',
        pointHoverBorderColor: 'rgba(214, 143, 149,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: painData,
      }
    ]
  }
  return (
      <div className="dashboard-feature" style={{marginRight: '30px'}}>
        <h2>Pain Tracker</h2>
        <Line data={data} width={400} height={100} />
      </div>
    )
}

export default PainGraph
