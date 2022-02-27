import React, { useState, useEffect } from 'react'

export default function MonthDays(props) {

    const [days, setDays] = useState([])
    const [curDate, setCurDate] = useState('')
    const [isMounted, setIsMounted] = useState(false)
    
    useEffect(() => {
        console.log(props.curDate)
        setCurDate(props.curDate)
        console.log(Date.parse(props.curDate))
        // getCurWeekDates()
        if (!isMounted) {


            setIsMounted(true)
        }
    })

    const getCurWeekDates = (date) => {

        console.log(date)
        const daysArr = []

        for (let i = 0; i < 7; i++) {

            if (date.getDay() == i) {
                daysArr.push(date.getDate())
            } else if( date.getDay() < i){
                daysArr.push((date.getDate() + (i - date.getDay())))
            } else {
                daysArr.push('')
            }
        }

        setDays(daysArr)
    }

    return (
        <tr id='lesssn-month-days'>
            {days.map(day => {
                return <td key={day}>{day}</td>
            })}
        </tr>
    )
}
