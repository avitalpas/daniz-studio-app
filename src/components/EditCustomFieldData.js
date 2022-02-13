import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'

export default function EditCustomFieldData(props) {

  const [isMounted, setIsMounted] = useState(false)
  const [field, setField] = useState({
    name: '',
    value: ''
  })

  useEffect(()=>{
    if(!isMounted){
      console.log(props.customFieldsData);
      setField(props.customFieldsData.filter( data => {
        return data.fieldID == props.field._id && data.objectID == props.studentID
      }))
      console.log(field);
      setIsMounted(true)
    }
  })

  function onChangeCustomField(e){
    var tempField = field
    tempField.value = e.target.value
    setField(tempField)
  }

  return (
    <div className='form-group'>
      <input type="text" className='form-control' placeholder={props.field.name} onChange={onChangeCustomField} defaultValue={field.value} />
    </div>
  )
}
