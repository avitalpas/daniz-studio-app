import React, { Component } from 'react';
import '../css/TopNavButtons.scss'
import { Link } from 'react-router-dom'


export default class TopNavButtons extends Component {


  render() {
    return (
      <div id='topNavButtons'>


        {/* lessons */}
        <div className='topNavButtonDiv' data-tooltip='שיעורים'>
          <Link to='/lessons'><i className="fas fa-calendar-week"></i></Link>
        </div>

        {/* student */}
        <div className='topNavButtonDiv'  data-tooltip='תלמידים'>
          <Link to='students'><i className="fas fa-user"></i></Link>
        </div>

        {/* music */}
        <div className='topNavButtonDiv' data-tooltip='יצירות'>
          <Link to='musics'><i className="fas fa-music"></i></Link>
        </div>

      </div>
    )
  }
}
