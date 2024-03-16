//coisas que saão e não são o Guaxo
var canvas_BG = document.getElementById("cenario");
var ctx_BG = canvas_BG.getContext("2d");
canvas_BG.width = 520;
canvas_BG.height = 520;
var canvas_Tr = document.getElementById("transicoes");
var ctx_Tr = canvas_Tr.getContext("2d");
canvas_Tr.width = 520;
canvas_Tr.height = 520;
/*-------- B A C K G R O U N D --------*/

const title_screen = new Image()
title_screen.src = 'src/imagens/UI/TelaTitulo.png'

const logotipo = new Image()
logotipo.src = 'src/imagens/UI/Magical_Title.png'

//tela de selecao de personagem
const icons = {
	guaxo: [new Image(), new Image()],
	raty: [new Image(), new Image()],
	dante: [new Image(), new Image()]
}
icons.guaxo[0].src = "src/imagens/Personagens/GuaxoIcone01.png";
icons.guaxo[1].src = "src/imagens/Personagens/GuaxoIcone02.png";
icons.raty[0].src = "src/imagens/Personagens/Raty01.png";
icons.raty[1].src = "src/imagens/Personagens/Raty02.png";
icons.dante[0].src = "src/imagens/Personagens/Dante01.png";
icons.dante[1].src = "src/imagens/Personagens/Dante02.png";

/*-------------- A S S E T S	I N T E R A T I V O S ------------*/

const comando = [new Image(), new Image()]
comando[0].src = "src/imagens/UI/instrussao1.png"
comando[1].src = "src/imagens/UI/instrussao2.png"

/*-------- T R A N S I Ç Õ E S --------*/

var out_estr = new Image()
out_estr.src = "src/imagens/Transitivos_diretos/EstrelaTransit.png"

var out_circ = new Image()
out_circ.src = "src/imagens/Transitivos_diretos/BolaTransicao.png"

var alfa = 1
var delta = 0.1

var gamma = 5;
var fending = 1;
/*
function mkSqr(velocidade, height){
	for(let i = 0; i < 4; i++){
		ctx.rotate(3.14/2);
		ctx.fillRect(0, 0, canvas.width, height)
	}
}
*/


function transicaoDeTela(tipo, estado = "opacidade"){
	switch(estado){
		case "opacidade":
			switch(tipo){
				case "indo":
					ctx.globalAlpha = alfa;
					ctx.fillStyle = "#000";
					ctx.fillRect(0, 0, 520, 520);
					ctx.globalAlpha = 1;
					alfa = alfa + delta;
					break;
				case "vindo":
						ctx.globalAlpha = alfa;
						ctx.fillStyle = "#000";
						ctx.fillRect(0,0,520,520);
						ctx.globalAlpha = 1;
						alfa -= delta;
					break
			}
			break;
		case "estrela":
			switch(tipo){
				case "indo":
					mkSqr(gamma, fending);
					fending += gamma;
					break;
				case "vindo":
					mkSqr()
					fending -= gamma;
					break;
			}
			break;
		case "circulo":
			switch(tipo){
				case "indo":
					break;
				case "vindo":
					//mkSqr()
					break;
			}
			break;
	}
}

//------- F U L L	S C R E E N S -------//

function charSelectionScreen(){
	ctx.fillStyle = "#195B8F"
	ctx.fillRect(0, 0, 520, 520)
	ctx.drawImage(comando[1], 50, 0, 420, 154)
	ctx.globalAlpha = 0.25
	ctx.drawImage(sombra, canvas.width/2-100, canvas.height - 100, 200, 46)
	ctx.globalAlpha = 1
	if(frame == 1 || frame == 2 || frame == 3){
		ctx.drawImage(icons.guaxo[1], canvas.width/4-100, canvas.height/2-100, 200, 200);
		ctx.drawImage(icons.raty[1], 8 + canvas.width/4+canvas.width/4-100, canvas.height/2-100, 200, 200);
		ctx.drawImage(icons.dante[1], 8 + canvas.width/4+canvas.width/4-100, canvas.height/2-100, 200, 200)
	}
	else{
		ctx.drawImage(icons.guaxo[0], canvas.width/2-100, canvas.height/2-100, 200, 200)
	}
}

const VynnyLonlydotLogo = new Image();
VynnyLonlydotLogo.src = "src/imagens/UI/Vynny_Logotype.png";

const LonlysoftLogo = new Image();
LonlysoftLogo.src = "src/imagens/UI/lsft.png";

function LOGOTYPE(name){
	switch(name){
		case "LONLYSOFT":
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			ctx.drawImage(LonlysoftLogo, 0, 0, canvas.width, canvas.height);
			break;
		
		case "Vynny":
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			ctx.drawImage(VynnyLonlydotLogo, 0, 0, canvas.width, canvas.height);
			break;
			
		case "CTpresents":
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			falar("Cartoon Town \n apresenta...", 200, 200);
			break;
	}
}