// criação da função Queue (Fila)
function Queue() {
    this.elements = []; // vetor para armazenar os elementos da fila
}

// método para adicionar um elemento na fila
Queue.prototype.enqueue = function(element) {
    this.elements.push(element); // adiciona o elemento ao vetor
}

// método para remover e retornar o primeiro elemento da fila
Queue.prototype.dequeue = function() {
    return this.elements.shift(); // remove e retorna o primeiro elemento do vetor
}

// métoro para olhar o primeiro elemento da fila sem removê-lo	
Queue.prototype.peek = function() {
    if (this.isEmpty()) { // verifica se a fila está vazia
        return null;    // retorna null
    } else {
        return this.elements[0]; // retorna o primeiro elemento do vetor
    }
}

// método para imprimir todos os elementos da fila
Queue.prototype.print = function() {
    for (let i = 0; i < this.elements.length; i++) {
        console.log('|', this.elements[i], '|');
        console.log('-----')
    }
}

// criar uma nova fila
let queue = new Queue;

// adicionar elementos na fila
queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");
queue.enqueue("D");

// imprimir a fila
console.log("fila:")
queue.print();

// remover um elemento da fila
queue.dequeue();

// imprimir a fila novamente
console.log("fila após remoção:")
queue.print();