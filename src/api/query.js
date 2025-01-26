const base_url = 'http:localhost:8000'

export function query(url, options) {
    if (options?.body && Object.getPrototypeOf(options.body) == Object.prototype) {
        options.body = JSON.stringify(options.body)
    }
        
    return fetch(new URL(url, base_url), {
        'headers': {
            // 'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        ...options
    })
}