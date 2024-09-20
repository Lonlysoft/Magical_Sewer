var canvas = document.getElementById("personagens")
var ctx = canvas.getContext("2d")
canvas.width = 520;
canvas.height = 520;

class Ser{
	constructor(NOME, HP, ATK, DEF, ACL, VMAX, altura, largura, profundidade, HTMLsrc){
		this.Nome = NOME;
		this.HP = HP; this.hp = HP;
		this.ATK = ATK; this.DEF = DEF;
		this.ACL = ACL; this.VMAX = VMAX;
		this.constHP = HP;
		
		this.isSpawn = false;
		this.isAlive = true;
		this.WorldPos = {x: undefined, y: undefined, z: undefined};
		this.OriginPos = {x: undefined, y: undefined, z: undefined};
		this.boxCol = new Box(undefined, undefined, undefined, largura, altura, profundidade);
		this.velocity = {x: 0, y: 0, z: 0};
		this.friction = 0.4;
		
		this.direcao = 1;
		this.grapho = document.querySelector(HTMLsrc);
		this.layer = 0;
		this.sublayer = 0;
		this.sombra = {x: this.boxCol.x, z: this.boxCol.z-this.boxCol.h};
		this.pontoCentral = [canvas.width/2, canvas.height/2];
		this.pulando = false;
		this.sprite = {
			w: 154,
			h: 154
		}
		this.frameX;
		this.frameY;
	}
	
	andar(axis){
		if(this.velocity[axis] >= this.VMAX){
			this.velocity[axis] = Number.parseInt(this.VMAX * this.pol);
		}
		else if(this.velocity[axis] <= (this.VMAX *-1)){
			this.velocity[axis] = Number.parseInt(this.VMAX * this.pol);
		}
		else{
			this.velocity[axis] += Number.parseInt(this.ACL * this.pol);
		}
	}
	parar(axis){
		this.velocity[axis] *= this.friction;
		this.velocity[axis] = Number.parseInt(this.velocity[axis])
	}
	reset(){
		this.hp = this.constHP;
		this.WorldPos.x = this.OriginPos.x;
		this.WorldPos.z = this.OriginPos.z;
		this.WorldPos.y = this.OriginPos.y;
		this.boxCol.x = this.OriginPos.x - this.boxCol.w*0.5;
		this.boxCol.y = this.OriginPos.y + this.boxCol.h;
		this.boxCol.z = this.OriginPos.z - this.boxCol.p*0.5;
	}
	setTop(z){
		this.boxCol.z = z
	}
	setBottom(z){
		this.boxCol.z = z - this.boxCol.p - MAGIC_OFFSET;
	}
	setEast(x){
		this.boxCol.x = x
	}
	setWest(x){
		this.boxCol.x = x - this.boxCol.w - MAGIC_OFFSET;
	}
	
}

class Protagonista extends Ser{
	constructor(Nome, HP, ATK, DEF, VMIN, VMAX, JMAX, calda, altura, largura, profundidade, skills, HTMLsrc){
		//relacionado ao movimento
		super(Nome, HP, ATK, DEF, VMIN, VMAX, altura, largura, profundidade, HTMLsrc);
		this.STR = VMIN;
		this.JPOW = JMAX;
		this.onGround = true;
		this.nadando = false;
		this.podeTomarDano = true;
		this.calda = new Array(calda);
		//cabeca, corpo, maoD, maoC, pernas, reliquia01, reliquia02, reliquia03
		this.equipamentos = [0, 0, 0, 0, 0, 0, 0, 0];
		this.xp = 0;
		this.oldFznd = "still"
		this.invensibilidade = false;
		//relacionado à ataques e coisas.
		this.ATKbox = {x: undefined, y: undefined, z: undefined, w: largura, h: altura, p: profundidade, type: "soco"};
		this.habilidades = skills;
		this.section = 0;
		this.ID = 0;
	}
	//important
	update(){
		this.boxCol.x += this.velocity.x;
		this.boxCol.z += this.velocity.z;
		if( checkPontoCentral() == false ){
			this.pontoCentral[1]-=this.velocity.z;
			this.pontoCentral[0]-=this.velocity.x;
		}
		if(this.invensibilidade){
			window.setTimeout(()=>{this.invensibilidade = false}, 2000);
		}
	}
	//isso é usado justamente pra qnd dà game over ou d
	
	//graphics
	desenhar(){
		//ctx.drawImage(this.grapho, this.frameX*this.sprite.w, this.frameY*this.sprite.h, this.sprite.w, this.sprite.h, this.pontoCentral[0]-this.boxCol.h*0.5, this.pontoCentral[1]-this.boxCol.h, this.boxCol.h, this.boxCol.h);
		ctx.fillStyle = "teal"
		ctx.fillRect(this.pontoCentral[0]-this.boxCol.h*0.5, this.pontoCentral[1]+this.boxCol.p*0.5-this.boxCol.h, this.boxCol.h, this.boxCol.h)
	}
	
