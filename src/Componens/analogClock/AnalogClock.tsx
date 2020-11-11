import React, {useEffect, useState} from "react";
import './AnalogClock.css'

export const AnalogClock = () => {

    const [day, setDay] = useState(new Date())
    let hh = day.getHours()
    let mm = day.getMinutes()
    let ss = day.getSeconds()

    useEffect(() => {
        const intervalID = setInterval(() => {
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
                    <div className="hr"
                         style={{transform: `rotateZ(${(hh * 30) + (mm / 12)}deg)`}}
                    />
                </div>
                <div className="min">
                    <div className="mn"
                         style={{transform: `rotateZ(${mm * 6}deg)`}}
                    />
                </div>
                <div className="sec">
                    <div className="sc"
                         style={{transform: `rotateZ(${ss * 6}deg)`}}
                    />
                </div>
            </div>
        </div>
    </div>
}