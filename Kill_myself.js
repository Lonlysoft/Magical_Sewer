//esse é o código do mágical sewer

//tela do jogo

//coisas pra config.
var frame = 0
var frameaux = 0
var upper = 0
var oppaciter = 0
var k = 0

//sprites dentro do game

function assemblyCharacter(personagemID){
	switch(personagemID){
		case Guaxo.ID: 
			personagemAtual = Guaxo;
			break;
		/*
		case Dante.ID:
			personagemAtual = Dante;
			break;
		
		case Raty.ID:
			personagemAtual = Raty;
			break;
		*/
	}
}

var graviter = 0;
var fazendoSav = "still";

function gravidadePrincipal(){
	if(k > 0){
		k--;
		if(k%2 == 1){
			personagemAtual.pontoCentral[1] += vaisefude;
		}
		personagemAtual.ser.WorldPos.y -= personagemAtual.ser.JMAX;
	}
	else{
		personagemAtual.ser.fazendo = 'still';
	}
}



const cursor = {
	x: undefined,
	y: undefined,
	altura: 40,
	largura: 50,
	opcao: 1,
	graphic: new Image(),
	desenhar: function(x_3, y_3){
		this.x = x_3;
		this.y = y_3;
		HUD_ctx.drawImage(this.graphic, this.x, this.y, this.altura, this.largura);
	},
	max: 4
}
cursor.graphic.src = "Imagens/UI/Guaxo cursor.png"

var guaxo_sta_process = 0


/*
var pause_options = {
	falar: [posicaoX+largura/2, posicaoY - 10, 6, 6],
	item: [posicaoX-10, posicaoY+alturaAtual/2, 6, 6],
	checar: [posicaoX+largura+10, posicaoY+alturaAtual/2, 6, 6],
	info: [posicaoX+largura/2, posicaoY+alturaAtual+10, 6, 6 ],
	generalW: 12,
	generalH: 12,
	grafico: new Image()
}
pause_options.grafico.src = "imagens/HUD/pur_ball.png"
*/
//saving issues
var GameMoment = 1 //são o codigo salas do game, cada um tem um.
var GameMoment_Sav = 0

//acoes qnd o negocio e apertado
var demandarTransicao = false
var CentroDaTela = [canvas.width/2, canvas.height/2]

//limpar a tela
function limpar(ctx){
	ctx.clearRect(0, 0, 1000, 1000)
}

//para a tela título
function TelaTitulo(){
	ctx_BG.drawImage(title_screen, 0, 0, 520, 520)
	if(upper >= 20){
		ctx.drawImage(logotipo, 60, 100, 420, 102)
		
		//colocar a animação do menu indo
		ctx.globalAlpha = frame/10
		ctx.drawImage(comando[0], canvas.width/2 - 105, 416, 210, 34)
		ctx.globalAlpha = 1
	}
	else {
		ctx.globalAlpha = frame/10;
		ctx.drawImage(logotipo, 60, canvas.height+upper**2*-1, 420, 102);
		ctx.globalAlpha = 1;
		upper++;
	}
}



//tela de selecao de personagem
const icons = {
	guaxo: [new Image(), new Image()],
	raty: [new Image(), new Image()],
	dante: [new Image(), new Image()]
}
icons.guaxo[0].src = "imagens/Personagens/GuaxoIcone01.png";
icons.guaxo[1].src = "imagens/Personagens/GuaxoIcone02.png";


/*---- M A I N ----*/
const fps = 33
function GameBonanza(){
	
	if(fps == 0){
		document.write("are you trying to mock up the code?")
	}
	else{
		window.setInterval(GamePlay, fps)//coloca 33.3 depois
	}
	
}

function falseUpTheSituations(){
	personagemAtual.ser.pulando = false;
}

var interac1 = 0;
var interac2 = 0;

