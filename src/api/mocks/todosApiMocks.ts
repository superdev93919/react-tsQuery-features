import { TodoType } from '../../types';
import { request } from './requestMock';

export const getTodosApiMock = () =>
    request([
        {
            id: 'd3ffe4e0-d0a0-4653-8863-702b38a55f72',
            userId: 'f5f93b1d-259f-44e3-9c46-2fc20fcb392c',
            title: 'Stand-alone bi-directional portal',
            completed: false,
            createdAt: '2023-03-18T06:21:15Z',
        },
        {
            id: '337a01a5-bcbf-41fa-b818-cb0ea4c148fd',
            userId: 'f5f93b1d-259f-44e3-9c46-2fc20fcb392c',
            title: 'Right-sized zero administration system engine',
            completed: true,
            createdAt: '2023-09-02T03:35:52Z',
        },
        {
            id: 'db374f2e-0cab-4808-84e5-981d0e62c3e2',
            userId: 'f5f93b1d-259f-44e3-9c46-2fc20fcb392c',
            title: 'Reactive regional middleware',
            completed: true,
            createdAt: '2022-12-08T14:13:19Z',
        },
    ]);

export const addTodoApiMock = (todo: TodoType) => {
    return request(todo);
};
export const updateTodoApiMock = (todo: TodoType) => {
    return request(todo);
};
export const deleteTodoApiMock = (id: string) => {
    return request({
        id,
        userId: 'f5f93b1d-259f-44e3-9c46-2fc20fcb392c',
        title: 'Stand-alone bi-directional portal',
        completed: false,
        createdAt: '2023-03-18T06:21:15Z',
    });
};
