import React, { useContext, useState } from 'react';
import TodoContext from './Context/TodoContext';
import EditTood from './EditTood';
function Todo({item}) {
    const todoContext= useContext(TodoContext)

    const [edit,setEdit] = useState(false);
    const editText = (text)=>{
        todoContext.editTodo(text , item.id);
        setEdit(false)
    }
    return (
        <>
          {
            !edit ? 
            <div className="col-6 mb-2">
            <div className="d-flex justify-content-between align-items-center border rounded p-3">
                <div>
                   {item.text}
                </div>
                <div>
                    <button type="button" onClick={()=> setEdit(true)} className="btn btn-info btn-sm">edit</button>
                    <button onClick={()=> todoContext.deleteTodo(item.id)} type="button" className="btn btn-danger btn-sm ml-1">delete</button>
                    <button  onClick={()=>todoContext.ToglleTodo(item.id)}  type="button" className="btn btn-success btn-sm ml-1">{!item.done ? 'Done' :'Undone'}</button>
                </div>
            </div>
        </div>
        :
                <EditTood text={item.text} editText={editText}  />
          }
        </>
    );
}

export default Todo;