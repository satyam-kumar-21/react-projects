import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            todo : "todo message",
            completed: false
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(ToDoContext)
}

export const Todoprovider = ToDoContext.Provider