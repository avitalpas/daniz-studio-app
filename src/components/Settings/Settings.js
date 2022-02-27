import React from 'react';
import '../../css/Settings.scss'
import UserProfile from './UserProfile';
import Users from './Users';
import CustomFields from './CustomFields';

export default function Settings() {

    return (
        <div id='settings' className='bodyDiv'>
            <h3>הגדרות מערכת</h3>

            {/* user profile */}
            <UserProfile />

            {/* users */}
            <Users />

            {/* custom fields */}
            <CustomFields/>
        </div>
    )
}
