// Chamada de elementos
const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const turnOff2 = document.getElementById('lamp');

// Chamada de funções
function isLampBroken () {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn () {
    if (!isLampBroken () ) {
        lamp.src = './img/ligada.jpg'; 
    }
}

function lampOff () {
    if (!isLampBroken () ) {
    lamp.src = './img/desligada.jpg';
    }
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg';
}

// Chamada de eventos
turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);
