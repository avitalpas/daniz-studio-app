//  **********************************************
//              [ Lesson ] component
//  **********************************************

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../css/Lesson.scss'


export default function Lesson(props) {

    const [student, setStudent] = useState({})

    // after page mounted -
    //  - get students list from DB
    useEffect(() => {
        axios.get('http://localhost:5000/students/' + props.lesson.studentID)
            .then(response => {
                setStudent(response.data)
            })
            .catch(err => console.log("Error: " + err))
    })

    // get lesson date in 02/12/2022 format for display
    function getDateTimeFormat(date) {

        let curDate = new Date(date)
        let formatedDate = curDate.getDate() + '/' + (curDate.getMonth() + 1) + '/' + curDate.getFullYear()
        let formatedMinutes = curDate.getMinutes()
        if (formatedMinutes.toString().length < 2) formatedMinutes += '0'
        let weekDayName = curDate.toLocaleDateString('he-IL', { weekday: 'short' })
        let formatedTime = curDate.toLocaleString('he-IL', { hour: 'numeric', hour12: false }) + ':' + formatedMinutes

        return formatedDate + ' ' + weekDayName + ' ' + formatedTime
    }

    // get lesson action links
    function getLessonActionLinks(){
        return (
            <td className='action-links'>

                {/* edit lesson */}
                <div className="actions-link">
                    <Link to={'/lessons/edit/' + props.lesson._id} title='עריכת שיעור'>
                        <i className="far fa-edit"></i>
                    </Link>
                </div>

                {/* delete lesson */}
                <div className="actions-link delIcon">
                    <a href='#' onClick={() => { props.deleteLesson(props.lesson._id) }} title='מחיקת שיעור'>
                        <i className="fas fa-trash del-icon"></i>
                    </a>
                </div>
            </td>
        )
    }


    // return function
    return <tr>
        <td>{student.name}</td>
        <td>{props.lesson.description}</td>
        <td>{getDateTimeFormat(props.lesson.date)}</td>

        {/* lesson actions */}
        {getLessonActionLinks()}

    </tr>
}

