import React, { useState } from 'react'
import axios from 'axios'
// filepond css
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import 'filepond/dist/filepond.min.css';
// filepond elements
// import { FilePond, registerPlugin } from 'react-filepond';
// import FilePondPluginFileEncode from 'filepond-plugin-file-encode';

// registerPlugin(FilePondPluginFileEncode);

export default function NewMusic() {

    const [newMusic, setNewMusic] = useState({
        name: '',
        sheetFile: ''
    })
    // const [sheetFile, setSheetFiles] = useState([])
    // const [pond, setPond] = useState('')

    function onChangeName(e) {
        let tempMusic = newMusic
        tempMusic.name = e.target.value
        setNewMusic(tempMusic)
    }

    function onSubmit(e) {
        e.preventDefault()

        axios.post('http://localhost:5000/musics/new', newMusic)
            .then(res => console.log(res.data))

        window.location = '/musics'
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
                        onChange={onChangeName}
                        placeholder='שם יצירה:'
                        required
                    />
                </div>

                {/* sheet file */}
                {/* <div className='form-group'>
                    <p>תווים</p>

                    <FilePond
                        ref={(ref) => (setPond(ref))}
                        files={sheetFile}
                        server='http://localhost:5000/filepond'
                        allowMultiple={true}
                        maxFiles={1}
                        required={false}
                        labelIdle='גרור או  <span class="filepond--label-action">בחר קובץ</span>'
                        onupdatefiles={(fileItems) => {
                            console.log('uploaded file')
                            let tempMusic = newMusic
                            let sheetFiles = fileItems.map((fileItem) => fileItem.file)
                            tempMusic.sheetFile = sheetFiles[0]
                            setNewMusic(tempMusic)
                        }}
                    ></FilePond>
                </div> */}

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
