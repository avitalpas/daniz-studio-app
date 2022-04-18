import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/Global.scss'
import '../../css/Calendar.scss'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import FullCalendar from '@fullcalendar/react'
import timegrid from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction"
import bootstrap5Plugin from '@fullcalendar/bootstrap5';

export default function Lessons() {
  const currentDate = new Date()

  const [lessons, setLessons] = useState([])
  const [students, setStudents] = useState([])
  const [isMounted, setIsMounted] = useState(false)

  const [events, setEvents] = useState([
    {
      id: 'a',
      title: 'my event',
      start: '2022-04-18T10:30:00',
      extendedProps: {
        description: 'Lecture'
      }
    }
  ])

  // get lessons list - full students data
  useEffect(() => {

    if (!isMounted) {

      axios.get('http://localhost:5000/students')
        .then(response => {

          setStudents(response.data)
          let tempStudents = response.data

          axios.get('http://localhost:5000/lessons')
            .then(response => {

              let tempEvents = []
              
              response.data.forEach(lesson => {

                let student = tempStudents.find(student => student._id == lesson.studentID)
                let count = 0
                while(student == undefined && count <5){
                  student = tempStudents.find(student => student._id == lesson.studentID)
                  count++
                }

                console.log(student)

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
            })
            .catch(error => console.log(error))

        })
        .catch(error => console.log(error))





      setIsMounted(true)
    }

  })

  const headerToolbar = {
    left: 'prev,next today',
    center: 'title',
    right: 'timeGridWeek,timeGridDay',
  }

  const buttonText = {
    today: 'היום',
    week: 'שבוע',
    day: 'יום'
  }

  const options = {
    selectable: true,
    selectMirror: true,
    unselectAuto: true
  }

  const handleDateClick = (info) => {
    console.log(info)
  }

  const handleSelect = (selectionInfo) => {
    console.log(selectionInfo)
  }

  return (
    <div id='calendar' className='bodyDiv'>
      <h3>רשימת השיעורים שלי</h3>
      <div id='cal-div'>
        <FullCalendar
          plugins={[timegrid, interactionPlugin, bootstrap5Plugin ]}
          height='500px'
          themeSystem= 'bootstrap5'
          initialView="timeGridWeek"
          events={events}
          headerToolbar={headerToolbar}
          buttonText={buttonText}
          dateClick={handleDateClick}
          select={handleSelect}
          selectable={options}
          selectMirror={options}
          unselectAuto={options}
        />
      </div>
    </div>
  )
}
