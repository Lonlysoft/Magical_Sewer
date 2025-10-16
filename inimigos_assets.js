const INIMS = {
	0: null,
	1: {
		ID: 1,
		age: 15,
		nome: "zoiudo",
		ATK: 10, DEF: 10,
		HP: 20, 
		ACL: 2, VMAX: 7,
		altura: TILE_SIZE/4, 
		largura: TILE_SIZE/4,
		profundidade: TILE_SIZE/4,
		HTMLsrc: "#enemy",
		animations: {
			still: ["linear", 0, 0]
		},
		tipoComportamento: "linearX"
	},
	2: {
		ID: 2,
		age: 12,
		nome: "tubarudo",
		ATK: 20, DEF: 10,
		HP: 40, ACL: 2, VMAX: 7,
		altura: TILE_SIZE/4, 
		largura: TILE_SIZE/2,
		profundidade: TILE_SIZE/2,
		HTMLsrc: "#enemy",
		animations: {
			still: ["linear", 0, 0]
		},
		tipoComportamento: "linearZ"
	},
	3: {
		nome: "insetoudo"
		
	}
}