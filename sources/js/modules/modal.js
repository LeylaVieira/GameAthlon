// ========================================================
// Modal
// ========================================================
function f_crearModales() {
    let triggers = document.querySelectorAll('.card');
    let buttons = document.querySelectorAll('.modal__btn');

    triggers.forEach(trigger => {
        if (trigger.getAttribute('href')) {
            let target = trigger.getAttribute('href').substr(1);
            trigger.addEventListener('click', function() {
                let modal = document.getElementById(target);
                modal.classList.add('is-visible');
                modal.setAttribute('aria-hidden', false);
                document.getElementsByTagName('body')[0].classList.add('is-visible-modal');
                lastActiveFocusElement = document.activeElement;
                modal.focus();
            });
        }
    });

    buttons.forEach(button => {
        button.addEventListener('click', function(e){
            let modal = this.closest('.modal');
            if(modal) {
                modal.classList.remove('is-visible');
                modal.setAttribute('aria-hidden', true);
                document.getElementsByTagName('body')[0].classList.remove('is-visible-modal');
                lastActiveFocusElement.focus();
                lastActiveFocusElement = null;
            }
        }, true);
    });
}