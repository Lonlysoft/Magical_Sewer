var HUD_canvin = document.getElementById("HUD")
var HUD_ctx = HUD_canvin.getContext("2d")

const numeroVida = new Image()
numeroVida.src = "imagens/HUD/Numero_objeto.png"

const numeroPontos = new Image()
numeroPontos.src = "imagens/HUD/sm64betaUI.png"

const janelaDeStatus = new Image()
janelaDeStatus.src = "imagens/HUD/Janela_do_Guaxo_Rustyborde.png"

//coordenadas de imagem para os numeros do HP
var NumCoordsHP = {
	num1: [8, 0, 4, 9],
	num2: [14, 0, 6, 9],
	num3: [22, 0, 6, 9],
	num4: [30, 0, 6, 9],
	num5: [38, 0, 6, 9],
	num6: [46, 0, 7, 9],
	num7: [55, 0, 6, 9],
	num8: [61, 0, 7, 9],
	num9: [72, 0, 8, 9],
	num0: [0, 0, 6, 9],
	relativeX: HUD_canvin.width - 58,
	relativeY: 100
}

//coordenadas de imagem para mostrar os pontos
var NumCoordsPTS = {
	num1: [141, 39, 16, 16],
	num2: [158, 39, 16, 16],
	num3: [175, 39, 16, 16],
	num4: [192, 39, 16, 16],
	num5: [209, 39, 16, 16],
	num6: [226, 39, 16, 16],
	num7: [243, 39, 16, 16],
	num8: [260, 39, 16, 16],
	num9: [277, 39, 16, 16],
	num0: [124, 39, 16, 16],
	relativeX: HUD_canvin.width - 58,
	relativeY: 125
}

function esconder_HUD(){
	HUD_canvin.style.visibility = 'hidden';
}


var hpPraRenderizar;
var pontosPraDesenhar = [0] * 8;
var escala = 2;

function desenharNumeros(HP){
	//necessário usar uma coisa que reconhece os números pra tentar centralizá-los
	switch(HP.length){
		case 2: HP = ["0", "0", HP[0]]; break;
		case 3: HP = ["0", HP[0], HP[1]]; break;
		default: break;
	}
	
	for(let i = 2; i>-1; i--){
		NumCoordsHP.relativeX = HUD_canvin.width - 58;
		if(i == 1){
			NumCoordsHP.relativeX += (NumCoordsHP.num0[2]*escala)+2;
		}
		else if(i == 2){
			NumCoordsHP.relativeX += (NumCoordsHP.num0[2]*escala*2)+4;
		}
		switch(HP[i]){
			case "1":
				HUD_ctx.drawImage(numeroVida, NumCoordsHP.num1[0], NumCoordsHP.num1[1], NumCoordsHP.num1[2], NumCoordsHP.num1[3], NumCoordsHP.relativeX, NumCoordsHP.relativeY, NumCoordsHP.num1[2]*escala, NumCoordsHP.num1[3]*escala);
				break;
			case "2":
				HUD_ctx.drawImage(numeroVida, NumCoordsHP.num2[0], NumCoordsHP.num2[1], NumCoordsHP.num2[2], NumCoordsHP.num2[3], NumCoordsHP.relativeX, NumCoordsHP.relativeY, NumCoordsHP.num2[2]*escala, NumCoordsHP.num2[3]*escala);
				break;
			case "3":
				HUD_ctx.drawImage(numeroVida, NumCoordsHP.num3[0], NumCoordsHP.num3[1], NumCoordsHP.num3[2], NumCoordsHP.num3[3], NumCoordsHP.relativeX, NumCoordsHP.relativeY, NumCoordsHP.num3[2]*escala, NumCoordsHP.num3[3]*escala);
				break;
			case "4":
				HUD_ctx.drawImage(numeroVida, NumCoordsHP.num4[0], NumCoordsHP.num4[1], NumCoordsHP.num4[2], NumCoordsHP.num4[3], NumCoordsHP.relativeX, NumCoordsHP.relativeY, NumCoordsHP.num4[2]*escala, NumCoordsHP.num4[3]*escala);
				break;
			case "5":
				HUD_ctx.drawImage(numeroVida, NumCoordsHP.num5[0], NumCoordsHP.num5[1], NumCoordsHP.num5[2], NumCoordsHP.num5[3], NumCoordsHP.relativeX, NumCoordsHP.relativeY, NumCoordsHP.num5[2]*escala, NumCoordsHP.num5[3]*escala);
				break;
			case "6":
				HUD_ctx.drawImage(numeroVida, NumCoordsHP.num6[0], NumCoordsHP.num6[1], NumCoordsHP.num6[2], NumCoordsHP.num6[3], NumCoordsHP.relativeX, NumCoordsHP.relativeY, NumCoordsHP.num6[2]*escala, NumCoordsHP.num6[3]*escala);
				break;
			case "7":
				HUD_ctx.drawImage(numeroVida, NumCoordsHP.num7[0], NumCoordsHP.num7[1], NumCoordsHP.num7[2], NumCoordsHP.num7[3], NumCoordsHP.relativeX, NumCoordsHP.relativeY, NumCoordsHP.num7[2]*escala, NumCoordsHP.num7[3]*escala)
				break
			case "8":
				HUD_ctx.drawImage(numeroVida, NumCoordsHP.num8[0], NumCoordsHP.num8[1], NumCoordsHP.num8[2], NumCoordsHP.num8[3], NumCoordsHP.relativeX, NumCoordsHP.relativeY, NumCoordsHP.num8[2]*escala, NumCoordsHP.num8[3]*escala)
				break
			case "9":
				HUD_ctx.drawImage(numeroVida, NumCoordsHP.num9[0], NumCoordsHP.num9[1], NumCoordsHP.num9[2], NumCoordsHP.num9[3], NumCoordsHP.relativeX, NumCoordsHP.relativeY, NumCoordsHP.num9[2]*escala, NumCoordsHP.num9[3]*escala)
				break
			default: //0
				HUD_ctx.drawImage(numeroVida, NumCoordsHP.num0[0], NumCoordsHP.num0[1], NumCoordsHP.num0[2], NumCoordsHP.num0[3], NumCoordsHP.relativeX, NumCoordsHP.relativeY, NumCoordsHP.num0[2]*escala, NumCoordsHP.num0[3]*escala)
				break
		}
	}
}



