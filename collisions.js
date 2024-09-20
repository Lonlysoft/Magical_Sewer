/*file to keep colisions out of things*/
const col = {
	AABB: function(retangulo1, retangulo2){
		return retangulo1[0] + retangulo1[2] >= retangulo2[0] &&
				retangulo1[0] <= retangulo2[0] + retangulo2[2] &&
				retangulo1[1] + retangulo1[3] >= retangulo2[1] &&
				retangulo1[1] <= retangulo2[1] + retangulo2[3];
	},
	
	//ordem: x, z, w, p, y, h
	AABB3D: function(cubo1, cubo2){
		return cubo1[0] + cubo1[2] >= cubo2[0] &&
				cubo1[0] <= cubo2[0] + cubo2[2] &&
				cubo1[1] + cubo1[3] >= cubo2[1] &&
				cubo1[1] <= cubo2[3] + cubo2[3] &&
				cubo1[4] + cubo1[5] >= cubo2[4] &&
				cubo1[4] <= cubo2[5] + cubo2[5];
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
	
	AABBsideAmount: function(retangulo1, retangulo2){
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
					return overLapX *(-1)
					// →
				}
				else{
					return overLapX
					// ←
				}
			}
			else{//se não foi pela esquerda ou pela direita só pode ter sido por cima ou por baixo.
				if(retangulo1[1] < retangulo2[1]){
					return overLapZ*(-1);
					// ↓
				}
				else{
					return overLapZ;
					// ↑
				}
			}
		}
		else{
			return 0;
		}
	},
	
	createAtkBox: function(cu){
		cu.x += cu.w;
		cu.z += cu.p;
	},
	
	deleteAtkBox: function(cu){
		cu = null;
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
	}
}

function colisionar(entity){
	if(entity.ser.WorldPos.x<30){
		entity.ser.WorldPos.x = 30;
	}
	if(entity.ser.WorldPos.z<30){
		entity.ser.WorldPos.z = 30;
		//aqui teria uma tela de game over porque ele tà out of bounds
	}
	
	if(entity.ser.WorldPos.x>=(mapaAtual.largura-1)*60+30){
		entity.ser.WorldPos.x = (mapaAtual.largura-1)*60+30;
	}
	
	if(entity.ser.WorldPos.z>=(mapaAtual.altura)*60){
		entity.ser.WorldPos.z = (mapaAtual.altura)*60;
		//aqui tbm
	}
	
	entity.ser.boxCol.x = entity.ser.WorldPos.x - entity.ser.boxCol.w/2;
	entity.ser.boxCol.z = entity.ser.WorldPos.z - entity.ser.boxCol.p;
	entity.ser.boxCol.y = entity.ser.WorldPos.y - entity.ser.boxCol.h;
	
	switch(mapaAtual.shadowGrid[entity.ser.inGrid.x][entity.ser.inGrid.z]){
		default:
			entity.ser.layer = 2;
			break;
		case "S":
			entity.ser.layer = 1
		break;
		case "S":
			entity.ser.layer = 0
		break;
	}
	let playerCubeCol = [entity.ser.boxCol.x, entity.ser.boxCol.z, entity.ser.boxCol.w, entity.ser.boxCol.p, entity.ser.boxCol.y, entity.ser.boxCol.h]
	let structCubeCol;
	for(let i = 0; i < stackDeEstruturas.length; i++){
		if(col.AABB3D(playerCubeCol, structCubeCol)){
			console.log("c");
			structCubeCol = [stackDeEstruturas[i].x, stackDeEstruturas[i].z, stackDeEstruturas[i].w, stackDeEstruturas[i].p, stackDeEstruturas[i].y, stackDeEstruturas[i].h];
			switch(stackDeEstruturas[i].tipo){
				case "solid":
					//alterar a AABB3Dside. por motivos óbvios
					switch(col.AABB3Dside(playerCubeCol, structCubeCol)){
						case 'N':
							entity.ser.WorldPos.z += entity.ser.velocity.z;
							entity.ser.velocity.z = Math.floor(entity.ser.velocity.z/entity.ser.peso);
							
						break;
						
						case 'S':
							entity.ser.WorldPos.z -= entity.ser.velocity.z;
							entity.ser.velocity.z = Math.floor(entity.ser.velocity.z/entity.ser.peso);
						break;
						
						case 'E':
							entity.ser.WorldPos.x -= entity.ser.velocity.x;
							entity.ser.velocity.x = Math.floor(entity.ser.velocity.x/entity.ser.peso);
						break;
						
						case 'W':
							entity.ser.WorldPos.x += entity.ser.velocity.x;
							entity.ser.velocity.x = Math.floor(entity.ser.velocity.x/5);
						break;
						case 'U':
							entity.ser.WorldPos.y -= entity.ser.velocity.y;
							entity.ser.velocity.y = Math.floor(entity.ser.velocity.y/5);
						break;
						case 'D':
							entity.ser.WorldPos.y += entity.ser.velocity.y;
							entity.ser.velocity.y = Math.floor(entity.ser.velocity.y/5);
						break;
					}//fim switch
				break;
			}
		}
	}
	
	//começou as colisões em relação ao tileset
	let x_intro = Math.floor(Camera.x/60);
	let x_end = Math.floor((Camera.x+Camera.w)/60);
	let y_intro = Math.floor(Camera.y/60);
	let y_end = Math.floor((Camera.y+Camera.h)/60);
	
	if(x_intro < 0) x_intro = 0;
	if(y_intro < 0) y_intro = 0;
	if(x_end > mapaAtual.largura) x_end = mapaAtual.largura;
	if(y_end > mapaAtual.altura) y_end = mapaAtual.altura;
	let playerBoxCol = [entity.ser.boxCol.x, entity.ser.boxCol.z, entity.ser.boxCol.w, entity.ser.boxCol.p];
		for(let j = x_intro; j < x_end; j++){
			for(let i = y_intro; i < y_end; i++){
				let mapBoxCol = [mapaAtual.limites[i][j].x, mapaAtual.limites[i][j].z, 60, 60];
				if(entity.ser.WorldPos.y < mapaAtual.limites[i][j].y){
					
					switch(col.AABBside(playerBoxCol, mapBoxCol)){
						case 'N':
							entity.ser.WorldPos.z += entity.ser.velocity.z;
							entity.ser.velocity.z = Math.floor(entity.ser.velocity.z/entity.ser.peso);
							
						break;
						
						case 'S':
							entity.ser.WorldPos.z -= entity.ser.velocity.z;
							entity.ser.velocity.z = Math.floor(entity.ser.velocity.z/entity.ser.peso);
						break;
						
						case 'E':
							entity.ser.WorldPos.x -= entity.ser.velocity.x;
							entity.ser.velocity.x = Math.floor(entity.ser.velocity.x/entity.ser.peso);
						break;
						
						case 'W':
							entity.ser.WorldPos.x += entity.ser.velocity.x;
							entity.ser.velocity.x = Math.floor(entity.ser.velocity.x/entity.ser.peso);
						break;
					}//fim switch
				}
			}//fim for
		}//fim for
}
//fim colisionar

