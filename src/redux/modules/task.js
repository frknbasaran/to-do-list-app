import constants from '../../constants';

// Actions
const GET_TASKS = 'tasks/GET_TASKS';
const TASKS_TAKEN = 'tasks/TASKS_TAKEN';
const GET_TASK = 'tasks/GET_TASK';
const TASK_TAKEN = 'tasks/TASK_TAKEN';
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
    task: {},
    taskCreated: false
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case GET_TASKS:
            return {
                ...state,
                isLoading: true,
                taskCreated: false
            }
        case GET_TASK:
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
        case TASK_TAKEN:
            return {
                ...state,
                isLoading: false,
                task: action.result
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
                taskCreated: true,
                task: action.result
            }
        case DELETED_TASK:
            return {
                ...state,
                isLoading: false,
                tasks: action.result
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

export function getTask(id) {
    return {
        types: [GET_TASK, TASK_TAKEN, FAILED],
        promise: (client) => {
            return client.get(constants.apiRoot + constants.tasks.getOne + id);
        }
    }
}

export function createTask({id, title}) {
    return {
        types: [CREATE_TASK, CREATED_TASK, FAILED],
        promise: (client) => {
            return client.post(constants.apiRoot + constants.tasks.create, {title});
        }
    }
}

export function editTask(id, title) {
    return {
        types: [EDIT_TASK, EDITED_TASK, FAILED],
        promise: (client) => {
            return client.put(constants.apiRoot + constants.tasks.edit + id, {id, title})
        }
    }
}

export function removeTask(id) {
    return {
        types: [DELETE_TASK, DELETED_TASK, FAILED],
        promise: (client) => {
            return client.del(constants.apiRoot + constants.tasks.delete + id);
        }
    }
}
