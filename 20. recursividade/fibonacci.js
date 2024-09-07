function fibonacci(n) {
    // caso base
    if (n <= 1) {
        return n; // condição de parada
    } else { // caso recursivo
        return fibonacci(n - 1) + fibonacci(n - 2); // chamada recursiva
    }
}

const n = 12;

// Imprime os n primeiros números da sequência de Fibonacci
for (let i = 0; i <= n; i++) {
    console.log(fibonacci(i));
}