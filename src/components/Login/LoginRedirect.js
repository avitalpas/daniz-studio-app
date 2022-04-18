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
            <br />
            <br />
            <div className="text" dir='rtl'>
                <h4>🎼 ברוכים הבאים לסטודיו למוזיקה של דני 🎼</h4>
            </div>
            <button onClick={() => loginWithRedirect()}><span>לחץ להתחברות</span></button>
            <img id='bottom-obj' src={BottomObject} />
            <br />
            <a href="https://www.danizstudio.co.il/">בקר באתר הבית</a>
        </div>
    )
}
