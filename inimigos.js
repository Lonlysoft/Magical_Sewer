const arrayDeInimigos = [];

function adicionarImigos(){
	let x_grid = Math.floor((Camera.x)/60);
	let x_endGrid = Math.floor((Camera.x+Camera.w)/60);
	let y_grid = Math.floor((Camera.y)/60)-Math.floor((Camera.y)/60);
	let y_endGrid = Math.floor((Camera.y+Camera.h)/60)-Math.floor((Camera.y)/60);
	
	if(x_grid < 0) x_grid = 0;
	if(y_grid < 0) y_grid = 0;
	if(x_endGrid > mapaAtual.largura) x_endGrid = mapaAtual.largura;
	if(y_endGrid > mapaAtual.altura) y_endGrid = mapaAtual.altura;
	
	
	for(let i = x_grid; i < x_endGrid; i++){
		if(y_grid-1 > 0 && mapaAtual.inims[y_grid-1][i] != 0 && mapaAtual.inims[y_grid][i].isAlive && !mapaAtual.inims[y_grid][i].isSpawn){
			arrayDeInimigos.push(mapaAtual.inims[y_grid][i]);
			mapaAtual.inims[y_grid][i].isSpawn = arrayDeInimigos[arrayDeInimigos.length-1].spawn();
		}
	}
	for(let i = x_grid; i < x_endGrid; i++){
		if(y_endGrid+1 < mapaAtual.altura && mapaAtual.inims[y_endGrid-1][i] != 0 && mapaAtual.inims[y_endGrid][i].isAlive && !mapaAtual.inims[y_endGrid][i].isSpawn){
			arrayDeInimigos.push(mapaAtual.inims[y_endGrid][i]);
			mapaAtual.inims[y_endGrid+1][i].isSpawn = arrayDeInimigos[arrayDeInimigos.length-1].spawn();
		}
	}
	for(let i = y_grid; i < y_endGrid; i++){
		if(x_grid-1 > 0 && mapaAtual.inims[i][x_grid-1] != 0 && mapaAtual.inims[i][x_grid-1].isAlive && !mapaAtual.inims[i][x_grid-1].isSpawn){
			arrayDeInimigos.push(mapaAtual.inims[i][x_grid-1]);
			mapaAtual.inims[i][x_grid-1].isSpawn = arrayDeInimigos[arrayDeInimigos.length-1].spawn();
		}
	}
	for(let i = y_grid; i < y_endGrid; i++){
		if(x_endGrid+1 < mapaAtual.altura && mapaAtual.inims[i][x_endGrid-1] != 0 && mapaAtual.inims[i][x_endGrid-1].isAlive && !mapaAtual.inims[i][x_endGrid-1].isSpawn){
			arrayDeInimigos.push(mapaAtual.inims[i][x_endGrid-1]);
			mapaAtual.inims[i][x_endGrid-1].isSpawn = arrayDeInimigos[arrayDeInimigos.length-1].spawn();
		}
	}
}
// chamada apenas 1 vez
function carregarInimigos(){
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
			if(mapaAtual.inims[i][j] != 0 && mapaAtual.inims[i][j].isAlive && !mapaAtual.inims[i][j].isSpawn){
				arrayDeInimigos.push(mapaAtual.inims[i][j]);
				mapaAtual.inims[i][j].isSpawn = arrayDeInimigos[arrayDeInimigos.length-1].spawn();
			}
		}
	}
}

function checarEntidades(arr){
	let cameraRangeX = Camera.x - TILE_SIZE;
	let cameraRangeY = Camera.y - TILE_SIZE;
	let cameraRangeW = Camera.w + TILE_SIZE*2;
	let cameraRangeH = Camera.h + TILE_SIZE*2;
	for(let i = 0; i < arr.length; i++){
		if((arr[i].boxCol.x < cameraRangeX - arr[i].boxCol.w ||
			arr[i].boxCol.z < cameraRangeY - arr[i].boxCol.p ||
			arr[i].boxCol.x > cameraRangeX + cameraRangeW ||
			arr[i].boxCol.z > cameraRangeY + cameraRangeH) || arr[i].hp <=0){
				arr[i].isSpawn = false;
				arr[i].reset();
				swao = arr[arr.length-1];
				arr[arr.length-1] = arr[i];
				arr[i] = swao;
				arr.pop();
		}//fim if
	}
}

class Inimigo extends Ser{
	constructor(NOME, ID, HP, ATK, DEF, ACL, VMAX, altura, largura, profundidade, beh, x, y, z){
		super(NOME, HP, ATK, DEF, ACL, VMAX, altura, largura, profundidade, "#enemy");
		this.ID = ID
		this.comportamento = beh;
		this.fieldOfVision = {x: this.boxCol.x, y: this.boxCol.y, z: this.boxCol.z, w: largura + 100, h: altura, p: profundidade + 100}
		this.pol = 1; //só pode ser 1 ou -1
		this.rayCast = undefined;
		this.SpawnPos = { x: x, y: y, z: z };
		this.shadow = {
			x: x, y: y+z, w: largura, h: profundidade+altura };
		}
	update(){
		this.updateSuper();
		this.boxCol.x += this.velocity.x;
		this.boxCol.z += this.velocity.z;
		this.shadow.x = this.boxCol.x;
		this.shadow.y = this.boxCol.z + this.boxCol.y;
		let colArr = [this.boxCol.x, this.boxCol.z, this.boxCol.w, this.boxCol.p, this.boxCol.y, this.boxCol.h];
		this.AI();
		this.pontoCentral[0] = WorldToScreen1D(this.WorldPos.x, Camera.x, Camera.w/2 - CentroDaTela[0]);
		this.pontoCentral[1] = WorldToScreen1D(this.WorldPos.z-this.WorldPos.y, Camera.y, Camera.h/2 - CentroDaTela[1]);
	}
	AI(){
		BehaviorList[this.comportamento](this);
	}
	desenhar(){
		ctx.fillStyle = "#355467";
		ctx.fillRect(this.pontoCentral[0] - this.boxCol.w*0.5, this.pontoCentral[1] - this.boxCol.h, this.boxCol.w, this.boxCol.h);
	}
	spawn(){
		this.WorldPos.x = this.SpawnPos.x;
		this.WorldPos.z = this.SpawnPos.z;
		this.WorldPos.y = this.SpawnPos.y;
		this.boxCol.x = this.SpawnPos.x - this.boxCol.w*0.5;
		this.boxCol.z = this.SpawnPos.z - this.boxCol.p*0.5;
		this.boxCol.y = this.SpawnPos.y + this.boxCol.h;
		return true;
	}
}