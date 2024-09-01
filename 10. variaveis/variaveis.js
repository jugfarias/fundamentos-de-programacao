// Exemplo de declaração de const
const PI = 3.14159;
console.log(PI);

// Exemplo de declaração de var
var idade = 25;

// Exemplo de declaração de let
let nome = "João";

// print dos valores recém declarados
console.log("antes do bloco de código:")
console.log(nome, idade);

if (true) {
    let nome = "Maria";
    var idade = 30;

    // print dos valores alterados dentro de um bloco de código
    console.log("dentro do bloco de código:")
    console.log(nome, idade);
}

// print dos valores fora do bloco de código
console.log("depois do bloco de código:")
console.log(nome, idade);

// let não altera fora do bloco e var sim