let estudantes = [
    { nome: "Ana", curso: "Informática" },
    { nome: "Bruno", curso: "Desenvolvimento de Software" }
];

const corpoTabela = document.getElementById("corpo-tabela");

function desenharTabela() {
    corpoTabela.innerHTML = "";

    estudantes.forEach((estudante, indice) => {
        // Cada linha e célula é criada pelo JavaScript.
        const linha = document.createElement("tr");
        const celulaNome = document.createElement("td");
        const celulaCurso = document.createElement("td");
        const celulaAcoes = document.createElement("td");
        const botaoAtualizar = document.createElement("button");
        const botaoRemover = document.createElement("button");

        celulaNome.textContent = estudante.nome;
        celulaCurso.textContent = estudante.curso;

        botaoAtualizar.textContent = "Atualizar";
        botaoAtualizar.addEventListener("click", function () {
            const novoNome = prompt("Novo nome:", estudante.nome);
            const novoCurso = prompt("Novo curso:", estudante.curso);

            if (novoNome && novoCurso) {
                estudantes[indice].nome = novoNome;
                estudantes[indice].curso = novoCurso;
                desenharTabela();
            }
        });

        botaoRemover.textContent = "Remover";
        botaoRemover.addEventListener("click", function () {
            estudantes.splice(indice, 1);
            desenharTabela();
        });

        celulaAcoes.append(botaoAtualizar, botaoRemover);
        linha.append(celulaNome, celulaCurso, celulaAcoes);
        corpoTabela.appendChild(linha);
    });
}

document.getElementById("formulario").addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const curso = document.getElementById("curso").value.trim();

    if (nome !== "" && curso !== "") {
        estudantes.push({ nome: nome, curso: curso });
        desenharTabela();
        this.reset();
    }
});

desenharTabela();
