import React from 'react'

const daysOfTheWeek = [
  'א',
  'ב',
  'ג',
  'ד',
  'ה',
  'ו',
  'ש',
]
export default function WeekDays() {
  return (
    <tr id='days-of-the-week'>
        
         {daysOfTheWeek.map( day => {
             return <td key={day}>
               <p>{day}</p>
             </td>
         })}

    </tr>
  )
}
