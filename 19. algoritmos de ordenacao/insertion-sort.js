function insertionSort(array) {
    const n = array.length; // Tamanho do array

    for (let i = 0; i < n; i++) { // Percorre o array
        let chave = array[i]; // Elemento atual
        let j = i - 1; // Elemento anterior

        while (j >= 0 && array[j] > chave) { // Enquanto o elemento anterior for maior que o atual
            array[j + 1] = array[j]; // Troca os elementos
            j = j - 1; // Atualiza o índice
        }

        array[j + 1] = chave; // Atualiza o elemento
    }

    return array;

}

const listaDesordenada = [42, 8, 16, 15, 23, 4]; 
const listaOrdenada = insertionSort(listaDesordenada);

console.log(listaOrdenada); // [ 4, 8, 15, 16, 23, 42 ]
