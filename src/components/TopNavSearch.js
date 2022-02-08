import React, { Component } from 'react';
import '../css/TopNavSearch.css'

export default class TopNavSearch extends Component {
  render() {
    return (
      <div id='topNavSearch'>

        <div id='topNavSearchDiv'>
          <input placeholder='חיפוש'></input>
          <a><i className="fas fa-search"></i></a>
        </div>

      </div>
    )
  }
}