function isOnGround(entitY, struturY){
	return entitY <= struturY;
}

function handleYcoords(entity){
	entity.ser.pontoCentral[1] -= entity.ser.velocity.y
	entity.ser.WorldPos.y += entity.ser.velocity.y;
	
	let currLimEnd;
	switch(entity.ser.direcao){
		case 1:
			currLimEnd = mapaAtual.limites[WorldToGrid(entity.ser.WorldPos.z, 60)][WorldToGrid(entity.ser.WorldPos.x, 60)].y
		break;
		case 2:
			currLimEnd = mapaAtual.limites[WorldToGrid(entity.ser.WorldPos.z, 60)][WorldToGrid(entity.ser.WorldPos.x + entity.ser.boxCol.w/2, 60)].y
		break;
		case 3:
			currLimEnd = mapaAtual.limites[WorldToGrid(entity.ser.WorldPos.z - entity.ser.boxCol.p, 60)][WorldToGrid(entity.ser.WorldPos.x, 60)].y
		break;
		case 4:
			currLimEnd = mapaAtual.limites[WorldToGrid(entity.ser.WorldPos.z, 60)][WorldToGrid(entity.ser.WorldPos.x - entity.ser.boxCol.w/2, 60)].y;
		break;
		case 5:
			currLimEnd = mapaAtual.limites[WorldToGrid(entity.ser.WorldPos.z, 60)][WorldToGrid(entity.ser.WorldPos.x + entity.ser.boxCol.w/2, 60)].y;
		break;
		case 6:
			currLimEnd = mapaAtual.limites[WorldToGrid(entity.ser.WorldPos.z - entity.ser.boxCol.p, 60)][WorldToGrid(entity.ser.WorldPos.x + entity.ser.boxCol.w/2, 60)].y;
		break;
		case 7:
			currLimEnd = mapaAtual.limites[WorldToGrid(entity.ser.WorldPos.z - entity.ser.boxCol.p, 60)][WorldToGrid(entity.ser.WorldPos.x - entity.ser.boxCol.w/2, 60)].y;
		break;
		case 8:
			currLimEnd = mapaAtual.limites[WorldToGrid(entity.ser.WorldPos.z, 60)][WorldToGrid(entity.ser.WorldPos.x - entity.ser.boxCol.w/2, 60)].y;
		break;
	}
	
	
	let currLim = mapaAtual.limites[WorldToGrid(entity.ser.WorldPos.z, 60)][WorldToGrid(entity.ser.WorldPos.x, 60)].y;
	if(!isOnGround(entity.ser.WorldPos.y, currLim) && !isOnGround(entity.ser.WorldPos.y, currLimEnd)){
		entity.ser.velocity.y -= 6;
		entity.ser.onGround = false;
	}
	else{
		entity.ser.velocity.y = 0;
		entity.ser.onGround = true;
	}
	if(isOnGround(entity.ser.WorldPos.y, currLim) && entity.ser.WorldPos.y < currLim){
		entity.ser.WorldPos.y = currLim;
		entity.ser.pontoCentral[1] = CentroDaTela[1];
	}
}