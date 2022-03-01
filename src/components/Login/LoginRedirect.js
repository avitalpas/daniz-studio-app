import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import NavbarLogo from '../../img/logo/Navbar logo.png'
import LogoTrans from '../../img/logo/logo-trans.png'
import BottomObject from '../../img/bottom object.png'
import '../../css/Login.scss'

export default function LoginRedirect() {
    const { loginWithRedirect } = useAuth0()

    return (
        <div id='login-page'>
            <img id='side-logo' src={NavbarLogo} />
            <img id='main-logo' src={LogoTrans} />
            <div className="text">
                <h4>משתמש אינו מחובר או שאינו זוהה במערכת</h4>
                <h4>לחץ על הכפתור מטה למעבר לעמוד ההתחברות</h4>
            </div>
            <button onClick={() => loginWithRedirect()}><span>התחברות</span></button>
            <img id='bottom-obj' src={BottomObject} />
        </div>
    )
}
