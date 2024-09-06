// criando a função Graph (grafo)
function Graph() {
    this.adjacencyList = {}; // atributo para armazenar a lista de adjacência
}

// método para adicionar um vértice ao grafo
Graph.prototype.addVertex = function(vertex) {
    if (!this.adjacencyList[vertex]) { // verifica se o vértice já existe
        this.adjacencyList[vertex] = []; // se não existir, cria um novo vértice
    }
}

// método para adicionar uma aresta entre dois vértices
Graph.prototype.addEdge = function(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2); // adiciona vertex2 à lista de adjacência de vertex1
    this.adjacencyList[vertex2].push(vertex1); // adiciona vertex1 à lista de adjacência de vertex2
}

// método para remover uma aresta entre dois vértices
Graph.prototype.removeEdge = function(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        v => v !== vertex2  // remove o vértice2 da lista de adjacência de vertex1
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        v => v !== vertex1  // remove o vértice1 da lista de adjacência de vertex2
    );
}

// método para remover um vértice do grafo
Graph.prototype.removeVertex = function(vertex) {
    while (this.adjacencyList[vertex].length) {
        const adjacentVertex = this.adjacencyList[vertex].pop(); // remove o último vértice da lista de adjacência
        this.removeEdge(vertex, adjacentVertex); // remove a aresta entre os vértices
    }
    delete this.adjacencyList[vertex]; // remove o vértice
}

// cria um grafo vazio
let graph = new Graph();

// adiciona vértices ao grafo
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

// adiciona arestas ao grafo
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');

// imprime o grafo
console.log(graph.adjacencyList);

// remove uma aresta do grafo
graph.removeEdge('A', 'C');
console.log(graph.adjacencyList);

// remove um vértice do grafo
graph.removeVertex('A');
console.log(graph.adjacencyList);
