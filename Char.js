var canvas = document.getElementById("personagens")
var ctx = canvas.getContext("2d")
var sombra = new Image()
sombra.src = "imagens/sombras.png"

class Protagonista{
	constructor(Nome, HP, ATK, DEF, VMIN, VMAX, JMAX, xp, calda, peso){
		this.inGrid = {x: 0, z: 0};
		this.WorldPos = {x: this.inGrid.x*60+60/2, y: 0, z: this.inGrid.z*60+60/2};
		this.massa = peso;
		this.HP = HP; this.hp = HP;
		this.ATK = ATK; this.DEF = DEF
		this.ACL = VMIN; this.VMAX = VMAX; this.velocity = 0;
		this.STR = VMIN; this.JMAX = JMAX; this.velocit_y = 0;
		this.calda = new Array(calda);
		this.layer = 1;
		//cabeca, corpo, maoD, maoC, pernas, reliquia01, reliquia02, reliquia03
		this.equipamentos = [0, 0, 0, 0, 0, 0, 0, 0];
		this.Nome = Nome;
		this.direcao = 1;
		this.xp = xp;
		this.onSpawn = false;
		this.pulando = false;
		this.nadando = false;
		this.fazendo = "still";
		this.currentCol = [this.WorldPos.x,this.WorldPos.z];
	}
	andar(){
		if(this.velocity >= this.VMAX){
			this.velocity = this.VMAX;
		}
		else{
			if(frame%2 == 1) this.velocity += this.ACL;
		}
	}
	parar(){
		if(frame%2 == 1) this.velocity = 0;
	}
	pular(){
		if(k < this.JMAX){
			if(this.velocit_y >= this.JMAX){
				this.velocity = 0;
			}
			else{
				if(frame%2 == 1) this.velocit_y += this.STR;
				k++;
			}
		}
		else{
			this.pulando = false;
			this.fazendo = "caindo";
		}
	}
	cair(){
		if(this.WorldPos.y > mapaAtual.collisionGrid[this.inGrid.z * mapaAtual.largura + this.inGrid.x] && k>0){
			personagemAtual.pontoCentral[1] += 10;
			this.WorldPos.y-= 10;
			k--;
		}
	}
	declairCoords(){
		this.inGrid.x = Math.floor(this.currentCol[0]/60);
		this.inGrid.z = Math.floor(this.currentCol[1]/60);
	}
	spawnInRelevo(i){
		this.WorldPos.y = mapaAtual.RelevoGrid[j*mapaAtual.largura+i]
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
				mapaAtual.beingGrid[x*mapaAtual.largura+z] = "p1";
				this.onSpawn = true;
				break;
		}
	}
	equip(nomeDoEquipamento){
		for(let d = 0; d < this.calda.length; d++){
			if(this.calda[i] == nomeDoEquipamento){
				this.calda[i] = 0;
				this.equipamentos[idSearchType(nomeDoEquipamento)] = "nomeDoEquipamento";
			}
		}
	}
	atacar(){
		
	}
	colisionar(){
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
		switch(mapaAtual.shadowGrid[this.inGrid.z*mapaAtual.altura+this.inGrid.x]){
			default:
				this.layer = 2;
				break;
			case "S1":
				this.layer = 1
			break;
			case "S":
				this.layer = 0
			break;
		}
		fale("camada: "+ this.layer + "", 45, 325);
		for(let i = -1; i<2; i++){
			for(let j = -1; j<2; j++){
				if(this.WorldPos.y < mapaAtual.relevoGrid[this.inGrid.z+i*mapaAtual.altura+this.inGrid.x+j]){
					if( colisaoRetangular([this.WorldPos.x-30, this.WorldPos.z-30, 60, 30], [mapaAtual.limites[this.inGrid.z*mapaAtual.altura+this.inGrid.x].pos.x, mapaAtual.limites[this.inGrid.z*mapaAtual.altura+this.inGrid.x].pos.y, 60, 60]) ){
						mover = false;
						let onde = ladoDaColisao([this.WorldPos.x-30, this.WorldPos.z-30, this.WorldPos.x+30, this.WorldPos.z], [mapaAtual.limites[this.inGrid.z*mapaAtual.altura+this.inGrid.x].pos.x, mapaAtual.limites[this.inGrid.z*mapaAtual.altura+this.inGrid.x].pos.y, mapaAtual.limites[this.inGrid.z*mapaAtual.altura+this.inGrid.x].pos.x+60, mapaAtual.limites[this.inGrid.z*mapaAtual.altura+this.inGrid.x].pos.y+60]);
						fale("onde " + onde + "", 45, 345);
						
						switch(onde){
							//mesma lógica do CSS
							case 1: // 🔳 ele vai pelo topo 
								this.WorldPos.z = (this.inGrid.z-1)*60;
							break;
							
							case 2: // 🔳<- 
								this.WorldPos.x = mapaAtual.limites[this.inGrid.z*mapaAtual.altura+this.inGrid.x].pos.x+60 + 30;
							break;
							
							case 3: // 🔳 ele vai por baixo 
								this.WorldPos.z = mapaAtual.limites[this.inGrid.z*mapaAtual.altura+this.inGrid.x].pos.y+60 + 30;
							break;
							
							case 4: // ->🔳
								this.WorldPos.x = mapaAtual.limites[this.inGrid.z*mapaAtual.altura+this.inGrid.x].pos.x - 30;
							break;
						}
						//fim switch
					}
					//fim if
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
	ser: new Protagonista("Guaxo", 400, 20, 20, 2, 10, 20, 243, 10, 100),
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
Guaxo.grapho.src = "imagens/Seres/Guaxo_InGame.png";

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
