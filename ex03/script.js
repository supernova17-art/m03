document.getElementById("executar").addEventListener("click", function () {
    let texto = "";

    // 1. Contar números de 1 a 5
    texto += "Contagem: ";
    for (let i = 1; i <= 5; i++) {
        texto += i + " ";
    }

    // 2. Calcular a soma de 1 a 5
    let soma = 0;
    for (let i = 1; i <= 5; i++) {
        soma += i;
    }
    texto += "\\nSoma de 1 a 5: " + soma;

    // 3. Encontrar o maior número
    const numeros = [4, 12, 7, 20, 3];
    let maior = numeros[0];
    for (const numero of numeros) {
        if (numero > maior) {
            maior = numero;
        }
    }
    texto += "\\nMaior número: " + maior;

    // 4. Produzir uma pequena tabuada
    texto += "\\nTabuada do 3:\\n";
    let contador = 1;
    while (contador <= 5) {
        texto += "3 x " + contador + " = " + (3 * contador) + "\\n";
        contador++;
    }

    document.getElementById("resultado").textContent = texto;
});
