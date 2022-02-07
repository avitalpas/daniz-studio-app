import React, { Component } from 'react';
import '../css/TopNavButtons.css'

export default class TopNavButtons extends Component {
  render() {
    return (
      <div id='topNavButtons'>

        {/* lessons */}
        <div class='topNavButtonDiv'>
          <a href='/calendar'><i class="fas fa-calendar-week"></i></a>
          <span class='topNavLabel'>
            <i class="fas fa-caret-up"></i>
            <p>שיעורים</p>
          </span>
        </div>

        {/* student */}
        <div class='topNavButtonDiv'>
          <a href='students'><i class="fas fa-user"></i></a>
          <span class='topNavLabel'>
            <i class="fas fa-caret-up"></i>
            <p>תלמידים</p>
          </span>
        </div>

        {/* music */}
        <div class='topNavButtonDiv'>
          <a href='music'><i class="fas fa-music"></i></a>
          <span class='topNavLabel'>
            <i class="fas fa-caret-up"></i>
            <p>תכנים</p>
          </span>
        </div>
      </div>
    )
  }
}
