function f_getActivities() {
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer 4854e988d0f535b2bbc8b616674a01d822e9f23c'
    })

    const request = new Request('https://www.strava.com/api/v3/athlete/activities', {
        method: 'GET',
        headers,
    })

    fetch(request)
    .then(async response => {
        const res = await response.json()
        console.log(res);
    })
    .catch(error => {
        console.error(error);
    })
}