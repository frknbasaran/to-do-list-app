// Actions
const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILED = 'auth/LOGIN_FAILED';

let initialState = {
    isLogged:false,
    isLoading:false
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOGIN:
            return {
                isLogged:false,
                isLoading:true
            }
        case LOGIN_SUCCESS:
            return {
                isLogged:true,
                isLoading:false,
                user:action.result
            }
        case LOGIN_FAILED:
            return {
                isLogged:false,
                isLoading:false
            }
        default: return state;
    }
}

export function login(username,password){
    return {
        types:[LOGIN,LOGIN_SUCCESS,LOGIN_FAILED],
        promise: (client)=>{
            return client.post('/login',{data :{username,password}})
        }
    }
}