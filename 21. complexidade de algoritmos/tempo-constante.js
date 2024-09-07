// exemplo de função com complexidade de tempo constante O(1)

function retornaPrimeiroElemento (array) {
    return array[0];
}

const array = [1, 2, 3, 4, 5];
const primeiroElemento = retornaPrimeiroElemento(array);

console.log(`O primeiro elemento do array é: ${primeiroElemento}`); // O primeiro elemento do array é: 1