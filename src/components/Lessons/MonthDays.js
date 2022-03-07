import React, { useState, useEffect } from 'react'

export default function MonthDays(props) {

    const [curDate, setCurDate] = useState(props.curDate)
    const [days, setDays] = useState([])

    useEffect(() => {
        setCurDate(props.curDate)
        getCurWeekDates()
    }, [props.curDate])

    const getCurWeekDates = () => {

        let tempDate = new Date(curDate)
        const daysArr = []

        for (let i = 0; i < 7; i++) {

            if (tempDate.getDay() > i) {
                let prevDay = new Date(tempDate)
                prevDay.setDate(prevDay.getDate() - (tempDate.getDay() - i))
                daysArr.push(prevDay)

            } else if (tempDate.getDay() == i) {

                daysArr.push(tempDate)
            } else {

                let nextDay = new Date(tempDate)
                nextDay.setDate(nextDay.getDate() + (7 - i))
                daysArr.push(nextDay)
            }

        }


        setDays(daysArr)
    }

    function onDateClick(e) {
        console.log('hi')
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
                return <td key={index} onClick={onDateClick}>
                            <p className='nav-date'>
                                {day.getDate()}
                            </p>
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
