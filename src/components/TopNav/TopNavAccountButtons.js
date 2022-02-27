import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

export default function TopNavAccountButtons() {
  const { isAuthenticated } = useAuth0()
  const { logout } = useAuth0()
  const { loginWithRedirect } = useAuth0()
  const { user } = useAuth0()
  const [isMounted, setIsMounted] = useState(false)
  const [isValidUser, setIsValidUser] = useState(false)

  useEffect(() => {
    if (!isMounted) {
      axios.get('http://localhost:5000/users')
        .then(response => {
          if (response.data.find(el => el.email == user.email) != undefined) {
            setIsValidUser(true)
          } else {
            setIsValidUser(false)
            alert('משתמש לא קיים!')
            logout()
            loginWithRedirect()
          }

          setIsMounted(true)
        })
        .catch(error => console.log(error))
    }
  })

  const showUserMenu = () => {
    if( isAuthenticated ) {
      return (
        <div id='user-menu'>
          <img src={user.picture} />

          {/* dropdown menu */}
          <div id='account-menu'>
            <a href='/settings'>פרטי חשבון</a>
            <a href='/settings'>הגדרות מערכת</a>
            <a href='#' onClick={() => logout()}>התנתק</a>
          </div>
        </div>
      )
    } else {
      return (
        <button onClick={() => loginWithRedirect()}>התחבר</button>
      )

    }
  }

  return (
    <div id='top-nav-acc-btns'>

      {/* authentication button */}
      {showUserMenu()}

    </div>
  )
}