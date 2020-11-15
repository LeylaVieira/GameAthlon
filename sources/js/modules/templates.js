const createModal = ({
    id,
    type,
    name,
    start_date_local,
    distance,
    total_elevation_gain,
    moving_time,
    max_speed,
    photos,
    average_speed,
    calories
}) => `<article class="modal" id="${formatModalActivityId(id)}" aria-hidden="true" role="dialog" tabindex="-1">
            <header class="modal__header">
                <button class="btn btn--icon modal__btn">
                    <svg class="icon" width="24" height="24"><use xlink:href="img/sprite.svg#icon-close" /></svg>
                    <span class="sr-only">Close</span>
                </button>
            </header>
            <div class="modal__body">
                <div class="activity__header">
                    <svg class="activity__icon"><use xlink:href="img/sprite.svg#${formatIcon(type)}" /></svg>
                    <div class="activity__text">
                        <h3 class="activity__title">${name}</h3>
                        <time class="activity__time">${formatDate(start_date_local)}</time>
                    </div>
                </div>
                <div class="activity__body">
                    <figure class="activity__photo">
                        <img src="${formatFoto(photos)}" />
                    </figure>
                    <dl class="activity__stats">
                        <div class="activity__item">
                            <dt class="activity__term">Distancia</dt>
                            <dd class="activity__desc">${formatDistance(distance)}</dd>
                        </div>
                        <div class="activity__item">
                            <dt class="activity__term">Desnivel positivo</dt>
                            <dd class="activity__desc">${formatElevation(total_elevation_gain)}</dd>
                        </div>
                        <div class="activity__item">
                            <dt class="activity__term">Tiempo en movimiento</dt>
                            <dd class="activity__desc">${formatMovingTime(moving_time)}</dd>
                        </div>
                        <div class="activity__item">
                            <dt class="activity__term">Velocidad máxima</dt>
                            <dd class="activity__desc">${formatSpeed(max_speed)}</dd>
                        </div>
                        <div class="activity__item">
                            <dt class="activity__term">Velocidad promedio</dt>
                            <dd class="activity__desc">${formatSpeed(average_speed)}</dd>
                        </div>
                        <div class="activity__item">
                            <dt class="activity__term">Calorías</dt>
                            <dd class="activity__desc">${formatCalories(calories)}</dd>
                        </div>
                        <div class="activity__item">
                            <dt class="activity__term">Experiencia ganada</dt>
                            <dd class="activity__desc">${calculateExperience(distance / 1000)} EXP</dd>
                        </div>
                        <div class="activity__item">
                            <dt class="activity__term">Sport coins ganados</dt>
                            <dd class="activity__desc">${calculateCoins(distance / 1000)}</dd>
                        </div>
                    </dl>
                </div><!--//activity__body-->
            </div><!--//modal__body-->
        </article>`;


const createCard = ({ id, name, type, start_date_local, distance, }) => `<li class="list__item">
            <a class="card" href="${formatId(id)}" data-id="${id}">
                <div class="card__heading">
                    <svg class="card__icon"><use xlink:href="img/sprite.svg#${formatIcon(type)}" /></svg>
                    <div class="card__heading-text">
                        <h3 class="card__title">${name}</h3>
                        <p class="card__time">${formatDate(start_date_local)}</p>
                    </div>
                </div>
                <dl class="card__list">
                    <div class="card__item">
                        <dt class="card__term">
                            <svg class="card__item-icon"><use xlink:href="img/sprite.svg#icon-pin" /></svg>
                            <span class="sr-only">Distancia</span>
                        </dt>
                        <dd class="card__desc">${formatDistance(distance)}</dd>
                    </div>
                    <div class="card__item">
                        <dt class="card__term">
                            <svg class="card__item-icon"><use xlink:href="img/sprite.svg#icon-star" /></svg>
                            <span class="sr-only">Experiencia</span>
                        </dt>
                        <dd class="card__desc">${calculateExperience(distance / 1000)} EXP</dd>
                    </div>
                    <div class="card__item">
                        <dt class="card__term">
                            <svg class="card__item-icon"><use xlink:href="img/sprite.svg#icon-coin" /></svg>
                            <span class="sr-only">Sport coins</span>
                        </dt>
                        <dd class="card__desc">${calculateCoins(distance / 1000)}</dd>
                    </div>
                </dl>
            </a>
        </li>`;

const createProfile = ({ profile, percentage, level, fullname, coins }) => `
<div class="perfil__progress">
    <img class="perfil__image" src="${profile}" />
    <div class="progress">
        <svg class="progress__svg" width="72" height="72" data-percent="${percentage}">
            <circle class="progress__circle" stroke-linecap="round" stroke="#6BA8A2" stroke-width="5" fill="transparent" r="33" cx="36" cy="36"/>
        </svg>
    </div>
</div>
<span class="perfil__level">${level}</span>
<h1 class="perfil__name">${fullname}</h1>
<p class="perfil__coins">${coins}</p>`;
