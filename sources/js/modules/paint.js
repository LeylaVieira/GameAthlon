function f_pintarPerfil(data) {

    const templateScriptPerfil = document.getElementById('plantilla-perfil').innerHTML;
    const theTemplate = Handlebars.compile(templateScriptPerfil);
    const theCompiledHtml = theTemplate(data);

    document.getElementById('perfil').innerHTML = theCompiledHtml;

    f_crearProgress(document.querySelector('.progress__svg')); // Debo actualizar el progress bar, hay que calcular el nivel y los sport coins
}

function f_pintarActividades(data) {

    actividades = data; // guardo las actividades como global para usarlas en cálculo

    // console.info('MI DATA ACTIVIDADES ES --> ' , data);
    // Guardo los ids de las actividades
    let actividadesId = data.map(({ id }) => id);
    // console.info("IDs actividades --> ", actividadesId);

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

    const templateScriptModal = document.getElementById('plantilla-modal').innerHTML;
    const theTemplateModal = Handlebars.compile(templateScriptModal);
    const theCompiledHtml = theTemplateModal(data);

    document.querySelector('body').innerHTML += theCompiledHtml; // Pinto la modal en el body

    // Creo la modal y la inicializo
    let modal = new Modal(document.querySelector(`[id='modal${data.id}']`));
    console.info('ID modal -->', data.id);
    modal.init();

    MODALS.push(modal);

    // let modal = document.querySelector(`[id='modal${data.id}']`);
    // MODALS.push(new Modal(modal));

    // MODALS.forEach(modal => {
	// 	modal.init();
	// });
}
