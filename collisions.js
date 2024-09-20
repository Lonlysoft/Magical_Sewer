/*file to keep colisions out of things*/

function saveCoords(entityBoxCol){
	entityBoxCol.oldX = entityBoxCol.x;
	entityBoxCol.oldY = entityBoxCol.y;
	entityBoxCol.oldZ = entityBoxCol.z;
}

function handleOld(){
	saveCoords(personagemAtual.boxCol);
	for(let i = 0; i < arrayDeInimigos.length; i++){
		saveCoords(arrayDeInimigos[i].boxCol);
	}
}

function maxVal(arr){
	let o = 0;
	for(let i = 0; i < arr.length; i++){
		if(arr[i] > o) o = arr[i];
	}
	return o;
}

const col = {
	AABB: function(retangulo1, retangulo2){
		return retangulo1[0] + retangulo1[2] >= retangulo2[0] &&
				retangulo1[0] <= retangulo2[0] + retangulo2[2] &&
				retangulo1[1] + retangulo1[3] >= retangulo2[1] &&
				retangulo1[1] <= retangulo2[1] + retangulo2[3];
	},
	AABBside: function(retangulo1, retangulo2){
		let totalX = retangulo1[2]/2 + retangulo2[2]/2;
		let totalZ = retangulo1[3]/2 + retangulo2[3]/2;
		//basicamente fazemos uma manipulação pra achar o centro dos retangulos e calcular a distância entre eles.
		let distanciaDosCentrosX = Math.abs((retangulo1[0] + retangulo1[2]/2) - (retangulo2[0] + retangulo2[2]/2));
		let distanciaDosCentrosZ = Math.abs((retangulo1[1] + retangulo1[3]/2) - (retangulo2[1] + retangulo2[3]/2));
		
		if(distanciaDosCentrosX <= totalX && distanciaDosCentrosZ <= totalZ){
			let overLapX = totalX - distanciaDosCentrosX;
			let overLapZ = totalZ - distanciaDosCentrosZ;
			if(overLapZ > overLapX){ //significa que o negócio interceptou e foi pela esquerda ou direita.
				if(retangulo1[0] < retangulo2[0]){
					return 'E'
					// →
				}
				else{
					return 'W'
					// ←
				}
			}
			else{//se não foi pela esquerda ou pela direita só pode ter sido por cima ou por baixo.
				if(retangulo1[1] < retangulo2[1]){
					return 'S';
					// ↓
				}
				else{
					return 'N'
					// ↑
				}
			}
		}
		else{
			return 0;
		}
	},
	
	handleShadowCoords(entity){
		let topLeft = mapaAtual.shadowGrid[WorldToGrid(entity.boxCol.z, TILE_SIZE)][WorldToGrid(entity.boxCol.x, TILE_SIZE)];
		let topRight = mapaAtual.shadowGrid[WorldToGrid(entity.boxCol.z, TILE_SIZE)][WorldToGrid(entity.boxCol.x+entity.boxCol.w, TILE_SIZE)];
		let bottomLeft = mapaAtual.shadowGrid[WorldToGrid(entity.boxCol.z+entity.boxCol.p-entity.velocity.z, TILE_SIZE)][WorldToGrid(entity.boxCol.x+entity.velocity.x, TILE_SIZE)];
		let bottomRight = mapaAtual.shadowGrid[WorldToGrid(entity.boxCol.z+entity.boxCol.p-entity.velocity.z, TILE_SIZE)][WorldToGrid(entity.boxCol.x+entity.boxCol.w+entity.velocity.x, TILE_SIZE)];
		let maxValue = maxVal([topLeft, topRight, bottomLeft, bottomRight])
		entity.layer = maxValue;
		//inserir sublayer baseado na colisão de sombra do inimigo
	},
	
	handleShadowObjects(entity, shadow, shadowLayer, shadowSubLayer){
		let entityBox = [entity.boxCol.x, entity.boxCol.z, entity.boxCol.w, entity.boxCol.p];
		let shadowBox = [shadow.x, shadow.z, shadow.w, shadow.p];
		if(this.AABB(entityBox, shadowBox)){
			entity.subLayer = shadowSubLayer-1;
			entity.layer = shadowLayer;
		}
	},
	
	coletavel: function(entity, coin){
		let entityBox = [entity.boxCol.x, entity.boxCol.z, entity.boxCol.w, entity.boxCol.p];
		let coinBox = [coin.col.x, coin.col.z, coin.col.w, coin.col.p];
		if(AABB(entityBox, coinBox) && entity.boxCol.y <= coin.y && entity.boxCol.y >= (coin.y + coin.h) ){
			entity.money+=coin.col.value;
			
		}
	},
	
	interagir: function(entity, NPCarr){
		return false;
	},
	
	createAtkBox: function(boxCol, atkBox, direcao){
		switch(direcao){
			case 1:
				atkBox.x = boxCol.x;
				atkBox.z = boxCol.z + boxCol.p;
				atkBox.y = boxCol.y + boxCol.h/3;
			break;
			case 2:
				atkBox.x = boxCol.x + boxCol.w;
				atkBox.z = boxCol.z;
				atkBox.y = boxCol.y + boxCol.h/3;
			break;
			case 3:
				atkBox.x = boxCol.x;
				atkBox.z = boxCol.z - boxCol.p;
				atkBox.y = boxCol.y + boxCol.h/3;
			break;
			case 4:
				atkBox.x = boxCol.x - boxCol.w;
				atkBox.z = boxCol.z;
				atkBox.y = boxCol.y + boxCol.h/3;
			break;
			case 5:
				atkBox.x = boxCol.x + boxCol.w;
				atkBox.z = boxCol.z + boxCol.p;
				atkBox.y = boxCol.y + boxCol.h/3;
			break;
			case 6:
				atkBox.x = boxCol.x + boxCol.w;
				atkBox.z = boxCol.z - boxCol.p;
				atkBox.y = boxCol.y + boxCol.h/3;
			break;
			case 7:
				atkBox.x = boxCol.x - boxCol.w;
				atkBox.z = boxCol.z - boxCol.p;
				atkBox.y = boxCol.y + boxCol.h/3;
			break;
			case 8:
				atkBox.x = boxCol.x - boxCol.w;
				atkBox.z = boxCol.z + boxCol.p;
				atkBox.y = boxCol.y + boxCol.h/3;
			break;
		}
	},
	
	deleteAtkBox: function(cu){
		cu.x = undefined;
		cu.y = undefined;
		cu.z = undefined;
	},
	
	AABB3Dside: function(retangulo1, retangulo2){
		let totalX = retangulo1[2]/2 + retangulo2[2]/2;
		let totalZ = retangulo1[3]/2 + retangulo2[3]/2;
		let totalY = retangulo1[5]/2 + retangulo2[5]/2;
		//basicamente fazemos uma manipulação pra achar o centro dos retangulos e calcular a distância entre eles.
		let distanciaDosCentrosX = Math.abs((retangulo1[0] + retangulo1[2]/2) - (retangulo2[0] + retangulo2[2]/2));
		let distanciaDosCentrosZ = Math.abs((retangulo1[1] + retangulo1[3]/2) - (retangulo2[1] + retangulo2[3]/2));
		let distanciaDosCentrosY = Math.abs((retangulo1[4] + retangulo1[5]/2) - (retangulo2[4] + retangulo2[5]/2));
		
		if(distanciaDosCentrosX <= totalX && distanciaDosCentrosZ <= totalZ && distanciaDosCentrosY <= totalY){
			let overLapX = totalX - distanciaDosCentrosX;
			let overLapZ = totalZ - distanciaDosCentrosZ;
			let overLapY = totalY - distanciaDosCentrosY;
			
			if(overLapZ > overLapX){ //significa que o negócio interceptou e foi pela esquerda ou direita.
				if(retangulo1[0] < retangulo2[0]){
					return 'E'
					// →
				}
				else{
					return 'W'
					// ←
				}
			}
			else{//se não foi pela esquerda ou pela direita só pode ter sido por cima ou por baixo.
				if(retangulo1[1] < retangulo2[1]){
					return 'S';
					// ↓
				}
				else{
					return 'N'
					// ↑
				}
			}
			//se não foi por nenhum dos dois talvez o Y teja interceptando
			if(retangulo1[4] < retangulo2[4]){
				return 'U';
			}
			else{
				return 'D';
			}
		}
		else{
			return 0;
		}
	},
	
	
	//types of collision material
	solid: function(entity, cube){
		this.top(entity, cube)
		this.left(entity, cube)
		this.right(entity, cube)
		this.bottom(entity, cube);
	},
	rampaNORTE: function(entity, cube){
		this.top(entity, cube)
		this.left(entity, cube)
		this.right(entity, cube)
		this.uppingBottom(entity, cube);
	},
	solid3D:function(entity, cube){
		if(this.top(entity, cube))return;
		if(this.left(entity, cube))return;
		if(this.right(entity, cube))return;
		if(this.up(entity, cube))return;
		if(this.down(entity, cube))return;
		this.bottom(entity, cube);
	},
	
	bedness3D: function(entity, cube){
		if(this.top(entity, cube))return;
		if(this.left(entity, cube))return;
		if(this.right(entity, cube))return;
		if(this.elasticUp(entity, cube))return;
		if(this.down(entity, cube))return;
		this.bottom(entity, cube);
	},
	
	elasticUp: function(entity, cube){
		if(entity.boxCol.y < cube.y && entity.boxCol.oldY >= cube.y){
			entity.velocity.y *= -1;
			return true;
		}
	},
	
	uppingBottom: function(entity, cube){
		if(entity.boxCol.z < cube.z+cube.p && entity.boxCol.oldZ >= cube.z+ cube.p){
			entity.velocity.z = 0;
			entity.boxCol.z = cube.z + cube.p + MAGIC_OFFSET;
			entity.velocity.y = 10;
			return true;
		}
		return false;
	},
	
	aguaTop: function(entity, cube){
		if(entity.boxCol.y < cube.y && entity.boxCol.oldY >= cube.y){
			entity.velocity.y = 0;
			
			return true;
		}
	},
	
	left: function(entity, cube){
		if(entity.boxCol.x + entity.boxCol.w > cube.x && entity.boxCol.oldX + entity.boxCol.w <= cube.x){
			entity.velocity.x = 0;
			entity.boxCol.x = cube.x - entity.boxCol.w - MAGIC_OFFSET;
			return true;
		}
		return false;
	},
	right: function(entity, cube){
		if(entity.boxCol.x < cube.x+cube.w && entity.boxCol.oldX >= cube.x+cube.w){
			entity.velocity.x = 0;
			entity.boxCol.x = cube.x + cube.w + MAGIC_OFFSET;
			return true;
		}
		return false;
	},
	top: function(entity, cube){
		if(entity.boxCol.z + entity.boxCol.p > cube.z && entity.boxCol.oldZ + entity.boxCol.p <= cube.z){
			entity.velocity.z = 0;
			entity.boxCol.z = cube.z - entity.boxCol.p - MAGIC_OFFSET;
			return true;
		}
		return false;
	},
	
	bottom: function(entity, cube){
		if(entity.boxCol.z < cube.z+cube.p && entity.boxCol.oldZ >= cube.z+ cube.p){
			entity.velocity.z = 0;
			entity.boxCol.z = cube.z + cube.p + MAGIC_OFFSET;
			return true;
		}
		return false;
	},
	
	up: function(entity, cube){
		//raramente isso vai acontecer no mapa. quer dizer.. não deve acontecer in anyway...
		if(entity.boxCol.y < cube.y && entity.boxCol.oldY >= cube.y){
			entity.velocity.y = 0;
			entity.boxCol.y = cube.y + cube.h + MAGIC_OFFSET;
			return true;
		}
	},
	
	down: function(entity, cube){
		if(entity.boxCol.y > cube.y && entity.boxCol.oldY <= cube.y){
			entity.velocity.y = 0;
			entity.boxCol.y = cube.y - entity.boxCol.h - MAGIC_OFFSET;
			return true;
		}
	},
	ladder: function(){
		
	},
	//isdo aqui é relativo ao colisionador de slopes
	slopeTop: function(entity, cube, slope, y_offset, axis){
		let dimen = (axis == "x")? "w" : "p"
		let originX = cube[axis];
		let originY = cube.y + y_offset;
		let currentX = (slope < 0) ? entity[axis] + entity[dimen] - originX : entity.boxCol[axis] - originX;
		let currentY = entity.boxCol.y + entity.boxCol.height - originY;
		let oldX = (slope < 0) ? entity["old"+axis.toUppercase()] + entity[dimen] - originX : entity.boxCol["old"+axis.toUppercase()] - originX;
		let oldY = entity.boxCol.oldY + entity.boxCol.h - originY;
		//["old"+axis.toUppercase()]
		let currentCrossProduct = currentX * slope - currentY;
		let oldCrossProduct = oldX * slope - oldY;
		let top = (slope < 0) ? cube.y + cube.h + y_offset * slope : cube.y + y_offset;
		if ((currentX < 0 || currentX > cube.w) && (entity.boxCol.y + entity.boxCol.h > top && entity.boxCol.oldY + entity.boxCol.h <= top || current_cross_product < 1 && old_cross_product > -1)){
			entity.onGround = true;
			entity.velocity.y = 0;
			object.y = top - object.height - MAGIC_OFFSET;
			return true;
		} else if(currentCrossProduct < 1 && currentCrossProduct > -1){
			object.jumping = false;
			object.y_velocity = 0;
			object.y = row * TILE_SIZE + slope * current_x + y_offset - object.height - this.offset;
			return true;
		} return false;
	}
}

