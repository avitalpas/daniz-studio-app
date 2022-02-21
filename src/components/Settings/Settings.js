import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../css/Settings.scss'
import CustomField from './CustomField'
import UserProfile from './UserProfile';
import Users from './Users';
import NewCustomField from './NewCustomField'

export default function Settings() {

    const [customFields, setCustomFields] = useState([])
    const [isMounted, setIsMounted] = useState(false)


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
                <NewCustomField/>
            </div>
        </div>
    )
}
