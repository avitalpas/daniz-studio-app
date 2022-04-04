import React, { useState, useEffect } from 'react'
import WeekDays from './WeekDays'
import MonthDays from './MonthDays'
import CurWeekNav from './CurWeekNav'
import DayLessons from './DayLessons'
import '../../css/Calendar.scss'

export default function LessonsCalendar(props) {

  const [curDate, setCurDate] = useState(new Date())
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true)
    }
  })

  function nextWeek() {
    let nextWeekDate = new Date(curDate)
    nextWeekDate.setDate(nextWeekDate.getDate() + 7)
    setCurDate(nextWeekDate)
    console.log(curDate.toString())
  }

  function prevWeek() {
    let prevWeekDate = new Date(curDate)
    prevWeekDate.setDate(prevWeekDate.getDate() - 7)
    setCurDate(prevWeekDate)
    console.log(curDate.toString())
  }

  async function setMainCurDate(newDate){
    console.log(newDate)
    let tempDate = new Date(newDate)

    if( tempDate == curDate ){
      console.log(curDate)
    } else {
      setCurDate(tempDate)
      console.log(curDate)
    }
  }

  return (
    <div id='lessons-calendar'>

      <div className="week-navigation">
        <CurWeekNav curDate={curDate.toString()} nextWeek={nextWeek} prevWeek={prevWeek}/>
        <table>
          <thead>
            <WeekDays/>
          </thead>
          <tbody>
            <MonthDays curDate={curDate} setMainCurDate={setMainCurDate}/>
          </tbody>
        </table>

      </div>

      <DayLessons curDate={curDate} lessons={props.lessons} students={props.students}/>
    </div>
  )
}
