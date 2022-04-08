import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewUser from './NewUser';
import SettingsHeader from './SettingsHeader';
import '../../css/Settings.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap'

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
                <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr>
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
            <Table hover size='sm'>
                <thead>
                    <th>תיאור</th>
                    <th>מייל</th>
                </thead>
                <tbody>
                    {usersList()}
                </tbody>
            </Table>

            {/* new user */}
            <NewUser />
        </div>
    )
}
