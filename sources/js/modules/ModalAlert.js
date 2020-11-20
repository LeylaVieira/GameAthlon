class ModalAlert {
    constructor(id) {
        this.id = id
    }
    getElement() {
		if (!this.element) {
			this.element = document.querySelector(this.id);
		}
		return this.element;
	}
    getClose() {
		if (!this.close) {
			this.close = this.getElement().querySelector('.modal__btn');
		}
		return this.close;
    }
    init() {
		this.registerListeners();
    }
    registerListeners() {
		this.getClose().addEventListener('click', e => {
            this.hide();
			Utils.removeBodyClass('is-visible-modal');
			history.replaceState(null, null, '/');
		})
    }
    show() {
		const element = this.getElement();
		element.classList.add('is-visible');
		// Accessibility concerns
		element.setAttribute('aria-hidden', false);
		document.querySelector('.Home').setAttribute('aria-hidden', true);
		lastActiveFocusElement = document.activeElement;
		element.focus();
		Utils.addBodyClass('is-visible-modal');
    }
    hide() {
		// console.info("LASTACTIVE HIDE--> ", lastActiveFocusElement);
		const element = this.getElement();
		if(element.classList.contains('is-visible')) {
			element.classList.remove('is-visible');
			// Accessibility concerns
			element.setAttribute('aria-hidden', 'true');
			document.querySelector('.Home').setAttribute('aria-hidden', 'false');
			lastActiveFocusElement.focus();
			lastActiveFocusElement = null;
		}
    }
}