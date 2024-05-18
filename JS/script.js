window.onload = function() {
    // Obtém o caminho da URL atual
    const currentPath = window.location.pathname;

    // Verifica qual link deve receber a classe 'active'
    if (currentPath.includes("index.html")) {
        document.getElementById("homeLink").classList.add("active");
    } else if (currentPath.includes("produtos.html")) {
        document.getElementById("produtosLink").classList.add("active");
    } else if (currentPath.includes("sobre.html")) {
        document.getElementById("sobreLink").classList.add("active");
    } else if (currentPath.includes("contato.html")) {
        document.getElementById("contatoLink").classList.add("active");
    }
};
