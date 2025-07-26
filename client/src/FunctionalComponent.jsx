import axios from 'axios';
import React, { useEffect, useState } from 'react'


const User = ({ id, name, username, email }) => {
    return <div style={{ border: '1px solid' }}>
        <div>{id}</div>
        <div>{name}</div>
        <div>{username}</div>
        <div>{email}</div>
    </div>
}

const FunctionalComponent = ({ name: nameProp }) => {
    const [count, setCount] = useState(0);
    const [userId, setUserId] = useState(1);
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    console.log('Render');

    const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        // behaves like componentWillMount
        (async () => {
            const { data } = await axios.get(BASE_URL);
            setUsers(data);
            console.log("🚀 ~ useEffect ~ data:", data)
        })();

        return () => {
            // behaves like componentWillUnmount
            console.log('Component being removed or unmounted')
        }
    },[]);

    useEffect(() => {
        // behaves like componentDidUpdate
        console.log("🚀 ~ useEffect ~ useEffect: count ", count);
    }, [count]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`${BASE_URL}/${userId}`);
            setUser(data);
            console.log("🚀 ~ useEffect ~ data:", data)
        })();
    }, [userId])

    const onClickHandler = () => {
        // this.setState({ count: this.state.count + 1 })
        setCount(count + 1);
    }
    return (
        <>
            <h1>Welcome - {nameProp}</h1>
            <h2>Count - {count}</h2>
            <button onClick={onClickHandler}>Click me</button>

            <h2>ID - {userId}</h2>

            <input type="number" min={1} max={10} placeholder='User ID' onChange={(e) => { setUserId(e.target.value) }} />
            <h3>User details are - </h3>
            <User {...user} />
            {/* <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div> */}

            <h3>all user details</h3>
            {/* {users.map(({ id, name, username, email }) => <div style={{ border: '1px solid' }}>
                <div>{id}</div>
                <div>{name}</div>
                <div>{username}</div>
                <div>{email}</div>
            </div>)} */}

            {users.map((userDetails) => <User key={userDetails.id} {...userDetails} />)}
            <button onClick={()=>{
                const usersCopy = [...users];
                usersCopy.splice(0,1);
                setUsers(usersCopy)
            }}> Update Users Array</button>
        </>
    )
}

export default FunctionalComponent
