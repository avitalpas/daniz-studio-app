import React from 'react';

export default function StudentFullDetails(props) {

  function getCustomFieldsDetails(){
    return props.customFields.map(field=>{
      var name = field.name
      return (
        <div>{name + ':'}</div>
      )
    })
  }

  return (
      <div id='student-full-details'>
          <h4>פרטי התלמיד:</h4>

          {/* mobile */}
          <span>נייד: {props.student.mobile}</span>
          <br></br>
          {getCustomFieldsDetails()}
      </div>
  )
}
