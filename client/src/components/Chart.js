import React from 'react';
import { BarChart } from 'react-chartkick'
import 'chart.js'

const Chart = (props) => {
    return (
        <div className="chart">
            <BarChart data={props.barInput} height='1500px' />
        </div>
    )
}

export default Chart;