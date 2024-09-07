function bubbleSort(array) {
    const n = array.length; // Tamanho do array
    let trocou; // Variável de controle

    do {
        trocou = false; // Se não houver troca, o array já está ordenado

        for (let i = 0; i < n - 1; i++) { // Percorre o array
            if (array[i] > array[i + 1]) { // Se o elemento atual for maior que o próximo
                const temp = array[i]; // Troca os elementos
                array[i] = array[i + 1]; // Atualiza o elemento atual
                array[i + 1] = temp; // Atualiza o próximo elemento
                trocou = true; // Atualiza a variável de controle
            }
        }
    } while (trocou); // Enquanto houver troca, o array não está ordenado

    return array;
}

const listaDesordenada = [42, 8, 16, 15, 23, 4];
const listaOrdenada = bubbleSort(listaDesordenada);

console.log(listaOrdenada); // [4, 8, 15, 16, 23, 42]