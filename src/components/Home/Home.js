  import React, { useEffect, useState } from 'react'
  import '../../css/Global.scss'
  import '../../css/Home.scss'
  import axios from 'axios';

  export default function Home() {

    const [students, setStudents] = useState([])
    const [lessons, setLessons] = useState([])
    const [musics, setMusics] = useState([])
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
      if (!isMounted) {
        // students
        axios.get('http://localhost:5000/students')
          .then(response => {
            

            response.data.sort((a, b) => {
              let fa = a.name
              let fb = b.name

              if (fa < fb) return -1
              if (fa > fb) return 1
              else return 0
            })

            setStudents(response.data)
          })
          .catch(error => console.log(error))

        // lessons
        axios.get('http://localhost:5000/lessons')
          .then(response => {
            // sort by date and time
            const sortedLessons = sortLessons(response.data)
            console.log(sortedLessons)
            setLessons(response.data)
          })
          .catch(error => console.log(error))

        // musics
        axios.get('http://localhost:5000/musics')
          .then(response => {

            setMusics(response.data)
          })
          .catch(error => console.log(error))

        setIsMounted(true)
      }

    })

    // sort lessons by date
    function sortLessons(lessonsList){
      
      // lessonsList.map(lesson => console.log( lessons.date.get getDateTimeFormat(lesson.date)))
    }

    // get lesson time format for display
    function getDateTimeFormat(date) {

      let curDate = new Date(date)
      let formatedDate = curDate.getDate() + '/' + (curDate.getMonth() + 1) + '/' + curDate.getFullYear()
      let formatedMinutes = curDate.getMinutes()
      if (formatedMinutes.toString().length < 2) formatedMinutes += '0'
      let weekDayName = curDate.toLocaleDateString('he-IL', { weekday: 'short' })
      let formatedTime = curDate.toLocaleString('he-IL', { hour: 'numeric', hour12: false }) + ':' + formatedMinutes

      // return formatedDate + ' ' + weekDayName + ' ' + formatedTime
      return formatedTime
    }

    // checks if current lessons is today
    function isLessonToday(date){
      let lessonDate = new Date(date)
      let today = new Date()

      if((today.getFullYear() ==  lessonDate.getFullYear()) && (today.getMonth() ==  lessonDate.getMonth()) && (today.getDate() == lessonDate.getDate()) ) return true
      else return false
    }

    // returns today's lessons list
    function todaysLessonsList() {
      return lessons.map((lesson, key) => {

        let studentName = students.find(student => student._id == lesson.studentID).name

        if(isLessonToday(lesson.date)){
          return (
            <div className='lesson-div' key={key}>
              <p className='lesson-time'>{getDateTimeFormat(lesson.date)}</p>
  
              <div className="lesson-details">
                <h6>{studentName}</h6>
                <p>{lesson.description}</p>

              </div>
            </div>
          )
        }
      });
    }

    return (
      <div className='bodyDiv'>
        <h3>בית</h3>

        {/* total row */}
        <div className="home-total">

          <h5>פעילות עד היום</h5>

          <div className="total-row">

            {/* total students */}
            <div className="total-div">
              <p>סה"כ תלמידים</p>
              <p className='amount'>{students.length}</p>
            </div>

            {/* total lessons */}
            <div className="total-div">
              <p>סה"כ שיעורים</p>
              <p className='amount'>{lessons.length}</p>
            </div>

            {/* total musics */}
            <div className="total-div">
              <p>סה"כ יצירות</p>
              <p className='amount'>{musics.length}</p>
            </div>

          </div>


        </div>

        {/* today's lessons */}
        <div className="today-lessons">
          <h5>רשימת השיעורים שלך להיום</h5>

          <div className="lessons-list">
            {todaysLessonsList()}

          </div>
        </div>
      </div>
    )
  }
