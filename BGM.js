/*---- M U S I C A S ----*/
const sewer_songs = {
	BGM13: new Audio(),
	WORLD_SLCT: new Audio(),
	mid_in_the_sewers: new Audio()
};
sewer_songs.BGM13.src = "musicas/BGM13.mp3";
sewer_songs.mid_in_the_sewers.src = "musicas/walk_in_sewers_improved.mid";
sewer_songs.WORLD_SLCT.src = "musicas/GAMESELECT.mp3";

/*------ S F X ------*/

const SFX = {
	pound: new Audio(), pulo: new Audio(), dano: new Audio,
	YEAOUCH: new Audio(), EXPLOSION: new Audio(), NO: new Audio()
};

function tocarMusica(ID){
	switch(ID){
		case 1:
		sewer_songs.BGM13.play();
		break;
		case 2:
		sewer_songs.WORLD_SLCT.play();
		break;
		case 3:
		sewer_songs.mid_in_the_sewers.play();
		break;
	}
}