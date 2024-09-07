function walk(tree) {
    if (tree === null) {
        return;
    }

    // visita o nó atual
    console.log(tree.value);

    walk(tree.left); // visita o nó à esquerda
    walk(tree.right); // visita o nó à direita
}


// declaração da árvore
const tree = {
    value: 'Raiz',
    left: { 
        value: 'Filho Esquerdo',
        left: { 
            value: 'Neto Esquerdo Esquerdo',
            left: null,
            right: null, 
        },
        right: { 
            value: 'Neto Esquero Direito',
            left: null,
            right: null, 
        },
    },
    right: { 
        value: 'Filho Direito',
        left: { 
            value: 'Neto Direito Esquerdo',
            left: null,
            right: null, 
        },
        right: { 
            value: 'Neto Direito Direito',
            left: null,
            right: null, 
        },
    },
};

// executa a função
walk(tree);