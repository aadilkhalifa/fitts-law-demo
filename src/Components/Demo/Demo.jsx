import './Demo.scss'

import React, {useState} from 'react'
import { useNavigate, Link } from "react-router-dom";

function Demo() {

    let navigate = useNavigate();

    const [count, setCount] = useState(0);

    const [left, setLeft] = useState(50);
    const [top, setTop] = useState(50);
    const [width, setWidth] = useState(100);

    const [prevX, setPrevX] = useState(50);
    const [prevY, setPrevY] = useState(50);
    const [curX, setCurX] = useState(50);
    const [curY, setCurY] = useState(50);
    const [prevDate, setPrevDate] = useState(0);
    const [curDate, setCurDate] = useState(0);

    const [result, setResult] = useState([]);
    


    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }
    
    function change(){

        var d = Date.now();

        setCurDate(d);

        var dist = Math.pow( Math.pow(curX-prevX, 2) + Math.pow(curY-prevY, 2), 0.5 ); 

        setResult( [...result, [d-prevDate, dist, width]] );
        console.log(result);

        setCount(count+1, console.log(count));

        setPrevX(curX); 
        setPrevY(curY); 

        setCurX( getRandomInt(90) );
        setCurY( getRandomInt(90) );

        setPrevDate(d);

        setLeft(curX);
        setTop(curY);
        setWidth(getRandomArbitrary(50, 200));
        // console.log(left, top);
    }

    return (
        <div className="demoDiv">
            {
                count <= 30 ? <div className="circle" style={{left: left+'vw', top: top+'vh', width: width+'px', height: width+'px',}} onClick={change}></div>
                : <Link className="getResult" to={'/result'} state={{ res: result.slice(1) }}>Get results</Link>
            }
        </div>
    )
}

export default Demo
