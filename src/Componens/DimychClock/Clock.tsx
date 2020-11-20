import React, {useEffect, useState} from "react";

type PropsType = {
    mode?: 'analog' | 'digital'
}

const get2digitsString = (num: number) => num < 10 ? '0' + num : num

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalID) //stop setInterval 'tick'
        }
    }, [])

    let view
    switch (props.mode) {
        case "analog":
            view = <span>Analog</span>
            break
        case "digital":
        default:
            view = <>
                <span>{get2digitsString(date.getHours())}</span>
                :
                <span>{get2digitsString(date.getMinutes())}</span>
                :
                <span>{get2digitsString(date.getSeconds())}</span>
            </>
    }

    return <>
        {view}
    </>
}