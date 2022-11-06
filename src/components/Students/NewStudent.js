import React, { useState } from 'react';
import axios from 'axios';
import '../../css/Global.scss'

export default function NewStudent(props){

    const [student, setStudent] = useState({
        name: '',
        mobile: ''
    })

    function onFieldChange(e, fieldName) {
        let tempStudent = student
        tempStudent[fieldName] = e.target.value
        setStudent(tempStudent)
    }

    function onSubmit(e) {
        e.preventDefault()

        axios.post(props.HEROKU + '/students/new', student)
            .then(res => console.log(res.data))

        window.location = '/students'
    }

        return (
            <div id="newStudent" className='bodyDiv form-float'>
                <h3>הוספת תלמיד חדש</h3>
                <form onSubmit={onSubmit} dir='rtl'>

                    <p>הכנס פרטי תלמיד:</p>

                    {/* name */}
                    <div className='form-group'>
                        <input type='text'
                            className='form-control'
                            placeholder='שם:'
                            onChange={(e)=>{onFieldChange(e,'name')}} />
                    </div>

                    {/* mobile */}
                    <div className='form-group'>
                        <input type='text'
                            className='form-control'
                            placeholder='פלאפון:'
                            onChange={(e)=>{onFieldChange(e,'name')}} />
                    </div>

                    {/* submit */}
                    <button type='submit'>הוסף תלמיד</button>

                </form>
            </div>
        )
}
