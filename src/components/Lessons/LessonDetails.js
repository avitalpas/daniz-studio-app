import React, { useEffect, useState } from 'react';
import '../../css/Global.scss'
import '../../css/Students.scss'
import { useParams, Link } from "react-router-dom";
import axios from 'axios';

export default function LessonDetails(props) {

    const [ lesson, setLesson ] = useState({})
    const [ student, setStudent ] = useState({})
    const [ music, setMusic ] = useState({})
    const { id } = useParams()
    let date = new Date(lesson.date)
    let formatteDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes()
    
    useEffect(() => {

        // get lesson by id
        axios.get(props.HEROKU + '/lessons/' + id)
        .then(response => {
            setLesson(response.data)

            // get student by studentID
            axios.get(props.HEROKU + '/students/' + response.data.studentID)
            .then(response => {
                setStudent(response.data)
            })
            .catch(error => console.log(error))

            
            // get music by musicID
            axios.get(props.HEROKU + '/musics/' + response.data.musicID)
            .then(response => {
                console.log(response.data)
                setMusic(response.data)
            })
            .catch(error => console.log(error)) 

        })
        .catch(error => console.log(error))

        
       

    }, [])

    return (
        <div className='bodyDiv'>
            <h3>פרטי השיעור</h3>

            <p>{formatteDate}</p>
            <p>{student.name}</p>
        </div>
    )
}
