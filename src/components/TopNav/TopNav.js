import React, { Component } from 'react';
import '../../css/TopNav.scss'
import TopNavLogo from './TopNavLogo'
import TopNavButtons from './TopNavButtons'
// import TopNavSearch from '../TopNavSearch'
import TopNavAccountButtons from './TopNavAccountButtons'


export default class TopNav extends Component {
  render() {
    return (
      <div id='topNav'>        

          <TopNavLogo/>
          <TopNavButtons/>
          {/* <TopNavSearch/> */}
          <TopNavAccountButtons/>

      </div>
    )
  }
}
