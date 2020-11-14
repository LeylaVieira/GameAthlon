class ModalList{
    constructor() {
        this.modals = [];
        this.activeModal = null;
    }

    get length() {
        return this.modals.length;
    }

    add(modal) {
        this.modals = [...this.modals, modal];
        // Pregunta: ¿por qué hago esto?
        modal.getTrigger().addEventListener('click', (e) => {
            e.stopPropagation()
            if (this.activeModal) {
                this.hide();
            }
            const id = e.currentTarget.dataset.id;
            const element = this.modals.find(modal => modal.getId() === parseInt(id));
            element.show();
            this.activeModal = element;
            Utils.addBodyClass('is-visible-modal');
        });
        modal.getClose().addEventListener('click', (e) => {
            e.stopPropagation()
            this.activeModal.hide()
            history.replaceState(null, null, '/');
            Utils.removeBodyClass('is-visible-modal');
            this.activeModal = null;
        });
        return this.modals
    }

    update(id, modal) {
        this.modals = this.modals.map(currentModal => {
            if (currentModal.id === id) {
                return modal;
            }
            return currentModal
        })
    }

    show(id) {
        if (this.activeModal) {
            this.activeModal.hide();
        }
        const modal = this.modals.find(currentModal => currentModal.id === id);
        modal.show();
        this.activeModal = modal;
    }

    hide() {
        this.activeModal.hide();
        this.activeModal = null;
    }
}
