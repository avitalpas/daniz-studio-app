import React, { useEffect, useState } from 'react';
import '../../css/Global.scss'
import '../../css/Lesson.scss'
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
                setMusic(response.data)
            })
            .catch(error => console.log(error)) 

        })
        .catch(error => console.log(error))

    }, [])

    function editDesctiption(){
        console.log('editing description')

        document.getElementById('description-editor').style.display = 'inline-block'
        document.getElementById('description-value').style.display = 'none'
        document.getElementById('edit-description-btn').style.display = 'none'
    }

    function submitDescription(){
        console.log('submit description')
        
        let tempLesson = lesson
        tempLesson.description = document.getElementById('description-editor-value').value
        document.getElementById('description-value-p').innerHTML = tempLesson.description

        setLesson(tempLesson)

        axios.post('http://localhost:5000/lessons/update/' + id, tempLesson)
            .then(res => console.log(res.data))
            .catch(error => console.log(error)) 
        
        document.getElementById('description-editor').style.display = 'none'
        document.getElementById('description-value').style.display = 'inline-block'
        document.getElementById('edit-description-btn').style.display = 'inline'
    }

    function getMusicDetails(field){
        if(music== null ){
            return 'לא נמצאה היצירה'
        } else {
            return music[field]
        }
    }

    function deleteLesson(){
        let answer = window.confirm('בטוח למחוק?')
        if(answer){
            axios.delete( props.HEROKU + '/lessons/'+ lesson._id )
            .then(window.location = '/lessons')
            .catch(error => console.log(error)) 
        } else {
            console.log('canclled delete')
        }

    }

    return (
        <div id='lesson-details' className='bodyDiv'>
            <h3>פרטי השיעור מהתאריך {formatteDate} עם {student.name}</h3>

            {/* actions */}
            <div id="actions">

                {/* delete */}
                <button id='delete-lesson' onClick={()=>{deleteLesson()}} title='מחק שיעור'><i className="fas fa-trash"></i></button>
            
            </div>

            {/* music info */}
            <div className='info-div'>
                <i className="fas fa-music"></i>
                <p>היצירה - </p>
                <a href={"/musics/details/" + getMusicDetails('_id')}>{getMusicDetails('name')}</a>
            </div>

            {/* description */}
            <div id='description' className='info-div'>
                <button id='edit-description-btn' onClick={()=>{ editDesctiption()}}><i className="fas fa-edit"></i></button>
                <h5>תיאור:</h5>

                <div id='description-value'>
                    <p id='description-value-p'>{lesson.description}</p>
                </div>

                <div id='description-editor'>
                    
                    <textarea id='description-editor-value' defaultValue={lesson.description}/>
                    <button onClick={()=>{ submitDescription()}}><i className="fas fa-check-circle"></i></button>

                </div>

            </div>
        </div>
    )
}
