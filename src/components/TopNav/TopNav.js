import React, { Component } from 'react';
import '../../css/TopNav.scss'
import TopNavLogo from './TopNavLogo'
import TopNavButtons from './TopNavButtons'
import TopNavAccountButtons from './TopNavAccountButtons'


export default class TopNav extends Component {
  render() {
    return (
      <div id='topNav'>

        <TopNavLogo />
        <TopNavButtons />
        <TopNavAccountButtons />

      </div>
    )
  }
}
