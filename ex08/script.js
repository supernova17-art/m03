const produtos = [
    { name: "Computador", price: 650, category: "Informática", available: true },
    { name: "Rato", price: 15, category: "Acessórios", available: true },
    { name: "Teclado", price: 25, category: "Acessórios", available: false },
    { name: "Monitor", price: 180, category: "Informática", available: true }
];

function apresentar(lista) {
    const resultado = document.getElementById("resultado");
    if (lista.length === 0) {
        resultado.textContent = "Não foram encontrados produtos.";
        return;
    }

    resultado.innerHTML = lista.map(produto => `
        <article>
            <h2>${produto.name}</h2>
            <p>Preço: ${produto.price.toFixed(2)} €</p>
            <p>Categoria: ${produto.category}</p>
            <p>Disponível: ${produto.available ? "Sim" : "Não"}</p>
        </article>
    `).join("");
}

function pesquisarEFiltrar() {
    const termo = document.getElementById("pesquisa").value.toLowerCase();
    const categoria = document.getElementById("categoria").value;

    const lista = produtos.filter(produto => {
        const correspondeNome = produto.name.toLowerCase().includes(termo);
        const correspondeCategoria = categoria === "todas" || produto.category === categoria;
        return correspondeNome && correspondeCategoria;
    });

    apresentar(lista);
}

document.getElementById("mostrar").addEventListener("click", pesquisarEFiltrar);
document.getElementById("ordenar").addEventListener("click", function () {
    const listaOrdenada = [...produtos].sort((a, b) => a.price - b.price);
    apresentar(listaOrdenada);
});

apresentar(produtos);
