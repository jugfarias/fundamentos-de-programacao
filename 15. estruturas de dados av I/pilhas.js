// iniciar uma pilha vazia
function Stack() {
    this.elements = []; // vetor para armazenar os elementos da pilha
}

// método para adicionar um elemento ao topo da pilha
Stack.prototype.push = function(value) {
    this.elements.push(value); // adiciona o elemento ao vetor
}

// método para remover o elemento do topo da pilha
Stack.prototype.pop = function() {
    return this.elements.pop(); // remove e retorna o último elemento do vetor
}

// método para verificar se a pilha está vazia
Stack.prototype.peek = function() {
    if (this.isEmpty()) { // verifica se a pilha está vazia
        return null;    // retorna null
    } else {
        return this.elements[this.elements.length - 1] // retorna o último elemento do vetor   
    }
}

Stack.prototype.isEmpty = function() {
    return this.elements.length === 0; // retorna verdadeiro se o vetor estiver vazio
}

// método para imprimir todos os elementos de uma pilha
Stack.prototype.print = function() {
    for (let i = 0; i < this.elements.length; i++) {
        console.log('|', this.elements[i], '|');
        console.log('-----')
    }
}

let stack = new Stack;
console.log("pilha:")
stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");
stack.print();
stack.pop();
console.log("pilha após remoção:")
stack.print();
