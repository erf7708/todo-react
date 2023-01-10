import React, { useContext, useState } from 'react';
import TodoContext from './Context/TodoContext';
function Form(props) {
    const todoContext = useContext(TodoContext)
    const [text,setText] = useState("");

    const textHandler =(e)=>setText(e.target.value)

    const subHandler= (e)=>{
        e.preventDefault();

      todoContext.addTodo(text);
        setText("")
    }

    return (
        <>
            <form className="form-inline" onSubmit={subHandler}>
                  <div className="form-group">
                    <input type="text" value={text} onChange={textHandler}  className="form-control mx-sm-3" placeholder="i want to do ..."/>
                    <button className="btn btn-primary">add</button>
                  </div>
                </form>
        </>
    );
}

export default Form;