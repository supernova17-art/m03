const numeros = [2, 4, 6, 8, 10];

// Implementações próprias, sem usar map, filter, find, reduce, includes ou reverse.
function meuMap(array, funcao) {
    const resultado = [];
    for (let i = 0; i < array.length; i++) {
        resultado.push(funcao(array[i]));
    }
    return resultado;
}

function meuFilter(array, funcao) {
    const resultado = [];
    for (let i = 0; i < array.length; i++) {
        if (funcao(array[i])) resultado.push(array[i]);
    }
    return resultado;
}

function meuFind(array, funcao) {
    for (let i = 0; i < array.length; i++) {
        if (funcao(array[i])) return array[i];
    }
    return undefined;
}

function meuReduce(array, funcao, inicial) {
    let acumulador = inicial;
    for (let i = 0; i < array.length; i++) {
        acumulador = funcao(acumulador, array[i]);
    }
    return acumulador;
}

function meuIncludes(array, valor) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === valor) return true;
    }
    return false;
}

function meuReverse(array) {
    const resultado = [];
    for (let i = array.length - 1; i >= 0; i--) {
        resultado.push(array[i]);
    }
    return resultado;
}

document.getElementById("executar").addEventListener("click", function () {
    document.getElementById("resultado").textContent =
        "meuMap (x * 2): " + meuMap(numeros, x => x * 2).join(", ") + "\\n" +
        "meuFilter (maiores que 5): " + meuFilter(numeros, x => x > 5).join(", ") + "\\n" +
        "meuFind (primeiro maior que 5): " + meuFind(numeros, x => x > 5) + "\\n" +
        "meuReduce (soma): " + meuReduce(numeros, (soma, x) => soma + x, 0) + "\\n" +
        "meuIncludes (tem 6): " + meuIncludes(numeros, 6) + "\\n" +
        "meuReverse: " + meuReverse(numeros).join(", ");
});
