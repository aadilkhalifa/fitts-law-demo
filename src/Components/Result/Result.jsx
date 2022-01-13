import './Result.scss';

import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'


import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';



function Result() {

    const location = useLocation();
    const [result, setResult] = useState([]);
    const [pdata, setPData] = useState([]);

    useEffect(()=>{
        console.log('result value changed to: ', result);
        setPData(
            result.map((row, i)=>{
                return {
                    diameter: row[2],
                    timeTaken: row[0],
                    distance: row[1],
                }
            })
        );
    }, [result]);

    useEffect(() => {
        if(location.state!=null){
            const { res } = location.state
            // console.log("goto: "+goto);
            if(res) {
                console.log('result: ',res);
                setResult(res);
                // setResult([[1, 2, 3], [4,5,6]]);
            }
        }
      }, [location.state]);

    return (
        <div>
            <table>
            <tbody>
                <tr>
                <th>Time taken</th>
                <th>Distance</th>
                <th>width</th>
                </tr>
                {
                    result.map((res, i)=>{
                        return <tr key={i}>
                            <td>{(Math.round(res[0] * 100) / 100).toFixed(2)}</td>
                            <td>{(Math.round(res[1] * 100) / 100).toFixed(2)}</td>
                            <td>{(Math.round(res[2] * 100) / 100).toFixed(2)}</td>
                        </tr>
                    })
                }
                </tbody>
            </table>
            <h1 className="text-heading">
                Graph of time taken vs diameter of circle
            </h1>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={pdata} margin={{ right: 300 }}>
                    <CartesianGrid />
                    <XAxis dataKey="diameter" 
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="timeTaken"
                        stroke="black" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
            <h1 className="text-heading">
                Graph of time taken vs distance to target
            </h1>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={pdata} margin={{ right: 300 }}>
                    <CartesianGrid />
                    <XAxis dataKey="diameter" 
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="distance"
                        stroke="red" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Result
