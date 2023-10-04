import { useMutation, useQueryClient } from 'react-query';
import { deleteTodoApi } from './todoApi';

export const useDeleteTodoApi = () => {
    const queryClient = useQueryClient();
    const {
        isLoading,
        isError,
        isSuccess,
        mutate: deleteTodo,
    } = useMutation(deleteTodoApi, {
        onSuccess: async data => {
            console.log('success creating post', data);
            queryClient.invalidateQueries('todos');
        },
        onError: async () => {
            console.log(`Error ocurred`);
        },
    });
    return { isLoading, isError, isSuccess, deleteTodo };
};