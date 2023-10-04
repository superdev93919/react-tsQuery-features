import axios from 'axios';
import { useApiMocks } from './config';
import {
    addTodoApiMock,
    deleteTodoApiMock,
    getTodosApiMock,
    updateTodoApiMock,
} from './mocks/todosApiMocks';
import { TodoType } from '../types';

const todosApi = axios.create({
    baseURL: 'http://localhost:4000',
});
export const getTodosApi = async () => {
    return useApiMocks
        ? getTodosApiMock()
        : todosApi.get('/todos', { withCredentials: false }).then(response => {
              const data = response.data;
              return data;
          });
};
export const addTodoApi = async (todo: TodoType) => {
    return useApiMocks
        ? addTodoApiMock(todo)
        : todosApi.post('/todos', todo).then(response => {
              const data = response.data;
              return data;
          });
};
export const updateTodoApi = async (todo: TodoType) => {
    return useApiMocks
        ? updateTodoApiMock(todo)
        : await todosApi.patch(`/todos/${todo.id}`, todo).then(response => {
              const data = response.data;
              return data;
          });
};
export const deleteTodoApi = async (id: string) => {
    return useApiMocks
        ? deleteTodoApiMock(id)
        : todosApi.delete(`/todos/${id}`);
};

export default todosApi;
