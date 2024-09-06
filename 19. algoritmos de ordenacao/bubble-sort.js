function bubbleSort(array) {
    const n = array.length;
    let trocou;

    do {
        trocou = false; // Se não houver troca, o array já está ordenado

        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                const temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                trocou = true;
            }
        }
    } while (trocou);

    return array;
}

const listaDesordenada = [42, 8, 16, 15, 23, 4];
const listaOrdenada = bubbleSort(listaDesordenada);

console.log(listaOrdenada); // [4, 8, 15, 16, 23, 42]