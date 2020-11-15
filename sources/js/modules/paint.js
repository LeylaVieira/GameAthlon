const modalList = new ModalList();
let atletaData = null;

function f_pintarPerfil(data) {
    // Para pintar todo el perfil, debo obtener el atleta y usar su id para consultar sus stats
    atletaData = data;
    let statsUrl = `https://www.strava.com/api/v3/athletes/${data.id}/stats`;
    console.info('STATSURL --> ', statsUrl);
    f_getData(keys.perfil, statsUrl, f_pintarStats);
}

function f_pintarStats(data) {
    // console.info('ATLETA --> ', atletaData);
    // console.info('STATS DATA --> ', data);

    // Oculto loader
    document.getElementById('loader').classList.add('no-visible');

    let distance = (data.all_ride_totals.distance + data.all_run_totals.distance + data.all_swim_totals.distance) / 1000;
    let experience = calculateExperience(distance);
    let level = calculateLevel(experience);

    // console.info('TOTAL DISTANCIA RECORRIDA --> ', distance);
    const perfil = {
        'profile' : atletaData.profile,
        'level': `LVL ${level}`,
        'percentage' : `${calculatePercentage(experience, level)}`,
        'fullname': `${atletaData.firstname} ${atletaData.lastname}`,
        'coins': `${calculateCoins(distance)} sport coins`
    }

    const wrapper = document.createElement('div');
    wrapper.innerHTML = createProfile(perfil);
    const profile = document.querySelector('#perfil');
    while(wrapper.childNodes.length > 0) {
        profile.appendChild(wrapper.childNodes[0]);
    }
    f_crearProgress(document.querySelector('.progress__svg')); // Debo actualizar el progress bar, hay que calcular el nivel y los sport coins

}

function f_pintarActividades(data) {

    // Guardo los ids de las actividades
    let actividadesId = data.map(({ id }) => id);

    const list = document.getElementById('list')
    const wrapper = document.createElement('div')
    data.forEach(actividad => {
        wrapper.innerHTML = createCard(actividad);
        // Es importante que sea firstElementChild ya que trata el elemento como HTML
        list.appendChild(wrapper.firstElementChild);
    })

    // =================================================================
    // Debo hacer las peticiones para obtener los datos de cada actividad y pintar las modales

    for (const id of actividadesId) {
        let activityUrl = `https://www.strava.com/api/v3/activities/${id}`;
        console.info('La URL que llamo --> ', activityUrl);
        f_getData(keys.actividades, activityUrl, f_pintarModal);
    }

}

function f_pintarModal(data) {
    const theNewModal = createModal(data);
    const wrapper = document.createElement('div')
    wrapper.innerHTML = theNewModal;
    document.querySelector('#modals').append(wrapper.firstElementChild);
    const modal = new Modal(data.id);
    console.info('ID modal -->', data.id);
    modal.init();
    modalList.add(modal);
    console.info("TENGO --> ", modalList.length);
}
