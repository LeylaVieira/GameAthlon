class Modal {
    constructor(id) {
        this.id = id
    }

    getId() {
		return this.id;
	}

    getElement() {
		if (!this.element) {
			this.element = document.querySelector(`#modal${this.id}`);
		}
		return this.element;
	}

	getTrigger() {
		if (!this.trigger) {
			this.trigger = document.querySelector(`[href='#modal${this.id}']`);
		}
		return this.trigger;
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
		this.getTrigger().addEventListener('click', e => {
			this.show();
		})

		this.getClose().addEventListener('click', e => {
			Utils.removeBodyClass('is-visible-modal');
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
