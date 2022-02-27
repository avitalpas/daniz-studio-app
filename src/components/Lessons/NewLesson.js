import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import '../../css/Global.scss'

export default function NewLesson() {

    const [studentID, setStudentID] = useState('')
    const [musicID, setMusicID] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState(new Date())
    const [students, setStudents] = useState([])
    const [musics, setMusics] = useState([])
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        if( !isMounted ){
            getSortedStudents()
            getSorteMusic()
            setIsMounted(true)
        }
    })

    function getSortedStudents(){
        axios.get('http://localhost:5000/students')
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

    
    function getSorteMusic(){
        axios.get('http://localhost:5000/musics')
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

    function onChangeStudentID(e) {
        setStudentID(e.target.value)
    }

    function onChangeMusicID(e) {
        setMusicID(e.target.value)
    }

    function onChangeDescription(e) {
        setDescription(e.target.value)
    }

    function onChangeDate(dateInput) {
        setDate(dateInput.value)
    }

    function onSubmit(e) {
        e.preventDefault()

        const lesson = {
            studentID: studentID,
            musicID: musicID,
            description: description,
            date: date
        }

        axios.post('http://localhost:5000/lessons/new', lesson)
            .then(res => console.log(res.data))

        window.location = '/lessons'
    }

    function studentsOptions() {
        return students.map(student => {
            return <option key={student._id} value={student._id}>{student.name}</option>
        })
    }

    function musicsOptions() {
        return musics.map(music => {
            return <option key={music._id} value={music._id}>{music.name}</option>
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
                        onChange={onChangeStudentID}>
                        <option selected disabled>בחר תלמיד</option>
                        {studentsOptions()}
                    </select>
                </div>

                {/* select music */}
                <div className="form-group">
                    <select required
                        className='form-control'
                        onChange={onChangeMusicID}>
                        <option selected disabled>בחר יצירה</option>
                        {musicsOptions()}
                    </select>
                </div>

                {/* description */}
                <div className='form-group'>
                    <input type='text'
                        className='form-control'
                        placeholder='תיאור:'
                        value={description}
                        onChange={onChangeDescription} />
                </div>

                {/* date */}
                <div className='form-control dateInput'>
                    <p>מתי?</p>
                    <div className="dateTimePicker">
                        <DateTimePickerComponent onChange={onChangeDate}
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
