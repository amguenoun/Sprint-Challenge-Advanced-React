import React from 'react';
import { BarChart } from 'react-chartkick'
import 'chart.js'

const Chart = (props) => {
    return (
        <div className="chart">
            <BarChart data={props.barInput} height='1500px' ytitle="Name" xtitle='Searches' />
        </div>
    )
}

export default Chart;