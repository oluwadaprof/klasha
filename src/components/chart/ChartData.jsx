import './chartdata.scss'
import chartone from '../../assets/chart-one.png'

const ChartData = ({chart, date, price, time}) => {
  return (
    <div className='chartdata'>
        <p>24 Aug - 01 Sep 21</p>
        <img src={chartone} alt="ChartDataOne"/>
        <p>Time</p>
        <p>#1653.50</p>
    </div>
  )
}

export default ChartData