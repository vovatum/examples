import React, {useEffect, useState} from "react";

type PropsType = {}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])
    return <>
        <span>{date.getHours()}</span>
        :
        <span>{date.getMinutes()}</span>
        :
        <span>{date.getSeconds()}</span>
    </>
}