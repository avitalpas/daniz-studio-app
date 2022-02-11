
// import link for router
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


// import axios for server requests
import axios from 'axios'

// import stylesheets
import '../css/Music.css'
import '../css/Global.scss'

// music component
const Music = props => (
  <tr>

    {/* music name */}
    <td>{props.music.name}</td>

    {/* music actions */}
    <td>

      {/* edit music */}
      <div className="actionLink">
        <Link to={'/musics/edit/' + props.music._id} title='עריכת תלמיד'>
          <i class="far fa-edit"></i>
        </Link>
      </div>

      {/* delete music */}
      <div className="actionLink delIcon">
        <a href='#' onClick={() => { props.deleteMusic(props.music._id) }} title='מחיקת תלמיד'>
          <i class="fas fa-trash del-icon"></i>
        </a>
      </div>
    </td>
  </tr>
)

export default class Musics extends Component {
  constructor(props) {
    super(props)

    // bond this to functions
    this.deleteMusic = this.deleteMusic.bind(this)

    this.state = {
      musics: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/musics')
      .then(response => {
        this.setState({ musics: response.data })
      })
      .catch(error => console.log(error))
  }

  musicsList() {
    return this.state.musics.map(curMusic => {
      return <Music music={curMusic} deleteMusic={this.deleteMusic} key={curMusic._id} />
    })
  }

  deleteMusic(id) {
    axios.delete('http://localhost:5000/musics/' + id)
      .then(res => console.log(res.data))

    this.setState({
      musics: this.state.musics.filter(el => el._id !== id)
    })
  }


  render() {
    return (
      <div id='music' className='bodyDiv'>

        <h3>היצירות שלי</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>שם</th>
            </tr>
          </thead>
          <tbody>
            {this.musicsList()}
          </tbody>
        </table>
      </div>
    )
  }
}
