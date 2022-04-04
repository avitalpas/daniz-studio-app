import React, { useState, useEffect } from 'react'
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import '../../css/Global.scss'

export default function TestMusic() {

    const [files, setFiles] = useState(
        [
            {
                source: 'index.html',
                options: {
                    type: 'local',
                },
            },
        ]
    )
    const [pond, setPond] = useState('')

    function handleInit() {
        console.log('FilePond instance has initialised');
    }

    return (
        <div className='bodyDiv'>
            <h4>Test music upload</h4>

            <div className='music-form'>
                <p>upload notes sheet:</p>

                <form action="http://localhost:5000/upload/new" method='POST' encType='multipart/form-data'>
                    <input type="file" name='file' id='file' className='file-input'/>

                    <button type="sumbit" value='submit'>שלח</button>
                </form>


            </div>

        </div>
    )
}











{/* <FilePond
    ref={(ref) => (setPond(ref))}
    files={files}
    allowMultiple={true}
    maxFiles={1}
    dropOnPage={true}
    server="/api"
    oninit={() => handleInit()}
    onupdatefiles={(fileItems) => {
        setFiles(fileItems.map((fileItem) => fileItem.file))
    }}
></FilePond> */}