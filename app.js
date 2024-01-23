let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    /* En este paso lo que hace es que la funcion "asignarTextoElemento", hace que
    "elemento" es un elemento del HTML llamandolo desde el propio HTML al JS. Y al "texto"
    nos permite decirle que lo seguido es un texto*/
    return;

}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    /*Al hacer "getElementById" nos permite extrar del HTML un elemento y transformarlo en
    una ID, seguido al darle a ".value" esto nos permite darle un valor.*/

    //Al colocar "ParseInt" nos permite comparar entre 2 números
    
    //console.log(typeof(numeroDeUsuario));
    //console.log(numeroSecreto);
    //console.log(typeof(numeroSecreto));
    //console.log(numeroDeUsuario);

    /*Esto nos permite luego, hacer que se muestre en el apartado "Herramientas de
    Desarrollador" del navegador, saber que número a colocado el usuario en el número secreto*/
    
    //console.log(numeroSecreto === numeroSecreto);

    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
            /* "===" Es una validación a más, para que sean igual los valores, sino nos 
            retornará a falso*/
        asignarTextoElemento("p" , `Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : " veces"}`);  
   /*En el HTML se deja Disabled en el botón de Nuevo Juego, para que solo se utilice, cuando
   jugador haya finalizado la partida. En caso contrario, el juego continuaría y nunca finaliza
   si apreta "Nuevo Juego"*/
   document.getElementById("reiniciar").removeAttribute("disabled");
   /*Acá se entrega un atributo al botón "Nuevo Juego", ya que tiene un elemento en el HTML
   llamado "Reiniciar", con el siguiente atributo "removeAttribute" hace que remueva un
   atributo del HTML, en este caso es "disabled" para que este activado*/
    } else {
        //El usuario no acerto.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p" , "El número secreto es menor");
        } else {
            asignarTextoElemento("p" , "El número secreto es mayor");

        }
        intentos++;
        limpiarCaja();
    }
    return;
}


function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
    // Un espacio vacío se interpreta con ("")
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Al poner "return numeroSecreto" nos permitira volver a tener un valor

    //No hace falta hacer una variable "let" ya que se crea al principio para no repetir
    
    //Si el número generado está incluído en la lista

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p" , "Ya se sortearon todos lo números posibles");
    } else {

    }
    
        if (listaNumerosSorteados.includes(numeroGenerado)) {
        //"includes" crea un parametro para saber sí dicho número ya ha salido 
            return generarNumeroSecreto();    
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado

    }
    
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto!");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    /*Al cambiar a VS de "titulo" (un texto) a "elemntoHTML" (elemento), el propio programa está
    pidiendo una función para que sea ya un elemento o algo.*/  

    /*Al cambiar los parametros "asignarTextoElemento" se simplifica las funciones en vez de dar 
    muchas ordenes con distintos nombres. como los siguientes items*/ 

    //let titulo = document.querySelector("h1");
    //titulo.innerHTML = "Juego del número secreto";
    //let parrafo = document.querySelector("p");
    //parrafo.innerHTML = "Indica un número del 1 al 10";

    //El "h1" y "p" nos permite hacer una conexión entre el java al objeto traído del html
    numeroSecreto = generarNumeroSecreto();
    intentos = 1 ;
}   

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
    /*Lo que hace ahora es reiniciar el atributo, poniendole "setAttribute" y dándole dos
    parametros que son disabled para deshabilitar y el true para darle una afirmación*/
}

condicionesIniciales();

//Ctrl + F, se usa para buscar palabra o numero en cada renglón de la programación