import React, { Component } from 'react';
import '../css/NewItems.css'
import { Link } from 'react-router-dom'

export default class NewItem extends Component {
  render() {
    return (
      <div id='newItems'>

        <span>
          <Link to='/lessons/new' className='newItemLink'>
            <i className="fas fa-plus"></i>
            <span>שיעור</span>
          </Link>

        </span>

        <span>
          <Link to='/students/new' className='newItemLink'>
            <i className="fas fa-plus"></i>
            <span>תלמיד</span>
          </Link>
        </span>



      </div>
    )
  }
}
