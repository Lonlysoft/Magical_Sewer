//codigo dos INIMIGOS E NPCs

class NonPlayableChar extends Being{
	constructor(arg, coords){
		super(arg.name, arg.age, 4, 8, arg.height, arg.width, arg.dept, arg.HTMLsrc, arg.animations);
		this.dialog = arg.dialogs;
		this.dimen = {w: arg.width, h: arg.height, p: arg.dept};
		this.visible = true;
		this.SpawnPos = {x: coords.x, y: coords.y, z: coords.z};
		this.flagCoords = {x: coords.x, y: coords.y, z: coords.z}
		this.boxCol = new Box(coords.x, coords.y + this.dimen.h, coords.z, this.dimen.w, this.dimen.h, this.dimen.p);
		this.behaviorArr = {arr: arg.pathArr, index: 0};
		this.ID = arg.ID;
	}
	draw(map){
		ctx.fillRect(this.centralPoint[0], this.centralPoint[1], this.boxCol.w , this.boxCol.h);
	}
	update(){
		scriptedBehavior(this, this.behaviorArr);
		this.boxCol.x += this.velocity.x;
		this.boxCol.z += this.velocity.z;
		this.WorldPos.y += this.velocity.y;
		this.WorldPos.x = this.boxCol.x + this.boxCol.w*0.5;
		this.WorldPos.z = this.boxCol.z + this.boxCol.p*0.5;
		this.boxCol.y = this.WorldPos.y + this.boxCol.h;
		this.shadow.x = this.boxCol.x;
		this.shadow.y = this.boxCol.z + this.boxCol.y;
		this.centralPoint[0] = WorldToScreen1D(this.WorldPos.x, Camera.x, Camera.w/2 - Game.SCREEN_CENTER[0]);
		this.centralPoint[1] = WorldToScreen1D(this.WorldPos.z-this.WorldPos.y, Camera.y, Camera.h/2 - Game.SCREEN_CENTER[1]);
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

const BehaviorList = {
	linearX: function(entity){
		entity.walk("x");
		entity.rayCast = (entity.pol == -1) ? entity.boxCol.x : entity.boxCol.x + entity.boxCol.w;
		let z1 = WorldToGrid(entity.WorldPos.z, TILE_SIZE)
		let x1 = WorldToGrid(entity.rayCast, TILE_SIZE);
		let x2 = WorldToGrid(entity.WorldPos.x, TILE_SIZE);
		if(Game.currentMap.grndElGrid[z1][x1] > Game.currentMap.grndElGrid[z1][x2]){
			entity.pol *= -1;
		}
	},
	linearZ: function(entity){
		entity.walk("z");
		entity.rayCast = (entity.pol == 1) ? entity.boxCol.z : entity.boxCol.z+entity.boxCol.p;
		if(Game.currentMap.grndElGrid[WorldToGrid(entity.WorldPos.z, TILE_SIZE)][WorldToGrid(entity.rayCast, TILE_SIZE)] != Game.currentMap.grndElGrid[WorldToGrid(entity.WorldPos.z, TILE_SIZE)][WorldToGrid(entity.WorldPos.x, TILE_SIZE)]){
			entity.pol *= -1;
		}
	},
	nothing: function(){},
	goToX: function(entity){
		entity.walk("x");
	},
	goToZ: function(entity){
		entity.walk("Z");
	},
	goIntoCharacterFuriously(){
		
	},
	stillGuard(nowMoment, entity){
		let currChar = nowMoment.CurrentCharacter;
		let currBox = [currChar.boxCol.x, currChar.boxCol.z, currChar.boxCol.w, currChar.boxCol.p];
		let campoDeVisao = new Box(entity.WorldPos.x - entity.fieldOfVisionReach, entity.WorldPos.z - entity.fieldOfVisionReach, entity.fieldOfVisionReach*2, entity.fieldOfVisionReach*2);
		if(Col.AABB(currBox, vBox)){
			//usar a formula de distancia de dois pontos
		}
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
			entity.stop();
			if(Relogio.hour == Relogio.convertToHourAndMinute(objectBehav.arr[objectBehav.index][1]).hour){
				objectBehav.index++;
			}
		break;
		case "talk":
			UI.dialogo(objectBehav.arr[objectBehav.index][1]);
			if(UI.isDialogoDismissed){
				objectBehav.index++;
			}
		break;
		default: break;
	}
}
