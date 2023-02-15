import React, {useState} from 'react'

const Todo = (props) => {
    const [newToDo, setNewToDo] = useState('')
    const [toDo, setToDo] = useState([])

    const handleToDo = (e) => {
        e.preventDefault()
        // prevents an empty todo event from being added
        if (newToDo.length === 0){
            return;
        }
        const toDoItem = {
            text : newToDo,
            complete: false
        }
        // sets the todos and passes them in a new array that contains all todo item with the additional one
        setToDo([...toDo, toDoItem])
        //resets todo value to empty
        setNewToDo('')
    }

    const handleToggleComplete =(compIdx) => {
        const updatedToDo = toDo.map((toDo, i) =>{
            if(compIdx === i){
                toDo.complete = !toDo.complete
            // todo.complete is false by default so this converts it to true without mutating the todo directly
                // const updatedToDo = {...toDo, complete: !toDo.complete}
                // return updatedToDo
            }
            return toDo
        })
        setToDo(updatedToDo) 
    }

    const handleToDoDelete = (delIdx) => {
        const filteredToDo = toDo.filter((_toDo, i) => {
            return i !== delIdx
        })
        setToDo(filteredToDo)
    }
    
    return (
        <div>
            <form onSubmit={(e) => {handleToDo(e)}}>
                <h1>To Do List</h1>
                {/* the value attribute assigns a value (makes it = to empty when nothing is written) */}
                <input type="text" onChange ={(e) => {setNewToDo(e.target.value)}} value={newToDo} />
                <div>
                <button>Add</button>
                </div>
            </form>
            {toDo.map((toDo, idx) => {
                // lets you target many classes(in this case just the one class for out text decoration)
                const toDoClasses = ['bold','italic']
                if (toDo.complete){
                        toDoClasses.push('line-through')
                    }
                    return (
                    <div key={idx}>
                        <input type="checkbox" onChange={(e) => {
                            handleToggleComplete(idx)
                        }} checked={toDo.complete} />
                        <span className={toDoClasses.join(' ')}>{toDo.text}</span>
                        <button onClick={(e) => {handleToDoDelete(idx)}}>Delete</button>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Todo