var canvas = document.getElementById("personagens")
var ctx = canvas.getContext("2d")
canvas.width = 520;
canvas.height = 520;

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

function mirrorar(){
	ctx.translate(canvas.width, 0);
	ctx.scale(-1, 1);
}

class Protagonista{
	constructor(Nome, HP, ATK, DEF, VMIN, VMAX, JMAX, xp, calda, peso){
		//relacionado ao movimento
		this.inGrid = {x: 3, z: 3};
		this.WorldPos = {x: this.inGrid.x*60+60/2, y: 0, z: this.inGrid.z*60+60/2};
		this.peso = peso;
		this.boxCol = {x: this.WorldPos.x-30, z: this.WorldPos.z-30, y: this.WorldPos.y-90, w: 60, p: 30, h: 90};
		this.HP = HP; this.hp = HP;
		this.ATK = ATK; this.DEF = DEF
		this.ACL = VMIN; this.VMAX = VMAX; this.velocity = {x: 0, y: 0, z: 0};
		this.STR = VMIN;
		this.JPOW = JMAX;
		this.onGround = true;
		this.onSpawn = false;
		this.nadando = false;
		this.fazendo = "still"; 
		
		this.layer = 1;
		this.calda = new Array(calda);
		//cabeca, corpo, maoD, maoC, pernas, reliquia01, reliquia02, reliquia03
		this.equipamentos = [0, 0, 0, 0, 0, 0, 0, 0];
		this.Nome = Nome;
		this.direcao = 1;
		this.xp = xp;
		this.pontoCentral = [canvas.width/2, canvas.height/2],
		//relacionado à ataques e coisas.
		this.ATKbox = null;
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
	declairCoords(){
		this.inGrid.x = Math.floor(this.currentCol[0]/60);
		this.inGrid.z = Math.floor(this.currentCol[1]/60);
	}
	spawnInRelevo(j,i){
		return mapaAtual.RelevoGrid[j][i]*60;
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
		this.ATKbox = col.createAtkBox(boxcol, STR);
	}
}


//variáveis gerais
//meio que ela vai precisar ser global porque ela vai precisar
var personagemAtual;


function desenharParteDoCorpo(parteCortar, x, y, w, h, rad = 0){
	ctx.translate(x, y);
		ctx.rotate(rad);
		ctx.drawImage(personagemAtual.grapho, parteCortar[0], parteCortar[1], parteCortar[2], parteCortar[3], 0, 0, w, h);
		ctx.rotate(-rad);
	ctx.translate(-x, -y);
}
