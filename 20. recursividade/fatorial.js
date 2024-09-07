function fatorial (n) {
    // caso base
    if (n == 0 || n == 1) { // se n for igual a 0 ou 1
        return 1; // condição de parada
    } else { // caso recursivo
        return n * fatorial(n - 1); // chamada recursiva
    }

}

const n = 6;
const nExclamacao = fatorial(n);

console.log(nExclamacao); // 720