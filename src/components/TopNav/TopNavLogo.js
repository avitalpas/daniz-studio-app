import React, { Component } from 'react';
import NavbarLogo from '../../img/logo/Navbar logo.png'

export default class TopNavLogo extends Component {
  render() {
    return (
        <div id='topNavLogo'>
            <img src={NavbarLogo}></img>
        </div>
    )
  }
}
