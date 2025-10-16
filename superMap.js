class Piece{
	/*
	argument blueprint
	*/
	constructor(map){
		this.map = map;
		this.entrances = this.setEntrances(this.map);
	}
	setEntrances(){
		let entrances = [];
		for(let i = 0; i < this.map.beingGrid.length; i++){
			for(let j = 0; j < this.map.beingGrid[i].length; j++){
				if(this.map.beingGrid[i][j] == "east"){
					
				}
			}
		}
	}
}

class Board{
	constructor(width, height){
		this.grid = new Array(height);
		this.w = width; this.h = height;
		this.area = width*height;
		for(let i = 0; i < height; i++){
			this.grid[i] = new Array(width);
		}
		this.currentPos = {x: 0, y: 0};
	}
	movePiece(x,y){
		if(grid[y][x] == undefined) return;
		
		//TODO: fazer com que as entradas pelas portas mudem.
		if(grid[y+1][x] == undefined){
			grid[y+1][x] = grid[y][x];
			grid[y][x] = undefined;
			return;
		}
		if(0 < y-1 && grid[y-1][x] == undefined){
			grid[y-1][x] = grid[y][x];
			grid[y][x] = undefined;
			return;
		}
		if(0 < x-1 && grid[y][x-1] == undefined){
			grid[y][x-1] = grid[y][x];
			grid[y][x] = undefined;
			return;
		}
		if(y+1 < height && grid[y-1][x] == undefined){
			grid[y+1][x] = grid[y][x];
			grid[y][x] = undefined;
			return;
		}
		if(x+1 < width && grid[y][x-1] == undefined){
			grid[y][x+1] = grid[y][x];
			grid[y][x] = undefined;
			return;
		}
	}
	addPiece(piece, x, y){
		this.grid[y][x] = piece;
	}
	addPieces(piece){
		for(let i = 0; i < piece.length)
	}
}