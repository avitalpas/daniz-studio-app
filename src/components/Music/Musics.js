
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../../css/Music.scss'
import '../../css/Global.scss'
import Music from './Music';

export default function Musics(props) {

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
      return <Music music={curMusic} deleteMusic={deleteMusic} key={curMusic._id} difficulties={props.difficulties}/>
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
            <th>ליווי</th>
            <th>זאנר</th>
            <th>משקל</th>
            <th>Tempo</th>
            <th>BPM</th>
            <th>סולם</th>
            <th>נגינה ללא תווים</th>
            <th>השלמת מנגינה</th>
            <th>מאסטרינג</th>
            <th>נוצר מחדש</th>
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
