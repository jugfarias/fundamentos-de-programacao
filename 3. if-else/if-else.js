// declaração da variável idade
let idade = 17;

// se a idade for maior ou igual a 18, imprime "Maior de idade"
if (idade >= 18) {
    console.log("Maior de idade");
// senão, imprime "Menor de idade"
} else {
    console.log("Menor de idade");
}

// if dentro do if (usar no máximo 3)
idade = 19;
possuiCarteira = false;
// se a idade for maior ou igual a 18, imprime "Maior de idade"
if (idade >= 18) {
    console.log("Maior de idade");
    // se possui carteira, imprime "Pode dirigir"
    if (possuiCarteira) {
        console.log("Pode dirigir");
    // senão, imprime "Não pode dirigir"
    } else {
        console.log("Não pode dirigir");
    }
// senão, imprime "Menor de idade"
} else {    
    console.log("Menor de idade");
}

// exemplo de if ternário
let mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(mensagem);

// estrutura do if ternário: 
// condição ? valor se verdadeiro : valor se falso
