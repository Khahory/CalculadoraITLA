//Declaramos variables
var operandoa;
var operandob;
var operacion;
var totalsave;

function init() {
    //variables
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
}

function resolver() {
    var res = 0;
    totalsave = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            totalsave = res;
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            totalsave = res;
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            totalsave = res;
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            totalsave = res;
            break;
    }
    resetear();
    resultado.textContent = res;
}

function limpiar() {
    resultado.textContent = "";
}

function resetear() {
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

//Eventos de click
uno.onclick = function(e) {
    resultado.textContent = resultado.textContent + "1";
}
dos.onclick = function(e) {
    resultado.textContent = resultado.textContent + "2";
}
tres.onclick = function(e) {
    resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function(e) {
    resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function(e) {
    resultado.textContent = resultado.textContent + "5";
}
seis.onclick = function(e) {
    resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function(e) {
    resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function(e) {
    resultado.textContent = resultado.textContent + "8";
}
nueve.onclick = function(e) {
    resultado.textContent = resultado.textContent + "9";
}
cero.onclick = function(e) {
    resultado.textContent = resultado.textContent + "0";
}
reset.onclick = function(e) {
    resetear();
}
suma.onclick = function(e) {
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e) {
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e) {
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(e) {
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function(e) {
    operandob = resultado.textContent;
    //Aqui para poner el historial
    resolver();
    guardar_localStorage();
}

function guardar_localStorage() {
    var lista = [];
    lista.push(totalsave);
    console.log(lista);
    localStorage.setItem("x", totalsave);
}