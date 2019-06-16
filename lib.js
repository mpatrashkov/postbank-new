const url = "http://192.168.43.27:9999/";

export function fetchPost(address, data) {
    return fetch( url + address, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data)
    });
}