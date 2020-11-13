function f_crearHelpers() {
    Handlebars.registerHelper('modalId', function() {
        return `#modal${this.id}`;
    });

    Handlebars.registerHelper('distancia', function() {
        return `${(this.distance / 1000).toPrecision(3)} km`;
    });

    Handlebars.registerHelper('fecha', function() {
        let fecha = new Date(this.start_date_local);
        let hoy = new Date();

        if(fecha.toDateString() === hoy.toDateString()) {
            return `Hoy ${fecha.toLocaleDateString()}`;
        } else {
            return `${f_obtenerDia(fecha.getDay())} ${fecha.toLocaleDateString()}`
        }
    });

    Handlebars.registerHelper('icono', function () {
        switch (this.type) {
            case 'Ride':
                return 'icon-cycling';
            case 'Walk':
                return 'icon-running';
            case 'Swimm':
                return 'icon-swimming';
            default:
                return 'icon-sports';
        }
    });

    Handlebars.registerHelper('modalActivityId', function() {
        return `modal${this.id}`;
    });

    Handlebars.registerHelper('foto', function() {
        if(this.photos.count > 0) {
            return this.photos.primary.urls[600];
        } else {
            return '../img/activity-photo.jpg';
        }
    });

    Handlebars.registerHelper('tiempo', function() {
        return f_convertirTiempo(this.moving_time);
    });

    Handlebars.registerHelper('coins', function() {
        let coins = 50; // Realizar la función para el cálculo
        return `${coins} sport coins`;
    });

    Handlebars.registerHelper('nivel', function() {
        let nivel = 1; // Realizar la función para el cálculo
        return `LVL ${nivel}`;
    });

    Handlebars.registerHelper('porcentaje', function() {
        let porcentaje = 50; // Realizar la función para el cálculo
        return porcentaje;
    });
}