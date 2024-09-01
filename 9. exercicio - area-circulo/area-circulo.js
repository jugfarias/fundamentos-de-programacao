// função que calcula a área de um círculo
function ariaCirculo (raio) {
    // Math.PI é uma constante que representa o valor de PI
    return Math.PI * raio * raio;
}

// leitura de valor para o raio convertida em um float
let r = parseFloat(prompt("Digite o raio do círculo em cm: "));

// chamada da função e atribuição do resultado a variável ariaC
let ariaC = ariaCirculo(r);

// exibição do resultado
console.log("A área do círculo é: ", ariaC, "cm²");

