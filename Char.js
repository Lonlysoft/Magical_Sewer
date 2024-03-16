var canvas = document.getElementById("personagens")
var ctx = canvas.getContext("2d")
canvas.width = 520;
canvas.height = 520;
var sombra = new Image()
sombra.src = "src/imagens/sombras.png"

function WorldToGrid(eixo, tileSize){
	return Math.floor(eixo/tileSize);
}

function GridToWorld(gridAx, tileSize){
	return gridAx*tileSize;
}

function limitateUp(variable, limit){
	if(variable > limit){
		return limit;
	}
	return variable;
}

function limitateDown(variable, limit){
	if(variable < limit){
		return limit;
	}
	return variable;
}

class Protagonista{
	constructor(Nome, HP, ATK, DEF, VMIN, VMAX, JMAX, xp, calda, peso){
		this.inGrid = {x: 1, z: 1};
		this.WorldPos = {x: this.inGrid.x*60+60/2, y: 0, z: this.inGrid.z*60+60/2};
		this.yFloor = 0;
		this.massa = peso;
		this.boxCol = {x: this.WorldPos.x-30, z: this.WorldPos.z-30, y: this.WorldPos.y-120, w: 60, p: 30, h: 120};
		this.HP = HP; this.hp = HP;
		this.ATK = ATK; this.DEF = DEF
		this.ACL = VMIN; this.VMAX = VMAX; this.velocity = {x: 0, y: 0, z: 0};
		this.STR = VMIN; this.JMAX = JMAX; this.velocit_y = 0;
		this.calda = new Array(calda);
		this.layer = 1;
		//cabeca, corpo, maoD, maoC, pernas, reliquia01, reliquia02, reliquia03
		this.equipamentos = [0, 0, 0, 0, 0, 0, 0, 0];
		this.Nome = Nome;
		this.direcao = 1;
		this.xp = xp;
		this.ladoDaColisao = 0;
		this.onSpawn = false;
		this.pulando = false;
		this.nadando = false;
		this.fazendo = "still";
		this.currentCol = [this.WorldPos.x,this.WorldPos.z];
	}
	andar(axis){
		if(this.velocity[axis] >= this.VMAX){
			this.velocity[axis] = this.VMAX;
		}
		else{
			if(frame%2 == 1) this.velocity[axis] += this.ACL;
		}
	}
	parar(axis){
		if(frame%2 == 1) this.velocity[axis] = 0;
	}
	pararAbsoluto(axis){
		this.velocity[axis] = 0;
	}
	pular(){
			personagemAtual.pontoCentral[1] -= this.velocity.y;
			this.WorldPos.y += this.velocity.y;
			this.velocity.y += 10;
	}
	cair(){
		if(this.WorldPos.y > mapaAtual.limites[WorldToGrid(this.WorldPos.z, 60)][WorldToGrid(this.WorldPos.x, 60)].y){
			this.velocity.y += 10
			personagemAtual.pontoCentral[1] += this.velocity.y;
			this.WorldPos.y -= this.velocity.y;
			return;
		}
	}
	declairCoords(){
		this.inGrid.x = Math.floor(this.currentCol[0]/60);
		this.inGrid.z = Math.floor(this.currentCol[1]/60);
	}
	spawnInRelevo(j,i){
		this.WorldPos.y = mapaAtual.RelevoGrid[j][i];
	}
	noChao(){
		if(this.WorldPos.y <= mapaAtual.limites[WorldToGrid(this.WorldPos.z, 60)][WorldToGrid(this.WorldPos.x, 60)].y){
			this.fazendo = "still";
			return true;
		} return false;
	}
	