	spawnInRelevo(x, y){
		return mapaAtual.relevoGrid[y][x]*TILE_SIZE;
	}
	spawn(){
		for(let i = 0; i < mapaAtual.altura; i++){
			for(let j = 0; j < mapaAtual.largura; j++){
				if(mapaAtual.beingGrid[i][j] == "p1"){
					this.boxCol.x = j*TILE_SIZE;
					this.boxCol.z = i*TILE_SIZE;
					this.WorldPos.y = this.spawnInRelevo(j,i);
					/*
					this.WorldPos.x = this.boxCol.x+this.boxCol.w*0.5;
					this.WorldPos.z = this.boxCol.z+this.boxCol.p*0.5;
					this.boxCol.y = this.WorldPos.y+this.boxCol.h;
					*/
					return true;
				}
			}
		}
	}
	
	//RPG alikes
	equip(tool){
		for(let d = 0; d < this.calda.length; d++){
			if(this.calda[d] == nomeDoEquipamento){
				this.calda[d] = 0;
			}
			this.equipamentos[idSearchType(tool.type)] = nomeDoEquipamento;
		}
	}
	atacar(){
		col.createAtkBox(this.boxCol, this.ATKbox, this.direcao);
		ctx.fillStyle = "#f00"
		ctx.fillRect(WorldToScreen1D(-20 + this.ATKbox.x, Camera.x), WorldToScreen1D(-20 + this.ATKbox.z - this.ATKbox.y, Camera.y), this.ATKbox.w, this.ATKbox.h);
		let entity1Box = [this.ATKbox.x, this.ATKbox.z, this.ATKbox.w, this.ATKbox.p]; let entity2box = new Array(4);
		for(let i = 0; i < arrayDeInimigos.length; i++){
			entity2box[0] = arrayDeInimigos[i].boxCol.x;
			entity2box[1] = arrayDeInimigos[i].boxCol.z;
			entity2box[2] = arrayDeInimigos[i].boxCol.w;
			entity2box[3] = arrayDeInimigos[i].boxCol.p;
			if(col.AABB(entity1Box, entity2box)){
				arrayDeInimigos[i].hp -= arrayDeInimigos[i].DEF - this.ATK
			}
		}
		//window.setTimeout(()=>{col.deleteAtkBox(this.ATKbox)},800);
		
	}
	setHabilidade(skill){
		//ele recebe funcoes.
		for(let i = 0; i < skill.length; i++){
			this.habilidades.push(skill);
		}
	}
	executarHabilidade(skillName){
		if(this.habilidades.includes(skillName)) skillSet[skillName](this);
	}
}

function tomarDano(entity1, entity2){
	if(entity2.boxCol.y <= entity1.ATKbox.y && entity2.boxCol.y >= entity1.ATKbox.y + entity1.ATKbox.h){
		let entity1Box = [entity1.ATKbox.x, entity1.ATKbox.z, entity1.ATKbox.w, entity1.ATKbox.p], entity2Box = [entity2.boxCol.x, entity2.boxCol.z, entity1.boxCol.w, entity.boxCol.p];
		if(col.AABB(entity1Box, entity2Box)){
			entity1.hp -= entity2.ATK - entity1.DEF;
		}
	}
}

const skillSet = {
	hold: function(entity){
		entity.inventory[2] = receiveCollidingItem();
		emtity.inventory[3] = null;
	},
	hover: function(entity){
		entity.velocity.y = 0;
	},
	dashDive: function(entity){
		if(!entity.onGround){
			switch(entity.direcao){
				case 1:
					entity.velocity.z += 10;
				break;
				case 2:
					entity.velocity.x += 10;
				break;
				case 3:
					entity.velocity.z -= 10;
				break;
				case 4:
					entity.velocity.x -= 10;
				break;
				case 5:
					entity.velocity.x += 10;
					entity.velocity.z += 10;
				break;
				case 6:
					entity.velocity.z -= 10;
					entity.velocity.x += 10;
				break;
				case 7:
					entity.velocity.z -= 10;
					entity.velocity.x -= 10;
				break;
				case 8:
					entity.velocity.z += 10;
					entity.velocity.x -= 10;
				break;
			}
		}
	}
}

function handleDamage(entity, entity2){
	let hitBox = [entity.boxCol.x, entity.boxCol.z, entity.boxCol.w, entity.boxCol.p, entity.boxCol.y, entity.boxCol.h]
	let atkBox = [entity2.ATKbox.x, entity2.ATKbox.z, entity.ATKbox.w, entity.ATKbox.p, entity.ATKbox.y, entity.ATKbox.h]
	if(AABB3D(hitBox, atkBox)){
		switch(enemyATKbox.type){
			case "arranhao":
				entity.velocity.x += 8 * entity.ATKbox.magnitude
			break;
			case "soco":
				entity.velocity.x += 120;
				entity.fazendo = "danoForte";
				entity.hp -= entity2.ATK - entity.DEF;
			break;
			case "fogo":
				entity.velocity.y += 9;
			break;
		}
	}
}

//variáveis gerais
//meio que ela vai precisar ser global porque ela vai precisar
var personagemAtual;