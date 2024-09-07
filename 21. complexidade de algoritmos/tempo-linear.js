// exemplo de algoritmo com complexidade de tempo linear O(n)
function buscaElemento (array, alvo) {
    for (let i = 0; i < array.length; i++) { // varre o array
        if (array[i] === alvo) { // verifica se o elemento atual é o al
            return i; // retorna o índice do elemento
        }
    }

    return -1; // retorna -1 se o elemento não for encontrado
}

const lista = [1, 2, 3, 4, 5];
const alvo = 3;
const indice = buscaElemento(lista, alvo);

if (indice !== -1) {
    console.log(`O elemento ${alvo} foi encontrado no índice ${indice}.`);
} else {
    console.log(`O elemento ${alvo} não foi encontrado.`);
}