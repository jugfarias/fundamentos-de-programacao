// função dividir
function dividir(x, y) {
    if (y === 0) { // Se y for igual a 0
        throw new Error("Divisão por zero não é permitida!"); // Lança um erro
    }

    // Retorna a divisão de x por y
    return x / y;
}

try { // Tenta executar o código
    const resultado = dividir(7, 0); // Chama a função dividir passando 7 e 0 como parâmetros
    console.log("resultado"); // Imprime o resultado
} catch (error) {
    console.log("Ocorreu um erro:", error.message); // Se ocorrer um erro, imprime a mensagem
} finally {
    console.log("Fim da execução"); // Imprime a mensagem
}

