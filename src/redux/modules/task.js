// Actions
const GET_TASKS = 'tasks/GET_TASKS';
const TASKS_TAKEN = 'tasks/TASKS_TAKEN';
const CREATE_TASK = 'tasks/CREATE_TASK';
const EDIT_TASK = 'tasks/EDIT_TASK';
const CREATED_TASK = 'tasks/CREATED_TASK';
const EDITED_TASK = 'tasks/EDITED_TASK';
const DELETE_TASK = 'tasks/DELETE_TASK';
const DELETED_TASK = 'tasks/DELETED_TASKS';
const FAILED = 'tasks/REQUEST_FAILED';

let initialState = {
    isLoading: false
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case GET_TASKS:
            return {
                isLoading: true
            }
        case TASKS_TAKEN:
            return {
                isLoading: false,
                tasks: action.tasks
            }
        case CREATE_TASK:
            return {
                isLoading: true,
                task: action.task
            }
        case CREATED_TASK:
            return {
                isLoading: false,
                task: action.task
            }
        case EDIT_TASK:
            return {
                isLoading: true,
                task: action.task
            }
        case EDITED_TASK:
            return {
                isLoading: false,
                task: action.task
            }
        case FAILED:
            return {
                isLoading: false
            }
        default:
            return state;
    }
}

export function getTasks() {
    return {
        types: [GET_TASKS, TASKS_TAKEN, FAILED],
        promise: (client) => {
            return client.get('/tasks');
        }
    }
}

export function createTask({id, title}) {
    return {
        types: [CREATE_TASK, CREATED_TASK, FAILED],
        promise: (client) => {
            return client.post('/tasks', {id,title})
        }
    }
}

export function editTask({id, title}) {
    return {
        types: [EDIT_TASK, EDITED_TASK, FAILED],
        promise: (client) => {
            return client.put('/tasks/'+id, {id,title})
        }
    }
}

export function removeTask(id) {
    return {
        types: [DELETE_TASK, DELETED_TASK, FAILED],
        promise: (client) => {
            return client.delete('/tasks/'+id);
        }
    }
}