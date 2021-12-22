import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const UniversityDetails = () => {
    const { name } = useParams()
    const [university, setUniversity] = useState([])

    useEffect(() => {
        fetch(`http://universities.hipolabs.com/search?country=india`)
            .then(res => res.json())
            .then(data => {
                setUniversity(data)
            })
    }, [])

    const singleVericty = university.filter(i => i.name === name)
    console.log(singleVericty)

    return (
        <div>
            <h1>{name}</h1>
          
            
        </div>
    );
};

export default UniversityDetails;