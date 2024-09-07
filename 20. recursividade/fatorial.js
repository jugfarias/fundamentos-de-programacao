function fatorial (n) {
    if (n == 0) {
        return 1; // condição de parada
    } else {
        return n * fatorial(n - 1); // chamada recursiva
    }

}

const n = 6;
const nExclamacao = fatorial(n);

console.log(nExclamacao); // 720