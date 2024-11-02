//codigo dos INIMIGOS E NPCs

const arrayDeEntidade = [];

class NonPlayableChar{
	constructor(nome, altura, largura, profundidade, peso, coords, dialogs, pathArr){
		this.dialog = dialogs;
		this.dimensoes = {w: largura, h: altura, p: profundidade};
		this.peso = peso;
		this.boxCol = new Box(coords[0], coords[2], coords[1], this.dimensoes.w, this.dimensoes.h, this.dimensoes.p);
		this.behaviorArr = pathArr;
	}
	desenhar(){
		ctx.fillRect(this.pontoCentral[0], this.pontoCentral[1], this.boxCol.w , this.boxCol.h);
	}
	movement(){
		
	}
	routine(){
		
	}
	talk(){
		UI.drawDialogue(this.dialog);
	}
}

const BehaviorList = {
	linearX: function(entity){
		entity.andar("x");
		entity.rayCast = (entity.pol == -1) ? entity.boxCol.x : entity.boxCol.x + entity.boxCol.w;
		if(mapaAtual.relevoGrid[WorldToGrid(entity.WorldPos.z, TILE_SIZE)][WorldToGrid(entity.rayCast, TILE_SIZE)] != mapaAtual.relevoGrid[WorldToGrid(entity.WorldPos.z, TILE_SIZE)][WorldToGrid(entity.WorldPos.x, TILE_SIZE)]){
			entity.pol *= -1;
		}
	},
	linearZ: function(entity){
		entity.andar("z");
		entity.rayCast = (entity.pol == 1) ? entity.boxCol.z : entity.boxCol.z+entity.boxCol.p;
		if(mapaAtual.relevoGrid[WorldToGrid(entity.WorldPos.z, TILE_SIZE)][WorldToGrid(entity.rayCast, TILE_SIZE)] != mapaAtual.relevoGrid[WorldToGrid(entity.WorldPos.z, TILE_SIZE)][WorldToGrid(entity.WorldPos.x, TILE_SIZE)]){
			entity.pol *= -1;
		}
	},
	nothing: function(){
		
	},
	goToX: function(entity){
		entity.andar("x");
	},
	goToZ: function(entity){
		entity.andar("Z");
	}
}

//ele pega um array e checa se ele chegou. s
function scriptedBehavior(entity, objectBehav){
	switch(objectBehav.arr[objectBehav.index][0]){
		case "goToX": case "goToY":
			if(objectBehav.arr[objectBehav.index][1] < entity.WorldPos.x){
				entity.pol = 1;
				BehaviorList[objectBehav.arr[objectBehav.index][0]](entity);
			} else if(objectBehav.arr[objectBehav.index][1] > entity.WorldPos.x){
				entity.pol = -1;
				BehaviorList[objectBehav.arr[objectBehav.index][0]](entity);
			}
			if(objectBehav.arr[objectBehav.index][1] >= entity.WorldPos.x + 10 && objectBehav.arr[objectBehav.index][1] <= entity.WorldPos.x - 10){
				objectBehav.index++;
			}
		break;
		case "stopAndWait":
			entity.parar();
			if(Relogio.hora == Relogio.converterParaHorario(objectBehav.arr[objectBehav.index][1]).hora){
				objectBehav.index++;
			}
		break;
		case "talk":
			UI.dialogo(objectBehav.arr[objectBehav.index][1]);
			if(UI.isDialogoDismissed){
				objectBehav.index++;
			}
		break;
	}
}

//INIMIGOS DESSE JOGO, usando um array para carregá-los na classe posteriormente

//NPCs relevantes;
const NPC_Specials = [
	//nome, altura, largura, profundidade, dialogs, pathArr, coords
	["bumb", TILE_SIZE, TILE_SIZE, TILE_SIZE, 0, ["serve pra fazer um negócio que eu não vou conseguir.", "disponível pra amanhã a noite"], [["goToX", 20], ["goToZ", 40], ["goToX", 30]]]
];

//NPCs irrelevantes;
const NPC = [
	[]
];

