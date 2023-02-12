import React, {useState} from 'react'

const Form = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] =useState('')

    return(
        <div>
            <h1>Hook Form</h1>
            <form>
                <div>
                    <label>First Name</label>
                    <input type="text" onChange={(e) =>{setFirstName(e.target.value)}} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" onChange = {(e) => {setLastName(e.target.value)}} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" onChange = {(e) => {setEmail(e.target.value)}} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" onChange= {(e) => {setPassword(e.target.value)}} />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="text" onChange= {(e) => {setConfirmPassword(e.target.value)}} />
                </div>
            </form>
            <h2>Form Data</h2>
            <p>
                First Name: {firstName} <br />
                Last Name:{lastName} <br />
                Email: {email} <br />
                Password: {password} <br />
                Confirm Password: {confirmPassword}
            </p>
        </div>
    )
}

export default Form