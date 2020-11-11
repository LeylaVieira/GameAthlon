const HTML = document.querySelector('html');
const BODY = document.querySelector('body');
let lastActiveFocusElement;


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
    const activitiesUrl = 'https://www.strava.com/api/v3/athlete/activities';
    f_getData(keys.actividades, activitiesUrl, f_pintarActividades);

})();
