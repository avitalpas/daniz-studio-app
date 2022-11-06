import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import '../../css/Global.scss'
import { useParams, useLocation } from "react-router-dom";

export default function NewLesson(props) {

    const [newLesson, setNewLesson] = useState({
        studentID: '',
        musicID: '',
        description: '',
        date: new Date()
    })

    const [students, setStudents] = useState([])
    const [musics, setMusics] = useState([])
    const { id } = useParams()
    const location = useLocation().pathname

    useEffect(() => {

        getSortedStudents()
        getSortedMusic()
        initParams()

    }, [])

    function initParams(){
        
        let tempLesson = newLesson
        let isMusic = location.includes('music-source')
        let isStudent = location.includes('student-source')
        
        if(isMusic){
            tempLesson.musicID = id
        }

        if(isStudent){
            tempLesson.studentID = id
        }

        setNewLesson(tempLesson)

    }

    function getSortedStudents(){
        axios.get( props.HEROKU + '/students')
        .then(response => {
            if (response.data.length > 0) {

                response.data.sort((a, b) => {
                    let fa = a.name
                    let fb = b.name

                    if (fa < fb) return -1
                    if (fa > fb) return 1
                    else return 0
                })

                setStudents(response.data)
            }
        })
    }

    
    function getSortedMusic(){
        axios.get( props.HEROKU + '/musics')
        .then(response => {
            if (response.data.length > 0) {

                response.data.sort((a, b) => {
                    let fa = a.name
                    let fb = b.name

                    if (fa < fb) return -1
                    if (fa > fb) return 1
                    else return 0
                })


                setMusics(response.data)
            }
        })
    }

    function onFieldChange(e, fieldName) {
        let tempLesson = newLesson
        tempLesson[fieldName] = e.target.value
        setNewLesson(tempLesson)
    }

    function onSubmit(e) {
        e.preventDefault()

        axios.post( props.HEROKU + '/lessons/new', newLesson)
            .then(res => console.log(res.data))

        window.location = '/home'
    }

    function studentsOptions() {
        return students.map(student => {
            if(student._id == newLesson.studentID){
                return <option key={student._id} value={student._id} selected>{student.name}</option>
            } else {
                return <option key={student._id} value={student._id}>{student.name}</option>
            }
        })
    }

    function musicsOptions() {
        return musics.map(music => {
            if(music._id == newLesson.musicID){
                return <option key={music._id} value={music._id} selected>{music.name}</option>
            } else {
                return <option key={music._id} value={music._id}>{music.name}</option>
            }
        })
    }

    return (
        <div id="newLesson" className='bodyDiv form-float'>
            <h3>הוספת שיעור חדש</h3>

            <form onSubmit={onSubmit} dir='rtl'>

                <p>הכנס פרטי שיעור:</p>
                {/* select student */}
                <div className="form-group">
                    <select required
                        className='form-control'
                        onChange={(e)=>{onFieldChange(e,'studentID')}}>
                        <option selected disabled>בחר תלמיד</option>
                        {studentsOptions()}
                    </select>
                </div>

                {/* select music */}
                <div className="form-group">
                    <select required
                        className='form-control'
                        onChange={(e)=>{onFieldChange(e,'musicID')}}>
                        <option selected disabled>בחר יצירה</option>
                        {musicsOptions()}
                    </select>
                </div>

                {/* description */}
                <div className='form-group'>
                    <input type='text'
                        className='form-control'
                        placeholder='תיאור:'
                        onChange={(e)=>{onFieldChange(e,'description')}}/>
                </div>

                {/* date */}
                <div className='form-control dateInput'>
                    <p>מתי?</p>
                    <div className="dateTimePicker">
                        <DateTimePickerComponent onChange={(e)=>{onFieldChange(e,'date')}}
                            placeholder='בחר תאריך ושעה'
                            format="dd/MM/yyyy HH:mm"
                        ></DateTimePickerComponent>
                    </div>
                </div>


                {/* submit */}
                <button type='submit'
                    value='Create lesson log'
                    className='submitBtn' >
                    קבע שיעור
                </button>

            </form>

        </div>
    )
}
