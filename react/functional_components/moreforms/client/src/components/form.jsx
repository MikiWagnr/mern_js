import React, {useState} from 'react'

const Form = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] =useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const [firstNameError, setFirstNameError] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')
    const [perosnalInfo, setPersonalInfo] = useState([]);

    const createUser = (e) => {
        e.preventDefault()
        const newUser = {firstName,lastName,email,password,confirmPassword}
        setPersonalInfo([...perosnalInfo,newUser])
        console.log('Welcome, ', newUser)
        setHasBeenSubmitted(true)
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
        if(e.target.value.length > 0 && e.target.value.length < 3){
            setFirstNameError('The field must be 3 characters or longer')
        } else {
            setFirstNameError('')
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
        if(e.target.value.length > 0 && e.target.value.length < 3){
            setLastNameError('The field must be 3 characters or longer')
        } else {
            setLastNameError('')
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
        if(e.target.value.length > 0 && e.target.value.length < 5){
            setEmailError('The field must be 5 characters or longer')
        } else {
            setEmailError('')
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length > 0 && e.target.value.length < 8){
            setPasswordError('The field must be 8 characters or longer')
        }else {
            setPasswordError('')
        }
        if(e.target.value !== confirmPassword){
            setConfirmPasswordError('Passwords must match')
        }else{
            setConfirmPasswordError('')
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
        // if(e.target.value.length > 0 && e.target.value.length < 8){
        //     setConfirmPasswordError('The field must be 8 characters or longer')
        if(password !== e.target.value){
            setConfirmPasswordError('Passwords must match!')
        }else {
            setConfirmPasswordError('')
        }
    }

// the original function used to display form messages to the user


    // const formMessage = () => {
    //     if(hasBeenSubmitted){
    //         return "Thank you for submitting the form!"
    //     } else{
    //         return "Welcome, please submit the form."
    //     }
    // }

    return(
        <div>
            <h1>More Forms</h1>
            <form onSubmit={createUser}>
{/* ternary way to rewrite the form message function commented above! (which would've included the line '<h3>{ formMessage() }</h3> in place of the ternary function below */}
                {
                    hasBeenSubmitted ?
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome, please submit the form.</h3>
                }
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange = {handleFirstName} />
                    {
                        firstNameError ?
                        <p style = {{color:'red'}} > {firstNameError} </p> :
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange = {handleLastName} />
                    {
                        lastNameError ?
                        <p style = {{color:'red'}} > {lastNameError} </p> :
                        ''
                    }
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange = {handleEmail} />
                    {
                        emailError ?
                        <p style = {{color:'red'}} > {emailError} </p> :
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange = {handlePassword} />
                    {
                        passwordError ?
                        <p style = {{color:'red'}} > {passwordError} </p> :
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange = {handleConfirmPassword} />
                    {
                        confirmPasswordError ?
                        <p style = {{color:'red'}} > {confirmPasswordError} </p> :
                        ''
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
            <h2>Form Data</h2>
            <p>
                First Name: {firstName}
                <br />
                Last Name: {lastName}
                <br />
                Email: {email}
                <br />
                Password: {password}
                <br />
                Confirm Password: {confirmPassword}
            </p>
        </div>
    )
}

export default Form