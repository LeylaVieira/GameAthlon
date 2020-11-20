function f_getData(key, url, callback) {

    const headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': key
    });

    const request = new Request(url, {
        method: 'GET',
        headers
    })

    fetch(request)
    .then(async response => {
        const res = await response.json();
        callback(res);
    })
    .catch(error => {
        console.error(error);
    })
}