// declaração de um array de números
let numeros = [1, 2, 3, 4, 5];

// printa o array
console.log(numeros); // [ 1, 2, 3, 4, 5 ]

// print uma posição do array
console.log(numeros[3]); // 4

// adicionar um número no final do array
numeros.push(6);

// novo print do array
console.log(numeros); // [ 1, 2, 3, 4, 5, 6 ]

// remover o último número do array
numeros.pop();  

// novo print do array
console.log(numeros); // [ 1, 2, 3, 4, 5 ]

// limpar o array
numeros = [];

// novo print do array
console.log(numeros); // []

// declaração de array de strings
var frutas = ['banana', 'maçã', 'uva', 'laranja'];

// print do array
console.log(frutas); // [ 'banana', 'maçã', 'uva', 'laranja' ]

// adiciona uma fruta no final do array
frutas.push('manga');

// troca o valor de uma posição
frutas[1] = 'melancia';

// novo print do array
console.log(frutas); // [ 'banana', 'melancia', 'uva', 'laranja', 'manga' ]

let cores = ['azul', 'vermelho', 'verde', 'amarelo'];

// percorre o array e printa cada cor
for (let i = 0; i < cores.length; i++) {
    console.log(cores[i]);
}

// declaração de array de notas (floats)
let notas = [7.5, 8.0, 9.5, 6.0];

// declaração de variável para armazenar a soma das notas
let soma = 0;

// percorre o array e soma as notas
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

// printa a média das notas
console.log("Média: ", soma / notas.length);