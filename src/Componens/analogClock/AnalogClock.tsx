import React, {useEffect, useState} from "react";
import './AnalogClock.css'

export const AnalogClock = () => {

    const [day, setDay] = useState(new Date())
    let [hh, mm, ss] = [day.getHours(), day.getMinutes(), day.getSeconds()]
    const validNum = (num: string | number) => num < 10 ? '0' + num : num
    const clock = [validNum(hh), validNum(mm), validNum(ss)].join(':')

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDay(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalID)
        }
    }, [])

    return <div className={"app"}>
         <span style={{color: "red"}}>
            {clock}
            </span>
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