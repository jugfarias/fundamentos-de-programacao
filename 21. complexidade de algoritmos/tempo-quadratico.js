// exemplo de algoritmo com complexidade de tempo quadrático O(n^2)

// algoritmo de ordenação por seleção
function ordenaSelecao(lista) {
    const n = lista.length;

    for (let i = 0; i < n - 1; i++) { // varre a lista
        let menorIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (lista[j] < lista[menorIndex]) { // verifica se o elemento atual é menor que o menor elemento
                menorIndex = j; // atualiza o índice do menor elemento
            }
        }

        if (i !== menorIndex) { // troca os elementos de posição
            const temp = lista[i]; // temporário para armazenar o valor de lista[i]
            lista[i] = lista[menorIndex]; // lista[i] recebe o valor de lista[menorIndex]
            lista[menorIndex] = temp; // lista[menorIndex] recebe o valor de temp
        }
    }

    return lista;

}

const listaDesordenada = [5, 3, 8, 2, 1, 4];
const listaOrdenada = ordenaSelecao(listaDesordenada);

console.log(`Lista ordenada: ${listaOrdenada}`);