const date = new Date();

const rederCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector(".dias");

    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    const firstDayIndex = date.getDate();

    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const Mes = [
        "Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
    ];

    document.querySelector(".content h1").innerHTML = Mes[date.getMonth()];

    document.querySelector(".content p").innerHTML = new Date().toDateString();

    let dias = "";

    for (let x = firstDayIndex; x > 0; x--) {
        dias += `<div class="diasPrevios">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
        ) {
            dias += `<div class="hoy">${i}<div>`;
        } else {
            dias += `<div>${i}</div>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        dias += `<div class=diasSig>${j}</div>`;
        monthDays.innerHTML = dias;
    }
};

document.querySelector(".antes")
        .addEventListener("click", () => {
            date.setMonth(date.getMonth() - 1);
            renderCalendar();
});

document.querySelector(".siguiente")
        .addEventListener("click", () => {
            date.setMonth(date.getMonth() + 1);
            renderCalendar();

        });

renderCalendar();

