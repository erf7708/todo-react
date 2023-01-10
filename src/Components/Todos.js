import React, { useContext, useState } from 'react';
import TodoContext from './Context/TodoContext';
import Todo from './Todo';
function Todos() {
    
    const todoContetx = useContext(TodoContext);
    const {todos} = todoContetx;
    const [status,setStatus] = useState(false)

    const filterTodo = todos.filter(item=>item.done == status)
    
    return (
        <>


                    <nav className="col-6 mb-3">
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <a onClick={()=>setStatus(false)} className={`nav-item nav-link font-weight-bold ${ !status ? 'active' : '' }`} id="nav-home-tab">undone <span className="badge badge-secondary">{todos.filter(item=>item.done==false).length}</span></a>
                                <a onClick={()=> setStatus(true)} className={`nav-item nav-link font-weight-bold ${ status ? 'active' : '' }`} id="nav-profile-tab">done <span className="badge badge-success">{todos.filter(item=>item.done==true).length}</span></a>
                            </div>
                    </nav>




            {
                filterTodo.length == 0 ? <p>No Items ...</p> :

                    filterTodo.map(item=> <Todo key={item.id} item={item} />)
            }

      
           
        </>
    );
}

export default Todos;