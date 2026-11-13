document.getElementById("analisar").addEventListener("click", function () {
    const texto = document.getElementById("numeros").value.trim();
    const resultado = document.getElementById("resultado");

    if (texto === "") {
        resultado.textContent = "Introduz pelo menos um número.";
        return;
    }

    const numeros = texto.split(",").map(Number);
    if (numeros.some(numero => Number.isNaN(numero))) {
        resultado.textContent = "Verifica os valores: usa números separados por vírgulas.";
        return;
    }

    const positivos = numeros.filter(numero => numero > 0);
    const negativos = numeros.filter(numero => numero < 0);
    const pares = numeros.filter(numero => numero % 2 === 0);
    const impares = numeros.filter(numero => numero % 2 !== 0);
    const maior = Math.max(...numeros);
    const menor = Math.min(...numeros);
    const media = numeros.reduce((soma, numero) => soma + numero, 0) / numeros.length;

    resultado.innerHTML = `
        <p><strong>Positivos:</strong> ${positivos.join(", ") || "Nenhum"}</p>
        <p><strong>Negativos:</strong> ${negativos.join(", ") || "Nenhum"}</p>
        <p><strong>Pares:</strong> ${pares.join(", ") || "Nenhum"}</p>
        <p><strong>Ímpares:</strong> ${impares.join(", ") || "Nenhum"}</p>
        <p><strong>Maior:</strong> ${maior}</p>
        <p><strong>Menor:</strong> ${menor}</p>
        <p><strong>Média:</strong> ${media.toFixed(2)}</p>
    `;
});
