// Funções matemáticas
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Não é possível dividir por zero";
    }
    return a / b;
}

function average(numeros) {
    if (numeros.length === 0) {
        return 0;
    }
    let soma = 0;
    for (const numero of numeros) {
        soma += numero;
    }
    return soma / numeros.length;
}

function max(numeros) {
    let maior = numeros[0];
    for (const numero of numeros) {
        if (numero > maior) maior = numero;
    }
    return maior;
}

function min(numeros) {
    let menor = numeros[0];
    for (const numero of numeros) {
        if (numero < menor) menor = numero;
    }
    return menor;
}

document.getElementById("calcular").addEventListener("click", function () {
    const numeros = [4, 8, 2, 10];
    document.getElementById("resultado").textContent =
        "add(5, 3) = " + add(5, 3) + "\\n" +
        "subtract(5, 3) = " + subtract(5, 3) + "\\n" +
        "multiply(5, 3) = " + multiply(5, 3) + "\\n" +
        "divide(6, 3) = " + divide(6, 3) + "\\n" +
        "average([4, 8, 2, 10]) = " + average(numeros) + "\\n" +
        "max([4, 8, 2, 10]) = " + max(numeros) + "\\n" +
        "min([4, 8, 2, 10]) = " + min(numeros);
});
