

var personagens = [
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
]