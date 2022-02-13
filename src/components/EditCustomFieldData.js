import React, { useState, useEffect } from 'react';

export default function EditCustomFieldData(props) {

  const [fieldsData, setFieldsData] = useState([])

  useEffect(()=>{
    console.log(props.customFieldsData);
  })

  function onChangeCustomField(e){
    console.log(props.field.name + ': ' + e.target.value);
  }

  return (
    <div className='form-group'>
      <input type="text" className='form-control' placeholder={props.field.name} onChange={onChangeCustomField} defaultValue='' />
    </div>
  )
}
