var Camera = {
	x: 100, y: 100, z: 0, w: 700, h: 600,
	moverPara: function(x, y, z){
		this.x = x - this.w*0.5;
		this.y = y - z - this.h*0.5;
		this.z = z;
		
//		this.x += (x - this.x - this.w*0.5)*0.9; 
		//this.y += (y - this.y - this.h*0.5)*0.9 - z;
		
	}
};

class Box{
	constructor(x, y, z, largura, altura, profundidade){
		this.x = x,
		this.y = y,
		this.z = z,
		this.oldX = undefined,
		this.oldY = undefined,
		this.oldZ = undefined,
		this.w = largura,
		this.h = altura,
		this.p = profundidade
	}
}

class Coin extends Box{
	constructor(x, y, z, value){
		super(x, y, z, 10, 10, 10);
		this.isCollected = false;
		this.pontoDaTela = new Array(2)
		this.velocity = {x: 0, y: 0, z: 0};
		this.friction = 0.9;
		this.tipo = "moeda"
		this.valor = value;
		this.visivel = false;
		this.shadow = {
			x: this.x, y: this.y+this.z, w: this.w, h: this.p+this.h
		};
	}
	desenhar(){
		ctx.fillStyle = "#fff"
		ctx.fillRect(this.pontoDaTela[0], this.pontoDaTela[1], this.w, this.h);
	}
	update(){
		this.pontoDaTela[0] = WorldToScreen1D(this.x, Camera.x);
		this.pontoDaTela[1] = WorldToScreen1D(this.z - this.y, Camera.y);
		this.x += this.velocity.x;
		this.z += this.velocity.z;
		this.velocity.z *= this.friction;
		this.velocity.x *= this.friction;
	}
	//quando coletada o contador irà ser += this.valor
}

class Coletavel extends Box{
	constructor(ID, x, y, z, w, h, p, tipo){
		super(x, y, z, w, h, p);
		this.tipo = tipo;
		this.ID = ID;
	}
	update(){
		
	}
}

class Boundary{
	constructor(x, y, z, tipo){
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = TILE_SIZE;
		this.p = TILE_SIZE;
		this.h = y;
		this.tipo = tipo;
	}
}

//isso vai ser pra tipificar o terreno das tiles
function tipify(num){
	switch(num){
		case 0:
			return "solid";
		case 1:
			return "rampaNORTE";
		case 2:
			return "lava";
		case 3:
			return "dirtywater";
		case 4:
			return "quicksand";
	}
}

class Plataforma{
	constructor(x, z, w, p, y, h, tipo){
		this.x = x;
		this.y = y;
		this.z = z;
		this.p = p;
		this.w = w;
		this.h = h;
		this.pontoDaTela = new Array(2)
		this.tipo = tipo;
		this.visivel = false;
		this.shadow = {
			x: this.x, y: this.y+this.z, w: this.w, h: this.p+this.h
		};
	}
	desenhar(){
		ctx.fillStyle = "Orange"
		ctx.fillRect(this.pontoDaTela[0], this.pontoDaTela[1], this.w, this.p + this.h,);
	}
	update(){
		this.pontoDaTela[0] = -40+WorldToScreen1D(this.x, Camera.x);
		this.pontoDaTela[1] = WorldToScreen1D(this.z - this.y, Camera.y);
	}
}

//plataformas
var estruturasAtivas = [];


