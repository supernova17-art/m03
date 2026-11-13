// Variáveis com diferentes tipos de dados
const nome = "Thaniel Jorge";       // string
const idade = 21;                   // number
const inscrito = true;              // boolean
const disciplinas = ["Programação Web", "Matemática", "Sistemas Operativos"]; // array
const estudante = {                 // object
    nome: nome,
    curso: "Informática - Desenvolvimento de Software",
    ano: 1
};

document.getElementById("mostrar").addEventListener("click", function () {
    document.getElementById("resultado").innerHTML = `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Idade:</strong> ${idade}</p>
        <p><strong>Inscrito:</strong> ${inscrito ? "Sim" : "Não"}</p>
        <p><strong>Disciplinas:</strong> ${disciplinas.join(", ")}</p>
        <p><strong>Curso:</strong> ${estudante.curso}</p>
        <p><strong>Ano:</strong> ${estudante.ano}</p>
    `;
});
