import React, { useState, useEffect } from 'react'
import axios from 'axios'
// filepond css
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import 'filepond/dist/filepond.min.css';
// filepond elements
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default function NewMusic() {

    const [name, setName] = useState('')
    const [sheetFile, setSheetFiles] = useState([])
    const [pond, setPond] = useState('')

    function onChangeName(e) {
        setName(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault()

        // const music = {
        //     name: this.state.name
        // }

        // console.log(music);
        // axios.post('http://localhost:5000/musics/new', music)
        //     .then(res => console.log(res.data))

        // window.location = '/musics'
    }


    return (
        <div id="newMusic" className='bodyDiv form-float'>
            <h3>הוספת יצירה חדשה</h3>

            <form onSubmit={onSubmit} dir='rtl'>

                <p>הכנס פרטי יצירה:</p>
                {/* name */}
                <div className='form-group'>
                    <input type='text'
                        className='form-control'
                        value={name}
                        onChange={onChangeName}
                        placeholder='שם יצירה:'
                    />
                </div>

                {/* name */}
                <div className='form-group'>
                    <p>תווים</p>

                    <FilePond
                        ref={(ref) => (setPond(ref))}
                        files={sheetFile}
                        allowMultiple={true}
                        maxFiles={1}
                        stylePanelLayout='compact'
                        labelIdle='גרור או  <span class="filepond--label-action">בחר קובץ</span>'
                        onupdatefiles={(fileItems) => {
                            console.log('uploaded file')
                            setSheetFiles(fileItems.map((fileItem) => fileItem.file))
                            console.log(sheetFile)
                        }}
                    ></FilePond>
                </div>

                {/* submit */}
                <button type='submit'
                    value='הוסף'
                    className='submitBtn'>
                    הוספת יצירה
                </button>

            </form>
        </div>
    )
}
