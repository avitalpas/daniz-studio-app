import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

import '../../css/Student.scss'

// student component
export default function Student(props) {        

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

                {/* new lesson */}
                <div className="actionLink">
                    <Link to={'/lessons/new/student-source/'+props.student._id} title='קביעת שיעור'>
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


