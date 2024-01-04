var Camera ={
	x: 100, y: 100, w: 600, h: 600,
	moverPara: function(x, y){
		this.x = x - this.w/2;
		this.y = y - this.h/2;
		
		/*
		this.x += (x - this.x - this.w/2)*0.05;
		this.y += (y - this.y - this.h/2)*0.05;
		*/
	}
	
};

class Boundary{
	constructor({posicao}){
		this.pos = posicao;
		this.w = 60;
		this.h = 60;
	}
}

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
			for(let j = 0; j < this.largura; j++){
				this.limites.push(new Boundary({posicao:{x: i * 60, y: j * 60}}, this.relevoGrid[i*this.altura+j]));
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
			let y_grid = Math.floor((Camera.y)/60);
			let y_endGrid = Math.floor((Camera.y+Camera.h)/60);
			
			if(x_grid < 0) x_grid = 0;
			if(y_grid < 0) y_grid = 0;
			if(x_endGrid > this.largura) x_endGrid = this.largura;
			if(y_endGrid > this.altura) y_endGrid = this.altura;
			
			for(let i = x_grid; i < x_endGrid; i++){
				for(let j = y_grid; j < y_endGrid; j++){
					let renderPlusX = i * 60 - Camera.x + canvas.width/2 - Camera.w/2;
					let renderPlusY = j * 60 - Camera.y + canvas.height/2 - Camera.h/2;
					switch(this.floorGrid[j*this.largura + i]){
						case "gn":
							ctx.fillStyle = "DarkGreen";
							ctx.fillRect(renderPlusX, renderPlusY, 60, 60);
							break;
						case "wt":
							ctx.fillStyle = "#39496F";
							ctx.fillRect(renderPlusX, renderPlusY, 60, 60);
							
							break;
						case "mr":
							ctx.fillStyle = "#404040";
							ctx.fillRect(renderPlusX, renderPlusY, 60, 60); 
							break;
						case "cl":
							ctx.fillStyle = "#ff00ff";
							ctx.fillRect(renderPlusX, renderPlusY, 60, 60);
							
							break;
						case "w1":
							ctx.fillStyle = "#FFFF97"
							ctx.fillRect(renderPlusX, renderPlusY, 60, 60);
							
							break;
						case "gd":
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
		let y_grid = Math.floor((Camera.y)/60);
		let y_endGrid = Math.floor((Camera.y+Camera.h)/60);
			
		if(x_grid < 0) x_grid = 0;
		if(y_grid < 0) y_grid = 0;
		if(x_endGrid > this.largura) x_endGrid = this.largura;
		if(y_endGrid > this.altura) y_endGrid = this.altura;
		
		switch(camada){
			case 1: objectGrid = this.objectGrid;
			break;
			case 2: objectGrid = this.objectGridFront;
			break;
		}
		
		for(let i = x_grid; i < x_endGrid; i++){
			for(let j = y_grid; j < y_endGrid; j++){
				let renderPlusX = i * 60 - Camera.x + canvas.width/2 - Camera.w/2;
				let renderPlusY = j * 60 - Camera.y + canvas.height/2 - Camera.h/2;
				switch(objectGrid[i][j]){
					case "pa":
							objects.parede.desenhar(renderPlusX, renderPlusY);//lembrar que é placeholder
							break;
					case "t1":
						objects.arvore01.desenhar(renderPlusX+30, renderPlusY-objects.arvore01.pos2Render[1]);
						break;
					case "c3":
						objects.casa.desenhar(renderPlusX+60 - objects.casa.pos2Render[0], renderPlusY)
						break;
					case "c5":
						objects.casa.desenhar((renderPlusY+60) - objects.casa.pos2Render[0], (renderPlusY + 60) - objects.casa.pos2Render[1]);
						break;
					case "c8":
						objects.casa.desenhar(renderPlusX, renderPlusY);
						break;
						
					case "c7":
						objects.casa.desenhar(renderPlusX, renderPlusY + 60 - objects.casa.pos2Render[1]);
						break;
					default:
						
						break;
				}
			}
		}
	}
}

var casa =
[
["  ", "  ", "r4", "r2", "  ", "  "],
["  ", "r4", "rf", "rf", "r2", "  "],
["r4", "rf", "rf", "rf", "rf", "r2"],
["rf", "rf", "rf", "rf", "rf", "rf"],
["rf", "rf", "rf", "rf", "rf", "rf"],
["rf", "rf", "rf", "rf", "rf", "rf"],
["rf", "rf", "r5", "r3", "rf", "rf"],
["rf", "r5", "w1", "w1", "r3", "rf"],
["r5", "w1", "w1", "w1", "w1", "r3"],
["w1", "w1", "w1", "w1", "w1", "w1"],
["w1", "wd", "wd", "w1", "dt", "w1"],
["w1", "w1", "w1", "w1", "dr", "w1"],
];


var ftest = new LevelScenery(
	
	5, 5, "MicroInterior",
	
	//chao
	[
	 "gd", "mr", "bu", "gn", "wt",
	 "gd", "mr", "bu", "gn", "wt",
	 "gd", "mr", "bu", "gn", "wt",
	 "gd", "mr", "bu", "gn", "wt",
	 "gd", "mr", "bu", "gn", "wt"
	],
	
	//colisao
	
	[
	"S", "0", "S", "S", "0",
	"S", "0", "S", "S", "0",
	"S", "0", "S", "S", "0",
	"S", "0", "S", "S", "0",
	"S", "0", "S", "S", "0"
	],
	
	[],
	//relevo
	
	[
	2, 2, 2, 2, 2,
	2, 0, 0, 0, 2,
	2, 0, 8, 0, 2,
	2, 0, 0, 0, 2,
	2, 2, 2, 2, 2
	],
	
	//colisao dos personagens
	
	[
	["  ", "  ", "  ", "  ", "  "],
	["  ", "  ", "  ", "  ", "  "],
	["  ", "  ", "  ", "  ", "  "],
	["  ", "  ", "  ", "  ", "  "],
	["  ", "  ", "  ", "  ", "  "]
	],
	
	//objetos
	
	[
	" ", " ", " ", " ", " ", 
	" ", " ", " ", " ", " ",
	" ", " ", " ", " ", " ", 
	" ", " ", " ", " ", " ",
	" ", " ", " ", " ", " "
	],
	
	//objetos camada 2
	
	[
	" ", " ", " ", " ", " ", 
	" ", " ", " ", " ", " ",
	"t1", " ", "t2", " ", " ", 
	" ", " ", " ", " ", " ",
	"t3", " ", "t4", " ", " "
	]
	
);