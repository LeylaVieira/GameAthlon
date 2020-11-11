const MODALS = []

let currentModal = null;

class Modal {
    constructor(element) {
        this.element = element;
		this.id = this.element.id;
		this.close = this.element.querySelector('.modal__btn');
		this.trigger = document.querySelector(`[href='#${this.element.id}']`);
    }

    init() {
		this.listeners();
	}

	listeners() {
		this.trigger.addEventListener('click', e => {
			e.stopPropagation();
			this.show();
		})

		this.close.addEventListener('click', e => {
			e.stopPropagation();
			this.hide();
			Utils.removeBodyClass('is-visible-modal');
		})
    }

    show() {
		this.hideAll();
		currentModal = this.id;
		this.element.classList.add('is-visible');
		// Accessibility concerns
		this.element.setAttribute('aria-hidden', false);
		document.querySelector('.Home').setAttribute('aria-hidden', true);
		lastActiveFocusElement = document.activeElement;
		this.element.focus();
		Utils.addBodyClass('is-visible-modal');
	}

	hide() {
		// console.info("LASTACTIVE HIDE--> ", lastActiveFocusElement);
		this.element.classList.remove('is-visible');
		// Accessibility concerns
		this.element.setAttribute('aria-hidden', true);
		document.querySelector('.Home').setAttribute('aria-hidden', false);
		lastActiveFocusElement.focus();
		lastActiveFocusElement = null;
    }

    hideAll() {
		MODALS.forEach(modal => {
			modal.element.classList.remove('is-visible');
		})
	}
}