function f_obtenerDia(num){
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return dias[num];
}

function f_convertirTiempo(segundosActividad) {
    let segundos = (Math.round(segundosActividad % 0x3C)).toString();
    let horas    = (Math.floor(segundosActividad / 0xE10)).toString();
    let minutos  = (Math.floor(segundosActividad / 0x3C) % 0x3C).toString();

    if(minutos < 10) {
        minutos = `0${minutos}`;
    }

    return `${horas}:${minutos}:${segundos}`;
}


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
