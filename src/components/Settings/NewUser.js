import React, { useState } from 'react';
import axios from 'axios';

export default function NewUser(props) {

    // local user
    const [user, setUser] = useState({
        name:'',
        email:''
    })

    // change local user name on form name change
    function onUserNameChange(e){
        
        let tempUser = user
        tempUser.name = e.target.value

        setUser(tempUser)
    }

    // change local user mail on form name change
    function onUserMailChange(e){
        let tempUser = user
        tempUser.email = e.target.value

        setUser(tempUser)
    }

    // handel user submit
    function onUserSubmit(e){
        e.preventDefault()

        axios.post(props.HEROKU + '/users/new', user)
        .then(res => console.log(res.data))

        window.location = '/settings'
    }

    // hide new user form on exit
    function hideNewUserForm(){
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
