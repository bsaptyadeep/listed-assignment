import React from 'react';
import { Chart } from "react-google-charts";
import './TopProduct.css';
import { month } from './Graph';

const TopProduct = () => {
    const data = [
        ["Items", "Percentage"],
        ["Basic Tees", 55],
        ["Custom Short Pants", 31],
        ["Super Hoodies", 14]
    ];
    
    return (
        <div className='top-products-container'>
            <header>
                <h3>Top products</h3>
                <select>
                        {
                            month.map((month) => (
                                <option
                                    key={month.number} value={month.number}>{month.month}</option>
                            ))
                        }
                    </select>
            </header>
            <Chart
                chartType="PieChart"
                data={data}
                width={"100%"}
                height={"200px"}
            />
         </div>
    )
}

export default TopProduct