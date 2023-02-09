import React, {Component} from 'react'

class PersonCard extends Component {
    constructor(props){
        super(props)
        this.state = {age : this.props.age}
    }
    render(){
        const {firstName, lastName, hairColor} = this.props
        return(
            <div>
                <h1>{firstName}, {lastName}</h1>
                <h2>Age: {this.state.age}</h2>
                <h2>Hair Color: {hairColor}</h2>
                <button onClick={() => this.setState({age : this.state.age + 1})}>Add Age</button>
            </div>
        )
    }
}

export default PersonCard