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

const title_screen = document.querySelector(".imgTitle");
const title = document.querySelector(".title")
//tela de selecao de personagem
const icons = {
	guaxo: [document.querySelector(".iconGuaxo"), document.querySelector(".iconGuaxoBlink")],
	raty: [document.querySelector(".iconRaty"), document.querySelector(".iconRatyBlink")],
	dante: [document.querySelector(".iconDante"), document.querySelector(".iconDanteBlink")]
}

/*-------------- A S S E T S	I N T E R A T I V O S ------------*/

const comando = [document.querySelector(".cmd"), document.querySelector(".cmd2")]


/*-------- T R A N S I Ç Õ E S --------*/

var out_estr = document.querySelector(".transition__star");
var out_circ = document.querySelector(".transition__ball");

var alfa = 1

var gamma = 5;
var fending = 1;
/*
function mkSqr(velocidade, height, x = 0, y = 0){
	for(let i = 0; i < 4; i++){
		ctx.rotate(3.14/2);
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	}
}
*/


function transicaoDeTela(tipo, frameVelocity, estado = "opacidade"){
	switch(estado){
		case "opacidade":
			switch(tipo){
				case "indo":
					ctx_Tr.globalAlpha = alfa;
					ctx_Tr.fillStyle = "#000";
					ctx_Tr.fillRect(0, 0, 520, 520);
					ctx_Tr.globalAlpha = 1;
					alfa = alfa + frameVelocity;
				break;
				
				case "vindo":
					ctx_Tr.globalAlpha = alfa;
					ctx_Tr.fillStyle = "#000";
					ctx_Tr.fillRect(0,0,520,520);
					ctx_Tr.globalAlpha = 1;
					alfa -= frameVelocity;
				break;
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

const VynnyLonlydotLogo = document.querySelector(".imgLogotype1");
const LonlysoftLogo = document.querySelector(".imgLogotype2");

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

function errorMessagingEasterEgg(){
	document.write("error: couldn't set fps right \n 0x000000864777 0x000005980fff 0x00054a886aae 0x0005f6867aad \n 0x0005aef5544a 0x0005f6121212 0x000000629afe 0x000005310044 \n 0x000555a60045 0x0002436643af 0x00054a421009 0x0005f6538000 \n 0x00fe00432000 0x000005432000 0x0005f65d8000\n undefined undefined \n undefined undefined \n undefined undefined");
}