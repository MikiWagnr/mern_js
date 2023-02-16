import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const People = () => {
    const [name , setName] = useState({})
    const [peopleError, setPeopleError] = useState('')
    const {id} = useParams()

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/' + id)
            .then(response => {
                console.log(response)
                setName(response.data)
            })
            .catch(err => {
                console.log('catch error: ', err)
                setPeopleError('These are not the droids youre looking for')
            })
    }, [id])

    return (
        <div>
            <h1>people</h1>
            <h2>name: {name.name}</h2>
            <p>Height: {name.height} cm</p>
            <p>Hair Color: {name.hair_color}</p>
            <p>Eye Color: {name.eye_color}</p>
            <p>Gender: {name.gender}</p>
            {
                peopleError ? <p>{peopleError}</p> : ''
            }
        </div>
    );
};

export default People;