import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function UserProfile() {

    const { user } = useAuth0()

    if (user != null) {
        return (
            <div className='settings-div'>
                <h4>פרטי משתמש</h4>
                <img src={user.picture}></img>
                {/* <p>{JSON.stringify(user, null, 2)}</p> */}
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
        )

    } else {
        return (
            <div className='settings-div'>
                <h4>פרטי משתמש</h4>

                משתמש לא מחובר
            </div>
        )
    }
}
