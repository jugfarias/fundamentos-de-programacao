// lê um número
let num = prompt("Digite um número: ");

// converte o número para inteiro
num = parseInt(num);

// verifica se o número é par ou ímpar
if (num % 2 == 0) {
    // print se for par
    console.log("O número é par.");
} else {
    // print se for ímpar
    console.log("O número é ímpar.");
}