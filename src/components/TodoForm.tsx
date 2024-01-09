import { useState } from "react";
import { useTodo } from "../context";

function TodoForm() {

    const [todo, setTodo] = useState<string>("");
    const { addTodo } = useTodo();

    const createTodo = (e: React.FormEvent) => {
        e.preventDefault();

        if(!todo.trim()) return;

        addTodo({id: Date.now(), title: todo, completed: false});
        setTodo("");
    }

    return (
        <form onSubmit={createTodo} className="flex">
            <input
                type="text"
                placeholder="Add Your Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 hover:bg-green-700">
                Add
            </button>
        </form>
    );
}

export default TodoForm;