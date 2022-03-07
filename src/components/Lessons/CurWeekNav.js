import React, { useState, useEffect } from 'react'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import '../../css/CurWeekNav.scss'

export default function CurWeekNav(props) {

  const [curDate, setCurDate] = useState(props.curDate)
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [monthName, setMonthName] = useState('')
  const monthNames = [
    'ינואר',
    'פברואר',
    'מרץ',
    'אפריל',
    'מאי',
    'יוני',
    'יולי',
    'ספטמבר',
    'אוקטובר',
    'נוברמבר',
    'דצמבר'
  ]

  useEffect(() => {
    setCurDate(props.curDate)
    setFirst(getWeekFirstDate())
    setLast(getLastDate())
    setMonthName(getMonthName())

  }, [props.curDate])

  function getMonthName() {

    let tempDate = new Date(curDate)
    return monthNames[tempDate.getMonth()]

  }

  function getWeekFirstDate() {
    let tempDate = new Date(curDate)
    let first = ''

    if (tempDate.getDate() - tempDate.getDay() >= 1) {
      first = tempDate.getDate() - tempDate.getDay()

    } else {

      let lastSundayDate = new Date(lastSunday(tempDate.getFullYear(), tempDate.getMonth()))
      first = lastSundayDate.getDate()

    }

    return first

  }

  function getLastDate() {
    let tempDate = new Date(curDate)
    let last = ''
    let curMonthLastDate = new Date(tempDate.getFullYear(), tempDate.getMonth() + 1, 0)

    if (tempDate.getDate() + (6 - tempDate.getDay()) <= curMonthLastDate.getDate()) {
      last = tempDate.getDate() + (6 - tempDate.getDay())
    } else {
      last = 6 - tempDate.getDay()
    }

    return last
  }


  function lastSunday(year, month) {
    var date = new Date(year, month, 1, 12);
    let weekday = date.getDay();
    let dayDiff = weekday === 0 ? 7 : weekday;
    let lastSunday = date.setDate(date.getDate() - dayDiff);
    return lastSunday
  }


  return (
    <div id='week-navigation'>
      <button onClick={props.prevWeek}>{'<'}</button>
      <p>{monthName + ' '}{last}-{first}</p>
      <button onClick={props.nextWeek}>{'>'}</button>
    </div>
  )
}
