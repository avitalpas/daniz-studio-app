import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../Login/LoginButton';
import LogoutButton from '../Login/LogoutButton';
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
        </div>
      )
    } else {
      return 'hi'

    }
  }

  return (
    <div id='top-nav-acc-btns'>

      {/* settings button */}
      <a href="/settings">
        <i className="fas fa-cog"></i>
      </a>

      {/* authentication button */}
      {showUserMenu()}
    </div>
  )
}