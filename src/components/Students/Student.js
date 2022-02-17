import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

// import axios
import axios from 'axios';

import '../../css/Student.scss'

// student component
export default function Student(props) {
    const [customFields, setCustomFields] = useState([])
    const [isMounted, setIsMounted] = useState(false)
    
    useEffect(()=>{
        if (!isMounted) {
            axios.get('http://localhost:5000/customfield')
                .then(response => {
                    setCustomFields(response.data)
                    setIsMounted(true)
                })
                .catch(error => console.log(error))
        }
    })

    // check and get user contacts
    function getStudentContacts() {
        if (props.student.mobile != null) {
            return (
                <span>
                    {/* send whatsapp */}
                    <div className="actionLink">
                        <a href={'https://wa.me/' + props.student.mobile} title='שלח וואטספ' target='_blank'>
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>

                    {/* call */}
                    <div className="actionLink">
                        <a href={'tel:' + props.student.mobile}>
                            <i className="fas fa-mobile-alt"></i>
                        </a>
                    </div>
                </span>
            )
        }
    }

    return (
        <tr className='student-td'>

            {/* student actions */}
            <td className='student-actions'>
                

                {/* delete student */}
                <div className="actionLink delIcon">
                    <a href='#' onClick={() => { props.deleteStudent(props.student._id) }} title='מחיקת תלמיד'>
                        <i className="fas fa-trash-alt del-icon"></i>
                    </a>
                </div>

                {/* edit student */}
                <div className="actionLink">
                    <Link to={'/students/edit/' + props.student._id} title='עריכת תלמיד'>
                        <i className="far fa-edit"></i>
                    </Link>
                </div>

                {/* new lesson */}
                <div className="actionLink">
                    <Link to={'/lessons/new/'+props.student._id} title='קביעת שיעור'>
                        <i className="fas fa-calendar-week"></i>
                    </Link>
                </div>

                {/* contact buttons */}
                {getStudentContacts()}

            </td>

            {/* student details */}
            <td className='student-details'>
                <a href={'/students/details/' + props.student._id}>
                    {props.student.name}
                </a>
            </td>
        </tr>
    );
}


