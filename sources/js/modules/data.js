// const key = 'Bearer 4854e988d0f535b2bbc8b616674a01d822e9f23c';

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

function f_pintarPerfil(data) {

    const templateScriptPerfil = document.getElementById('plantilla-perfil').innerHTML;
    const theTemplate = Handlebars.compile(templateScriptPerfil);
    const theCompiledHtml = theTemplate(data);

    document.getElementById('perfil').innerHTML = theCompiledHtml;

    f_crearProgress(document.querySelector('.progress__svg')); // Debo actualizar el progress bar, hay que calcular el nivel y los sport coins
}

function f_pintarActividades(data) {

    console.info('MI DATA ACTIVIDADES ES --> ' , data);
    // Guardo los ids de las actividades
    let actividadesId = data.map(({ id }) => id);
    console.info("IDs actividades --> ", actividadesId);

    Handlebars.registerHelper('modalId', function() {
        return `#modal${this.id}`;
    });

    Handlebars.registerHelper('distancia', function() {
        return `${(this.distance / 1000).toPrecision(3)} km`;
    });

    Handlebars.registerHelper('fecha', function() {
        let fecha = new Date(this.start_date_local);
        return `${f_obtenerDia(fecha.getDay())} ${fecha.toLocaleDateString()}`
    });

    Handlebars.registerHelper('icono', function () {
        switch (this.type) {
            case 'Ride':
                return 'icon-cycling';
            case 'Walk':
                return 'icon-running';
            case 'Swimm':
                return 'icon-swimming';
            default:
                return 'icon-sports';
        }
    });

    const templateScript = document.getElementById('plantilla-actividades').innerHTML;
    const theTemplate = Handlebars.compile(templateScript);
    const theCompiledHtml = theTemplate(data);

    document.getElementById('list').innerHTML = theCompiledHtml;

    // =================================================================
    // Debo hacer las peticiones para obtener los datos de cada actividad y pintar las modales

    for (const id of actividadesId) {
        let activityUrl = `https://www.strava.com/api/v3/activities/${id}`;
        console.info('La URL que llamo --> ', activityUrl);
        f_getData(keys.actividades, activityUrl, f_pintarModal);
    }

}

function f_pintarModal(data) {
    Handlebars.registerHelper('modalActivityId', function() {
        return `modal${this.id}`;
    });

    Handlebars.registerHelper('foto', function() {
        if(this.photos.count > 0) {
            return this.photos.primary.urls[600];
        } else {
            return '../img/activity-photo.jpg';
        }
    });

    const templateScriptModal = document.getElementById('plantilla-modal').innerHTML;
    const theTemplateModal = Handlebars.compile(templateScriptModal);
    const theCompiledHtml = theTemplateModal(data);

    document.querySelector('body').innerHTML += theCompiledHtml; // Pinto la modal en el body

    // Creo la modal y la inicializo
    let modal = new Modal(document.querySelector(`[id='modal${data.id}']`));
    modal.init();

    MODALS.push(modal);

    // let modal = document.querySelector(`[id='modal${data.id}']`);
    // MODALS.push(new Modal(modal));

    // MODALS.forEach(modal => {
	// 	modal.init();
	// });
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
