const arrayDeItens = [];

class Item{
	constructor(ID, value, nome, tipo, equivalente, w, h, p, x, z, y){
		this.boxCol = new Box(x, y + h, z, w, h, p);
		this.ID = ID;
		this.isCollected = false;
		this.pontoCentral = new Array(2)
		this.velocity = {x: 0, y: 0, z: 0};
		this.friction = 0.9;
		this.equiv = equivalente;
		this.layer = 0;
		this.sublayer = 0;
		this.tipo = tipo;
		this.value = value;
		this.isSpawn = true;
		this.visivel = false;
		this.shadow = {
			x: x, y: y+z, w: w, h: p+h
		};
	}
	desenhar(){
		ctx.fillStyle = "#ff" + this.ID;
		ctx.fillRect(this.pontoCentral[0], this.pontoCentral[1], this.boxCol.w, this.boxCol.p);
	}
	update(){
		col.handleShadowCoords(this);
		this.pontoCentral[0] = WorldToScreen1D(this.boxCol.x, Camera.x, Camera.w/2 - CentroDaTela[0]);
		this.pontoCentral[1] = WorldToScreen1D(this.boxCol.z - this.boxCol.y, Camera.y, Camera.h/2 - CentroDaTela[1]);
		this.boxCol.x += this.velocity.x;
		this.boxCol.z += this.velocity.z;
		this.shadow.x = this.boxCol.x;
		this.shadow.y = this.boxCol.z + this.boxCol.y;
		//this.velocity.z *= this.friction;
		//this.velocity.x *= this.friction;
	}
}

function handleItems(){
	let estruturasBox;
	let trocador;
	let cameraBox = [Camera.x, Camera.y, Camera.w, Camera.h];
	for(let i = 0; i < arrayDeItens.length; i++){
		if(arrayDeItens[i] == undefined){
			arrayDeItens[i].splice(i, i);
		}
		arrayDeItens[i].update();
		estruturasBox = [arrayDeItens[i].shadow.x, arrayDeItens[i].shadow.y, arrayDeItens[i].shadow.w, arrayDeItens[i].shadow.h]
		if(!col.AABB(estruturasBox, cameraBox) || arrayDeItens[i].visivel == false){
			arrayDeItens[i].visivel = false;
			trocador = arrayDeItens[arrayDeItens.length-1];
			arrayDeItens[arrayDeItens.length-1] = arrayDeItens[i];
			arrayDeItens[i] = trocador;
			arrayDeItens.pop();
		}
	}
	let x_grid = Math.floor((Camera.x)/60);
	let x_endGrid = Math.floor((Camera.x+Camera.w)/60);
	let y_grid = Math.floor((Camera.y)/60)-Math.floor((Camera.y)/60);
	let y_endGrid = Math.floor((Camera.y+Camera.h)/60)-Math.floor((Camera.y)/60);
	
	if(x_grid < 0) x_grid = 0;
	if(y_grid < 0) y_grid = 0;
	if(x_endGrid > mapaAtual.largura) x_endGrid = mapaAtual.largura;
	if(y_endGrid > mapaAtual.altura) y_endGrid = mapaAtual.altura;
	
	for(let i = y_grid; i < y_endGrid; i++){
		for(let j = x_grid; j < x_endGrid; j++){
			if(mapaAtual.items[i][j] != 0 && !mapaAtual.items[i][j].visivel && !mapaAtual.items[i][j].isCollected){
				arrayDeItens.push(mapaAtual.items[i][j]);
				mapaAtual.items[i][j].visivel = true;
			}
		}
	}
}
