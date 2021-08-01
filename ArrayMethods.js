const fruits = ['Kiwi', 'Orange', 'Lemon', 'Apple', 'Mango'];

const Imprimir = (value) => {
    console.log('  ')
    console.log(value);
};

// Agregando un elemento al inicio del array
fruits.unshift('Strawberry');

Imprimir(fruits);

// Agregando un elemento en la posicion indicada
fruits.splice(2, 0, 'Pera');

Imprimir(fruits);

// Eliminar dos elementos despues de la posicion 3
fruits.splice(3, 2);

Imprimir(fruits);

// Cocatenar dos arreglos

const fruits2 = ['Papaya', 'Watermelon']

const fruteria = fruits.concat(fruits2);

Imprimir(fruteria);

// Slicing metodos
const citrus = fruteria.slice(3);

Imprimir(citrus);

//Filtar el array de la posicion 1 a la 4
//Recordar que el segundo elemento dentro del metodo slice representa un intervalo cerrado
const filtrar = fruteria.slice(1, 5);
Imprimir(filtrar);
