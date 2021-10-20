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



