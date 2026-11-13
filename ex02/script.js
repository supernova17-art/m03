document.getElementById("classificar").addEventListener("click", function () {
    const nota = Number(document.getElementById("nota").value);
    const resultado = document.getElementById("resultado");

    if (document.getElementById("nota").value === "" || nota < 0 || nota > 20) {
        resultado.textContent = "Introduz uma nota válida entre 0 e 20.";
    } else if (nota < 10) {
        resultado.textContent = "Nota: " + nota + " — Reprovado.";
    } else if (nota < 14) {
        resultado.textContent = "Nota: " + nota + " — Suficiente.";
    } else if (nota < 17) {
        resultado.textContent = "Nota: " + nota + " — Bom.";
    } else {
        resultado.textContent = "Nota: " + nota + " — Muito bom.";
    }
});
