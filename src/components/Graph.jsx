import React, { useEffect, useState, useContext } from 'react';
import './Graph.css';
import axios from 'axios';
import { Chart } from "react-google-charts";
import AlertContext from '../utils/AlertContext';

export const month = [
    {
        "month": "January",
        "number": 1
    },
    {
        "month": "February",
        "number": 2
    },
    {
        "month": "March",
        "number": 3
    },
    {
        "month": "April",
        "number": 4
    },
]


const Graph = () => {
    const options = {
        curveType: "function",
        legend: { position: "bottom" },
    };
    const {setAlert} = useContext(AlertContext)

    const [activeMonth, setActiveMonth] = useState(1);
    const [data, setData] = useState([["Date", "INR", "PKR"]]);

    const getData = async () => {
        try {
            setData([["Date", "INR", "PKR"]]);
            const start = new Date(`0${activeMonth}/01/2023`);
            const end = new Date(`0${activeMonth}/28/2023`);
            let loop = new Date(start), dateNo, pkrResponse, inrResponse;
            while (loop <= end) {
                if (loop.getDate() < 10)
                    dateNo = `0${loop.getDate()}`
                else
                    dateNo = `${loop.getDate()}`
                inrResponse = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/2023-0${activeMonth}-${dateNo}/currencies/usd/inr.json`)
                pkrResponse = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/2023-0${activeMonth}-${dateNo}/currencies/usd/pkr.json`)
                setData((prevState) => [...prevState, [inrResponse.data.date, inrResponse.data.inr, pkrResponse.data.pkr]])
                let newDate = loop.setDate(loop.getDate() + 7);
                loop = new Date(newDate);
            }
        } catch (err) {
            setAlert(err)
        }
    }

    useEffect(() => {
        try {
                getData();
        } catch (err) {
            setAlert(err);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeMonth])

    return (
        <div className='graph-container'>
            <section>
                <header>
                    <h3>Currency</h3>
                </header>
                <div className='graph-selection'>
                    <select onChange={
                        (e) => {
                            setActiveMonth(e.target.value)
                            // getData()
                        }
                    }>
                        {
                            month.map((month) => (
                                <option
                                    key={month.number} value={month.number}>{month.month}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='graph-container-graph'>
                    <Chart
                        chartType="LineChart"
                        width="100%"
                        height="400px"
                        data={data}
                        options={options}
                    />
                </div>
            </section>
        </div>
    )
}

export default Graph