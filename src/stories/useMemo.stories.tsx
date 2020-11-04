import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultCounting = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)
    let factorialA = 1
    let factorialB = 1
    factorialA = useMemo(() => {
        let tempValue = factorialA
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 700000000) {
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

const Users = (props: { users: Array<string> }) => {
    console.log('Users')
    return <div>{
        props.users.map((user, index) =>
            <div key={index}>
                {user}-{index}
            </div>
        )
    }</div>
}
const MemoUsers = React.memo(Users)
export const HelpReactMemo = () => {
    console.log('HelpReactMemo')
    const [counter, setCounter] = useState(-4)
    const [users, setUsers] = useState(['Vova', 'Adil', 'user'])

    const memoizedUsers = useMemo(() => {
        return users.filter(user => user.toLowerCase().indexOf('a') > -1)
    }, [users])
    //фильрация каждый раз создаёт новый объект и реакт реагирует
    //на создание новой ссылки и отрисовывает компоненту заново
    //useMemo защищает от перерисовки
    const addUser = () => setUsers([...users, 'Aa'])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
        {counter}
        <button onClick={addUser}>+user</button>
        <MemoUsers users={memoizedUsers}/>
    </>
}

export const UseCallbackLikeUseState = () => {
    console.log('UseCallbackLikeUseState')
    const [counter, setCounter] = useState(80)
    const [books, setBooks] = useState(['HTML', 'CSS', 'JS'])
    const addBook = () => setBooks([...books, 'Algorithms'])
    return <>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
        {counter}
        <Books addBook={addBook}/>
    </>

}
const Books = (props: { addBook: () => void }) => {
    console.log('Books')
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}
