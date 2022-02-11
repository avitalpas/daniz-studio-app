import React, { Component } from 'react';
import '../css/NewItems.scss'
import { Link } from 'react-router-dom'

export default class NewItem extends Component {
  constructor(props) {
    super(props)

    this.newBtnClick = this.newBtnClick.bind(this)
  }

  newBtnClick() {
    var elements = document.querySelectorAll('.newLink')
    elements.forEach( el => {
      if( el.style.opacity == 0 ) {
        el.style.opacity = 1
      }else {
        el.style.opacity = 0
      }
    })
  }

  render() {
    return (
      <div id='newItems'>

        <div className='newItemBtn'>

          {/* new music */}
          <Link to='/musics/new' className='newLink'>
            <i class="fas fa-music"></i>
            <span>יצירה</span>
          </Link> 
          
          {/* new student */}
          <Link to='/students/new' className='newLink'>
            <i class="fas fa-user-graduate"></i>
            <span>תלמיד חדש</span>
          </Link> 
          
          {/* new lesson */}
          <Link to='/lessons/new' className='newLink'>
            <i class="fas fa-play"></i>
            <span>שיעור חדש</span>
          </Link> 
          
          {/* main new button */}
          <button onClick={this.newBtnClick}>
            <i class="fas fa-plus newIcon"></i>
          </button>

        </div>

      </div>
    )
  }
}
