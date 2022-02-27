import React, {useState, useEffect} from 'react'
import WeekDays from './WeekDays'
import MonthDays from './MonthDays'
import CurWeekNav from './CurWeekNav'
import '../../css/Calendar.scss'

export default function LessonsCalendar() {

  const [curDate, setCurDate] = useState('')
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (!isMounted) {
        let date = new Date()

        setCurDate(date.getDate())

        setIsMounted(true)
    }
}, [curDate])

  return (
    <div id='lessons-calendar'>
      <CurWeekNav/>
      <table>
        <thead>
          <WeekDays />
        </thead>
        <tbody>
          <MonthDays curDate={curDate}/>
        </tbody>
      </table>
    </div>
  )
}
