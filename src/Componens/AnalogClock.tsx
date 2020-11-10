import React, {useEffect, useState} from "react";
import './AnalogClock.css'

const deg = 6;
// let hr_style: string | undefined,
//     mn_style: string | undefined,
//     sc_style: string | undefined

export const AnalogClock = () => {
    const [day, setDay] = useState(new Date())
    useEffect(() => {
        const hr = document.querySelector('#hr');
        const sc = document.querySelector('#sc');
        const intervalID = setInterval(() => {
            // console.log(sc)
            let hh = day.getHours() * 30;
            let mm = day.getMinutes() * deg;
            let ss = day.getSeconds() * deg;
//чтобы оживить предполагаю получить стили в виде объекта из css
            // hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
            // mn.style.transform = `rotateZ(${mm}deg)`;
            // sc.style.transform = `rotateZ(${ss}deg)`;
            setDay(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalID)
        }
    }, [])
    return <div className={"app"}>
        <div className={"body"}>
            <div className="clock">
                <div className="hour">
                    <div className="hr" id="hr"/>
                </div>
                <div className="min">
                    <div className="mn" id="mn"/>
                </div>
                <div className="sec">
                    <div className="sc" id="sc"/>
                </div>
            </div>
        </div>
    </div>
}