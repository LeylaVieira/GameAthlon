const modalList = new ModalList();
let atletaData = null;

function f_pintarPerfil(data) {
    atletaData = data;
    let statsUrl = `https://www.strava.com/api/v3/athletes/${data.id}/stats`;
    // console.info('STATSURL --> ', statsUrl);
    f_getData(keys.perfil, statsUrl, f_pintarStats);
}

function f_pintarStats(data) {
    document.getElementById('loader').classList.add('no-visible'); // Oculto loader

    let distance = (data.all_ride_totals.distance + data.all_run_totals.distance + data.all_swim_totals.distance) / 1000;
    let experience = calculateExperience(distance);
    let level = calculateLevel(experience);

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
    f_crearProgress(document.querySelector('.progress__svg')); // Actualizar progress bar

}

function f_pintarActividades(data) {

    if(data.length <= 0) {
        // Muestro la modal de alerta
        let modalAlert = new ModalAlert('#modalAlert');
        modalAlert.init();
        modalAlert.show();
        currentPageNumber--;
        // nextButton.disabled = true;
    } else {
        // Guardo los ids de las actividades
        let actividadesId = data.map(({ id }) => id);

        const list = document.getElementById('list');
        list.innerHTML = ""; // Limpio la lista
        document.querySelector('#modals').innerHTML = ""; // Limpio modales
        const wrapper = document.createElement('div');
        data.forEach(actividad => {
            wrapper.innerHTML = createCard(actividad);
            // Es importante que sea firstElementChild ya que trata el elemento como HTML
            list.appendChild(wrapper.firstElementChild);
        });

        // ==============================================================================
        // Recorro la lista y obtendo los detalles de cada actividad para pintar la modal
        for (const id of actividadesId) {
            let activityUrl = `https://www.strava.com/api/v3/activities/${id}`;
            // console.info('La URL que llamo --> ', activityUrl);
            f_getData(keys.actividades, activityUrl, f_pintarModal);
        }
    }

}

function f_pintarModal(data) {
    const theNewModal = createModal(data);
    const wrapper = document.createElement('div')
    wrapper.innerHTML = theNewModal;
    document.querySelector('#modals').append(wrapper.firstElementChild);
    const modal = new Modal(data.id);
    // console.info('ID modal -->', data.id);
    modal.init();
    // modalList.add(modal);
    // console.info("TENGO --> ", modalList.length);
}
