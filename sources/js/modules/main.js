const HTML = document.querySelector('html');
const BODY = document.querySelector('body');
let lastActiveFocusElement;

let currentPageNumber = 1;
const previousButton = document.getElementById('previusButton');
const nextButton = document.getElementById('nextButton');

(function() {
    f_detectDevices();

    // ==================
    // PERFIL
    // ==================
    const perfilUrl = 'https://www.strava.com/api/v3/athlete';
    f_getData(keys.perfil, perfilUrl, f_pintarPerfil);

    // ===================
    // LISTADO ACTIVIDADES
    // ===================
    let activitiesUrl = `https://www.strava.com/api/v3/athlete/activities?page=${currentPageNumber}&per_page=2`;
    f_getData(keys.actividades, activitiesUrl, f_pintarActividades);
    Utils.updateButtons();

    previousButton.addEventListener('click', () => {
        currentPageNumber--;
        Utils.updateButtons();
        activitiesUrl = `https://www.strava.com/api/v3/athlete/activities?page=${currentPageNumber}&per_page=2`;
        f_getData(keys.actividades, activitiesUrl, f_pintarActividades);
    });
    nextButton.addEventListener('click', () => {
        currentPageNumber++;
        Utils.updateButtons();
        activitiesUrl = `https://www.strava.com/api/v3/athlete/activities?page=${currentPageNumber}&per_page=2`;
        f_getData(keys.actividades, activitiesUrl, f_pintarActividades);
    });

})();
