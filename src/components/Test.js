import React from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import timegrid from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import './test.scss'

export default function Test() {
    const currentDate = new Date()

    const headerToolbar = {
        left: 'prev,next today',
        center: 'title',
        right: 'timeGridWeek,timeGridDay',
    }

    const events = [
        {
            id: 'a',
            title: 'my event',
            start: '2022-03-21T10:30:00',
            extendedProps: {
                description: 'Lecture'
            }
        }
    ]

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
        <div className='bodyDiv' dir='rtl'>
            <h3>Test page</h3>
            <p>Current date {currentDate.getDate() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getFullYear()}</p>
            <div id='cal-div'>
                <FullCalendar
                    plugins={[timegrid, interactionPlugin]}
                    initialView="timeGridWeek"
                    events={events}
                    headerToolbar={headerToolbar}
                    buttonText={buttonText}
                    dateClick={handleDateClick}
                    select={handleSelect}
                    selectable= {options}
                    selectMirror= {options}
                    unselectAuto= {options}
                />
            </div>
        </div>
    );
}
