const formatId = (id) => `#modal${id}`;

const formatDistance = (distance) => `${(distance / 1000).toPrecision(3)} km`;

const formatDate = (start_date_local) => {
    let fecha = new Date(start_date_local);
    let hoy = new Date();

    if(fecha.toDateString() === hoy.toDateString()) {
        return `Hoy ${fecha.toLocaleDateString()}`;
    } else {
        return `${f_obtenerDia(fecha.getDay())} ${fecha.toLocaleDateString()}`;
    }
}

const formatIcon = (type) => {
    const icons = {
        Ride: 'icon-cycling',
        Walk: 'icon-running',
        Swimm: 'icon-swimming'
    }
    return icons[type] || 'icon-sports';
}

const formatModalActivityId = (id) => `modal${id}`;

const formatFoto = (photos) => photos.count > 0 ? photos.primary.urls[600] : '../img/activity-photo.jpg';

const formatMovingTime = (movingTime) => f_convertirTiempo(movingTime);

const formatCoins = (coins = 50) => `${coins} sport coins`

const formatPercentage = (percentage = 50) => percentage;

const formatLevel = (level = 1) => `LVL ${level}`;
