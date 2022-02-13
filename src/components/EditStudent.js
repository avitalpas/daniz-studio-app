import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import EditCustomFieldData from './EditCustomFieldData';
import '../css/Global.scss'

export default function EditStudent() {

    const [student, setStudent] = useState({});
    const [isMounted, setIsMounted] = useState(false)
    const [customFields, setCustomFields] = useState([])
    const [customFieldsData, setCustomFieldsData] = useState([])


    const { id } = useParams()

    useEffect(() => {
        if (!isMounted) {

            // get students
            axios.get('http://localhost:5000/students/' + id)
                .then(response => {
                    setStudent(response.data)
                    // console.log(student);
                })
                .catch(error => console.log(error))

            // get custom fields
            axios.get('http://localhost:5000/customfield')
                .then(response => {
                    setCustomFields(response.data)
                    // console.log(customFields);
                })
                .catch(error => console.log(error))

            // get custom fields
            axios.get('http://localhost:5000/customfielddata')
                .then(response => {
                    setCustomFieldsData(response.data)
                    // console.log(customFields);
                    setIsMounted(true)
                })
                .catch(error => console.log(error))
        }
    })


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

        axios.post('http://localhost:5000/students/update/' + student._id, student)
            .then(res => console.log(res.data))

        window.location = '/students'
    }

    function getCustomFields() {
        return customFields.map(field => {
            return (
                <EditCustomFieldData field={field} customFieldsData={customFieldsData} studentID={student._id} key={field._id}/>
            )
        })
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

                {/* custom fields */}
                {getCustomFields()}

                {/* submit */}
                <button type='submit'>עדכן תלמיד</button>


            </form>
        </div>
    )
}
