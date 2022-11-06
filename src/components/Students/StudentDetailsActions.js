import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function StudentDetailsActions(props) {


    function deleteStudent(id) {
        axios.delete(props.HEROKU + '/students/' + id)
            .then(window.location = '/students')
    }

    return (
        <div className="action-links">

            {/* call */}
            <div className="actions-link">
                <a href={'tel:' + props.student.mobile}>
                    <i className="fas fa-mobile-alt"></i>
                </a>
            </div>

            {/* whatsapp */}
            <div className="actions-link">
                <a href={'https://wa.me/' + props.student.mobile} title='שלח וואטספ' target='_blank'>
                    <i className="fab fa-whatsapp"></i>
                </a>
            </div>

            {/* lesson */}

            {/* edit */}
            <div className="actions-link">
                <Link to={'/students/edit/' + props.student._id} title='עריכת תלמיד'>
                    <i className="far fa-edit"></i>
                </Link>
            </div>

            {/* delete */}
            <div className="actions-link delIcon">
                <a href='#' onClick={() => { deleteStudent(props.student._id) }} title='מחיקת תלמיד'>
                    <i className="fas fa-trash-alt del-icon"></i>
                </a>
            </div>

        </div>
    )
}
