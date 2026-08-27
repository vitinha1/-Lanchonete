function calcularMesa() {
  
    let codigo = Number(document.getElementById("inputCodigo").value);
    let quantidade = Number(document.getElementById("inputQuantidade").value);
    let preco = 0;

   
    if (codigo == 1) {
        preco = 5.00;
    }
    if (codigo == 2) {
        preco = 3.50;
    }
    if (codigo == 3) {
        preco = 4.80;
    }
    if (codigo == 4) {
        preco = 8.90;
    }
    if (codigo == 5) {
        preco = 7.32;
    }

    
    let total = preco * quantidade;

    
    document.getElementById("resultadoFinal").innerText = "Valor a pagar: R$ " + total.toFixed(2);
}
