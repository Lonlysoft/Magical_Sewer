var Camera = {
	x: 100, y: 100, z: 0, w: 600, h: 600,
	moverPara: function(x, y, z){
		this.x = x - this.w*0.5;
		this.y = y - this.h*0.5;
		this.z = z;
		/*
		this.x += (x - this.x - this.w*0.5)*0.05;
		this.y += (y - this.y - this.h*0.5)*0.05;
		*/
	}
};

class Boundary{
	constructor(x, y, z){
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = 60;
		this.p = 60;
		this.h = y;
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
	}
}

//plataformas
var stackDeEstruturas = [new Plataforma(120, 120, 50, 50, 30, 30, "solid")];

//pessoas e NPCS

class LevelScenery{
	constructor(largura, altura, Nome, chaozinhoMaroto, sombrinhas, angulacaoDeTerreno, relevoFudido, colisaoDosChars, objectosMarotos, objectMarotosFrente){
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
		this.limites = [];
	}
	
	settarFronteiras(){
		for(let i = 0; i < this.altura; i++){
			this.limites.push(new Array());
			for(let j = 0; j < this.largura; j++){
				this.limites[i].push(new Boundary(j * 60, this.relevoGrid[i][j] * 60, i * 60));
			}
		}
	}
	drawFloor(type){
		//1 quer dizer imagem estática
		//2 quer dizer botar os tilesets
		if(type == 1){
			let imgX = personagemAtual.ser.WorldPos.x - 260, imgY = personagemAtual.ser.WorldPos.z - 260;
			ctx.drawImage(this.floorGrid, imgX, imgY, 520, 520, 0, 0, 520, 520);
		}
		else if(type == 2){
			let x_grid = Math.floor((Camera.x)/60);
			let x_endGrid = Math.floor((Camera.x+Camera.w)/60);
			let y_grid = Math.floor((Camera.y/60) - (Camera.z/60));
			let y_endGrid = Math.floor((Camera.y+Camera.h)/60 - (Camera.z/60));
			
			if(x_grid < 0) x_grid = 0;
			if(y_grid < 0) y_grid = 0;
			if(x_endGrid > this.largura) x_endGrid = this.largura;
			if(y_endGrid > this.altura) y_endGrid = this.altura;
			
			for(let i = x_grid; i < x_endGrid; i++){
				for(let j = y_grid; j < y_endGrid; j++){
					let renderPlusX = i * 60 - Camera.x + canvas.width*0.5 - Camera.w*0.5;
					let renderPlusY = j * 60 - Camera.y + canvas.height*0.5 - Camera.h*0.5;
					switch(this.floorGrid[j][i]){
						case 12:
							ctx.fillStyle = "DarkGreen";
							ctx.fillRect(renderPlusX, renderPlusY, 60, 60);
							break;
						case 5:
							ctx.fillStyle = "#39496F";
							ctx.fillRect(renderPlusX, renderPlusY, 60, 60);
							
							break;
						case 555:
							ctx.fillStyle = "#404040";
							ctx.fillRect(renderPlusX, renderPlusY, 60, 60); 
							break;
						case 7:
							ctx.fillStyle = "#ff00ff";
							ctx.fillRect(renderPlusX, renderPlusY, 60, 60);
							
							break;
						case 2:
							ctx.fillStyle = "#FFFF97"
							ctx.fillRect(renderPlusX, renderPlusY, 60, 60);
							
							break;
						case 1:
							ctx.fillStyle = "#6CAD29"
							ctx.fillRect(renderPlusX, renderPlusY, 60, 60);
							
							break;
						case "bu":
							ctx.fillStyle = "#000000"
							ctx.fillRect(renderPlusX, renderPlusY, 60, 60);
							
							break;
						default:
							
							break;
					}
				}
			}
		}
	}
	
	objectGridDraw(camada){
		
		let x_grid = Math.floor((Camera.x)/60);
		let x_endGrid = Math.floor((Camera.x+Camera.w)/60);
		let y_grid = Math.floor((Camera.y)/60)-Math.floor((Camera.y)/60);
		let y_endGrid = Math.floor((Camera.y+Camera.h)/60)-Math.floor((Camera.y)/60);
			
		if(x_grid < 0) x_grid = 0;
		if(y_grid < 0) y_grid = 0;
		if(x_endGrid > this.largura) x_endGrid = this.largura;
		if(y_endGrid > this.altura) y_endGrid = this.altura;
		let objectGrid;
		
		switch(camada){
			case 1: objectGrid = this.objectGrid;
			break;
			case 2: objectGrid = this.objectGridFront;
			break;
		}
		
		for(let i = x_grid; i < x_endGrid; i++){
			for(let j = y_grid; j < y_endGrid; j++){
				let renderPlusX = i * 60 - Camera.x + canvas.width*0.5 - Camera.w*0.5;
				let renderPlusY = j * 60 - Camera.y + canvas.height*0.5 - Camera.h*0.5;
				switch(objectGrid[j][i]){
					case 7: 
						ctx.fillStyle = "#404040";
						ctx.fillRect(renderPlusX, renderPlusY, 60, 60); 
					break;
					case 1:
						ctx.fillStyle = "#333333";
						ctx.fillRect(renderPlusX, renderPlusY, 60, 60);
					break;
					default:
						break;
				}//fim switch
			}//fim for do y.
		}// fim for do x.
	}//fim objectDraw
}// fim Classe levelScenery