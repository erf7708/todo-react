import React from "react"
const TodoContext = React.createContext({
    todos:[],
    addTodo:()=>{}
}) 

export default TodoContext;