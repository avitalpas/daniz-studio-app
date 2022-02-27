import React, { useEffect, useState } from 'react';
import CustomField from './CustomField'
import NewCustomField from './NewCustomField'
import axios from 'axios';
import SettingsHeader from './SettingsHeader';


export default function CustomFields() {
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

    // get a list of the current custom fields from DB
    function getFieldsList() {
        return customFields.map(field => {
            return <CustomField field={field} key={field._id} deleteField={deleteField} />
        })
    }

    // delete field by ID
    function deleteField(id) {
        axios.delete('http://localhost:5000/customfield/' + id)
            .then(res => {
                console.log(res.data)
                window.location = '/settings'
            })


    }
    
    return (
        <div className="settings-div">
            
            {/* header */}
            <SettingsHeader header='שדות מותאמים אישית'/>

            {/* current fields list */}
            {getFieldsList()}


            {/* new custom fields form */}
            <NewCustomField />
        </div>)
}
