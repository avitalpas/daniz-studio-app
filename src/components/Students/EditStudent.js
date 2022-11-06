import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import '../../css/Global.scss'

export default function EditStudent(props) {

    const [student, setStudent] = useState({});
    const { id } = useParams()

    useEffect(() => {
        // get student
        axios.get(props.HEROKU + '/students/' + id)
            .then(response => {
                setStudent(response.data)
            })
            .catch(error => console.log(error))

    }, [])

    function onChangeName(e) {

        var editedStudent = student

        editedStudent.name = e.target.value

        setStudent(editedStudent)
    }

    function onChangeMobile(e) {
        var editedStudent = student

        editedStudent.mobile = e.target.value

        setStudent(editedStudent)
    }

    function onSubmit(e) {
        e.preventDefault()

        console.log('Edited student: \n');
        console.log(student);

        axios.post(props.HEROKU + '/students/update/' + student._id, student)
            .then(res => console.log(res.data))

        window.location = '/students'
    }

    return (
        <div id="edit-student" className='bodyDiv form-float'>
            <h3>עריכת תלמיד</h3>
            <hr />
            <form onSubmit={onSubmit} dir='rtl'>

                <p>הכנס פרטי תלמיד:</p>

                {/* name */}
                <div className='form-group'>
                    <input type='text'
                        className='form-control'
                        placeholder='שם:'
                        defaultValue={student.name}
                        onChange={onChangeName} />
                </div>

                {/* mobile */}
                <div className='form-group'>
                    <input type='text'
                        className='form-control'
                        placeholder='פלאפון:'
                        value={student.mobile}
                        onChange={onChangeMobile} />
                </div>

                {/* submit */}
                <button type='submit'>עדכן תלמיד</button>


            </form>
        </div>
    )
}
