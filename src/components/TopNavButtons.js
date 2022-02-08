import React, { Component } from 'react';
import '../css/TopNavButtons.css'

export default class TopNavButtons extends Component {
  render() {
    return (
      <div id='topNavButtons'>

        {/* lessons */}
        <div className='topNavButtonDiv'>
          <a href='/calendar'><i className="fas fa-calendar-week"></i></a>
          <span className='topNavLabel'>
            <i className="fas fa-caret-up"></i>
            <p>שיעורים</p>
          </span>
        </div>

        {/* student */}
        <div className='topNavButtonDiv'>
          <a href='students'><i className="fas fa-user"></i></a>
          <span className='topNavLabel'>
            <i className="fas fa-caret-up"></i>
            <p>תלמידים</p>
          </span>
        </div>

        {/* music */}
        <div className='topNavButtonDiv'>
          <a href='music'><i className="fas fa-music"></i></a>
          <span className='topNavLabel'>
            <i className="fas fa-caret-up"></i>
            <p>תכנים</p>
          </span>
        </div>
      </div>
    )
  }
}
