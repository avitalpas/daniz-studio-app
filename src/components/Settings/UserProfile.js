import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function UserProfile() {

    const { user } = useAuth0()
    const { logout } = useAuth0()

    if (user != null) {
        return (
            <div className='settings-div'>
                <div className="settings-header">
                    <h4>פרטי משתמש</h4>
                    <a id='logout' href='#' onClick={() => logout()}>התנתק</a>
                </div>

                {/* loggen in user details */}
                <div className="logged-user">
                    <img src={user.picture}></img>

                    <div className="logged-user-details">
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                </div>
            </div>
        )

    }
}
