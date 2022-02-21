// import react
import React, { useEffect, useState } from 'react';

// import axios
import axios from 'axios';

// import stylesheet
import '../../css/Settings.scss'

// import costum field compopnent
import CustomField from './CustomField'
import UserProfile from './UserProfile';
import Users from './Users';

export default function Settings() {

    const [customFields, setCustomFields] = useState([])
    const [isMounted, setIsMounted] = useState(false)
    const [customField, setCustomField] = useState({
        forModel: '',
        name: '',
        type: '',
        options: []
    })

    // mount components
    useEffect(() => {
        if (!isMounted) {
            axios.get('http://localhost:5000/customfield')
                .then(response => {
                    setCustomFields(response.data)
                    setIsMounted(true)
                })
                .catch(error => console.log(error))
        }
    })

    function onChangeForModel(e) {
        var tempField = customField
        tempField.forModel = e.target.value
    }

    function onNameChange(e) {
        var tempField = customField
        tempField.name = e.target.value
    }

    function onTypeChange(e) {
        var tempField = customField
        tempField.type = e.target.value
    }

    function onSubmit(e) {
        e.preventDefault()

        console.log('submit new field: ');
        console.log(customField);

        axios.post('http://localhost:5000/customfield/new', customField)
            .then(res => console.log(res.data))

        window.location = '/settings'

    }

    function getFieldsList() {
        return customFields.map(field => {
            return <CustomField field={field} key={field._id} deleteField={deleteField} />
        })
    }

    function deleteField(id) {
        axios.delete('http://localhost:5000/customfield/' + id)
            .then(res => console.log(res.data))

    }

    return (
        <div id='settings' className='bodyDiv'>
            <h3>הגדרות מערכת</h3>

            {/* user profile */}
            <UserProfile/>

            {/* users */}
            <Users />

            {/* custom fields */}
            <div className="custom-fields settings-div">
                <h4>שדות מותאמים אישית</h4>

                {/* current fields list */}
                {getFieldsList()}


                {/* new custom fields form */}
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
            </div>
        </div>
    )
}
