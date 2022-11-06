import React, { useEffect, useState } from 'react'
import '../../css/Global.scss'
import '../../css/Home.scss'
import axios from 'axios';
import Total from './Total';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import FullCalendar from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list';

export default function Home(props) {

  const [students, setStudents] = useState([])
  const [lessons, setLessons] = useState([])
  const [events, setEvents] = useState([])
  const [musics, setMusics] = useState([])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (!isMounted) {

      // students
      axios.get( props.HEROKU + '/students')
        .then(response => {

          response.data.sort((a, b) => { // sort students ( will be moved to saparete function)
            let fa = a.name
            let fb = b.name

            if (fa < fb) return -1
            if (fa > fb) return 1
            else return 0
          })

          setStudents(response.data)
          let tempStudents = response.data // will be used for lessons

          // lessons
          axios.get( props.HEROKU + '/lessons')
            .then(response => {
              let tempEvents = []
              response.data.forEach(lesson => {

                let student = tempStudents.find(student => student._id == lesson.studentID)
                let count = 0
                while (student == undefined && count < 5) {
                  student = tempStudents.find(student => student._id == lesson.studentID)
                  count++
                }

                let event = {
                  id: lesson._id,
                  title: student.name,
                  start: lesson.date,
                  extendedProps: {
                    description: lesson.description
                  }
                }

                tempEvents.push(event)
              })

              setEvents(tempEvents)
              setLessons(response.data)

            })
            .catch(error => console.log(error))
        })
        .catch(error => console.log(error))



      // musics
      axios.get( props.HEROKU + '/musics')
        .then(response => {

          setMusics(response.data)
        })
        .catch(error => console.log(error))

      setIsMounted(true)
    }

  })

  // full calendar header toolbar options - empty
  const headerToolbar = {
    start: '',
    center: '',
    end: ''
  }

  // full calendar global options
  const options = {
    listDaySideFormat: true
  }

  return (
    <div className='bodyDiv'>
      <h3>בית</h3>

      {/* total row */}
      <Total students={students} lessons={lessons} musics={musics}/>

      {/* today's lessons */}
      <div className="today-lessons">
        <h5>:השיעורים שלך להיום</h5>

        <div className="lessons-list">
          <FullCalendar
            plugins={[listPlugin]}
            initialView='listDay'
            height='300px'
            events={events}
            headerToolbar={headerToolbar}
            listDaySideFormat={options}
          />
        </div>
      </div>
    </div>
  )
}
