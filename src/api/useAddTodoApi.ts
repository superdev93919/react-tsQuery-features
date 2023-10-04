import { useMutation, useQueryClient } from 'react-query';
import { addTodoApi } from './todoApi';

export const useAddTodoApi = () => {
    const queryClient = useQueryClient();
    const {
        isLoading,
        isError,
        isSuccess,
        mutate: addTodo,
    } = useMutation(addTodoApi, {
        onSuccess: async data => {
            console.log('success creating post', data);
            queryClient.invalidateQueries('todos');
        },
        onError: async () => {
            console.log(`Error ocurred`);
        },
    });
    return { isLoading, isError, isSuccess, addTodo };
};
