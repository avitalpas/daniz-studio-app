import React, { Component } from 'react';
import '../css/TopNavButtons.css'
import { Link } from 'react-router-dom'

export default class TopNavButtons extends Component {
  render() {
    return (
      <div id='topNavButtons'>

        {/* lessons */}
        <div className='topNavButtonDiv'>
          <Link to='/lessons'><i className="fas fa-calendar-week"></i></Link>
          <span className='topNavLabel'>
            <i className="fas fa-caret-up"></i>
            <p>שיעורים</p>
          </span>
        </div>

        {/* student */}
        <div className='topNavButtonDiv'>
          <Link to='students'><i className="fas fa-user"></i></Link>
          <span className='topNavLabel'>
            <i className="fas fa-caret-up"></i>
            <p>תלמידים</p>
          </span>
        </div>

        {/* music */}
        <div className='topNavButtonDiv'>
          <Link to='music'><i className="fas fa-music"></i></Link>
          <span className='topNavLabel'>
            <i className="fas fa-caret-up"></i>
            <p>תכנים</p>
          </span>
        </div>
      </div>
    )
  }
}
