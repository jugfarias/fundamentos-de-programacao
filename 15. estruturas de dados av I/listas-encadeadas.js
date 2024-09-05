// criação de um nó
function Node(value) {
    this.value = value; // valor do nó
    this.next = null;   // ponteiro para o próximo nó
}

// criação de uma lista encadeada
function LinkedList() {
    this.head = null; // ponteiro para o primeiro nó
    this.tail = null; // ponteiro para o último nó
}  

// método para adicionar um elemento ao final da lista
LinkedList.prototype.append = function(value) {
    let node = new Node(value); // cria um novo nó

    if (!this.head) { // se a lista estiver vazia
        this.head = node; // o novo nó é o primeiro
    } else {
        this.tail.next = node; // o próximo do último nó é o novo nó
    }

    this.tail = node; // o novo nó é o último
}

LinkedList.prototype.print = function() {
    let current = this.head; // começa pelo primeiro nó
    let values = []; // vetor para armazenar os valores dos nós

    while (current) { // enquanto houver nós
        values.push(current.value); // adiciona o valor do nó ao vetor
        current = current.next; // passa para o próximo nó
    }

    console.log(values.join(' -> ')); // imprime os valores dos nós separados por ->
}

// criação de uma lista encadeada
let lista = new LinkedList();

// adição de elementos à lista encadeada
lista.append(1);
lista.append(2);
lista.append(7);
lista.print();

// método para adicionar um elemento ao início da lista encadeada
LinkedList.prototype.prepend = function(value) {
    let node = new Node(value); // cria um novo nó

    if (!this.head){ // se lista estiver vazia
        this.head = node; // o novo nó é o primeiro
        this.tail = node; // o novo nó é o último
    } 
    else {
        node.next = this.head; // o próximo do novo nó é o primeiro nó
        this.head = node; // o novo nó é o primeiro
    }
}

// criação de uma lista encadeada 2
lista.prepend(3);
lista.prepend(100);
lista.print();


