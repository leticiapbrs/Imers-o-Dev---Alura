function notaMediaGeral() {
    var nota1Elemento = document.getElementById("valor1");
    var valor1 = nota1Elemento.value;
    var nota1Numerica = parseFloat(valor1);

    var nota2Elemento = document.getElementById("valor2");
    var valor2 = nota2Elemento.value;
    var nota2Numerica = parseFloat(valor2);

    var nota3Elemento = document.getElementById("valor3");
    var valor3 = nota3Elemento.value;
    var nota3Numerica = parseFloat(valor3);

    var nota4Elemento = document.getElementById("valor4");
    var valor4 = nota4Elemento.value;
    var nota4Numerica = parseFloat(valor4);

    var mediaGeral = (nota1Numerica + nota2Numerica + nota3Numerica + nota4Numerica) / 4;

    var elementoValorConvertido = document.getElementById("resultado");

    var resultado = "Sua média geral foi de " + mediaGeral + ".";
    elementoValorConvertido.innerHTML = resultado;
}