//num serve apenas pra ser compatível com os inimigos
function colisionar(entity, num = -1){
	entity.WorldPos.x = entity.boxCol.x + entity.boxCol.w*0.5;
	entity.WorldPos.z = entity.boxCol.z + entity.boxCol.p*0.5;
	entity.boxCol.y = entity.WorldPos.y + entity.boxCol.h;
	if(entity.WorldPos.x<entity.boxCol.w*0.5){
		entity.WorldPos.x = 30;
		entity.boxCol.x = 0;
		entity.velocity.x = 0;
	}
	if(entity.WorldPos.z<entity.boxCol.p*0.5){
		entity.WorldPos.z = 30;
		entity.boxCol.z = 0;
		entity.velocity.z = 0;
		//aqui teria uma tela de game over porque ele tà out of bounds
	}
	
	if(entity.WorldPos.x>=((mapaAtual.largura)*TILE_SIZE)-entity.boxCol.w/2){
		entity.WorldPos.x = ((mapaAtual.largura)*TILE_SIZE)-entity.boxCol.w*0.5;
		entity.boxCol.x = mapaAtual.largura*TILE_SIZE-entity.boxCol.w-MAGIC_OFFSET;
		entity.velocity.x = 0;
	}
	
	if(entity.WorldPos.z>=((mapaAtual.altura)*TILE_SIZE)-entity.boxCol.p*0.5){
		entity.WorldPos.z = ((mapaAtual.altura)*TILE_SIZE)-entity.boxCol.p*0.5;
		entity.boxCol.z = mapaAtual.altura*TILE_SIZE-entity.boxCol.p-MAGIC_OFFSET;
		entity.velocity.z = 0;
		
		//aqui tbm
	}
	
	let curLimStartZ = WorldToGrid(entity.WorldPos.z - entity.boxCol.p*0.5, TILE_SIZE);
	let curLimEndZ = WorldToGrid(entity.WorldPos.z + entity.boxCol.p*0.5, TILE_SIZE);
	let curLimStartX = WorldToGrid(entity.WorldPos.x - entity.boxCol.w/2, TILE_SIZE);
	let curLimEndX = WorldToGrid(entity.WorldPos.x + entity.boxCol.w/2, TILE_SIZE);
	let curLimStartY = WorldToGrid(entity.WorldPos.y, TILE_SIZE);
	let curLimEndY = WorldToGrid(entity.WorldPos.y - entity.boxCol.h, TILE_SIZE);
	
	let playerCubeCol = [entity.boxCol.x, entity.boxCol.z, entity.boxCol.w, entity.boxCol.p, entity.boxCol.y, entity.boxCol.h]
	
	
	//começou as colisões em relação ao tileset
	let x_intro = Math.floor(Camera.x/TILE_SIZE);
	let x_end = Math.floor((Camera.x+Camera.w)/TILE_SIZE);
	let y_intro = Math.floor(Camera.y/TILE_SIZE);
	let y_end = Math.floor((Camera.y+Camera.h)/TILE_SIZE);
	
	if(x_intro < 0) x_intro = 0;
	if(y_intro < 0) y_intro = 0;
	if(x_end > mapaAtual.largura) x_end = mapaAtual.largura;
	if(y_end > mapaAtual.altura) y_end = mapaAtual.altura;
	
	let playerBoxCol = [entity.boxCol.x, entity.boxCol.z, entity.boxCol.w, entity.boxCol.p, entity.boxCol.y, entity.boxCol.h]
	//comparar colisoes com os inimigos 
	let enemiesBox;
	for(let i = 0; i < arrayDeInimigos.length; i++){
		enemiesBox = [arrayDeInimigos[i].boxCol.x, arrayDeInimigos[i].boxCol.z, arrayDeInimigos[i].boxCol.w, arrayDeInimigos[i].boxCol.p, arrayDeInimigos[i].boxCol.y, arrayDeInimigos[i].boxCol.h]
		if(col.AABB(playerBoxCol, enemiesBox) && isOnGround(entity.WorldPos.y, arrayDeInimigos[i].boxCol.y) && num == -1 && !entity.invensibilidade){
			entity.velocity.x = 0;
			entity.velocity.z = 0;
			entity.boxCol.x = arrayDeInimigos[i].boxCol.x + entity.boxCol.w;
			entity.boxCol.z = arrayDeInimigos[i].boxCol.z + entity.boxCol.p;
			entity.hp -= 10;
			entity.invensibilidade = true;
		}
	}
	
	//colisionar com os NPCs 
	
	
	
	//colisionar com os itens do cenario (coisas que vc pode pegar)
	
	
	
	//comparar colisoes com as plataformas
	let estruturasBox;
	for(let i = 0; i < estruturasAtivas.length; i++){
			estruturasBox = [estruturasAtivas[i].x, estruturasAtivas[i].z, estruturasAtivas[i].w, estruturasAtivas[i].p];
			if(col.AABB(playerBoxCol, estruturasBox) && isOnGround(entity.boxCol.y + entity.boxCol.h, estruturasAtivas[i].y) && !isBellowGround(entity.boxCol.y, estruturasAtivas[i].y + estruturasAtivas[i].h)){
				 col[estruturasAtivas[i].tipo](entity, estruturasAtivas[i]);
			}
	}
	
	
	let mapBoxCol;
	
	for(let j = x_intro; j < x_end; j++){
		for(let i = y_intro; i < y_end; i++){
			if(entity.WorldPos.y < mapaAtual.limites[i][j].y){
				let renderPlusX = j * TILE_SIZE - Camera.x + canvas.width*0.5 - Camera.w*0.5;
				let renderPlusY = i * TILE_SIZE - Camera.y + canvas.height*0.5 - Camera.h*0.5; 
				mapBoxCol = [mapaAtual.limites[i][j].x, mapaAtual.limites[i][j].z, TILE_SIZE, TILE_SIZE];
				if(col.AABB(playerBoxCol, mapBoxCol)){
					col[mapaAtual.limites[i][j].tipo](entity, mapaAtual.limites[i][j])
				}
			}
		}//fim for
	}//fim for 
	entity.WorldPos.x = entity.boxCol.x + entity.boxCol.w/2;
	entity.WorldPos.z = entity.boxCol.z + entity.boxCol.p/2;
	entity.boxCol.y = entity.WorldPos.y + entity.boxCol.h;
}
//fim colisionar

