import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

export default function EditCustomFieldData(props) {

  const [isMounted, setIsMounted] = useState(false)
  const customFieldsData = props.customFieldsData
  const [field, setField] = useState({
    fieldID: '',
    objectID: '',
    value: ''
  })

  useEffect(() => {
    if (!isMounted) {
      field.fieldID = props.field._id
      field.objectID = props.studentID

      let ArrFilterField = customFieldsData.filter( el => el.fieldID == props.field._id && el.objectID == props.studentID)
      if( ArrFilterField.length > 0){
        field.value = ArrFilterField[0].value
      }

      console.log(field)

      // setIsMounted(true)
    }
  })


  function onChangeCustomField(e) {
    let tempField = field
    tempField.value = e.target.value
    
    props.updateCustomField(tempField)
  }

  return (
    <div className='form-group'>
      <input type="text" className='form-control' placeholder={props.field.name} onChange={onChangeCustomField} defaultValue={field.value} value={field.value}/>
    </div>
  )
}
