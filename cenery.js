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

const col = {
	AABB: function(retangulo1, retangulo2){
		return retangulo1[0] + retangulo1[2] >= retangulo2[0] &&
				retangulo1[0] <= retangulo2[0] + retangulo2[2] &&
				retangulo1[1] + retangulo1[3] >= retangulo2[1] &&
				retangulo1[1] <= retangulo2[1] + retangulo2[3];
	},
	
	//ordem: x, z, w, p, y, h
	AABB3D: function(cubo1, cubo2){
		return cubo1[0] + cubo1[2] >= cubo2[0] &&
				cubo1[0] <= cubo2[0] + cubo2[2] &&
				cubo1[1] + cubo1[3] >= cubo2[1] &&
				cubo1[1] <= cubo2[3] + cubo2[3] &&
				cubo1[4] + cubo1[5] >= cubo2[4] &&
				cubo1[4] <= cubo2[5] + cubo2[5];
	},
	
	AABBside: function(retangulo1, retangulo2){
		let totalX = retangulo1[2]/2 + retangulo2[2]/2;
		let totalZ = retangulo1[3]/2 + retangulo2[3]/2;
		//basicamente fazemos uma manipulação pra achar o centro dos retangulos e calcular a distância entre eles.
		let distanciaDosCentrosX = Math.abs((retangulo1[0] + retangulo1[2]/2) - (retangulo2[0] + retangulo2[2]/2));
		let distanciaDosCentrosZ = Math.abs((retangulo1[1] + retangulo1[3]/2) - (retangulo2[1] + retangulo2[3]/2));
		
		if(distanciaDosCentrosX <= totalX && distanciaDosCentrosZ <= totalZ){
			let overLapX = totalX - distanciaDosCentrosX;
			let overLapZ = totalZ - distanciaDosCentrosZ;
			if(overLapZ > overLapX){ //significa que o negócio interceptou e foi pela esquerda ou direita.
				if(retangulo1[0] < retangulo2[0]){
					return 'E'
					// →
				}
				else{
					return 'W'
					// ←
				}
			}
			else{//se não foi pela esquerda ou pela direita só pode ter sido por cima ou por baixo.
				if(retangulo1[1] < retangulo2[1]){
					return 'S';
					// ↓
				}
				else{
					return 'N'
					// ↑
				}
			}
		}
		else{
			return 0;
		}
	},
	AABB3Dside: function(retangulo1, retangulo2){
		let totalX = retangulo1[2]/2 + retangulo2[2]/2;
		let totalZ = retangulo1[3]/2 + retangulo2[3]/2;
		let totalY = retangulo1[5]/2 + retangulo2[5]/2;
		//basicamente fazemos uma manipulação pra achar o centro dos retangulos e calcular a distância entre eles.
		let distanciaDosCentrosX = Math.abs((retangulo1[0] + retangulo1[2]/2) - (retangulo2[0] + retangulo2[2]/2));
		let distanciaDosCentrosZ = Math.abs((retangulo1[1] + retangulo1[3]/2) - (retangulo2[1] + retangulo2[3]/2));
		let distanciaDosCentrosY = Math.abs((retangulo1[4] + retangulo1[5]/2) - (retangulo2[4] + retangulo2[5]/2));
		
		if(distanciaDosCentrosX <= totalX && distanciaDosCentrosZ <= totalZ && distanciaDosCentrosY <= totalY){
			let overLapX = totalX - distanciaDosCentrosX;
			let overLapZ = totalZ - distanciaDosCentrosZ;
			let overLapY = totalY - distanciaDosCentrosY;
			
			if(overLapZ > overLapX){ //significa que o negócio interceptou e foi pela esquerda ou direita.
				if(retangulo1[0] < retangulo2[0]){
					return 'E'
					// →
				}
				else{
					return 'W'
					// ←
				}
			}
			else{//se não foi pela esquerda ou pela direita só pode ter sido por cima ou por baixo.
				if(retangulo1[1] < retangulo2[1]){
					return 'S';
					// ↓
				}
				else{
					return 'N'
					// ↑
				}
			}
			//se não foi por nenhum dos dois talvez o Y teja interceptando
			if(retangulo1[4] < retangulo2[4]){
				return 'U';
			}
			else{
				return 'D';
			}
		}
		else{
			return 0;
		}
	}
}


var scenery = {
	hasDeclaired: false,
	declair: function(LevelNumber){
		switch(LevelNumber){
			case "ftest":
				mapaAtual = ftest;
				mapaAtual.settarFronteiras();
				break;
			case "nivel01":
				mapaAtual = ceneries.level01;
				mapaAtual.settarFronteiras();
				break;
				
			case "world":
				mapaAtual = World;
				mapaAtual.settarFronteiras();
				break;
			default:
				mapaAtual = 0;
				mapaAtual.settarFronteiras();
				break;
		}
		this.hasDeclaired = true;
	},
	desenhar: function(){
		mapaAtual.drawFloor(2);
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