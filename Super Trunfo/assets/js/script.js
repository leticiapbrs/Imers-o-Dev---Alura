var carta1 = {
	nome: "Herrerassauro",
	atributos: {
    Altura: 1.5,
    Comprimento: 4.5,
    Peso: 300, 
    }
}

var carta2 = {
	nome: "Triceratops",
  atributos: {
    Altura: 6,
    Comprimento: 9,
    Peso: 6000,
    }
}

var carta3 = {
	nome: "Velociraptor",
  atributos: {
    Altura: 1,
    Comprimento: 1.8,
    Peso: 15,
    }
}

var carta4 = {
	nome: "Tiranossauro Rex",
  atributos: {
    Altura: 5.6,
    Comprimento: 14,
    Peso: 7000,
    }
}

var carta5 = {
	nome: "Ultrassauro",
  atributos: {
    Altura: 22,
    Comprimento: 38,
    Peso: 90000,
    }
}

var cartas = [carta1, carta2, carta3, carta4, carta5];
var cartaMaquina; 
var cartaJogador;

function sortearCarta() {
	var numeroCartaMaquina = parseInt (Math.random() * 5);
	cartaMaquina = cartas[numeroCartaMaquina];
	
	var numeroCartaJogador = parseInt (Math.random() * 5);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt (Math.random() * 5);
  }
	cartaJogador = cartas[numeroCartaJogador];
	console.log(cartaJogador);
  
  document.getElementById("btnSortear"). disabled = true;
  document.getElementById("btnJogar"). disabled = false;
  
  exibirOpcoes()
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";
  
  for (var atributo in cartaJogador.atributos) {
   opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
  }
  opcoes.innerHTML = opcoesTexto;
 }

function obtemAtributoSelecionado(){
  var radioAtributos = document.getElementsByName("atributo");
  
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado()
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "Você venceu!";
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = "Você perdeu, a carta da máquina é maior.";
  } else {
    elementoResultado.innerHTML = "Empatou";
  }
  console.log(cartaMaquina);
}