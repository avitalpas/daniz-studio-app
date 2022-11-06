import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios'
import '../../css/Global.scss'

export default function EditMusic(props) {

    const [music, setMusic] = useState({})
    const { id } = useParams()

    const difficulties = props.difficulties

    useEffect(() => {
        // get music
        axios.get(props.HEROKU + '/musics/' + id)
            .then(response => {
                setMusic(response.data)
            })
            .catch(error => console.log(error))
    }, [])

    function onFieldChange(e, fieldName) {
        let tempMusic = music
        tempMusic[fieldName] = e.target.value
        setMusic(tempMusic)
    }

    function onSubmit(e) {
        e.preventDefault()

        axios.post(props.HEROKU + '/musics/update/' + id, music)
            .then(res => console.log(res.data))

        window.location = '/musics'
    }

    function diffucultyOptions() {
        return difficulties.map(level => {
            if (level.value == music.difficulty) {
                return (
                    <option key={level.value} value={level.value} selected>{level.value} - {level.label}</option>
                )
            } else {
                return (
                    <option key={level.value} value={level.value}>{level.value} - {level.label}</option>
                )
            }
        })
    }

    function getBooleanOptions(field) {
        if (music[field] == false) {
            return (
                <select name={field}
                    className='form-control'
                    onChange={(e) => { onFieldChange(e, field) }}

                >
                    <option value="false" selected>לא</option>
                    <option value="true" >כן</option>
                </select>
            )
        } else {
            return (
                <select name={field}
                    className='form-control'
                    onChange={(e) => { onFieldChange(e, field) }}

                >
                    <option value="false" >לא</option>
                    <option value="true" selected>כן</option>
                </select>
            )
        }
    }

    return (
        <div id="newMusic" className='bodyDiv form-float'>
            <h3>עריכת יצירה: {music.name}</h3>

            <form onSubmit={onSubmit} dir='rtl'>

                <p>פרטי יצירה:</p>
                {/* name */}
                <div className='form-group'>
                    <input type='text'
                        className='form-control'
                        onChange={(e) => { onFieldChange(e, 'name') }}
                        value={music.name}
                        required
                    />
                </div>

                {/* author */}
                <div className='form-group'>
                    <input type='text'
                        className='form-control'
                        onChange={(e) => { onFieldChange(e, 'author') }}
                        value={music.author}
                        required
                    />
                </div>

                {/* diffuculty */}
                <div className='form-group'>

                    <div className='fieldWithHeader'>

                        <p className='fieldHeader'>רמת קושי:</p>

                        <select name='difficulty'
                            className='form-control'
                            onChange={(e) => { onFieldChange(e, 'difficulty') }}
                            placeholder='רמת קושי'

                        >
                            {diffucultyOptions()}
                        </select>
                    </div>
                </div>

                {/* reCreated */}
                <div className='form-group'>
                    <div className='fieldWithHeader'>
                        <p className='fieldHeader'>עשוי מחדש?</p>
                        {getBooleanOptions('reCreated')}
                    </div>
                </div>

                {/* mastering */}
                <div className='form-group'>
                    <div className='fieldWithHeader'>
                        <p className='fieldHeader'>מאסטרינג?</p>
                        {getBooleanOptions('mastering')}
                    </div>
                </div>

                {/* fillIn */}
                <div className='form-group'>
                    <div className='fieldWithHeader'>
                        <p className='fieldHeader'>השלמת מנגינה?</p>
                        {getBooleanOptions('fillIn')}

                    </div>
                </div>

                {/* noteLess */}
                <div className='form-group'>
                    <div className='fieldWithHeader'>
                        <p className='fieldHeader'>נגינה ללא תווים?</p>
                        {getBooleanOptions('noteLess')}

                    </div>
                </div>

                {/* scale */}
                <div className='form-group'>
                    <input type='text'
                        className='form-control'
                        onChange={(e) => { onFieldChange(e, 'scale') }}
                        value={music.scale}

                    />
                </div>

                {/* bpm */}
                <div className='form-group'>
                    <input type='text'
                        className='form-control'
                        onChange={(e) => { onFieldChange(e, 'bpm') }}
                        value={music.bpm}

                    />
                </div>

                {/* tempo */}
                <div className='form-group'>
                    <input type='text'
                        className='form-control'
                        onChange={(e) => { onFieldChange(e, 'tempo') }}
                        value={music.tempo}

                    />
                </div>

                {/* weight */}
                <div className='form-group'>
                    <input type='text'
                        className='form-control'
                        onChange={(e) => { onFieldChange(e, 'weight') }}
                        value={music.weight}

                    />
                </div>

                {/* genre */}
                <div className='form-group'>
                    <input type='text'
                        className='form-control'
                        onChange={(e) => { onFieldChange(e, 'genre') }}
                        value={music.genre}

                    />
                </div>

                {/* accomp */}
                <div className='form-group'>
                    <input type='text'
                        className='form-control'
                        onChange={(e) => { onFieldChange(e, 'accomp') }}
                        value={music.accomp}

                    />
                </div>

                {/* submit */}
                <button type='submit'
                    value='הוסף'
                    className='submitBtn'>
                    עדכון יצירה
                </button>

            </form>
        </div>
    )
}
