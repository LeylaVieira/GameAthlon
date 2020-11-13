function f_obtenerDia(num){
    switch(num) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Lunes';
        case 2:
            return 'Martes';
        case 3:
            return 'Miércoles';
        case 4:
            return 'Jueves';
        case 5:
            return 'Viernes';
        default:
            return 'Sábado';
    }
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
