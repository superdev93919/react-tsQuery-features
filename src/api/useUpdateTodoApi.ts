import { useMutation, useQueryClient } from 'react-query';
import { updateTodoApi } from './todoApi';

export const useUpdateTodoApi = () => {
    const queryClient = useQueryClient();
    const {
        isLoading,
        isError,
        isSuccess,
        mutate: updateTodo,
    } = useMutation(updateTodoApi, {
        onSuccess: async (data) => {
            queryClient.invalidateQueries('todos');
        },
        onError: async () => {
            console.log(`Error ocurred`);
        },
    });
    return { isLoading, isError, isSuccess, updateTodo };
};
