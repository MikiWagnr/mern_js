import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([])

    const [button, setButton] = useState(false)

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => {
                console.log(response)
                setPokemon(response.data.results)
            })
            .catch(err => {
                console.log('this comes from the catch error', err)
            })
    }, [button])



    return (
        <div>
            <button onClick={() => {
                setButton(!button)
            }} > Fetch Pokemon</button>
            <ul>
                {
                    button ?
                        pokemon.map((poke, i) => {
                            return (
                                <li key={i}>
                                    {poke.name}
                                </li>
                            )
                        }) : ''
                }
            </ul>
        </div>
    );
};

export default Pokemon;