export default function httpMiddleware(client) {
    return ({dispatch, getState}) => {
        return next => action => {
            if (typeof action === 'function') {
                // thunk
                return action(dispatch, getState);
            }

            const {promise, types, ...rest} = action;

            if (!promise) {
                return next(action);
            }

            const [REQUEST, SUCCESS, FAILURE] = types;
            next({...rest, type: REQUEST});

            const actionPromise = promise(client);
            actionPromise.then(
                (result) => {
                    return next({...rest, result, type: SUCCESS})
                },
                (error) => {
                    return next({...rest, error, type: FAILURE})
                })
                .catch((error) => {
                    console.error('MIDDLEWARE ERROR:', error);
                    next({...rest, error, type: FAILURE});
                });

            return actionPromise;
        };
    };
}