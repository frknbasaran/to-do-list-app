import superagent from 'superagent';

const methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path) {
    return path;
}

export default class ApiClient {
    constructor(req) {
        methods.forEach((method) =>
            this[method] = (path, data = {}) => new Promise((resolve, reject) => {
                const request = superagent[method](formatUrl(path));

                if (data) {
                    request.send(data);
                }

                request.end((err, {body} = {}) => {
                    return err ? reject(body || err) : resolve(body.data)
                });
            }));
    }
}