let numeroSecreto = 0; //se crea la variable numeroSecreto y se asigna de valor a la funcion en este caso generarNumeroSecreto
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//en esta parte creamos la funcion asignarTextoElemento, declaramos las variables texto y elemento para poder trabajar en el titulo o parrafo
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    document.getElementById('reiniciar').removeAttribute('disabled');

    console.log(numeroSecreto);
    console.log(numeroDeUsuario);
    console.log(numeroSecreto === numeroDeUsuario); //indica que tiene que ser igual en valor y tipo de dato sino dara false
    console.log(typeof(numeroDeUsuario));
    console.log(typeof(numeroSecreto));

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'Vez' : 'veces'}`); //? es si y : es else
    } else {
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero es menor');
        } else {
            asignarTextoElemento('p','El numero es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; //Math.floor solo para retornar la parte decimal y math.random nos ayuda a generar un numero aleatorio y return se utiliza dentro de una función para especificar el valor que la función debe devolver cuando se llama
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {
        // si el numero generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
        } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
        
    }

    
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto'); //se llama a la funcion y se asigna el elemento que vamos a trabajar
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
    
}

condicionesIniciales();