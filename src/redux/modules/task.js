// Actions
const GET_TASKS = 'tasks/GET_TASKS';
const TASKS_TAKEN = 'tasks/TASKS_TAKEN';
const CREATE_TASK = 'tasks/CREATE_TASK';
const EDIT_TASK = 'tasks/EDIT_TASK';
const CREATED_TASK = 'tasks/CREATED_TASK';
const EDITED_TASK = 'tasks/EDITED_TASK';

let initialState = {
    isLoading:false
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case GET_TASKS:
            return {
                isLoading:true
            }
        case TASKS_TAKEN:
            return {
                isLoading:false,
                tasks:action.tasks
            }
        case CREATE_TASK:
            return {
                isLoading:true,
                task:action.task
            }
        case CREATED_TASK:
            return {
                isLoading:false,
                task: action.task
            }
        case EDIT_TASK:
            return {
                isLoading:true,
                task:action.task
            }
        case EDITED_TASK:
            return {
                isLoading:false,
                task:action.task
            }
        default:
            return state;
    }
}

export function getTasks() {
    return {type:GET_TASKS};
}

export function tasksTaken(tasks) {
    return {type:TASKS_TAKEN,tasks};
}

export function createTask(task) {
    return {type:CREATE_TASK,task};
}

export function createdTask(task) {
    return {type:CREATED_TASK,task};
}

export function editTask(task) {
    return {type:EDIT_TASK, task};
}

export function editedTask(task) {
    return {type:EDITED_TASK, task};
}