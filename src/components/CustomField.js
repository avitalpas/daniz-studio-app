import React from 'react';

export default function CustomField(props) {

  return (
    <div className='custom-field'>

      {/* details */}
      <div className="field-details">
        <span>{props.field.name}</span>
        <span>{props.field.forModel}</span>
        <span>{props.field.type}</span>

      </div>

      {/* actions */}
      <div className="field-actions">
        <a href="#" onClick={()=>{props.deleteField(props.field._id)}}>מחק</a>
      </div>

    </div>
  )
}
