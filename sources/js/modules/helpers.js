const RANGES = [0, 76, 688, 1548, 2700, 4300, 6624, 10060, 15112, 22400, 32656, 46732, 65592, 90316, 122100, 162252, 212200, 273484, 347760, 436800, 542488, 666828, 811936, 980044, 1173500, 1397764, 1646416, 1931148];

const formatId = (id) => `#modal${id}`;

const formatDistance = (distance) => `${(distance / 1000).toPrecision(3)} km`;

const formatSpeed = (speed) => `${speed.toPrecision(2)} km/h`;

const formatCalories = (calories) => `${Math.round(calories)} kcal`;

const formatElevation = (elevation) => `${Math.round(elevation)} m`;

const formatDate = (start_date_local) => {
    let date = new Date(start_date_local);
    let today = new Date();

    if(date.toDateString() === today.toDateString()) {
        return `Hoy ${fecha.toLocaleDateString()}`;
    } else {
        return `${f_obtenerDia(date.getDay())} ${date.toLocaleDateString()}`;
    }
}

const formatIcon = (type) => {
    const icons = {
        Ride: 'icon-cycling',
        Walk: 'icon-running',
        Swim: 'icon-swimming'
    }
    return icons[type] || 'icon-sports';
}

const formatModalActivityId = (id) => `modal${id}`;

const formatFoto = (photos) => photos.count > 0 ? photos.primary.urls[600] : '../img/activity-photo.jpg';

const formatMovingTime = (movingTime) => f_convertirTiempo(movingTime);

const calculateExperience = (distance) => {
    return Math.round(distance*1.2);
}

const calculateLevel = (experience) => {
    for (let i = 0; i < RANGES.length; i+=1) {
        if(i === RANGES.length - 1) { // Si es el último nivel
            return i;
        } else {
            if(experience >= RANGES[i] && experience < RANGES[i+1]) {
                return i;
            }
        }
    }
}

const calculateCoins = (distance) => {
    return Math.round(distance*.5);
}

const calculatePercentage = (experience, level) => {
    if (level === RANGES.length - 1) {
        return 100;
    } else {
        return Math.round((experience*100)/RANGES[level + 1]);
    }
}