	spawn(mode){
		switch(mode){
			case 1:
				for(let i = 0; i < mapaAtual.largura*mapaAtual.altura; i++){
					if(mapaAtual.beingGrid[j*mapaAtual.largura+i] == "p1"){
						this.WorldPos.x = j*60;
						this.WorldPos.z = i*60;
						this.WorldPos.y = this.spawnInRelevo(i);
						this.onSpawn = true;
						break;
					}
				}
			break;
			
			default:
				let x = 0, z = 0;
				x = this.inGrid.x;
				z = this.inGrid.z;
				if(this.WorldPos.x >= mapaAtual.largura){
					x = mapaAtual.largura - 1;
				}
				if(this.WorldPos.z >= mapaAtual.altura){
					z = mapaAtual.altura - 1; 
				}
				if(this.WorldPos.x < 0){
					x = 0;
				}
				if(this.WorldPos.z < 0){
					z = 0;
				}
				mapaAtual.beingGrid[z*mapaAtual.altura+x] = "p1";
				this.onSpawn = true;
			break;
		}
	}
	equip(tool){
		for(let d = 0; d < this.calda.length; d++){
			if(this.calda[d] == nomeDoEquipamento){
				this.calda[d] = 0;
			}
			this.equipamentos[idSearchType(tool.type)] = nomeDoEquipamento;
		}
	}
	atacar(){
		//createBox();
		//atkCol();
		
	}
	colisionar(){
		if(this.WorldPos.x<0 || this.WorldPos.z<0){
			this.hp = 0;
			//aqui teria uma tela de game over porque ele tà out of bounds
		}
		
		if(this.WorldPos.x>mapaAtual.largura*60 || this.WorldPos.z>mapaAtual.altura*60){
			this.hp = 0;
			//aqui tbm
		}
		
		this.boxCol.x = this.WorldPos.x-30;
		this.boxCol.z = this.WorldPos.z-30;
		this.boxCol.y = this.WorldPos.y;
		
		switch(this.direcao){
			case 1: this.currentCol[0] = this.WorldPos.x; this.currentCol[1] = this.WorldPos.z; break;
			case 2: this.currentCol[0] = this.WorldPos.x + 30; this.currentCol[1] = this.WorldPos.z; break;
			case 3: this.currentCol[0] = this.WorldPos.x; this.currentCol[1] = this.WorldPos.z - 30; break;
			case 4: this.currentCol[0] = this.WorldPos.x - 30; this.currentCol[1] = this.WorldPos.z; break;
			case 5: this.currentCol[0] = this.WorldPos.x + 30; this.currentCol[1] = this.WorldPos.z; break;
			case 6: this.currentCol[0] = this.WorldPos.x + 30; this.currentCol[1] = this.WorldPos.z - 30; break;
			case 7: this.currentCol[0] = this.WorldPos.x - 30; this.currentCol[1] = this.WorldPos.z - 30; break;
			case 8: this.currentCol[0] = this.WorldPos.x - 30; this.currentCol[1] = this.WorldPos.z; break;
		}
		switch(mapaAtual.shadowGrid[this.inGrid.x][this.inGrid.z]){
			default:
				this.layer = 2;
				break;
			case "S":
				this.layer = 1
			break;
			case "S":
				this.layer = 0
			break;
		}
		
		fale("camada: "+ this.layer + "", 45, 325);
		let x_intro = Math.floor(Camera.x/60);
		let x_end = Math.floor((Camera.x+Camera.w)/60);
		let y_intro = Math.floor(Camera.y/60) + this.WorldPos.y;
		let y_end = Math.floor((Camera.y+Camera.h)/60) + this.WorldPos.y;
		
		if(x_intro < 0) x_intro = 0;
		if(y_intro < 0) y_intro = 0;
		if(x_end > mapaAtual.largura) x_end = mapaAtual.largura;
		if(y_end > mapaAtual.altura) y_end = mapaAtual.altura;
		for(let j = x_intro; j < x_end; j++){
			for(let i = y_intro; i < y_end; i++){
				let renderPlusX = j * 60 - Camera.x + canvas.width/2 - Camera.w/2;
				let renderPlusY = i * 60 - Camera.y + canvas.height/2 - Camera.h/2;
				if(this.WorldPos.y < mapaAtual.limites[i][j].y)
					switch(col.AABBside([this.boxCol.x, this.boxCol.z, this.boxCol.w, this.boxCol.p], [mapaAtual.limites[i][j].x, mapaAtual.limites[i][j].z, 60, 60])){
						case 'N':
							this.WorldPos.z += this.velocity.z;
							this.velocity.z = Math.floor(this.velocity.z/3);
						break;
						
						case 'S':
							this.WorldPos.z -= this.velocity.z;
							this.velocity.z = Math.floor(this.velocity.z/3);
						break;
						
						case 'E':
							this.WorldPos.x -= this.velocity.x;
							this.velocity.x = Math.floor(this.velocity.x/3);
						break;
						
						case 'W':
							this.WorldPos.x += this.velocity.x;
							this.velocity.x = Math.floor(this.velocity.x/3);
						break;
						
						case "U":
							this.WorldPos.y += this.velocity.y;
							personagemAtual.pontoCentral[1] -= this.velocity.y;
							this.velocity.y = Math.floor(this.velocity.y/3);
						break;
						
						case "D":
							this.WorldPos.y -= this.velocity.y;
							personagemAtual.pontoCentral[1] += this.velocity.y;
							this.velocity.y = Math.floor(this.velocity.y/3);
							this.onGround = true
						break;
					}
					
					//fim if 
			}
			//fim for
		}
		//fim for
	}
	//fim colisionar
}

