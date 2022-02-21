// ********************************
// new custom field form component
// ********************************

import React, { useState } from 'react';
import axios from 'axios';

export default function NewCustomField() {

    const [customField, setCustomField] = useState({
        forModel: '',
        name: '',
        type: '',
        options: []
    })

    function onChangeForModel(e) {
        var tempField = customField
        tempField.forModel = e.target.value

        setCustomField(tempField)
    }

    function onNameChange(e) {
        var tempField = customField
        tempField.name = e.target.value

        setCustomField(tempField)

    }

    function onTypeChange(e) {
        var tempField = customField
        tempField.type = e.target.value

        setCustomField(tempField)

    }

    function onSubmit(e) {
        e.preventDefault()

        console.log('submit new field: ');
        console.log(customField);

        axios.post('http://localhost:5000/customfield/new', customField)
            .then(res => console.log(res.data))

        window.location = '/settings'

    }

  return (
    <form id='new-field-form' onSubmit={onSubmit}>

                    {/* name */}
                    <input type="text" placeholder='שם השדה: ' onChange={onNameChange} required />

                    {/* for model */}
                    <select onChange={onChangeForModel} required>
                        <option value='' selected disabled>בחר פריט</option>
                        <option value="תלמידים">תלמידים</option>
                        <option value="שיעורים">שיעורים</option>
                        <option value="יצירות">יצירות</option>
                    </select>

                    {/* type */}
                    <select onChange={onTypeChange} required>
                        <option value='' selected disabled>בחר סוג שדה</option>
                        <option value="טקסט">טקסט</option>
                        <option value="רשימה">רשימה</option>
                    </select>

                    {/* submit */}
                    <button type='submit'>הוסף</button>
                </form>
  )
}
