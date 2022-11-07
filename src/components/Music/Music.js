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

    function getPrintedNotes(){
        let instruments = Object.keys(props.music.printedNotes)
        
        return instruments.map( instrument => {
            return <span>{instrument + ' ' + props.music.printedNotes[instrument]}</span>
        })
    }

    return (
        <tr className='music-row'>         

            {/* music actions */}
            <td className='action-links'>

                {/* schedule lesson */}
                <div className="action-link">
                    <Link to={'/lessons/new/music-source/'+props.music._id} >
                        <i className="fas fa-user-plus"></i>
                    </Link>
                </div>
                
                {/* edit music */}
                <div className="action-link">
                    <Link to={'/musics/edit/' + props.music._id} >
                        <i className="far fa-edit"></i>
                    </Link>
                </div>

            </td>

            {/* accomp */}
            {/* <td>{props.music.accomp}</td> */}

            {/* genre */}
            <td className='hide-mobile-info'>{props.music.genre}</td>

            {/* weight */}
            {/* <td>{props.music.weight}</td> */}

            {/* tempo */}
            {/* <td>{props.music.tempo}</td> */}

            {/* bpm */}
            {/* <td>{props.music.bpm}</td> */}

            {/* scale */}
            <td>{props.music.scale}</td>

            {/* noteLess */}
            <td className='hide-mobile-info'>{props.music.noteLess? '✅': ''}</td>

            {/* fillIn */}
            <td className='hide-mobile-info'>{props.music.fillIn? '✅': ''}</td>

            {/* mastering */}
            {/* <td>{props.music.mastering? '✅': ''}</td> */}

            {/* reCreated */}
            {/* <td>{props.music.reCreated? '✅': ''}</td> */}

            {/* printedNotes */}
            <td>{getPrintedNotes()}</td>

            {/* difficulty */}
            <td>{getDifficulty()}</td>
            
            {/* author */}
            <td>{props.music.author}</td>

            {/* music name */}
            <td className='info-name'><a href={'/musics/details/' + props.music._id}>{props.music.name}</a></td>
        </tr>
    )
}
