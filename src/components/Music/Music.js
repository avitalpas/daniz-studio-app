import React from 'react'
import { Link } from 'react-router-dom';

export default function Music(props) {

    const difficulties = props.difficulties

    // return defficulty label. 
    // old music was save with string value so must check first. 
    // if save n new wersion by value, search and return label from difficulties array.
    function getDifficulty(){
        if( props.music.difficulty > 0 && props.music.difficulty < 9 ){
            return difficulties.find(difficulty => difficulty.value == props.music.difficulty).label
        } else {
            return props.music.difficulty
        }
    }

    return (
        <tr className='music-row'>         

            {/* music actions */}
            <td className='action-links'>

                {/* edit music */}
                <div className="action-link">
                    <Link to={'/musics/edit/' + props.music._id} title='עריכת תלמיד'>
                        <i className="far fa-edit"></i>
                    </Link>
                </div>

                {/* delete music */}
                <div className="action-link delIcon">
                    <a href='#' onClick={() => { props.deleteMusic(props.music._id) }} title='מחיקת תלמיד'>
                        <i className="fas fa-trash del-icon"></i>
                    </a>
                </div>
            </td>

            {/* accomp */}
            <td>{props.music.accomp}</td>

            {/* genre */}
            <td>{props.music.genre}</td>

            {/* weight */}
            <td>{props.music.weight}</td>

            {/* tempo */}
            <td>{props.music.tempo}</td>

            {/* bpm */}
            <td>{props.music.bpm}</td>

            {/* scale */}
            <td>{props.music.scale}</td>

            {/* noteLess */}
            <td>{props.music.noteLess? '✅': ''}</td>

            {/* fillIn */}
            <td>{props.music.fillIn? '✅': ''}</td>

            {/* mastering */}
            <td>{props.music.mastering? '✅': ''}</td>

            {/* reCreated */}
            <td>{props.music.reCreated? '✅': ''}</td>

            {/* difficulty */}
            <td>{getDifficulty()}</td>
            
            {/* author */}
            <td>{props.music.author}</td>

            {/* music name */}
            <td>{props.music.name}</td>
        </tr>
    )
}
