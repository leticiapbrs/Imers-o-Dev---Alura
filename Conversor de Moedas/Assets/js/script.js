function Converter() {
    var valorElemento = document.getElementById ("valor");
    var valor = valorElemento.value;
    var valorNumerico = parseFloat(valor);

    var valorDolar = valorNumerico / 5;

    var elementoValorConvertido = document.getElementById("valorConvertido");

if (valorNumerico <=1) {
    var valorConvertido = "Na cotação de U$5=R$1, R$ " + valor + " é U$ " + valorDolar + ".";
    elementoValorConvertido.innerHTML = valorConvertido;
}

else {
    var valorConvertido = "Na cotação de U$5=R$1, R$ " + valor + " são U$ " + valorDolar + ".";
    elementoValorConvertido.innerHTML = valorConvertido; 
}
    }
    