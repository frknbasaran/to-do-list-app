import constants from '../../constants';

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
    isLoading: false,
    tasks: [],
    task: {id: 0, title: ""}
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case GET_TASKS:
            return {
                ...state,
                isLoading: true
            }
        case TASKS_TAKEN:
            return {
                ...state,
                isLoading: false,
                tasks: action.result
            }
        case CREATE_TASK:
            return {
                ...state,
                isLoading: true,
                task: action.result
            }
        case CREATED_TASK:
            return {
                ...state,
                isLoading: false,
                task: action.result
            }
        case EDIT_TASK:
            return {
                ...state,
                isLoading: true,
                task: action.result
            }
        case EDITED_TASK:
            return {
                ...state,
                isLoading: false,
                task: action.result
            }
        case FAILED:
            return {
                ...state,
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
            return client.get(constants.apiRoot + constants.tasks.getAll);
        }
    }
}

export function createTask({id, title}) {
    return {
        types: [CREATE_TASK, CREATED_TASK, FAILED],
        promise: (client) => {
            return client.post('/tasks', {id, title})
        }
    }
}

export function editTask({id, title}) {
    return {
        types: [EDIT_TASK, EDITED_TASK, FAILED],
        promise: (client) => {
            return client.put('/tasks/' + id, {id, title})
        }
    }
}

export function removeTask(id) {
    return {
        types: [DELETE_TASK, DELETED_TASK, FAILED],
        promise: (client) => {
            return client.delete('/tasks/' + id);
        }
    }
}