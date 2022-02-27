import React, { useState } from 'react';
import axios from 'axios';

export default function NewUser() {
    const [user, setUser] = useState({
        name:'',
        email:''
    })

    const onUserNameChange = (e) => {
        
        let tempUser = user
        tempUser.name = e.target.value

        setUser(tempUser)
    }

    const onUserMailChange = (e) => {
        let tempUser = user
        tempUser.email = e.target.value

        setUser(tempUser)
    }


    const onUserSubmit = (e) => {
        e.preventDefault()

        console.log('submit new user')
        console.log(user)

        axios.post('http://localhost:5000/users/new', user)
        .then(res => console.log(res.data))

        window.location = '/settings'

        alert('tnx')
    }

    const hideNewUserForm = () => {
        var newUserForm = document.querySelector('#new-user-form')
        newUserForm.style.display = 'none'
    }

    return (
        <form id='new-user-form' onSubmit={onUserSubmit}>

            {/* name */}
            <input type='text' placeholder='שם' onChange={onUserNameChange} />

            {/* email */}
            <input type='text' placeholder='מייל' onChange={onUserMailChange} />


            {/* submit */}
            <button type='submit'>הוסף</button>
            <a href='#' onClick={hideNewUserForm}>X</a>
        </form>)
}
