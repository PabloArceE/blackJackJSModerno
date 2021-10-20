// Esta aplicación simula el juego de Blackjack donde es necesario sumar cartas hasta llegar a 21 para ganar


/* 
Referencia nombre de las cartas

2C = two of clubs
2D = two of Diamonts 
2H = two of Hearts
2S = two of Spades

*/

// Creación del mazo de cartas. Relación de elementos de un arreglo para seleccionar las imágenes de las cartas.

let deck = []; //definida con let y no como const debido a que luego debe cambiar el array
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];


//  Función para crear el maso de cartas

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

    //console.log(deck); // deck original
    deck = _.shuffle( deck );
    //console.log(deck); // deck mezclado

    return deck;
}

crearDeck();

//  Función para seleccionar una carta

const pedirCarta = () => {
    if( deck.length === 0){
        throw 'No hay más cartas';
    }

    const carta = deck.pop(); // el método pop() elimina el último elemento del array y lo retorna. Por lo que lo utilizamos para garantizar que la próxima elección de cartas no incluya la que ya fué seleccionada.

    //console.log(carta);
    //console.log(deck); // verificación del descuento de cartas del deck
    return carta;
}

pedirCarta();

// Función para extraer el valor de la carta seleccionada para despues sumarlo 
// En esta función se utiliza un método se los strings llamado substring() que devuelve un string menor dependiendo del intervalo que le pasemos como arguemento en la función.
// En este caso necesitamos extraer los número del los códigos de los elementos del array deck. Dichos números equivalen al valor de la carta en el segmento que va desde 2 a 10, para A, J, Q y K necesitamos implementar otra solución. 
const valorCarta = (carta) => {
   
    const valor = carta.substring(0, carta.length - 1);
    console.log({ valor });

}

valorCarta('10D');



