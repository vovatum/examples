import React, {useState} from "react";

export default {
    title: 'React.memo'
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>
        {props.count}
    </div>
}
const UsersSecret = (props: { users: Array<string> }) => {
    console.log('USERS')
    return <div>{
        props.users.map((user, index) =>
            <div key={index}>
                {user}-{index}
            </div>
        )
    }</div>
}
const Users = React.memo(UsersSecret)

export const Example1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState(-4)
    const [users, setUsers] = useState(['user', 'user', 'user'])
    const addUser = () => {
        // users.push('user') //добавляет user, но не отображает, так нарушено правило инмьютабельности
        // setUsers(users)
        const newUsers = [...users, 'user']
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
        <button onClick={addUser}>+user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}