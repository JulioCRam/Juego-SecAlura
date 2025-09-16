let numeroSecreto = 0;
 let intentos = 0;
 let listaNumerosSorteados = [];
 let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto){
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function verificarIntento() {
let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
console.log(numeroSecreto);

if( numeroUsuario === numeroSecreto ){
 asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
 document.getElementById('reiniciar').removeAttribute('disabled');
} else {
    //el usuario no acerto 
    if(numeroUsuario > numeroSecreto) {
         asignarTextoElemento('p','El numeros ecreto es menor');
    }else {
        asignarTextoElemento('p','El numero secreto es mayor')
    }
    intentos ++;
    limpiarCaja();
   
}

return;
}
function limpiarCaja(){
    document.getElementById('valorUsuario').value = '';
    

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroSecreto);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se asignaron todos los numeros posibles');
    }else{

    }

   if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
   }else {
    listaNumerosSorteados.push(numeroGenerado)
    return numeroGenerado;
   }
}

function condicionesInciales(){
    asignarTextoElemento('h1', 'Juego del numero secrteto')
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}` )
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reinciarJuego(){
    limpiarCaja();
    condicionesInciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}
 condicionesInciales();