var Guaxo = {
	ID: 1,
	/*
	hp: 400
	atk: 20
	def: 20
	vmin: 2
	vmax: 10
	jmax: 60
	xp: 243
	calda[10]
	peso: 100
	*/
	ser: new Protagonista("Guaxo", 400, 20, 20, 2, 10, 60, 243, 10, 100),
	grapho: new Image(),
	position_CORTAR: {
		//ordem: x, y, largura, altura
		//corpo
		corpoSUL: [13, 8, 79, 101],
		corpoNORTE: [116, 9, 78, 91],
		corpoLESTE: [222, 9, 79, 91], 
		corpoSUDESTE: [322, 9, 80, 93],
		corpoNORDESTE: [423, 9, 80, 93],
		feralCSUL: [528, 9, 80, 93],
		feralCSL: [633, 20, 91, 85],
		feralCSO: [738, 12, 91, 93],
		
		//pés
		feetStill: [8, 116, 27, 15],
		feetL: [8, 133, 34, 20],
		feetSUDESTE: [9, 155, 38, 27],
		feet90deg: [51, 125, 26, 33],
		feet90deg2: [300, 120, 26, 38],
		feet90deg3: [399, 123, 26, 36],
		feet30deg: [440, 125, 44, 33],
		
		perna: [89, 107, 44, 61],
		perna2: [342, 116, 44, 61],
		
		//braco
		braco1: [148, 119, 25, 34],
		braco2: [177, 119, 25, 34],
		
		//maos
		maoStill: [205, 135, 17, 26],
		maoPointer: [227, 135, 32, 28],
		maofist: [264, 139, 26, 23],
		
		//cabecas
		faceSUL: [10, 247, 61, 62],
		faceNORTE: [76, 250, 62, 57],
		faceLESTE: [150, 250, 55, 58],
		faceSUDESTE: [214, 250, 59, 59],
		faceNOROESTE: [284, 253, 60, 57],
		
		//rabos
		cauda01: [6, 195, 65, 47],
		cauda02: [84, 178, 46, 59],
		cauda03: []
	},
	//"0S", x, y, w, h, ang;
	esqueleto:{
		cabeca: [1,-18, -97, 0], corpo: [1, -25, -75, 0],
		ombroR: [-20, -73, 22, 30, Math.PI/6], ombroL: [-20, -73, 22, 30, Math.PI/6],
		bracoR: [], bracoL: [], pernaR: [-23,-40, 25, 40, 0], pernaL: [-23,-40, 25, 40, 0],
		péR: [], péL: [], calda: [], calda2: [], calda3: []},
	pontoCentral: [canvas.width/2, canvas.height/2],
	STA: 0,
	alturaAtual: 0,
	larguraGeral: 0,
	
	desenhar: function(dir, whatToDo){
		ctx.fillStyle = "#078FAC";
		ctx.fillRect(this.pontoCentral[0] - 30, this.pontoCentral[1] - 100, 60, 100);
	},
	calcularEsqueleto: function(){
		
	}
	/*
		switch(whatToDo){
			
			
			case "stillF1":
				switch(dir){
					
				}
			break;
			case "stillF2":
				switch(dir){
					
				}
			break;
			
			
			case "andarR1":
				switch(dir){
					
				}
			break;
			case "andarR2":
				switch(dir){
					
				}
			break;
			case "andarR3":
				switch(dir){
					
				}
			break;
			
			
			case "andarL1":
				switch(dir){
					
				}
			break;
			case "andarL2":
				switch(dir){
					
				}
			break;
			case "andarL3":
				switch(dir){
					
				}
			break;
			
			
			case "pularF1":
				switch(dir){
					
				}
			break;
			
			
			case "cair":
				switch(dir){
					
				}
			break;
			
			
			case "dano":
				switch(dir){
					
				}
			break;
			
			
			case "dormirF1":
				switch(dir){
					
				}
			break;
			case "dormirF2":
				switch(dir){
					
				}
			break;
			case "dormirF3":
				switch(dir){
					
				}
			break;
			
			
			case "sentar":
				switch(dir){
					
				}
			break;
			
			case "atacarF1":
				switch(dir){
					
				}
			break;
			case "atacarF2":
				switch(dir){
					
				}
			break;
			case "atacarF3":
				switch(dir){
					
				}
			break;
			
			case "hold":
				switch(dir){
					
				}
			break;
			
			
			case "agacharF1":
				switch(dir){
					
				}
			break;
			case "agacharF2":
				switch(dir){
					
				}
			break;
			case "agacharF3":
				switch(dir){
					
				}
			break;
			
			
			case "feralStill":
				switch(dir){
					
				}
			break;
		}
	}
	*/
}
Guaxo.grapho.src = "imagens/Seres/Guaxo_InGame.png";

