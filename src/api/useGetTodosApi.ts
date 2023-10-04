import { useQuery } from 'react-query';
import { getTodosApi } from './todoApi';
import { TodoType } from '../types';

export const useGetTodosApi = () => {
    const {
        isLoading,
        isError,
        error,
        data: todos,
    } = useQuery('todos', getTodosApi, {
        select: data =>
            data.sort((a: TodoType, b: TodoType) =>
                a.createdAt.localeCompare(b.createdAt)
            ),
        onSuccess: () => {
            console.log('success');
        },
        onError: () => {
            console.log('error');
        },
    });
    return { isLoading, isError, error, todos };
};
