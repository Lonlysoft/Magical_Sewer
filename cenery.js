class Objeto{
	constructor(posDoGraphNaImagem, drawPos, source){
		this.imgPos = posDoGraphNaImagem;
		this.pos2Render = drawPos;
		this.graph = new Image();
		this.fonte = source;
	}
	desenhar(x, y){
		if (this.fonte != null){
			this.graph.src = this.fonte;
			ctx.drawImage(this.graph,
				this.imgPos[0], this.imgPos[1], this.imgPos[2], this.imgPos[3],
				x, y, this.pos2Render[0], this.pos2Render[1]);
		}
		else{
			ctx.fillStyle = "#FFFFFF"
			ctx.fillRect(x, y, this.pos2Render[0], this.pos2Render[1]);
		}
	}
}

var mapaAtual;

function colisaoRetangular(retangulo1, retangulo2){
	return retangulo1[0]+retangulo1[2] >= retangulo2[0] && retangulo1[0] <= retangulo2[0]+retangulo2[2] && retangulo1[1]+retangulo1[3] >= retangulo2[1] && retangulo1[1] <= retangulo2[1]+retangulo2[3];
}

function colisaoPontoRetangulo(ponto, retangulo, tipo){
	return ponto[0] >= retangulo[0] && ponto[0] <= retangulo[2] && ponto[1] >= retangulo[1] && ponto[1] <= retangulo[3];
}

function ladoDaColisao(retangulo1, retangulo2){
	let lado = 0;
	let totalX = retangulo1[2]/2 + retangulo2[2]/2;
	let totalZ = retangulo1[3]/2 + retangulo2[3]/2;
	//basicamente fazemos uma manipulação pra achar o centro dos retangulos e calcular a distância entre eles.
	let distanciaDosCentrosX = Math.abs((retangulo1[0] + retangulo1[2]/2) - (retangulo2[0] + retangulo2[2]/2));
	let distanciaDosCentrosY = Math.abs((retangulo1[1] + retangulo1[3]/2) - (retangulo2[1] + retangulo2[3]/2));
	if(distanciaDosCentrosX <= totalX && distanciaDosCentrosY <= totalZ){
		let overLapX = totalX - distanciaDosCentrosX;
		let overLapY = totalZ - distanciaDosCentrosY;
		if(overLapY > overLapX){ //significa que o negócio interceptou e foi pela esquerda ou direita.
			if(retangulo1[0] < retangulo2[0]){
				lado = 4;
			}
			else{
				lado = 2;
			}
			return lado;
		}
		else{//se não foi pela esquerda ou pela direita só pode ter sido por cima ou por baixo.
			if(retangulo1[1] < retangulo2[1]){
				lado = 1;
			}
			else{
				lado = 3;
			}
			return lado;
		}
	}
	else{
		return lado;
	}
}


var objects = {
	arvore01: new Objeto([0, 0, 142, 197], [142, 197], "Imagens/levels/Mg_sew_natureza.png"),
	pedra: new Objeto([24, 9, 60, 60], [60, 60], "Imagens/levels/Mg_sew_natureza.png"),
	parede: new Objeto([0, 0, 520, 520], [120, 120], null),
	casa: new Objeto([0, 0, 0, 0], [125, 125], null)
}

var tiles = {
	positionCortar: {
		gramaDia: [150, 0, 30, 30],
		gramaDiaAreiaSudeste: [0, 0, 30, 30],
		gramaDiaAreiaSul1: [30, 0, 30, 30],
		gramaDiaAreiaSul2: [60, 0, 30, 30],
		gramaDiaAreiaSul3: [90, 0, 30, 30],
		gramaDiaAreiaSudoeste: [120, 120, 30, 30],
		gramaDiaAreiaNorte1: [30, 120, 30, 30],
		gramaDiaAreiaNorte2: [60, 120, 30, 30],
		gramaDiaAreiaNorte3: [90, 120, 30, 30],
		calcada: [],
		calcadaRua: [],
		calcadaRua: []
	},
	graph: new Image()
}
tiles.graph.src = "imagens/levels/mg_sew_tileset00.png";

var scenery = {
	hasDeclaired: false,
	declair: function(LevelNumber){
		switch(LevelNumber){
			case "ftest":
				mapaAtual = ftest;
				mapaAtual.settarFronteiras();
				this.hasDeclaired = true;
				break;
			case "nivel01":
				mapaAtual = ceneries.level01;
				mapaAtual.settarFronteiras();
				this.hasDeclaired = true;
				break;
				
			case "world":
				mapaAtual = World;
				mapaAtual.settarFronteiras();
				this.hasDeclaired = true;
				break;
			default:
				mapaAtual = 0;
				mapaAtual.settarFronteiras();
				this.hasDeclaired = true;
				break;
		}
	},
	desenhar: function(){
		mapaAtual.drawFloor(2);
		personagemAtual.ser.colisionar();
		if(personagemAtual.ser.layer == 1){
	//		mapaAtual.objectGridDraw(1);
			personagemAtual.desenhar(personagemAtual.ser.direcao, personagemAtual.ser.fazendo);
		}
		else if(personagemAtual.ser.layer == 0){
			personagemAtual.desenhar(personagemAtual.ser.direcao, personagemAtual.ser.fazendo);
			//mapaAtual.objectGridDraw(1);
		}
		else{
			personagemAtual.desenhar(personagemAtual.ser.direcao, personagemAtual.ser.fazendo);
		}
	}
}