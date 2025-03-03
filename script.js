function gerar() {
    let n = parseInt(document.getElementById("quantidade").value);
    
    if (isNaN(n) || n <= 0) {
        document.getElementById("mensagem").innerText = "Por favor, insira um número inteiro positivo.";
        return;
    }

    let a = 1, b = 0, aux;
    let resultado = [];

    for (let i = 0; i < n; i++) {
        resultado.push(a);
        aux = a;
        a = a + b;
        b = aux;
    }

    document.getElementById("mensagem").innerText = "Série de Fibonacci: " + resultado.join(", ");
}