function isOnGround(entitY, struturY){
	return entitY <= struturY;
}

function isBellowGround(entitY, structurY){
	return entitY < structurY;
}

function currGroundConjunct(entity, arr, curr){
	let arrArr;
	let entityArr = [entity.boxCol.x, entity.boxCol.z, entity.boxCol.w, entity.boxCol.p]
	for(let i = 0; i < arr.length; i++){
		arrArr = [arr[i].x, arr[i].z, arr[i].w, arr[i].p];
		if(col.AABB(entity, arrArr)){
			entity.velocity.y = 0;
			return arr[i].y;
		}
	}
	return curr;
}

function isBellowGroundConjunct(entity, arr){
	etiArray = [entity.boxCol.x, entity.boxCol.z, entity.boxCol.w, entity.boxCol.p];
	for(let i = 0; i < arr.length; i++){
		arrArr = [arr[i].x, arr[i].z, arr[i].w, arr[i].p];
		if(col.AABB(etiArray, arrArr)){
			if(isOnGround(entity.WorldPos.y, arr[i].y) && !isBellowGround(entity.WorldPos.y, arr[i].y + arr[i].h)){
				return false;
			}
			else if(isBellowGround(entity.WorldPos.y, arr[i].y + arr[i].h)){
				console.log("6")
				return true;
			}
			else {
				return true;
			}
		}
	}
}

