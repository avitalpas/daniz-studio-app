import React, { Component } from 'react';
import '../css/NewItem.css'

export default class NewItem extends Component {
  render() {
    return (
        <div id='newItem'>
            <a>
                <i class="fas fa-plus"></i>
            </a>
        </div>
    )
  }
}
