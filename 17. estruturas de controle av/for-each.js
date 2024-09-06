document.addEventListener("DOMContentLoaded", function() { // Espera o DOM carregar para executar o código
    const colors = ["red","blue", "orange", "green", "yellow"]; // Array de cores
    const buttonsContainer = document.getElementById("buttons-container"); // Pega o elemento com o id buttons-container

    // Para cada cor no array de cores, cria um botão com a cor e adiciona ao buttonsContainer
    colors.forEach(function(color) {
        const button = document.createElement("button"); // Cria um elemento button
        button.textContent = color; // Adiciona o texto da cor ao botão
        button.onclick = function() { // Adiciona um evento de clique ao botão
            mudaCor(color); // Chama a função mudaCor passando a cor como parâmetro
        };
        buttonsContainer.appendChild(button); // Adiciona o botão ao buttonsContainer

    });
});

// Função que muda a cor do elemento com o id color-box
function mudaCor(color) {
    const colorBox = document.getElementById("color-box");
    colorBox.style.backgroundColor = color;
}

