import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PartDetail = () => {
    const {partId} = useParams();
    console.log(partId)

    const [tools, setTools] = useState({});
    console.log(tools)
    useEffect( () => {
        const url = `http://localhost:5000/tools/${partId}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setTools(data))
    }, [])

    return (
        <div>
            <h1>Part Detail</h1>
        </div>
    );
};

export default PartDetail;