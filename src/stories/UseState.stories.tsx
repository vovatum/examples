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
    const [counter, setCounter] = useState(difficultCountingFunction) //не вызывается

    return <>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
        {counter}
    </>
}