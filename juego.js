let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
console.log(intentos);
if(numeroDeUsuario === numeroSecreto){
    asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1)?'vez': 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
} else {
    //El usuario no acerto
    if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento ('p','el numero secreto es menor');
    } else {
        asignarTextoElemento ('p','el numero secreto es mayor');
    }
    intentos++;
    limpiarCaja();
}
return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
       asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {
    //si el numero generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}
function condicionesInciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function obtenerNumeroSecreto() {
    let nuevoNumero = generarNumeroSecreto();
    if (listaNumerosSorteados.includes(nuevoNumero)) {
        return obtenerNumeroSecreto();
    } else {
        return nuevoNumero;
    }
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesInciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesInciales();