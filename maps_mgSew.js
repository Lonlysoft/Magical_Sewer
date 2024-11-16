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


//pessoas e NPCS
var mapa_floor_tiles = document.querySelector("#tilemap");
class LevelScenery{
	constructor(largura, altura, Nome, chaozinhoMaroto, sombrinhas, angulacaoDeTerreno, relevoFudido, tipoDeColisao, colisaoDosChars, spawnerDeInimigos, objectosMarotos, itemsGrid, temAgua, waterGrid = []){
		this.floorGrid = chaozinhoMaroto;
		this.objectGrid = objectosMarotos;
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
		this.itemGrid = itemsGrid;
		this.items = [];
		this.temAgua = temAgua;
		this.waterGrid = waterGrid;
		this.aguaLimites = [];
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
							j*TILE_SIZE, this.relevoGrid[i][j]*TILE_SIZE, i*TILE_SIZE
						)
					);
					
				} else{
					this.inims[i].push(0);
				}
			}
		}
	}
	settarAgua(){
		if(this.temAgua){
			for(let i = 0; i < this.altura; i++){
				this.aguaLimites.push(new Array());
				for(let j = 0; j < this.largura; j++){
					this.aguaLimites[i].push(new Boundary(j * TILE_SIZE, this.waterGrid[i][j] * TILE_SIZE, i * TILE_SIZE, "agua"));
				}
			}
		}
	}
	
	settarItensColetaveis(itemSource){
		for(let i = 0; i < this.altura; i++){
			this.items.push(new Array());
			for(let j = 0; j < this.largura; j++){
				if(this.itemGrid[i][j] > 0){
					this.items[i].push(new Item(
							itemSource[ this.itemGrid[i][j] ][0], itemSource[ this.itemGrid[i][j] ][1], 
							itemSource[ this.itemGrid[i][j] ][2], itemSource[ this.itemGrid[i][j] ][3], 
							itemSource[ this.itemGrid[i][j] ][4], itemSource[ this.itemGrid[i][j] ][5], 
							itemSource[ this.itemGrid[i][j] ][6], itemSource[ this.itemGrid[i][j] ][7], 
							j*TILE_SIZE, i*TILE_SIZE, this.relevoGrid[i][j]*TILE_SIZE
						)
					);
					
				} else{
					this.items[i].push(0);
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
					ctx.drawImage(mapa_floor_tiles, this.floorGrid[j][i]*TILE_SIZE % mapa_floor_tiles.width, Math.floor(this.floorGrid[j][i]/WorldToGrid(mapa_floor_tiles.width, TILE_SIZE) * TILE_SIZE), TILE_SIZE, TILE_SIZE, renderPlusX, renderPlusY, TILE_SIZE, TILE_SIZE);
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
		
		for(let i = x_grid; i < x_endGrid; i++){
			for(let j = y_grid; j < y_endGrid; j++){
				let renderPlusX = i * TILE_SIZE - Camera.x + canvas.width*0.5 - Camera.w*0.5;
				let renderPlusY = j * TILE_SIZE - Camera.y + canvas.height*0.5 - Camera.h*0.5;
				ctx.drawImage(mapa_floor_tiles, this.objectGrid[camada][j][i] *TILE_SIZE % mapa_floor_tiles.width, Math.floor(this.objectGrid[camada][j][i]/WorldToGrid(mapa_floor_tiles.width, TILE_SIZE)) *TILE_SIZE, TILE_SIZE, TILE_SIZE, renderPlusX, renderPlusY, TILE_SIZE, TILE_SIZE)
			}//fim for do y.
		}// fim for do x.
	}//fim objectDraw
}// fim Classe levelScenery