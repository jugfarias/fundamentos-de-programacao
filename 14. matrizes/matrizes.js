// criando uma matriz já preenchida
let matriz1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let matriz2 = [
    [100, 200, 300],
    [400, 500, 600],
    [700, 800, 900]
];

console.log(matriz1); // imprime a matriz em uma linha

console.log(matriz1[0].length) // imprime o número de colunas da matriz
console.log(matriz1.length); // imprime o número de linhas da matriz

// função que imprime uma matriz no formato de matriz
function printMatriz(matriz1) {
    for (let i = 0; i < matriz1.length; i++) {
        console.log(matriz1[i]); // imprime uma linha da matriz
    }
}

printMatriz(matriz1);

function somaMatriz(matriz1, matriz2) {
    if (matriz1.length !== matriz2.length || matriz1[0].length !== matriz2[0].length) {
        return null;
    }

    let matrizSoma = [];

    for (let i = 0; i < matriz1.length; i++) {
        matrizSoma.push([]); // adiciona uma linha vazia

        for (let j = 0; j < matriz1[i].length; j++) {
            matrizSoma[i][j] = matriz1[i][j] + matriz2[i][j];
        }
    }

    return matrizSoma;
}

let matrizSomada = somaMatriz(matriz1, matriz2);

console.log(printMatriz(matrizSomada));