function handleYcoords(entity){
	//entity.pontoCentral[1] -= entity.velocity.y;
	entity.WorldPos.y += entity.velocity.y;
	let top = mapaAtual.limites[WorldToGrid(entity.boxCol.z, TILE_SIZE)][WorldToGrid(entity.boxCol.x, TILE_SIZE)].y
	let bottom = mapaAtual.limites[WorldToGrid(entity.boxCol.z + entity.boxCol.p, TILE_SIZE)][WorldToGrid(entity.boxCol.x + entity.boxCol.w, TILE_SIZE)].y;
	let left = mapaAtual.limites[WorldToGrid(entity.boxCol.z, TILE_SIZE)][WorldToGrid(entity.boxCol.x + entity.boxCol.w, TILE_SIZE)].y;;
	let right = mapaAtual.limites[WorldToGrid(entity.boxCol.z+entity.boxCol.p, TILE_SIZE)][WorldToGrid(entity.boxCol.x, TILE_SIZE)].y;;
	let currLim = mapaAtual.limites[WorldToGrid(entity.WorldPos.z, TILE_SIZE)][WorldToGrid(entity.WorldPos.x, TILE_SIZE)].y;
	//não é a melhor forma de fazer isso pois é 4*O(N) todos os frames.
	
	if((!isOnGround(entity.WorldPos.y, top) && !isOnGround(entity.WorldPos.y, left) && !isOnGround(entity.WorldPos.y, right) && !isOnGround(entity.WorldPos.y, bottom))){
		entity.velocity.y -= 6;
		entity.onGround = false;
	}
	else{
		entity.velocity.y = 0;
		entity.onGround = true;
		entity.pulando = false
	}
	if(isOnGround(entity.WorldPos.y, currLim) && entity.WorldPos.y < currLim){
		entity.WorldPos.y = currLim;
		entity.pontoCentral[1] = CentroDaTela[1];
	}
}