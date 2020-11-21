import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect'
}

export const Example1 = () => {
    console.log('Example1')
    const [fake, setFake] = useState(23)
    const [counter, setCounter] = useState(23)

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log('useEffect only first render(componentDidMount)')
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return <>
        <button onClick={() => setFake(fake + 1)}>+1</button>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
        counter - {counter} fake - {fake}
    </>
}
export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(23)
    const [counter, setCounter] = useState(23)
    console.log('setTimeoutExample')

    useEffect(() => {
        setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString()
        }, 2000)
    }, [counter])

    return <>
        <button onClick={() => setCounter(counter + 1)}>counter+1</button>
        <button onClick={() => setFake(fake + 1)}>fake+1</button>
        counter - {counter} fake - {fake}
    </>
}
export const SetIntervalExample = () => {
    const [fake, setFake] = useState(23)
    const [counter, setCounter] = useState(23)
    console.log('SetIntervalExample')

    useEffect(() => {
        setInterval(() => {
            console.log('tick' + counter)//берётся начальное значение
            setCounter(state => state + 1)//changer внутри меняет state и берёт значение оттуда
        }, 2000)
    }, [])

    return <>
        counter - {counter} fake - {fake}
    </>
}
export const SetIntervalClockExample = () => {

    const [clock, setClock] = useState('')
    const validTime = (clockTime: string | number) => {
        return clockTime < 10 ? '0' + clockTime : clockTime
    }
    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log('myTick')
            const time = [
                validTime(new Date().getHours()),
                validTime(new Date().getMinutes()),
                validTime(new Date().getSeconds())
            ].join(':')
            setClock(time)
        }, 1000)
        return () => {
            clearInterval(intervalID) //stop setInterval 'tick'
        }
    }, [])
    return <>
        <span style={{color: "red"}}>
            {clock}
            </span>
    </>
}
export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(19)
    console.log('Component render with ' + counter)//1 render with new value

    useEffect(() => {
        console.log('effect occurred ' + counter)//3 registration new effect

        return () => {
            console.log('Reset effect ' + counter)//2 death old state value
        }
    }, [counter])

    const increase = () => setCounter(counter + 1)

    return <>
        Counter: {counter}
        <button onClick={increase}>+</button>
    </>
}
export const KeysTrackerExample = () => {
    const [text, setText] = useState('')

    console.log('Component render with ' + text)

    useEffect(() => {
        const handler = (e: { key: string; }) => {
            console.log(e.key)
            setText(state => state + e.key)
        }

        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [])

    return <>
        setText: {text}
    </>
}