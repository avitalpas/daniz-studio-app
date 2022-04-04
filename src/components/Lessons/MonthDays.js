import React, { useState, useEffect } from 'react'

export default function MonthDays(props) {

    const [curDate, setMonthCurDate] = useState(props.curDate)
    const [days, setDays] = useState([])

    useEffect(() => {
        setMonthCurDate(props.curDate)
        getCurWeekDates()
    }, [props.curDate])

    const getCurWeekDates = () => {

        let tempDate = new Date(curDate)
        const daysArr = []

        for (let i = 0; i < 7; i++) {

            let first = tempDate.getDate() - tempDate.getDay() + i
            let day = new Date(tempDate.setDate(first))
            daysArr.push(day)
        }

        setDays(daysArr)
    }

    function onDateClick(e) {
        let newDate = new Date(e.target.value)
        props.setMainCurDate(newDate)
    }

    function getDates() {
        return days.map((day, index) => {
            if ( curDate.getDate() == day.getDate() ) {
                return <td key={index}  onClick={onDateClick}>
                            <p className='nav-date active-date'>
                                {day.getDate()}
                            </p>
                        </td>
            } else {
                return <td key={index}>
                            <button className='nav-date' onClick={onDateClick} value={day}>
                                {day.getDate()}
                            </button>
                        </td>

            }
        })

    }

    return (
        <tr id='lesson-month-days'>
            {getDates()}
        </tr>
    )
}
