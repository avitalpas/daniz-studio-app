
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../../css/Music.scss'
import '../../css/Global.scss'
import Music from './Music';

export default function Musics() {

  const [musics, setMusics] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:5000/musics')
      .then(response => {
        setMusics(response.data)
      })
      .catch(error => console.log(error))
  })

  function musicsList() {
    return musics.map(curMusic => {
      return <Music music={curMusic} deleteMusic={deleteMusic} key={curMusic._id} />
    })
  }

  function deleteMusic(id) {
    axios.delete('http://localhost:5000/musics/' + id)
      .then(res => console.log(res.data))

    setMusics(musics.filter(el => el._id !== id))
  }


  return (
    <div id='music' className='bodyDiv'>

      <h3>היצירות שלי</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>פעולות</th>
            <th>תווים</th>
            <th>רמת קושי</th>
            <th>יוצר</th>
            <th>שם</th>
          </tr>
        </thead>
        <tbody>
          {musicsList()}
        </tbody>
      </table>
    </div>
  )
}
