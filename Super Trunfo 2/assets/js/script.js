var carta1 = {
	nome: "Blatoise",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
	atributos: {
    Ataque: 2200,
    Defesa: 2450,
    Peso: 85.5, 
    }
}

var carta2 = {
	nome: "Triceratops",
    imagem: "https://www.infoescola.com/wp-content/uploads/2010/07/triceratop_552982969.jpg",
    atributos: {
    Ataque: 6,
    Defesa: 9,
    Peso: 6000,
    }
}

var carta3 = {
	nome: "Velociraptor",
    imagem: "https://static.natgeo.pt/files/styles/image_3200/public/velociraptor-mongoliensis_2490029.webp?w=768",
  atributos: {
    Ataque: 1,
   Defesa: 1.8,
    Peso: 15,
    }
}

var carta4 = {
	nome: "Tiranossauro Rex",
    imagem: "https://www.infoescola.com/wp-content/uploads/2010/06/tiranossauro-rex_102305173.jpg",
  atributos: {
    Ataque: 5.6,
   Defesa: 14,
    Peso: 7000,
    }
}

var carta5 = {
	nome: "Ultrassauro",
    imagem: "http://images.dinosaurpictures.org/ultrasaurus_7eba.jpg",
  atributos: {
    Ataque: 22,
   Defesa: 38,
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
  
  exibirCartaJogador();
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
  exibirCartaMaquina()
}

function exibirCartaJogador () {
    var divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = ""; 
    for (var atributo in cartaJogador.atributos) {
     opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + ": " + cartaJogador.atributos[atributo] + "<br>";
    }

    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function exibirCartaMaquina () {
    var divCartaMaquina = document.getElementById("carta-maquina")
    divCartaMaquina.style.backgroundImage = "url(" + cartaMaquina.imagem + ")"
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = ""; 
    for (var atributo in cartaMaquina.atributos) {
     opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + ": " + cartaMaquina.atributos[atributo] + "<br>";
    }

    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"

}