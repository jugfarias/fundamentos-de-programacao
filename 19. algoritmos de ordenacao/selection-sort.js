function selectionSort(array) {
    const n = array.length; // tamanho do array

    for (let i = 0; i < n; i++) { // percorre o array
        let menorIndex = i; // índice do menor elemento

        for (let j = i + 1; j < n; j++) { // percorre o array a partir do próximo elemento
            if (array[j] < array[menorIndex]) { // se o elemento atual for menor que o menor elemento
                menorIndex = j; // atualiza o menor elemento
            }
        }

        if (i !== menorIndex) { // se o índice atual for diferente do menor elemento
            const temp = array[i]; // armazena o elemento atual
            array[i] = array[menorIndex]; // atualiza o elemento atual
            array[menorIndex] = temp; // atualiza o menor elemento
        }
    }

    return array;

}

const listaDesordenada = [42, 8, 16, 15, 23, 4];
const listaOrdenada = selectionSort(listaDesordenada);

console.log(listaOrdenada); // [ 4, 8, 15, 16, 23, 42 ]
