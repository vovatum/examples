import React, {useState} from "react";

export default {
    title: 'useState'
}

const difficultCountingFunction = () => {
    console.log('difficultCountingFunction')
    return -3 //resultCounting
}
export const Example1 = () => {
    console.log('Example1')
    const initValue = difficultCountingFunction() //вызывается
    const [counter, setCounter] = useState(initValue)

    return <>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
        {counter}
    </>
}