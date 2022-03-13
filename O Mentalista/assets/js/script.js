var numeroSecreto = parseInt(Math.random() * 11);
/* sorteio fora da function, não recarrega a cada tentativa. novo número apenas com f5*/

function Chutar() {
    var elementoResultado = document.getElementById ("resultado");
    var chute = parseInt (document.getElementById ("valor").value);
    if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "Você acertou!"
    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Você precisa inserir números entre 0 a 10."
    }  else if (numeroSecreto% 2 == 0) {
        elementoResultado.innerHTML = "Você errou. Dica: o número secreto é par."
    } else if (numeroSecreto% 2 == 1) {
        elementoResultado.innerHTML = "Você errou. Dica: o número secreto é ímpar."
    }
}