let display = document.querySelector('.display');

function insertar(value) {
    display.innerHTML += value;
}


function deleteall() {
    display.innerHTML = '';
}

function borrar() {
    display.innerHTML = display.innerHTML.slice(0, -1);
}

function calcular() {
    try {
        display.innerHTML = eval(display.innerHTML);
    } catch (error) {
        display.innerHTML = 'Error';
    }
}