var Raty = {
	ID: 1,
	/*
	hp: 400
	atk: 20
	def: 20
	vmin: 2
	vmax: 15
	jmax: 20
	xp: 243
	calda[5]
	peso: 100
	*/
	ser: new Protagonista("Raty", 400, 20, 15, 1, 15, 60, 480, 5, 100),
	grapho: new Image(),
	position_CORTAR: {
		//ordem: x, y, largura, altura
		//corpo
		corpoSUL: [13, 8, 79, 101],
		corpoNORTE: [116, 9, 78, 91],
		corpoLESTE: [222, 9, 79, 91], 
		corpoSUDESTE: [322, 9, 80, 93],
		corpoNORDESTE: [423, 9, 80, 93],
		feralCSUL: [528, 9, 80, 93],
		feralCSL: [633, 20, 91, 85],
		feralCSO: [738, 12, 91, 93],
		
		//pés
		feetStill: [8, 116, 27, 15],
		feetL: [8, 133, 34, 20],
		feetSUDESTE: [9, 155, 38, 27],
		feet90deg: [51, 125, 26, 33],
		feet90deg2: [300, 120, 26, 38],
		feet90deg3: [399, 123, 26, 36],
		feet30deg: [440, 125, 44, 33],
		
		perna: [89, 107, 44, 61],
		perna2: [342, 116, 44, 61],
		
		//braco
		braco1: [148, 119, 25, 34],
		braco2: [177, 119, 25, 34],
		
		//maos
		maoStill: [205, 135, 17, 26],
		maoPointer: [227, 135, 32, 28],
		maofist: [264, 139, 26, 23],
		
		//cabecas
		faceSUL: [10, 247, 61, 62],
		faceNORTE: [76, 250, 62, 57],
		faceLESTE: [150, 250, 55, 58],
		faceSUDESTE: [214, 250, 59, 59],
		faceNOROESTE: [284, 253, 60, 57],
		
		//rabos
		cauda01: [6, 195, 65, 47],
		cauda02: [84, 178, 46, 59],
		cauda03: []
	},
	//"0S", x, y, w, h, ang;
	esqueleto:{
		cabeca: [1,-18, -97, 0], corpo: [1, -25, -75, 0],
		ombroR: [-20, -73, 22, 30, Math.PI/6], ombroL: [-20, -73, 22, 30, Math.PI/6],
		bracoR: [], bracoL: [], pernaR: [-23,-40, 25, 40, 0], pernaL: [-23,-40, 25, 40, 0],
		péR: [], péL: [], calda: []},
	pontoCentral: [canvas.width/2, canvas.height/2],
	STA: 0,
	alturaAtual: 0,
	larguraGeral: 0,
	
	desenhar: function(dir, whatToDo){
		ctx.fillStyle = "#078FAC";
		ctx.fillRect(this.pontoCentral[0] - 30, this.pontoCentral[1] - 100, 60, 100);
	}
	/*
		switch(whatToDo){
			
			
			case "stillF1":
				switch(dir){
					
				}
			break;
			case "stillF2":
				switch(dir){
					
				}
			break;
			
			
			case "andarR1":
				switch(dir){
					
				}
			break;
			case "andarR2":
				switch(dir){
					
				}
			break;
			case "andarR3":
				switch(dir){
					
				}
			break;
			
			
			case "andarL1":
				switch(dir){
					
				}
			break;
			case "andarL2":
				switch(dir){
					
				}
			break;
			case "andarL3":
				switch(dir){
					
				}
			break;
			
			
			case "pularF1":
				switch(dir){
					
				}
			break;
			
			
			case "cair":
				switch(dir){
					
				}
			break;
			
			
			case "dano":
				switch(dir){
					
				}
			break;
			
			
			case "dormirF1":
				switch(dir){
					
				}
			break;
			case "dormirF2":
				switch(dir){
					
				}
			break;
			case "dormirF3":
				switch(dir){
					
				}
			break;
			
			
			case "sentar":
				switch(dir){
					
				}
			break;
			
			case "atacarF1":
				switch(dir){
					
				}
			break;
			case "atacarF2":
				switch(dir){
					
				}
			break;
			case "atacarF3":
				switch(dir){
					
				}
			break;
			
			case "hold":
				switch(dir){
					
				}
			break;
			
			
			case "agacharF1":
				switch(dir){
					
				}
			break;
			case "agacharF2":
				switch(dir){
					
				}
			break;
			case "agacharF3":
				switch(dir){
					
				}
			break;
			
			
			case "feralStill":
				switch(dir){
					
				}
			break;
		}
	}
	*/
}
Raty.grapho.src = "imagens/Seres/Raty_Sheet.png";

