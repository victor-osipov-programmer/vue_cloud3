const base_url = 'http:localhost:8000'

export function query(url, options) {
    if (options?.body && Object.getPrototypeOf(options.body) == Object.prototype) {
        options.body = JSON.stringify(options.body)
        if (!options.headers?.['Content-Type']) {
            options = {
                headers: {
                    'Content-Type': 'application/json'
                },
                ...options
            }
        } 
    }
        
    return fetch(new URL(url, base_url), {
        'headers': {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        ...options
    })
}