import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


const Form = () => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, " ",number)
        navigate(`/${name}/${number}`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select onChange= {(e) => setName(e.target.value)} value={name}>
                    <option value="">select an option...</option>
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                </select>
                <input type="number" onChange={ (e) => setNumber(e.target.value)} value= {number} />
                <input type="submit" value='Submit' />
            </form>
        </div>
    );
};

export default Form;