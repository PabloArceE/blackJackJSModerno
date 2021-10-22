// Esta aplicación simula el juego de Blackjack donde es necesario sumar cartas hasta llegar a 21 para ganar


/* 
Referencia nombre de las cartas

2C = two of clubs
2D = two of Diamonts 
2H = two of Hearts
2S = two of Spades

*/

// Creación del mazo de cartas. Relación de elementos de un arreglo para seleccionar las imágenes de las cartas.

//definida con let y no como const debido a que luego debe cambiar el array

// el método pop() elimina el último elemento del array y lo retorna. Por lo que lo utilizamos para garantizar que la próxima elección de cartas no incluya la que ya fué seleccionada.

// En esta función se utiliza un método se los strings llamado substring() que devuelve un string menor dependiendo del intervalo que le pasemos como arguemento en la función.
// En este caso necesitamos extraer los número del los códigos de los elementos del array deck. Dichos números equivalen al valor de la carta en el segmento que va desde 2 a 10, para A, J, Q y K necesitamos implementar otra solución. 


let deck = []; 
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;

//  Refeerncias a elementos HTML

const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');
const puntosHTML = document.querySelectorAll('small');
const divJugadorCarta = document.querySelector('#jugador-carta');
const divComputadoraCarta = document.querySelector('#computadora-carta');

//  Función crearDeck para crear el maso de cartas

const crearDeck = () => {
    for( let i = 2; i <= 10; i++){
        for( let tipo of tipos){
            deck.push( i + tipo);       
        }
    }

    for( let tipo of tipos){
        for( let esp of especiales){
            deck.push( esp + tipo);
        }
    }

    deck = _.shuffle( deck );
    
    return deck;
}

crearDeck();

//  Función pedirCarta() para seleccionar una carta

const pedirCarta = () => {
    if( deck.length === 0){
        throw 'No hay más cartas';
    }

    const carta = deck.pop(); 
    
    return carta;
}

//pedirCarta();

// Función valorCarta() para extraer el valor de la carta eliminando las letras de los códigos del array deck

const valorCarta = (carta) => {
   
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor )) ? 
            ( valor === 'A') ? 11 : 10
            : valor * 1; //para convertir el String en number
}

//Turno computadora

const turnoComputadora = ( puntosMinimos ) => {
    do{
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divComputadoraCarta.append( imgCarta );

        if( puntosMinimos > 21 ){
            break;
        }

    }while( (puntosComputadora < puntosMinimos ) && ( puntosMinimos <= 21 ));
}

//Eventos

//Turno del Jugador

btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador; 
   
    //crear html de las img
    //<img class="carta" src="assets/cartas/10C.png" alt=""> 

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divJugadorCarta.append( imgCarta );

    if( puntosJugador > 21 ){
        console.warn('El Jugador pierde');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
    } else if( puntosJugador === 21 ){
        console.warn('21!!!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );        
    }    
});

