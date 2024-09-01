// estrutura de uma função
function nomeDaFuncao(parametro1, parametro2) {
    // código da função
    return resultado;
}

// calculo de velocidade média com function
function velocidadeMedia(distancia, tempo) {
    // declarar variável para armazenar o resultado
    let velMedia = distancia / tempo;
    // printar o resultado no console
    console.log("Velocidade média: ", velMedia, "m/s");
}

// calculo de velocidade média com Arrow function
let _velocidadeMedia = (distancia, tempo) => {
    let velMedia = distancia / tempo;
    console.log("Arrow funcion ------>")
    console.log("Velocidade média: ", velMedia, "m/s");
}

// pedir ao usuário a distância percorrida e o tempo gasto
d = parseFloat(prompt("Digite a distância percorrida (m): "));
t = parseFloat(prompt("Digite o tempo gasto (s): "));

// chamadas de função
velocidadeMedia(d, t);
_velocidadeMedia(d, t);







