let carrinho = JSON.parse(localStorage.getItem("carrinhoThaniel")) || [];

function guardarCarrinho() {
    localStorage.setItem("carrinhoThaniel", JSON.stringify(carrinho));
}

function mostrarCarrinho() {
    const elemento = document.getElementById("carrinho");
    elemento.innerHTML = "";

    if (carrinho.length === 0) {
        elemento.textContent = "O carrinho está vazio.";
        return;
    }

    let total = 0;
    let quantidadeTotal = 0;

    carrinho.forEach((produto, indice) => {
        total += produto.preco * produto.quantidade;
        quantidadeTotal += produto.quantidade;

        const artigo = document.createElement("article");
        const texto = document.createElement("p");
        const menos = document.createElement("button");
        const mais = document.createElement("button");
        const remover = document.createElement("button");

        texto.textContent = `${produto.nome} — ${produto.preco.toFixed(2)} € x ${produto.quantidade}`;
        menos.textContent = "−";
        mais.textContent = "+";
        remover.textContent = "Remover";

        menos.addEventListener("click", function () {
            if (produto.quantidade > 1) {
                produto.quantidade--;
            } else {
                carrinho.splice(indice, 1);
            }
            guardarCarrinho();
            mostrarCarrinho();
        });

        mais.addEventListener("click", function () {
            produto.quantidade++;
            guardarCarrinho();
            mostrarCarrinho();
        });

        remover.addEventListener("click", function () {
            carrinho.splice(indice, 1);
            guardarCarrinho();
            mostrarCarrinho();
        });

        artigo.append(texto, menos, mais, remover);
        elemento.appendChild(artigo);
    });

    const resumo = document.createElement("p");
    resumo.textContent = `Quantidade de produtos: ${quantidadeTotal} | Total: ${total.toFixed(2)} €`;
    elemento.appendChild(resumo);
}

document.getElementById("adicionar").addEventListener("click", function () {
    const [nome, precoTexto] = document.getElementById("produto").value.split("|");
    const preco = Number(precoTexto);
    const existente = carrinho.find(item => item.nome === nome);

    if (existente) {
        existente.quantidade++;
    } else {
        carrinho.push({ nome: nome, preco: preco, quantidade: 1 });
    }

    guardarCarrinho();
    mostrarCarrinho();
});

document.getElementById("limpar").addEventListener("click", function () {
    carrinho = [];
    guardarCarrinho();
    mostrarCarrinho();
});

mostrarCarrinho();
