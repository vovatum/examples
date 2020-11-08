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