function desenharPts(PTS){
	for(let i = 0; i<PTS.length; i++){
		NumCoordsPTS.relativeX = HUD_canvin.width - 20 -(PTS.length*10);
		NumCoordsPTS.relativeX += i*10;
		switch(PTS[i]){
			case "1":
				HUD_ctx.drawImage(numeroPontos,
					NumCoordsPTS.num1[0], NumCoordsPTS.num1[1],
					 NumCoordsPTS.num1[2], NumCoordsPTS.num1[3],
					NumCoordsPTS.relativeX, NumCoordsPTS.relativeY,
					NumCoordsPTS.num1[2], NumCoordsPTS.num1[3]
				);
				break;
			case "2":
				HUD_ctx.drawImage(numeroPontos,
					NumCoordsPTS.num2[0], NumCoordsPTS.num2[1],
					NumCoordsPTS.num2[2], NumCoordsPTS.num2[3],
					NumCoordsPTS.relativeX, NumCoordsPTS.relativeY,
					NumCoordsPTS.num2[2], NumCoordsPTS.num2[3]);
				break;
			case "3":
				HUD_ctx.drawImage(numeroPontos,
					NumCoordsPTS.num3[0], NumCoordsPTS.num3[1],
					NumCoordsPTS.num3[2], NumCoordsPTS.num3[3],
					NumCoordsPTS.relativeX, NumCoordsPTS.relativeY,
					NumCoordsPTS.num3[2], NumCoordsPTS.num3[3]);
				break;
			case "4":
				HUD_ctx.drawImage(numeroPontos,
					NumCoordsPTS.num4[0], NumCoordsPTS.num4[1],
					NumCoordsPTS.num4[2], NumCoordsPTS.num4[3],
					NumCoordsPTS.relativeX, NumCoordsPTS.relativeY,
					NumCoordsPTS.num4[2], NumCoordsPTS.num4[3]);
				break;
			case "5":
				HUD_ctx.drawImage(numeroPontos,
					NumCoordsPTS.num5[0], NumCoordsPTS.num5[1],
					NumCoordsPTS.num5[2], NumCoordsPTS.num5[3],
					NumCoordsPTS.relativeX, NumCoordsPTS.relativeY,
					NumCoordsPTS.num5[2], NumCoordsPTS.num5[3]);
				break;
			case "6":
				HUD_ctx.drawImage(numeroPontos,
					NumCoordsPTS.num6[0], NumCoordsPTS.num6[1],
					NumCoordsPTS.num6[2], NumCoordsPTS.num6[3],
					NumCoordsPTS.relativeX, NumCoordsPTS.relativeY,
					NumCoordsPTS.num6[2], NumCoordsPTS.num6[3]
				);
				break;
			case "7":
				HUD_ctx.drawImage(numeroPontos,
					NumCoordsPTS.num7[0], NumCoordsPTS.num7[1],
					NumCoordsPTS.num7[2], NumCoordsPTS.num7[3],
					NumCoordsPTS.relativeX, NumCoordsPTS.relativeY,
					NumCoordsPTS.num7[2], NumCoordsPTS.num7[3]
				);
				break
			case "8":
				HUD_ctx.drawImage(numeroPontos,
					NumCoordsPTS.num8[0], NumCoordsPTS.num8[1],
					NumCoordsPTS.num8[2], NumCoordsPTS.num8[3],
					NumCoordsPTS.relativeX, NumCoordsPTS.relativeY,
					NumCoordsPTS.num8[2], NumCoordsPTS.num8[3]);
				break;
			case "9":
				HUD_ctx.drawImage(numeroPontos,
					NumCoordsPTS.num9[0], NumCoordsPTS.num9[1],
					NumCoordsPTS.num9[2], NumCoordsPTS.num9[3],
					NumCoordsPTS.relativeX, NumCoordsPTS.relativeY,
					NumCoordsPTS.num9[2], NumCoordsPTS.num9[3]
				);
				break;
			default: //0
				HUD_ctx.drawImage(numeroPontos,
					NumCoordsPTS.num0[0], NumCoordsPTS.num0[1],
					NumCoordsPTS.num0[2], NumCoordsPTS.num0[3],
					NumCoordsPTS.relativeX, NumCoordsPTS.relativeY,
					NumCoordsPTS.num0[2], NumCoordsPTS.num0[3]
				);
				break;
		}
	}
}
var pontosStr = "";
function renderHUD(){
	HUD_ctx.globalAlpha = 0.5;
	HUD_ctx.fillRect(HUD_canvin.width - 120, 95, 110, 55);
	HUD_ctx.globalAlpha = 1;
	
	HUD_canvin.style.visibility = "visible";
	//HUD_ctx.drawImage(janelaDeStatus, 0, 0, 208, 100)
	
	//desenhar números
	hpPraRenderizar = personagemAtual.ser.hp + " ";
	if(personagemAtual.ser.xp < 0){
		personagemAtual.ser.xp = 0;
	}else if(personagemAtual.ser.xp >= 1000000000){
		personagemAtual.ser.xp = 999999999;
	}
	pontosStr = personagemAtual.ser.xp + "";
	desenharNumeros(hpPraRenderizar);
	desenharPts(pontosStr);
	escreva("Guaxo", HUD_canvin.width - 110, 103);
}

//parte das caixas de diálogo e menu de pausa

// menu de pausa beta
const caixa_de_texto = {
	posicao: [54, 120, 100, 100],
	graph: new Image()
}
caixa_de_texto.graph.src = "imagens/HUD/Janela_de_Dialogo.png"

var interacaoX = caixa_de_texto.posicao[0] + 32;
var interacaoY = caixa_de_texto.posicao[1] + 8;

function abrirJanela(maximoDeOpcaos){
	ctx.drawImage(caixa_de_texto.graph, CentroDaTela[0]-125, CentroDaTela[0]-maximoDeOpcaos*20, 125, 20*cursor.max);
	
}


function Pause(){
	escreva("falar", interacaoX, interacaoY);
	escreva("item", interacaoX, interacaoY + 20);
	escreva("ver", interacaoX, interacaoY + 40);
	escreva("misc.", interacaoX, interacaoY +60);
}
