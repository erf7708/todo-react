import React, { useState } from 'react';
import TodoContext from './Context/TodoContext';
import Form from './Form';
import Header from './layouts/Header';
import Todos from './Todos';

function Main(props) {

    const [todos,setTodos] = useState([]);

    const addTodo =(text)=>{
        setTodos([...todos,{
            id:Date.now(),
            text,
            done:false
        }])
    }

    const deleteTodo =(id)=>{
    
        setTodos(todos.filter(item=>item.id !== id))
    }

    const editTodo =(text,id)=>{
        const item= todos.find(item=>item.id == id);
        item.text=text;
        const todo = todos.filter(item=>item.id !==id);

        setTodos([...todo,item])

    }


    const ToglleTodo =(id)=>{
        const item= todos.find(item=>item.id == id);
        item.done =! item.done;
        const newItem = todos.filter(item=>item.id !== id );

        setTodos([...newItem,item]);
    }

    

    return (

        
        <>
                <TodoContext.Provider value={{
                  addTodo,
                  todos:todos,
                  deleteTodo,
                  editTodo,
                  ToglleTodo
                  
                   
                }}>
                <div className="App">
      <Header/>
        <main>
          <section className="jumbotron">
            <div className="container d-flex flex-column align-items-center">
                <h1 className="jumbotron-heading">Welcome!</h1>

                <p className="lead text-muted">To get started, add some items to your list:</p>
                <Form/>
            </div>
          </section>
          <div className="todosList">
                <div className="container">
                    <div className="d-flex flex-column align-items-center ">
                     
                        
                           <Todos/>


                        </div>
                        
              
                </div>
          </div>
        </main>
    </div>
                </TodoContext.Provider>
        </>
    );
}

export default Main;