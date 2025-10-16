class Scenery{
	constructor(){
		this.hasDeclaired = false;
	}
	declair(nowMoment, LevelNumber, map){
		nowMoment.currentMap = new Level(map[LevelNumber]);
		nowMoment.currentMap.setBoundaries();
		nowMoment.currentMap.setNPCs(NPCS);
		nowMoment.currentMap.setWater();
		nowMoment.currentMap.setItems(ITEMS);
		nowMoment.currentMap.setEnemies(INIMS);
		this.hasDeclaired = true;
	}
	draw(currentMap, currChar, items, NPCs, inimigos = []){
		let layers = [];
		for(let i = 0; i < currentMap.objectGrid.length; i++){
			layers.push(new Array());
		}
		for(let i = 0; i < NPCs.length; i++){
			layers[NPCs[i].layer].push(NPCs[i]);
		}
		for(let i = 0; i < items.length; i++){
			layers[items[i].layer].push(items[i]);
		}
		for(let i = 0; i < inimigos.length; i++){
			layers[inimigos[i].layer].push(inimigos[i]);
		}
		currentMap.drawFloor();
		layers[currChar.layer].push(currChar);
		for(let i = 0; i < layers.length; i++){
			layers[i] = mergeSort(layers[i]);
			for(let j = 0; j < layers[i].length; j++){
				layers[i][j].draw(currentMap);
			}
			currentMap.objectGridDraw(i);
		}
	}
}