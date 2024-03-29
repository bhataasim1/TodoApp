import { useState } from 'react'
import { useTodo } from '../context';
import {FaTrash} from 'react-icons/fa'

type Todo = {
    id: number;
    title: string;
    completed: boolean;
  };

type TodoItemProps = {
    todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {

    const [isTodoEditable, setIsTodoEditable] = useState<boolean>(false);
    const [newTitle, setNewTitle] = useState<string>(todo.title);
    
    const {updateTodo, deleteTodo, isCompleted} = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, {...todo, title: newTitle});
        setIsTodoEditable(false);
    }

    const toggleCompleted = () => {
        isCompleted(todo.id);
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                readOnly={!isTodoEditable}
            />
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-300 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-300 shrink-0 text-red-600 hover:text-red-700"
                onClick={() => deleteTodo(todo.id)}
            >
                <FaTrash />
            </button>
        </div>
    );
}

export default TodoItem;