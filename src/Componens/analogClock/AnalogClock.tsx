import React, {useEffect, useState} from "react";
import './AnalogClock.css'

export const AnalogClock = () => {

    const [day, setDay] = useState(new Date())
    let [hh, mm, ss] = [day.getHours(), day.getMinutes(), day.getSeconds()]
    const validNum = (num: string | number) => num < 10 ? '0' + num : num
    const clock = [hh, mm, ss].map(num => validNum(num)).join(':')

    const [mode, setMode] = useState('analog')
    const switchMode = () => mode === 'analog' ? setMode('digital') : setMode('analog')

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
            {mode === 'analog'
                ? <div className="clock" onClick={switchMode}>
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
                : <div className={"digital"} onClick={switchMode}>
                    {clock}
                </div>}
        </div>

    </div>
}