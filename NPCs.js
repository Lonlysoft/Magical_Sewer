//codigo dos INIMIGOS E NPCs

var arrayDeEntidade = [];
var arrayDeInimigos = [];

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
			mapaAtual.inims[y_grid][i].isSpawn = true;
		}
	}
	for(let i = x_grid; i < x_endGrid; i++){
		if(y_endGrid+1 < mapaAtual.largura && mapaAtual.inims[y_endGrid-1][i] != 0 && mapaAtual.inims[y_endGrid][i].isAlive && !mapaAtual.inims[y_endGrid][i].isSpawn){
			arrayDeInimigos.push(mapaAtual.inims[y_endGrid][i]);
			mapaAtual.inims[y_endGrid+1][i].isSpawn = true;
		}
	}
	for(let i = y_grid; i < y_endGrid; i++){
		if(x_grid-1 > 0 && mapaAtual.inims[i][x_grid-1] != 0 && mapaAtual.inims[i][x_grid-1].isAlive && !mapaAtual.inims[i][x_grid-1].isSpawn){
			arrayDeInimigos.push(mapaAtual.inims[i][x_grid-1]);
			mapaAtual.inims[i][x_grid-1].isSpawn = true;
		}
	}
}

function checarEntidades(arr){
	let swao
	let cameraRangeX = Camera.x - TILE_SIZE;
	let cameraRangeY = Camera.y - TILE_SIZE;
	let cameraRangeW = Camera.w + TILE_SIZE*2;
	let cameraRangeH = Camera.h + TILE_SIZE*2;
	for(let i = 0; i < arr.length; i++){
		if(arr[i].boxCol.x < cameraRangeX - arr[i].boxCol.w ||
			arr[i].boxCol.z < cameraRangeY - arr[i].boxCol.p ||
			arr[i].boxCol.x > cameraRangeX + cameraRangeW ||
			arr[i].boxCol.z > cameraRangeY + cameraRangeH){
				arr[i].isSpawn = false;
				swao = arr[arr.length-1];
				arr[arr.length-1] = arr[i];
				arr[i] = swao;
				arr.pop();
		}//fim if
	}
}

class Inimigo{
	constructor(NOME, ID, HP, ATK, DEF, ACL, VMAX, altura, largura, profundidade, x, y, z){
		this.Nome = NOME;
		this.HP = HP; this.hp = HP;
		this.ATK = ATK; this.DEF = DEF;
		this.ACL = ACL; this.VMAX = VMAX;
		this.boxCol = {
			x: x - largura*0.5,
			y: y + altura,
			z: z - profundidade*0.5,
			w: largura,
			h: altura,
			p: profundidade
		};
		this.velocity = {x: 0, y: 0, z: 0}
		this.fieldOfVision = {x: this.boxCol.x, y: this.boxCol.y, z: this.boxCol.z, w: largura + 100, h: altura, p: profundidade + 100}
		this.WorldPos = {x: x, y: y, z: z};
		this.isSpawn = false;
		this.isAlive = true;
		this.layer = 0;
		this.subLayer = 0;
		this.pontoCentral = new Array(2);
	}
	update(){
		let colArr = [this.boxCol.x, this.boxCol.z, this.boxCol.w, this.boxCol.p, this.boxCol.y, this.boxCol.h];
		this.AI();
		this.pontoCentral[0] = WorldToScreen1D(this.boxCol.x, Camera.x, Camera.w);
		this.pontoCentral[1] = WorldToScreen1D(this.boxCol.z, Camera.y, Camera.h) - this.boxCol.y;
	}
	//apesar de que todos os inimigos tem tamanhos diferentes e métodos diferentes... essa porrinha aqui é uma função placeholder pra meio que usar posicionamento entre... se bem que... é mais facil fazer uma função pra posicionar cada inimigo da lista com um unico for.
	andar(axis, magnitude = 1){
		if(this.velocity[axis] >= this.VMAX){
			this.velocity[axis] = this.VMAX * magnitude;
		}
		else if(this.velocity[axis] <= (this.VMAX *-1)){
			this.velocity[axis] = this.VMAX * magnitude;
		}
		else{
			this.velocity[axis] += this.ACL * magnitude;
		}
	}
	AI(){
		//fazer random por motivos
		let ax = "xyz"
		this.andar("x", -1);
	}
	spawn(x, z){
		this.WorldPos.x = x;
		this.WorldPos.y = mapaAtual.limites[WorldToGrid(z, TILE_SIZE)][WorldToGrid(x, TILE_SIZE)]
		this.WorldPos.z = z;
	}
	desenhar(){
		ctx.fillStyle = "#355467";
		ctx.fillRect(this.pontoCentral[0], this.pontoCentral[1], this.boxCol.h, this.boxCol.h);
	}
}

class NonPlayableChar{
	constructor(nome, imgAltura, imgLargura, altura, largura, profundidade, peso, coords, dialogs){
		this.dialog = dialogs;
		this.dimensoes = {w: largura, h: altura, p: profundidade};
		this.peso = peso;
		this.boxCol = {x: coords[0], y: coords[2], z: coords[1], w: this.dimensoes.w, h: this.dimensoes.h, p: this.dimensoes.p};
	}
	desenhar(){
		ctx.fillRect(this.pontoCentral[0], this.pontoCentral[1], this.boxCol.w , this.boxCol.h);
	}
	movement(isColNear){
		
	}
	routine(){
		this.movement(this.searchCol());
	}
	talk(){
		
	}
}

//INIMIGOS DESSE JOGO

var inimigos = [
	["Tubaro", 0, 100, 100, 100, 100, 100, 100, 100, 100],
	["Rotund", 1, 10, 10, 10, 10, 10, 10, 10, 10],
	["MIXXANT", 2, 10, 10, 10, 10, 10, 10, 10, 10],
	["Raposisto", 3, 8, 3, 4, 5, 8, 8, 9, 30, 30],
	["MadRodent", 4, 5, 5, 5, 5, 7, 9, 5, 7],
	["BinkyPipe", 4, 4, 4, 6, 7, 80, 90, 80, 67],
	["PittyPits", 6, 6, 6, 78, 78, 89, 78, 9, 90]
]
const chefes = [
	//chefoes 
	"CreinMouse",
	"KitStreza"
]
//NPCs relevantes;
const NPC_Specials = [
	
]

//NPCs irrelevantes;
const NPC = [
	
]

//em tese fariamos uma stack deles