function handlePlat(){
	let estruturasBox;
	let trocador;
	let cameraBox = [Camera.x, Camera.y, Camera.w, Camera.h]
	for(let i = 0; i < estruturasAtivas.length; i++){
		if(estruturasAtivas[i] == undefined){
			estruturasAtivas[i].splice(i, i);
		}
		estruturasAtivas[i].update();
		estruturasAtivas[i].desenhar();
		estruturasBox = [estruturasAtivas[i].x, estruturasAtivas[i].z, estruturasAtivas[i].w, estruturasAtivas[i].p]
		if(!col.AABB(estruturasBox, cameraBox) || estruturasAtivas[i].visivel == false){
			estruturasAtivas[i].visivel = false;
			trocador = estruturasAtivas[estruturasAtivas.length-1];
			estruturasAtivas[estruturasAtivas.length-1] = estruturasAtivas[i];
			estruturasAtivas[i] = trocador;
			estruturasAtivas.pop();
		}
	}
	for(let i = 0; i < mapaAtual.plataformas.length; i++){
		estruturasBox = [mapaAtual.plataformas[i].x, mapaAtual.plataformas[i].z, mapaAtual.plataformas[i].w, mapaAtual.plataformas[i].p];
		if(col.AABB(cameraBox, estruturasBox) && mapaAtual.plataformas[i].visivel == false){
			estruturasAtivas.push(mapaAtual.plataformas[i]);
			mapaAtual.plataformas[i].visivel = true;
		}
	}
}


//pessoas e NPCS

class LevelScenery{
	constructor(largura, altura, Nome, chaozinhoMaroto, sombrinhas, angulacaoDeTerreno, relevoFudido, tipoDeColisao, colisaoDosChars, spawnerDeInimigos, objectosMarotos, objectMarotosFrente, estruturasAvulsas){
		this.floorGrid = chaozinhoMaroto;
		this.objectGrid = objectosMarotos;
		this.objectGridFront = objectMarotosFrente;
		this.shadowGrid = sombrinhas		
		this.ang = angulacaoDeTerreno;
		this.relevoGrid = relevoFudido;
		this.beingGrid = colisaoDosChars;
		this.largura = largura;
		this.altura = altura;
		this.Nome = Nome;
		this.horizontalColGrid = tipoDeColisao;
		this.enemyGrid = spawnerDeInimigos
		this.limites = [];
		this.inims = [];
		this.plataformas = estruturasAvulsas;
	}
	
	settarFronteiras(){
		for(let i = 0; i < this.altura; i++){
			this.limites.push(new Array());
			for(let j = 0; j < this.largura; j++){
				this.limites[i].push(new Boundary(j * TILE_SIZE, this.relevoGrid[i][j] * TILE_SIZE, i * TILE_SIZE, tipify(this.ang[i][j])));
			}
		}
	}
	settarInimigos(){
		for(let i = 0; i < this.altura; i++){
			this.inims.push(new Array());
			for(let j = 0; j < this.largura; j++){
				if(this.enemyGrid[i][j] >= 0){
					this.inims[i].push(new Inimigo(
							inimigos[this.enemyGrid[i][j]][0], inimigos[this.enemyGrid[i][j]][1], 
							inimigos[this.enemyGrid[i][j]][2], inimigos[this.enemyGrid[i][j]][3], 
							inimigos[this.enemyGrid[i][j]][4], inimigos[this.enemyGrid[i][j]][5], 
							inimigos[this.enemyGrid[i][j]][6], inimigos[this.enemyGrid[i][j]][7], 
							inimigos[this.enemyGrid[i][j]][8], inimigos[this.enemyGrid[i][j]][9],
							inimigos[this.enemyGrid[i][j]][10],
							j*TILE_SIZE, i*TILE_SIZE, this.relevoGrid[i][j]*TILE_SIZE
						)
					);
					
				} else{
					this.inims[i].push(0);
				}
			}
		}
	}
	drawFloor(type){
		//1 quer dizer imagem estática
		//2 quer dizer botar os tilesets
		if(type == 1){
			let imgX = personagemAtual.WorldPos.x - 260, imgY = personagemAtual.WorldPos.z - 260;
			ctx.drawImage(this.floorGrid, imgX, imgY, 520, 520, 0, 0, 520, 520);
		}
		else if(type == 2){
			let x_grid = Math.floor((Camera.x)/TILE_SIZE);
			let x_endGrid = Math.floor((Camera.x+Camera.w)/TILE_SIZE);
			let y_grid = Math.floor((Camera.y)/TILE_SIZE)-Math.floor((Camera.y)/TILE_SIZE);
			let y_endGrid = Math.floor((Camera.y+Camera.h)/TILE_SIZE)-Math.floor((Camera.y)/TILE_SIZE);
				
			if(x_grid < 0) x_grid = 0;
			if(y_grid < 0) y_grid = 0;
			if(x_endGrid > this.largura) x_endGrid = this.largura;
			if(y_endGrid > this.altura) y_endGrid = this.altura;
			
			for(let i = x_grid; i < x_endGrid; i++){
				for(let j = y_grid; j < y_endGrid; j++){
					let renderPlusX = i * TILE_SIZE - Camera.x + canvas.width*0.5 - Camera.w*0.5;
					let renderPlusY = j * TILE_SIZE - Camera.y + canvas.height*0.5 - Camera.h*0.5;
					switch(this.floorGrid[j][i]){
						case 12:
							ctx.fillStyle = "DarkGreen";
							ctx.fillRect(renderPlusX, renderPlusY, TILE_SIZE, TILE_SIZE);
							break;
						case 5:
							ctx.fillStyle = "#39496F";
							ctx.fillRect(renderPlusX, renderPlusY, TILE_SIZE, TILE_SIZE);
							
							break;
						case 555:
							ctx.fillStyle = "#404040";
							ctx.fillRect(renderPlusX, renderPlusY, TILE_SIZE, TILE_SIZE); 
							break;
						case 7:
							ctx.fillStyle = "#ff00ff";
							ctx.fillRect(renderPlusX, renderPlusY, TILE_SIZE, TILE_SIZE);
							
							break;
						case 2:
							ctx.fillStyle = "#FFFF97"
							ctx.fillRect(renderPlusX, renderPlusY, TILE_SIZE, TILE_SIZE);
							
							break;
						case 1:
							ctx.fillStyle = "#6CAD29"
							ctx.fillRect(renderPlusX, renderPlusY, TILE_SIZE, TILE_SIZE);
							
							break;
						case "bu":
							ctx.fillStyle = "#000000"
							ctx.fillRect(renderPlusX, renderPlusY, TILE_SIZE, TILE_SIZE);
							
							break;
						default:
							
							break;
					}
				}
			}
		}
	}
	
