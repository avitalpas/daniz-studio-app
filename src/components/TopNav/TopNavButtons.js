import React from 'react';
import { Link } from 'react-router-dom'

export default function TopNavButtons(props) {
  return (
    <div id='topNavButtons'>

      {/* home */}
      <div className='topNavButtonDiv' data-tooltip='בית'>
        <Link to='/home'><i className="fas fa-home"></i></Link>
      </div>

      {/* lessons */}
      <div className='topNavButtonDiv' data-tooltip='שיעורים'>
        <Link to='/lessons'><i className="fas fa-calendar-week"></i></Link>
      </div>

      {/* student */}
      <div className='topNavButtonDiv' data-tooltip='תלמידים'>
        <Link to='students'><i className="fas fa-user"></i></Link>
      </div>

      {/* music */}
      <div className='topNavButtonDiv' data-tooltip='יצירות'>
        <Link to='musics'><i className="fas fa-music"></i></Link>
      </div>

    </div>
  )
}
