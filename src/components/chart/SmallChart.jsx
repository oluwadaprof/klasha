import './smallchart.scss'

const chartData = [
    {
        id:1,
        Date: '',
        Chart: '',
        Time: '',
        Price: ''
    }
]

const SmallChart = () => {
  return (
    <div className='smallchart'>
        <div>
            <p className='chart_title' >Today's Sales</p>
            <p  className='chart_price'>
                #1652.50
            </p>
        </div>

    </div>
  )
}

export default SmallChart