var Dante = {
	ID: 1,
	/*
	hp: 400
	atk: 20
	def: 20
	vmin: 2
	vmax: 10
	jmax: 20
	xp: 243
	calda[10]
	peso: 100
	*/
	ser: new Protagonista("Dante", 999, 99, 50, 3, 10, 60, 10000, 30, 200),
	grapho: new Image(),
	position_CORTAR: {
		//ordem: x, y, largura, altura
		//corpo
		
	},
	//"0S", x, y, w, h, ang;
	esqueleto:{
		cabeca: [1,-18, -97, 0], corpo: [1, -25, -75, 0],
		ombroR: [-20, -73, 22, 30, Math.PI/6], ombroL: [-20, -73, 22, 30, Math.PI/6],
		bracoR: [], bracoL: [], pernaR: [-23,-40, 25, 40, 0], pernaL: [-23,-40, 25, 40, 0],
		péR: [], péL: [], calda: []},
	pontoCentral: [canvas.width/2, canvas.height/2],
	STA: 0,
	alturaAtual: 0,
	larguraGeral: 0,
	
	desenhar: function(dir, whatToDo){
		ctx.fillStyle = "#078FAC";
		ctx.fillRect(this.pontoCentral[0] - 30, this.pontoCentral[1] - 100, 60, 100);
	}
	/*
		switch(whatToDo){
			
			
			case "stillF1":
				switch(dir){
					
				}
			break;
			case "stillF2":
				switch(dir){
					
				}
			break;
			
			
			case "andarR1":
				switch(dir){
					
				}
			break;
			case "andarR2":
				switch(dir){
					
				}
			break;
			case "andarR3":
				switch(dir){
					
				}
			break;
			
			
			case "andarL1":
				switch(dir){
					
				}
			break;
			case "andarL2":
				switch(dir){
					
				}
			break;
			case "andarL3":
				switch(dir){
					
				}
			break;
			
			
			case "pularF1":
				switch(dir){
					
				}
			break;
			
			
			case "cair":
				switch(dir){
					
				}
			break;
			
			
			case "dano":
				switch(dir){
					
				}
			break;
			
			
			case "dormirF1":
				switch(dir){
					
				}
			break;
			case "dormirF2":
				switch(dir){
					
				}
			break;
			case "dormirF3":
				switch(dir){
					
				}
			break;
			
			
			case "sentar":
				switch(dir){
					
				}
			break;
			
			case "atacarF1":
				switch(dir){
					
				}
			break;
			case "atacarF2":
				switch(dir){
					
				}
			break;
			case "atacarF3":
				switch(dir){
					
				}
			break;
			
			case "hold":
				switch(dir){
					
				}
			break;
			
			
			case "agacharF1":
				switch(dir){
					
				}
			break;
			case "agacharF2":
				switch(dir){
					
				}
			break;
			case "agacharF3":
				switch(dir){
					
				}
			break;
			
			
			case "feralStill":
				switch(dir){
					
				}
			break;
		}
	}
	*/
}
Dante.grapho.src = "imagens/Seres/Guaxo_InGame.png";


//variáveis gerais
var personagemAtual;


function desenharParteDoCorpo(parteCortar, x, y, w, h, rad = 0){
	ctx.translate(x, y);
		ctx.rotate(rad);
		ctx.drawImage(personagemAtual.grapho, parteCortar[0], parteCortar[1], parteCortar[2], parteCortar[3], 0, 0, w, h);
		ctx.rotate(-rad);
	ctx.translate(-x, -y);
}

function mirrorar(){
	ctx.translate(canvas.width, 0);
	ctx.scale(-1, 1);
}
