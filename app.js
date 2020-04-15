setInterval(setClock, 1000)

const hour = document.querySelector('[data-hour-hand]')
const minute = document.querySelector('[data-minute-hand]')
const second = document.querySelector('[data-second-hand]')

function setClock() {
    const currentDate = new Date()
    const secondRation = currentDate.getSeconds() / 60;
    const minutesRation = (secondRation + currentDate.getMinutes()) / 60;
    const hoursRation = (minutesRation + currentDate.getHours()) / 12;

    setRotation(second, secondRation)
    setRotation(minute, minutesRation)
    setRotation(hour, hoursRation)
}

function setRotation(element, rotationRation) {
    element.style.setProperty('--rotation', rotationRation * 360)
}

setClock()