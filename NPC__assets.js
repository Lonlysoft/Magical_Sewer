var NPCS = [
	"NPCS",
	{
		name: "Raty",
		ID: 1,
		age: 8,
		height: TILE_SIZE,
		width: TILE_SIZE,
		dept: TILE_SIZE,
		dialogs: Dialogs["Raty"],
		pathArr: [["nothing", 20], ["nothing", 40], ["nothing", 30]],
		HTMLsrc: "#ultraNPC",
		animations: {
			still: ["infinite", 0],
			walk: ["infinite", 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0]
		}
	},
	
	{
		ID: 2,
		name: "",
		age: 26,
		height: TILE_SIZE*1.5,
		width: TILE_SIZE*0.5,
		dept: TILE_SIZE*0.5,
		dialogs: Dialogs["Rodney"],
		pathArr: [["goto", 20], ["nothing", 40], ["nothing", 30]],
		HTMLsrc: "#ultraNPC",
		animations: {
			still: ["infinite", 0],
			walk: ["infinite", 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0]
		}
	}
	
];
