
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../../css/Music.scss'
import '../../css/Global.scss'
import Music from './Music';
import MusicFilter from './MusicFilter';

export default function Musics(props) {

  const [musics, setMusics] = useState([])
  const [originMusics, setOriginMusics] = useState([])

  useEffect(() => {
    axios.get( props.HEROKU + '/musics')
      .then(response => {
        setMusics(response.data)
        setOriginMusics(response.data)
      })
      .catch(error => console.log(error))
  },[])

  function musicsList() {
    return musics.map(curMusic => {
      return <Music music={curMusic} deleteMusic={deleteMusic} key={curMusic._id} difficulties={props.difficulties} />
    })
  }

  function deleteMusic(id) {
    axios.delete( props.HEROKU + '/musics/' + id)
      .then(res => console.log(res.data))

    setMusics(musics.filter(el => el._id !== id))
  }

  function onFilterChange(value, field){
    console.log('change filter: ', field, " ", value)

    if(value==''){

      setMusics(originMusics)

    } else {

      let tempArr = originMusics
      tempArr = tempArr.filter(mus => mus[field].toLowerCase().includes(value.toLowerCase()))
  
      setMusics(tempArr)
    }

  }

  return (
    <div id='music' className='bodyDiv'>

      <h3>היצירות שלי</h3>

      <MusicFilter onFilterChange={onFilterChange} difficulties={props.difficulties} musics={musics}/>

      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>פעולות</th>
            {/* <th>ליווי</th> */}
            <th className='hide-mobile-info'>סגנון</th>
            {/* <th>משקל</th> */}
            {/* <th>Tempo</th> */}
            {/* <th>BPM</th> */}
            <th>סולם</th>
            <th className='hide-mobile-info'>נגינה ללא תווים</th>
            <th className='hide-mobile-info'>השלמת מנגינה</th>
            {/* <th>מאסטרינג</th> */}
            {/* <th>נוצר מחדש</th> */}
            <th>מודפס</th>
            <th>רמה</th>
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