// modular o frame
function GamePlay(){
	
	limpar(ctx)
	limpar(controls_ctx)
	limpar(HUD_ctx)
	limpar(ctx_BG)
	limpar(ctx_Tr)
	switch (GameMoment){
		case 1: TelaTitulo()
				esconder_HUD()
				EventoDeToq()
				desenharBotoes(Controule.Botoeses)
				//adicionar musica
				action("menu", "start");
				//escreva("BGVCV", 25, canvas.height - 40, 9)
				if(demandarTransicao == true){
					transicaoDeTela("indo");
					if(alfa >= 1){
						alfa = 1;
						GameMomentSav = 2;
						GameMoment = 2;
					}
				}
			break
			
		case 9999:
			//menu de pausa
			//drawCenery(mapaAtual.nome)
			personagemAtual.desenhar(0, 0);
			HUD_ctx.drawImage(caixa_de_texto.graph, caixa_de_texto.posicao[0],
caixa_de_texto.posicao[1], caixa_de_texto.posicao[2], caixa_de_texto.posicao[3]);
			HUD_ctx.globalAlpha = 0.5;
			HUD_ctx.fillRect(0, 0, 520, 520);
			HUD_ctx.globalAlpha = 1;
			
			Pause();
			EventoDeToq();
			cursor.desenhar(caixa_de_texto.posicao[0] + interac1, caixa_de_texto.posicao[1] - 10 + interac2);
			desenharBotoes(Controule.Botoeses);
			action("UI", "pause");
			controlState_save();
			if(gameFeature.pause == false){
				GameMoment = GameMomentSav;
			}
			break;
			
			
		case 2:
			mover = true;
			//o jogo principal
			if(gameFeature.pause == true){
				GameMomentSav = GameMoment;
				GameMoment = 9999;
			}
			assemblyCharacter(Guaxo.ID);
			if(scenery.hasDeclaired == false){
				scenery.declair("ftest");
			}
			/*
			if(personagemAtual.ser.onSpawn == false && scenery.hasDeclaired == true){
				console.log(mapaAtual);
				personagemAtual.ser.spawn();
			}
			*/
			scenery.desenhar();
			EventoDeToq();
			desenharBotoes(Controule.Botoeses);
			if(demandarTransicao == true){
				transicaoDeTela("vindo");
				if(alfa <= 0){
					demandarTransicao = false;
				}
			}
			action("sala", "personagem");
			controlState_save();
			personagemAtual.ser.declairCoords();
			Camera.moverPara(personagemAtual.ser.WorldPos.x, personagemAtual.ser.WorldPos.z);
			if(personagemAtual.ser.WorldPos.y > mapaAtual.relevoGrid[personagemAtual.ser.inGrid.y*mapaAtual.largura + personagemAtual.ser.inGrid.x]){
				if(personagemAtual.pontoCentral <= (canvas.width/3)*2){
					personagemAtual.pontoCentral[1] += 10;
				}
				else{
					
				}
			}
			if(personagemAtual.ser.WorldPos.y == mapaAtual.relevoGrid[personagemAtual.ser.inGrid.z*mapaAtual.largura + personagemAtual.ser.inGrid.x]){
				personagemAtual.ser.pulando = false;
			}
			renderHUD();
			
			escreva("x " + personagemAtual.ser.currentCol[0] + "", 45, 165);
			escreva("z " + personagemAtual.ser.currentCol[1] + "", 45, 185);
			escreva("mov " + mover + "", 45, 205);
			escreva("x " + personagemAtual.ser.WorldPos.x + "", 45, 225);
			escreva("z " + personagemAtual.ser.WorldPos.z + "", 45, 245);
			escreva("direcao "+ personagemAtual.ser.direcao + "", 45, 265);
			fale("v: "+ personagemAtual.ser.velocity + "", 45, 305);
			
			break;
			
		case 3:
			charSelectionScreen();
			
			EventoDeToq()
			desenharBotoes(Controule.Botoeses)
			if(demandarTransicao == true){
				if(alfa <= 0){
					demandarTransicao = false;
				}
				else{
					transicaoDeTela("vindo");
				}
			}
			break;
			action("charSLCT", "SLCT");
		default:
			GameMoment = 1
			break
	}
	if(frame >= 30){
		frame = 0
		if(frameaux >= 100){
			frameaux = 0
		}
		else {
			frameaux++;
		}
	}
	else{
		frame++;
	}
}