//mapa assetes porque parecia uma ideia legal :/

var ftest = new LevelScenery(
	
	9, 7, "MicroInterior",
	
	//chao
	[
	[2, 1, 2, 1, 2, 1, 2, 1, 2],
	[1, 2, 1, 2, 1, 2, 1, 2, 1],
	[2, 1, 2, 1, 2, 1, 2, 1, 2],
	[1, 2, 1, 2, 1, 2, 1, 2, 1],
	[2, 1, 2, 1, 2, 1, 2, 1, 2],
	[1, 2, 1, 2, 1, 2, 1, 2, 1],
	[2, 1, 2, 1, 2, 1, 2, 1, 2]
	],
	
	//sombras
	
	[
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 1, 0, 1, 0, 1, 0, 0],
	[0, 0, 1, 0, 1, 0, 1, 0, 0],
	[0, 0, 1, 0, 1, 0, 1, 0, 0]
	],
	
	[
	
	],
	//relevo
	
	[
	[0, 0, 0, 0, 0, 0, 0, 1, 0],
	[0, 0, 0, 0, 0, 1, 1, 1, 1],
	[0, 0, 0, 0, 0, 1, 1, 9, 1],
	[0, 0, 0, 0, 0, 0, 0, 9, 1],
	[0, 0, 1, 0, 2, 0, 3, 9, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 1]
	],
	
	/*
	0 - caixa massissa onde o y é menor.
	1 - diagonal hipotenusa pro nordeste 
	2 - diagonal hipotenusa pro sudeste
	3 - diagonal hipotenusa pro sudoeste
	4 - diagonal hipotenusa pro noroeste
	isso é só considerado pra diagonais. lembre que a angulação é necessária já que estamos em um jogo 3d.
	*/
	
	[
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
	],
	
	//personagens e os spawns dele
	
	[
	["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "00"],
	["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "],
	["  ", "  ", "p1", "  ", "  ", "  ", "  ", "  ", "  "],
	["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "],
	["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "00"],
	["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "],
	["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "]
	],
	
	//spawnerDeInimigos
	
	[
	[-1, -1, -1, -1, -1, -1, -1, -1, -1],
	[-1, -1, -1, -1, -1, -1, -1, -1, -1],
	[-1, -1, -1, -1, -1, -1, -1, -1, -1],
	[-1, -1, -1, -1, -1, -1, -1, -1, -1],
	[-1, -1, -1, -1, 0, 0, -1, -1, -1],
	[-1, -1, -1, -1, -1, -1, -1, -1, -1],
	[-1, -1, -1, -1, -1, -1, -1, -1, -1]
	],
	
	//objetos
	
	[
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 1, 0, 7, 0, 0],
	[0, 0, 1, 0, 7, 0, 7, 0, 0],
	[0, 0, 7, 0, 7, 0, 7, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
	],
	
	//objetos camada 2
	
	[
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
	],
	
	[
	new Plataforma(0, 0, 60, 60, 190, 60, "solid")
	]
	
);