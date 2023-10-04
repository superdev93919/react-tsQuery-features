import { useRef } from 'react';
import { useDeleteTodoApi } from '../api/useDeleteTodoApi';
import { useGetTodosApi } from '../api/useGetTodosApi';
import { useUpdateTodoApi } from '../api/useUpdateTodoApi';
import Check from '../components/icons/Check';
import Heart from '../components/icons/Heart';
import Trash from '../components/icons/Trash';
import { TodoType } from '../types';
import { useAddTodoApi } from '../api/useAddTodoApi';
// import { v4 as uuidv4 } from 'uuid';

// https://www.youtube.com/watch?v=lLWfZL-Y8lM
function App() {
    const todoRef = useRef<HTMLInputElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const { todos, isLoading, error } = useGetTodosApi();
    const { updateTodo } = useUpdateTodoApi();
    const { deleteTodo } = useDeleteTodoApi();
    const { addTodo } = useAddTodoApi();

    if (isLoading) return <div>Loading posts...</div>;

    if (error) return <div>An error has occurred</div>;

    function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        if (todoRef.current) {
            console.log(todoRef.current.value);
            addTodo({
                userId: 'a3deb297-9b58-4dbe-a12e-de5c60489ba4',
                title: todoRef.current.value,
                completed: false,
                liked: false,
                createdAt: new Date().toISOString(),
            });
            if (formRef.current) formRef.current.reset();
        }
    }

    return (
        <div>
            <form ref={formRef} onSubmit={handleSubmit}>
                <input
                    ref={todoRef}
                    id='newTodo'
                    type='text'
                    className='border p-1'
                    required
                />
                <button className='border p-1'>Submit</button>
            </form>
            <ul>
                {todos.map((todo: TodoType) => (
                    <li
                        key={todo.id}
                        className={`flex items-center space-x-3 ${
                            todo.completed ? ' text-slate-300' : ''
                        }`}
                    >
                        <button
                            onClick={() =>
                                updateTodo({
                                    ...todo,
                                    completed: !todo.completed,
                                })
                            }
                        >
                            <Check isChecked={todo.completed} />
                        </button>
                        <button
                            onClick={() =>
                                updateTodo({
                                    ...todo,
                                    liked: !todo.liked,
                                })
                            }
                        >
                            <Heart isFilled={!todo.liked} />
                        </button>
                        <button onClick={() => deleteTodo(todo.id!)}>
                            <Trash />
                        </button>
                        <label htmlFor={todo.id}>{todo.title}</label>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
