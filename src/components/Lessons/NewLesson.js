// import react
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// import axios for db requests
import axios from 'axios';

// import date picker
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';

// import stylsheet
import '../../css/Global.scss'

export default function NewLesson() {

    const [studentID, setStudentID] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState(new Date())
    const [students, setStudents] = useState([])

    useEffect(() => {

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
                    setStudentID(response.data[0].name)
                }
            })
    })

    function onChangeStudentID(e) {
        studentID(e.target.value)
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
            description: description,
            date: date
        }

        axios.post('http://localhost:5000/lessons/new', lesson)
            .then(res => console.log(res.data))

        window.location = '/lessons'
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
                        {
                            students.map(student => {
                                return <option key={student._id} value={student._id}>{student.name}</option>
                            })
                        }
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