	objectGridDraw(camada){
		
		let x_grid = Math.floor((Camera.x)/TILE_SIZE);
		let x_endGrid = Math.floor((Camera.x+Camera.w)/TILE_SIZE);
		let y_grid = Math.floor((Camera.y)/TILE_SIZE)-Math.floor((Camera.y)/TILE_SIZE);
		let y_endGrid = Math.floor((Camera.y+Camera.h)/TILE_SIZE)-Math.floor((Camera.y)/TILE_SIZE);
		
		if(x_grid < 0) x_grid = 0;
		if(y_grid < 0) y_grid = 0;
		if(x_endGrid > this.largura) x_endGrid = this.largura;
		if(y_endGrid > this.altura) y_endGrid = this.altura;
		let objGrd;
		
		switch(camada){
			case 1: objGrd = this.objectGrid;
			break;
			case 2: objGrd = this.objectGridFront;
			break;
		}
		
		for(let i = x_grid; i < x_endGrid; i++){
			for(let j = y_grid; j < y_endGrid; j++){
				let renderPlusX = i * TILE_SIZE - Camera.x + canvas.width*0.5 - Camera.w*0.5;
				let renderPlusY = j * TILE_SIZE - Camera.y + canvas.height*0.5 - Camera.h*0.5;
				switch(this.objectGrid[j][i]){
					case 7: 
						ctx.fillStyle = "#404040";
						ctx.fillRect(renderPlusX, renderPlusY, TILE_SIZE, TILE_SIZE); 
					break;
					case 1:
						ctx.fillStyle = "#333333";
						ctx.fillRect(renderPlusX, renderPlusY, TILE_SIZE, TILE_SIZE);
					break;
					default:
					break;
				}//fim switch
			}//fim for do y.
		}// fim for do x.
	}//fim objectDraw
}// fim Classe levelScenery