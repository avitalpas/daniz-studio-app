import React from 'react';
import '../../css/Settings.scss'
import UserProfile from './UserProfile';
import Users from './Users';

export default function Settings() {

    return (
        <div id='settings' className='bodyDiv'>
            <h3>הגדרות מערכת</h3>

            <div className="settings-content">
                {/* user profile */}
                <UserProfile />

                <hr/>
                {/* users */}
                <Users />

            </div>
        </div>
    )
}
