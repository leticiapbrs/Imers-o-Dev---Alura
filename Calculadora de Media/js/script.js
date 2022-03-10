var nome = "Aluno(a)";
var notaDoPrimeiroBimestre = 9;
var notaDoSegundoBimestre = 6;
var notaDoTerceiroBimestre = 8;
var notaDoQuartoBimestre = 7;

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4;

var notaFixada = notaFinal.toFixed(1)

console.log("Bem vindo(a) " + nome + ", sua média final foi " + notaFinal + ".");

if (notaFinal >= 7) {
    console.log ("Parabéns!")
}
else {
    console.log ("Você pode melhorar.")
}




