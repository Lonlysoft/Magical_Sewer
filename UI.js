var HUD_canvin = document.getElementById("HUD");
var HUD_ctx = HUD_canvin.getContext("2d");
HUD_canvin.width = 520;
HUD_canvin.height = 520;

const numeroVida = new Image()
numeroVida.src = "src/imagens/UI/Numero_objeto.png"

const numeroPontos = new Image()
numeroPontos.src = "src/imagens/UI/sm64betaUI.png"

const janelaDeStatus = new Image()
janelaDeStatus.src = "src/imagens/UI/Janela_do_Guaxo_Rustyborde.png"

//coordenadas de imagem para os numeros do HP
var NumCoordsHP = {
	num1: [8, 0, 4, 9],
	num2: [14, 0, 6, 9],
	num3: [22, 0, 6, 9],
	num4: [30, 0, 6, 9],
	num5: [38, 0, 6, 9],
	num6: [46, 0, 7, 9],
	num7: [55, 0, 6, 9],
	num8: [62, 0, 7, 9],
	num9: [72, 0, 8, 9],
	num0: [0, 0, 6, 9],
	relativeX: HUD_canvin.width - 58,
	relativeY: 115
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
		ctx.fillStyle = "#5F6"
		ctx.fillText(HP[i], NumCoordsHP.relativeX, NumCoordsHP.relativeY);
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
var pontosStr;
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
	escreva("Guaxo", HUD_canvin.width - 110, 115);
}

//parte das caixas de diálogo e menu de pausa

// menu de pausa beta
const caixa_de_texto = {
	posicao: [54, 120, 100, 100],
	graph: new Image()
}
caixa_de_texto.graph.src = "src/imagens/UI/Janela_de_Dialogo.png"

var interacaoX = caixa_de_texto.posicao[0] + 32;
var interacaoY = caixa_de_texto.posicao[1] + 8;

function abrirJanela(maximoDeOpcaos){
	ctx.drawImage(caixa_de_texto.graph, CentroDaTela[0]-125, CentroDaTela[0]-maximoDeOpcaos*20, 125, 20*cursor.max);
}


const PauseMenu = {
	camadas: 0,
	raioDoMenu: 30,
	numDeOpcoes: 7,
	raioParaAnim: 0,
	animationDone: false,
	hasSeparated: false,
	padding: 7,
	grausSeparacao: 0,
	opcoes: ["falar", "items", "olhar", "equipar", "porta", "status"],
	DimenDasBolas:[30, 30],
	
	draw: function(x, y, raio = this.raioDoMenu){
		x -= canvas.width/2 - this.padding*(Math.floor(this.numDeOpcoes/2)) - this.DimenDasBolas[0]*(Math.floor(this.numDeOpcoes/2));
		console.log(x);
		if(this.hasSeparated == false){
			this.hasSeparated = true;
		}
		fale(this.opcoes[cursor.opcao - 1], canvas.width/2 - (this.opcoes[cursor.opcao - 1].length * 2), y - 40, 38, "purple")
		for(let i = 0; i < this.numDeOpcoes; i++){
			x += this.padding+this.DimenDasBolas[0];
			
			if(i == cursor.opcao - 1) HUD_ctx.fillStyle = "yellow";
			else HUD_ctx.fillStyle = "purple";
			
			HUD_ctx.fillRect(x, y - this.raioDoMenu - this.DimenDasBolas[1]/2, this.DimenDasBolas[0], this.DimenDasBolas[1]);
		}
	},
	vinheta: function(x,y,tipo){
		switch(tipo){
			case "ir":
				this.raioParaAnim = 0;
				if(this.raioParaAnim >= this.raioDaRoda){
					this.raioParaAnim = 0;
					this.animationDone = true;
				}
				else{
					this.raioParaAnim++;
				}
				this.draw(x, y, this.raioParaAnim);
				break;
			
			case "sair":
				if(this.rqst == false){
					this.raioParaAnim = this.raioDaRoda;
					this.rqst = true;
				}
				if(this.raioParaAnim <= 0){
					this.raioParaAnim = 0;
					this.animationDone = true;
					this.rqst = false;
				}
				else{
					this.raioParaAnim--;
				}
				this.draw(x, y, this.raioParaAnim);
				
				break;
		}
	}
}