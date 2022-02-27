import React from 'react'

const daysOfTheWeek = ['א', 'ו', 'ה', 'ד', 'ג', 'ב', 'ש']
export default function WeekDays() {
  return (
    <tr id='days-of-the-week'>
        
         {daysOfTheWeek.map( day => {
             return <td key={day}>{day}</td>
         })}

    </tr>
  )
}
