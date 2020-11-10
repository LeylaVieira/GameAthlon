const HTML = document.querySelector('html');



(function() {
    f_detectDevices();
    f_crearModales();
    if(document.getElementsByTagName('body')[0].classList.contains('Home')) {
        f_crearProgress(document.querySelector('.progress__svg'));
    }
    f_getActivities();
})();
