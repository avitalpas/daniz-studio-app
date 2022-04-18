import React from 'react';
import { Link } from 'react-router-dom'

export default function NavButtons(props) {

    const pageNames = [
        {
            page: 'students',
            name: 'תלמידים'
        }
    ]

    return (
        <div id="nav-buttons">
            <Link to={'/' + props.from}>
                <p>{'< ' + pageNames.find( page => page.page == props.from ).name }</p>
            </Link>
        </div>

    )
}
