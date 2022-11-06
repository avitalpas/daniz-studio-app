import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import '../../css/Global.scss'
import '../../css/StudentDetails.scss'
import NavButtons from './NavButtons';
import StudentDetailsActions from './StudentDetailsActions';
import StudentHeader from './StudentHeader';

export default function StudentDetails(props) {

  const [student, setStudent] = useState({})
  const [lessons, setLessons] = useState([])
  const [musics, setMusics] = useState([])
  const { id } = useParams()

  useEffect(() => {

    // get current student by id 
    axios.get(props.HEROKU + '/students/' + id)
      .then(response => {
        setStudent(response.data)
      })
      .catch(error => console.log(error))

    // get all student lessons
    axios.get('http://localhost:5000/lessons/student/' + id)
      .then(response => {
        setLessons(response.data)
      })
      .catch(error => console.log(error))

    // get all musics
    axios.get(props.HEROKU + '/musics')
      .then(response => {
        setMusics(response.data)
      })
      .catch(error => console.log(error))
  }, [])

  // print all student lessons
  function getStudentLessons() {

    return lessons.map((lesson, index) => {
      let date = new Date(lesson.date)
      let formatteDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes()

      let music = musics.find(music => music._id == lesson.musicID)
      let musicName = 'חסרה יצירה'
      if (music != undefined) {
        musicName = music.name
      }

      return (
        <div key={lesson._id} className='lesson-div'>
          <p>{musicName}</p>
          <p>{formatteDate}</p>
          <a href={'/lessons/details/'+lesson._id} className='index'>{index + 1}</a>
        </div>
      )
    })
  }


  return (

    <div id='student-details' className='bodyDiv'>

      <NavButtons from='students' />

      <h3>פרטי תלמיד</h3>

      {/* name */}
      <StudentHeader student={student} />

      {/* actions */}
      <StudentDetailsActions student={student} />

      {/* lessons */}
      <div id='lessons'>
        <h4>היסטוריית שיעורים</h4>

        <div id='lessons-list'>
          {getStudentLessons()}
        </div>
      </div>

    </div>
  )
}
