

const personagens = [
	new Protagonista(
		"Guaxo", //nome
		400, //HP
		20, //ATK
		20, //DEF
		2, //ACL
		10, //VMAX
		33, //Jump max
		10, //inventory size
		24,//90, //altura do bixo
		14, //largura
		14, //profundidade (n tem nada a ver com a historia)
		["dashDive", "hold"],
		"#Guaxo" //argumento pro querySelector
	),
	new Protagonista(
		"Raty",
		400, //HP
		20, //ATK
		15, //DEF
		1, //ACL
		20, //VMAX
		60, //JMAX
		5, //inventario
		90,
		58,
		58,
		["hold"],
		//habilidade especial
		"#raty"
	),
	new Protagonista(
		"Dante",
		999,
		99,
		50,
		6,
		15,
		60,
		10000,
		30,
		200,
		["hold", "dashDive", "fly"],
		"#Dante"
	)
];

const inimigos = [
	//nome, ID, HP, ATK, DEF, ACL, VMAX, H, W, P
	/*
	["template", ID, HP, ATK, DEF, ACL, VMAX, ALT, LARG, PROF, Comp],
	*/
	["slug", 0, 100, 100, 100, 1, 7, 40, 40, 20, "nothing"],
	["Rotund", 1, 10, 10, 10, 10, 10, 10, 10, 10, "linearZ"],
	["MIXXANT", 2, 10, 10, 10, 10, 10, 10, 10, 10, "follow"],
	["Raposisto", 3, 8, 3, 4, 5, 8, 8, 9, 30, 30, "notice"],
	["MadRodent", 4, 5, 5, 5, 5, 7, 9, 5, 7, "rampage"],
	["BinkyPipe", 4, 4, 4, 6, 7, 80, 90, 80, 67, "loop"],
	["PittyPits", 6, 6, 6, 78, 78, 89, 78, 9, 90, "randompath"]
];

const chefes = [
	//chefoes 
	["CreinMouse", 0, 1000, 57, 90, 2, 9, 200, 200, 200, "specialMouseBehavior"],
	["KitStreza", 1, 10000, 1659, 999, 4, 30, 100, 30, 30, "specialKitsune"]
];

//ID, nome, valor, tipo, equivalente, w, h, p, x, y, z
const ITEMS = [
	[],
	[0, 1, "moeda", "moeda", "coletavelinstantaneo", 20, 20, 20],
	[1, 50, "hambúrguer", "alimento", "consumivel", 20, 20, 20],
	[2, 100, "bolo", "alimento", "consumivel", 20, 20, 20],
	[3, 0, "bloco puxavel", "bloco", "seguravel", TILE_SIZE, TILE_SIZE, TILE_SIZE],
	[4, 19, "martelo", "equipamento", "equipavel", 20, 20, 20]
]