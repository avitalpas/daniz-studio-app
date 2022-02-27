import React from 'react'

export default function StudentHeader(props) {

const getStudentHeader = () => {
    if( props.student.instrument == null ){
        return (
            <p>לא צוין כלי נגינה</p>
        )
    } else {
        return (
            <p>{props.student.instrument}</p>
        )
    }
}


  return (

    <div id='student-details-header'>
        <h4>{props.student.name}</h4>

        <div className="header-detail-div">
            <i className="fas fa-phone"></i>
            <p>{props.student.mobile}</p>
        </div>

        <div className="header-detail-div">
            <i className="fas fa-music"></i>
            {getStudentHeader()}
        </div>
    </div>
  )
}
