function buscaLinear(array, elemento) {
    for (let i = 0; i < array.length; i++) { // Percorre o array
        if (array[i] === elemento) { // Verifica se o elemento atual é igual ao elemento procurado
            return true; // Elemento encontrado
        }
    }
    return false; // Elemento não encontrado
}

const listaFrutas = ['banana', 'maçã', 'uva', 'laranja', 'manga'];
const frutaProcurada = 'mamão';

if (buscaLinear(listaFrutas, frutaProcurada)) {
    console.log(`A fruta ${frutaProcurada} foi encontrada na lista.`);
} else {
    console.log(`A fruta ${frutaProcurada} não foi encontrada na lista.`);
}

