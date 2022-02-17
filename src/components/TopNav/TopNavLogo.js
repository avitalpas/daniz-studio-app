import React, { Component } from 'react';
import favicon from '../img/logo/favicon.png'

export default class TopNavLogo extends Component {
  render() {
    return (
        <div id='topNavLogo'>
            <img src={favicon}></img>
        </div>
    )
  }
}
