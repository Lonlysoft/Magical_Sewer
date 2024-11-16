const TILE_SIZE = 60;
const MAGIC_OFFSET = 0.01;
const GRAVIDADE_NA_TERRA = 6;
const GRAVIDADE_NA_AGUA = 1;

function WorldToGrid(eixo, tileSize){
	return Math.floor(eixo/tileSize);
}

function GridToWorld(gridAx, tileSize){
	return gridAx*tileSize;
}

function maxVal(arr){
	let o = arr[0];
	for(let i = 0; i < arr.length; i++){
		if(arr[i] > o) o = arr[i];
	}
	return o;
}

function minVal(arr){
	let o = arr[0];
	for(let i = 0; i < arr.length; i++){
		if(arr[i] < o) o = arr[i];
	}
	return o;
}

function WorldToScreen1D(entCoord, camWCoord, offset) {
	let screenCoord = entCoord - camWCoord - offset;
	return screenCoord;
}

function limitateUp(variable, limit){
	if(variable > limit){
		return limit;
	}
	return variable;
}

function limitateDown(variable, limit){
	if(variable < limit){
		return limit;
	}
	return variable;
}

function mirrorar(contexto){
	contexto.translate(canvas.width, 0);
	contexto.scale(-1, 1);
}

function zoomIn(contexto){
	contexto.scale(2, 2)
}

function zoomOut(contexto){
	contexto.scale(0.5, 0.5)
}

function particles(context, obj){
	context.fillStyle = "#fff";
	context.fillRect(obj.pontoCentral[0], obj.pontoCentral[0], 10, 10);
}

function drawShadow(contexto, entity, oppacity){
	contexto.fillStyle = "#000"
	contexto.globalAlpha = oppacity;
	contexto.beginPath();
	contexto.ellipse(entity.pontoCentral[0], entity.pontoCentral[1] + entity.WorldPos.y - mapaAtual.limites[WorldToGrid(entity.boxCol.z, TILE_SIZE)][WorldToGrid(entity.boxCol.x + entity.boxCol.w, TILE_SIZE)].y, entity.boxCol.w*0.5, entity.boxCol.p*0.5, 0, 0, 2*Math.PI, true);
	contexto.fill();
	contexto.stroke();
	contexto.closePath();
	contexto.globalAlpha = 1;
}

function desenharParte(parteCortar, x, y, w, h, rad = 0){
	ctx.translate(x, y);
		ctx.rotate(rad);
		ctx.drawImage(personagemAtual.grapho, parteCortar[0], parteCortar[1], parteCortar[2], parteCortar[3], 0, 0, w, h);
		ctx.rotate(-rad);
	ctx.translate(-x, -y);
}