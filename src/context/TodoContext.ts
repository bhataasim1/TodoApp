import { createContext, useContext } from 'react'

type Todo = {
    id: number,
    title: string,
    completed: boolean
};

type TodoContextType = {
    todos: Todo[],
    addTodo: (title: Todo) => void,
    updateTodo: (id: number, title: Todo) => void,
    deleteTodo: (id: number) => void,
    isCompleted: (id: number) => void
}

export const TodoContext = createContext<TodoContextType>({
    todos: [],
    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
    isCompleted: () => {}
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;