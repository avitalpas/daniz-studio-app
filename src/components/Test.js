import React from 'react';
import { useParams } from 'react-router-dom';

export default function Test() {
    const { id } = useParams()
    const name = 'Avital'
    console.log(id);

    return (
        <div className='bodyDiv'>
            <h3>hello {name}</h3>
            <h3>hello {id}</h3>
        </div>
    );
}
