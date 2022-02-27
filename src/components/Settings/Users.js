import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewUser from './NewUser';
import SettingsHeader from './SettingsHeader';

export default function Users() {

    const [users, setUsers] = useState([])
    const [isMounted, setIsMounted] = useState(false)


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

    function usersList(){

        return users.map(user => {
            return (
                <div>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            )
        })
    }

    function showNewUserForm(){
        var newUserForm = document.querySelector('#new-user-form')
        newUserForm.style.display = 'inline'
    } 


    return (
        <div id='users' className='settings-div'>

            <SettingsHeader header='משתמשי מערכת' addNew={showNewUserForm}/>

            {/* users list */}
            {usersList()}

            {/* new user */}
            <NewUser />
        </div>
    )
}
