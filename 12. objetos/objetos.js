// exemplo de objetos  

// 1. objeto literal
const pessoa = {
    nome: 'João',
    idade: 25,
    cidade: 'São Paulo'
}

console.log(pessoa)

// 2. objeto com construtor
let carro = new Object();
carro.marca = 'Fiat';
carro.modelo = 'Uno';
carro.ano = 2010;

console.log(carro)

// objeto com comportamento (latir)
const cachorro = {
    nome: 'Rex',
    idade: 3,
    latir: function() {
        console.log('Au, au!');
    }
}

cachorro.latir()

// outro objeto com comportamento (saudacao)
const humano = {
    nome: 'Fulano',
    idade: 30,
    saudacao: function() {
        console.log("Olá, meu nome é ", this.nome, " e tenho ", this.idade, " anos.");
    }
}

humano.saudacao();

// função que gera número aleatório
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// cria um array vazio para armazenar pessoas
let pessoas = [];

// loop para criação de 10 pessoas aleatórias
for (let i = 0; i < 10; i++) {
    let pessoa = {
        nome: "Pessoa" + (i + 1),
        idade: numeroAleatorio(1, 100),
        peso: numeroAleatorio(50, 100),
        altura: numeroAleatorio(1.5, 2.0)
    }

    // adiciona pessoa criada no array de pessoas
    pessoas.push(pessoa);
}

// função que calcula o imc de uma pessoa
function imc (peso, altura) {
    return peso / (altura * altura);
}

// relatório de IMC das pessoas do array
for (let i = 0; i < pessoas.length; i++) {
    let pessoa = pessoas[i];
    let imcPessoa = imc(pessoa.peso, pessoa.altura);
    console.log(pessoa.nome, " tem IMC de ", imcPessoa);
    console.log("====================================")
}