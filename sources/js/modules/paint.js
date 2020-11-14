const modalList = new ModalList();

function f_pintarPerfil(data) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = createProfile(data);
    const profile = document.querySelector('#perfil')
    while(wrapper.childNodes.length > 0) {
        profile.appendChild(wrapper.childNodes[0])
    }
    f_crearProgress(document.querySelector('.progress__svg')); // Debo actualizar el progress bar, hay que calcular el nivel y los sport coins
}

function f_pintarActividades(data) {

    actividades = data; // guardo las actividades como global para usarlas en cálculo

    // console.info('MI DATA ACTIVIDADES ES --> ' , data);
    // Guardo los ids de las actividades
    let actividadesId = data.map(({ id }) => id);
    // console.info("IDs actividades --> ", actividadesId);

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
