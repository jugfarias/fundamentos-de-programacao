// lê dois números
let num1 = prompt("Digite um número: ");
let num2 = prompt("Digite outro número: ");

// converte os números para inteiros
num1 = parseInt(num1);
num2 = parseInt(num2);

// realiza as operações
let soma = num1 + num2;
let sub = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;

// printa os resultados
console.log(`Soma: ${soma}`);
console.log(`Subtração: ${sub}`);
console.log(`Multiplicação: ${mult}`);
console.log(`Divisão: ${div}`);