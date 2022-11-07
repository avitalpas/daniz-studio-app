import React, { Component } from 'react';
import '../../css/TopNav.scss'
import TopNavLogo from './TopNavLogo'
import TopNavButtons from './TopNavButtons'
import TopNavAccountButtons from './TopNavAccountButtons'


export default function TopNav (props) {
  return (
    <div id='topNav'>

      <TopNavLogo HEROKU={props.HEROKU}/>
      <TopNavButtons HEROKU={props.HEROKU} />
      <TopNavAccountButtons HEROKU={props.HEROKU} />

    </div>
  )
}
