import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const Example1 = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)
    let factorialA = 1
    let factorialB = 1
    factorialA = useMemo(() => {
        let tempValue = factorialA
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 700000000)  {
                fake++
            }
            tempValue *= i
        }
        return tempValue
    }, [a])

    for (let i = 1; i <= b; i++) {
        factorialB *= i
    }
    return <>
        <input value={a} onChange={(event) =>
            setA(+event.currentTarget.value)}/>
        <span>FactorialA ={factorialA}</span>
        <div>
            <input value={b} onChange={(event) =>
                setB(+event.currentTarget.value)}/>
            <span>FactorialB ={factorialB}</span>
        </div>
    </>
}