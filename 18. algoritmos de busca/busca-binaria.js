function buscaBinaria(array, elemento) {
    let inicio = 0; // Início do array
    let fim = array.length - 1; // Fim do array

    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2); // Encontra o meio do array

        if (array[meio] === elemento) { // Verifica se o elemento do meio é igual ao elemento procurado
            return true; // Elemento encontrado
        } else if (array[meio] < elemento) { // Verifica se o elemento do meio é menor que o elemento procurado
            inicio = meio + 1; // Atualiza o início do array
        } else {
            fim = meio - 1; // Atualiza o fim do array
        }
    }

    return false; // Elemento não encontrado
}

const listaOrdenada = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const numeroProcurado = 14;

if (buscaBinaria(listaOrdenada, numeroProcurado)) {
    console.log(`O número ${numeroProcurado} foi encontrado na lista.`);
} else {
    console.log(`O número ${numeroProcurado} não foi encontrado na lista.`);
}

