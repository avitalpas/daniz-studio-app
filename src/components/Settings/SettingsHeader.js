import React from 'react'

export default function SettingsHeader(props) {
    return (
        <div className="settings-header">
            <h4>{props.header}</h4>
            <a href='#' onClick={()=> props.addNew()}>+</a>
        </div>
    )
}
