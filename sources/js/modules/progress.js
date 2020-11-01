function f_crearProgress(elem) {
    let circle = elem.querySelector('circle');
    let radius = circle.r.baseVal.value;
    let circumference = radius * 2 * Math.PI;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    const percent = elem.getAttribute('data-percent');
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}