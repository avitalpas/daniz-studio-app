import React from 'react'
import { Link } from 'react-router-dom';

export default function Music(props) {
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

            {/* music sheet */}
            <td>אין תווים</td>

            {/* difficulty */}
            <td>{props.music.difficulty}</td>
            
            {/* author */}
             <td>{props.music.author}</td>

             {/* music name */}
             <td>{props.music.name}</td>
        </tr>
    )
}
