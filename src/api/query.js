const base_url = 'http:localhost:8000'

export function query(url, options = {}) {
    if (!options.headers) options.headers = {}

    if (options.body && Object.getPrototypeOf(options.body) == Object.prototype) {
        options.body = JSON.stringify(options.body)
        options.headers['Content-Type'] = 'application/json'
    }
    options.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')
        
    return fetch(new URL(url, base_url), options)
}


export function handler(response, type = 'json') {
    if (response.ok) {
        return response[type]()
    } else {
        throw response;
    }
}