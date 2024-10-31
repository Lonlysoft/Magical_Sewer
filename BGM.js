/*---- M U S I C A S ----*/
const sewer_songs = {
	isPlaying: false,
	whoIsPlaying: "nothing",
	BGM13: new Audio(),
	WORLD_SLCT: new Audio(),
	mid_in_the_sewers: new Audio()
};
sewer_songs.BGM13.src = "src/musicas/BGM13.m4a";
sewer_songs.mid_in_the_sewers.src = "src/musicas/walk_in_sewers_improved.mid";
sewer_songs.WORLD_SLCT.src = "src/musicas/GAMESELECT.mp3";

/*------ S F X ------*/

const SFX = {
	pound: new Audio(), pulo: new Audio(), dano: new Audio(),
	YEAOUCH: new Audio(), EXPLOSION: new Audio(), NO: new Audio(),
	select: new Audio()
};

const BGM = {
	musicaEngatilhada: document.getElementById("music"),
	start: function(){
		this.musicaEngatilhada.play();
	}
}

SFX.select = "src/SFX/slct.m4a"