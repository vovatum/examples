import React, {useMemo, useState} from "react";

export default {
    title: 'useState'
}

const difficultCountingFunction = () => {
    console.log('difficultCountingFunction')
    return -3 //resultCounting
}
export const Example1 = () => {
    console.log('Example1')
    // const initValue = difficultCountingFunction()
    const initValue = useMemo(difficultCountingFunction, []) //не вызывается с использованием useMemo
    const [counter, setCounter] = useState(initValue)

    return <>
        <button onClick={() => setCounter(state => state + 1)}>+1</button>
        {counter}
    </>
}