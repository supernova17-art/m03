document.getElementById("analisar").addEventListener("click", function () {
    const frase = document.getElementById("frase").value;
    const resultado = document.getElementById("resultado");
    const palavras = frase.trim() === "" ? [] : frase.trim().split(/\\s+/);
    const palavraProcurada = "programação";
    const normalizada = frase.toLowerCase().replace(/[^a-záéíóúâêôãõç]/gi, "");

    // Um palíndromo lê-se da mesma forma nos dois sentidos.
    const ePalindromo = normalizada.length > 0 &&
        normalizada === normalizada.split("").reverse().join("");

    resultado.innerHTML = `
        <p><strong>Número de caracteres:</strong> ${frase.length}</p>
        <p><strong>Texto invertido:</strong> ${frase.split("").reverse().join("")}</p>
        <p><strong>Número de palavras:</strong> ${palavras.length}</p>
        <p><strong>Contém "${palavraProcurada}":</strong> ${frase.toLowerCase().includes(palavraProcurada) ? "Sim" : "Não"}</p>
        <p><strong>É palíndromo:</strong> ${ePalindromo ? "Sim" : "Não"}</p>
    `;
});
