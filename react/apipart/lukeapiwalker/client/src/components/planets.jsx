import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Planets = () => {
    const [planet, setPlanet] = useState({})
    const [planetError, setPlanetError] = useState('')
    const {id} = useParams()

    useEffect(() => {
        axios.get('https://swapi.dev/api/planets/' + id)
            .then(response => {
                console.log(response)
                setPlanet(response.data)
                setPlanetError('')
            })
            .catch(err => {
                console.log('catch error: ', err)
                setPlanetError('These are not the droids youre looking for')
            })
    }, [id])

    return (
        <div>
            <h1>Planets!</h1>
            <h2>{planet.name}</h2>
            <p>Cilmate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Population: {planet.population}</p>
            <p>Rotation Period: {planet.rotation_period} hours</p>
            {
                planetError ? <p>{planetError}</p> : ''
            }
        </div>
    )
}

export default Planets