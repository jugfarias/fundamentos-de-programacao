// criação da função Node (nó) da árvore
function Node(data) {
    this.data = data; // atributo para armazenar o dado
    this.left = null; // ponteiro para o filho da esquerda
    this.right = null; // ponteiro para o filho da direita
}

// criação da função BinaryTree (árvore binária - apenas esquerda e direita)
function BinaryTree() {
    this.root = null; // atributo para armazenar a raiz da árvore
}

// método para adicionar um nó à árvore
BinaryTree.prototype.add = function(data) {
    let node = new Node(data); // cria um novo nó
    if (this.root === null) { // verifica se a árvore está vazia
        this.root = node; // se estiver, o novo nó é a raiz
    } else {
        this.insertNode(this.root, node); // senão, chama o método insertNode
    }
}

// método auxiliar para inserir um nó na árvore
BinaryTree.prototype.insertNode = function(node, newNode) {
    if (newNode.data < node.data) { // verifica se o novo nó é menor que o nó atual
        if (node.left === null) { // verifica se o nó atual não tem filho à esquerda
            node.left = newNode; // se não tiver, o novo nó é inserido à esquerda
        } else {
            this.insertNode(node.left, newNode); // senão, chama recursivamente o método para o filho da esquerda
        }
    } else { // se o novo nó for maior ou igual ao nó atual
        if (node.right === null) { // verifica se o nó atual não tem filho à direita
            node.right = newNode; // se não tiver, o novo nó é inserido à direita
        } else {
            this.insertNode(node.right, newNode); // senão, chama recursivamente o método para o filho da direita
        }
    }
}

// função printTree para imprimir a árvore
function printTree(node, prefix = '', isLeft = null) {
    if (node != null) {
        printTree(node.right, prefix + (isLeft ? '│   ' : '    '), false);
        console.log(prefix + (isLeft ? '└── ' : '┌── ') + node.data);
        printTree(node.left, prefix + (isLeft ? '    ' : '│   '), true);
    }
}

// criação de uma árvore
let tree = new BinaryTree();


tree.add(10);
tree.add(5);
tree.add(15);
tree.add(3);
tree.add(7);
tree.add(12);
tree.add(17);
tree.add(1);
tree.add(4);
tree.add(6);
tree.add(8);

// imprime a árvore
printTree(tree.root);