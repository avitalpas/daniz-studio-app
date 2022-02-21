import { set } from 'mongoose';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Users() {

    const [users, setUsers] = useState([])
    const [isMounted, setIsMounted] = useState(false)
    const [user, setUser] = useState({
        name:'',
        email:''
    })

    useEffect(() => {
        if (!isMounted) {
            axios.get('http://localhost:5000/users')
                .then(response => {
                    setUsers(response.data)
                    setIsMounted(true)
                })
                .catch(error => console.log(error))
        }
    })

    const onUserNameChange = (e) => {
        
        var tempUser = user
        tempUser.name = e.target.value

        setUser(tempUser)
    }

    const onUserMailChange = (e) => {
        var tempUser = user
        tempUser.email = e.target.value

        setUser(tempUser)
    }

    const usersList = () => {
        
        return users.map(user => {
            return (
                <div>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            )
        })
    }

    const onUserSubmit = (e) => {
        e.preventDefault()

        console.log('submit new user')
        console.log(user)

        axios.post('http://localhost:5000/users/new', user)
        .then(res => console.log(res.data))

        // window.location = '/settings'

        alert('tnx')
    }

    return (
        <div id='users' className='settings-div'>
            <h4>משתמשי מערכת</h4>

            {/* users list */}
            {usersList()}

            {/* new user */}
            <form id='new-user-form' onSubmit={onUserSubmit}>

                {/* name */}
                <input type='text' placeholder='שם' onChange={onUserNameChange} />

                {/* email */}
                <input type='text' placeholder='מייל' onChange={onUserMailChange} />


                {/* submit */}
                <button type='submit'>הוסף</button>
            </form>

        </div>
    )
}
