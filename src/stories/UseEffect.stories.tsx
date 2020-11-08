import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect'
}

export const Example1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState(23)

    useEffect(() => {
        debugger
        console.log('useEffect')
        document.title = counter.toString()
    })

    return <>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
        {counter}
    </>
}