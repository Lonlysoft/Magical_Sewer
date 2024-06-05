//esse é o código do mágical sewer

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
cursor.graphic.src = "Imagens/Guaxo cursor.png"

var guaxo_sta_process = 0

//acoes qnd o negocio e apertado
var demandarTransicao = true
var CentroDaTela = [canvas.width/2, canvas.height/2]

//limpar a tela
function limpar(ctx){
	ctx.clearRect(0, 0, 1000, 1000)
}

//para a tela título

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
var timeout = 0;
var scrnAppear = false


//saving issues
var GameMoment = 2 //são o codigo salas do game, cada um tem um.
var GameMoment_Sav = 0
// modular o frame
function GamePlay(){
	limpar(ctx);
	limpar(controls_ctx);
	limpar(HUD_ctx);
	limpar(ctx_BG);
	limpar(ctx_Tr);
	switch (GameMoment){
		case -3:
			if(demandarTransicao == true && scrnAppear == false){
				transicaoDeTela("vindo", 0.1);
				if(alfa <= 0){
					demandarTransicao = false;
					scrnAppear = true
				}
			}
			
			LOGOTYPE("Vynny");
			
			timeout++;
			
			if(timeout > 50){
				demandarTransicao = true;
			}
			if(demandarTransicao == true && scrnAppear){
				transicaoDeTela("indo", 0.1);
				timeout = 0;
				if(alfa >= 1){
					alfa = 1;
					GameMomentSav = 0;
					GameMoment++;
					scrnAppear = false
				}
			}
			break;
		case -2:
			if(demandarTransicao == true && scrnAppear == false){
				transicaoDeTela("vindo", 0.1);
				if(alfa <= 0){
					demandarTransicao = false;
					scrnAppear = true
				}
			}
			
			LOGOTYPE("LONLYSOFT");
			
			timeout++;
			
			if(timeout > 50){
				demandarTransicao = true;
			}
			if(demandarTransicao == true && scrnAppear){
				transicaoDeTela("indo", 0.1);
				timeout = 0;
				if(alfa >= 1){
					alfa = 1;
					GameMomentSav = 0;
					GameMoment++;
					scrnAppear = false
				}
			}
			break;
			
		case 1: if(demandarTransicao == true && scrnAppear == false){
					transicaoDeTela("vindo", 0.1);
					if(alfa <= 0){
						demandarTransicao = false;
						scrnAppear = true
					}
				}
				TelaTitulo()
				esconder_HUD()
				EventoDeToq()
				desenharBotoes(Controule.Botoeses)
				//adicionar musica
				action("start");
				escreva("Lonlysoft 2024", 25, canvas.height - 40);
				if(demandarTransicao == true && scrnAppear){
					transicaoDeTela("indo");
					if(alfa >= 1){
						alfa = 1;
						GameMomentSav = 2;
						GameMoment = 2;
						scrnAppear = false
					}
				}
			break;
			
		case 9998:
			//tela de GameOver
			GameOverScreen();
			action("end");
			break;
			
		case 9999:
			cursor.max = PauseMenu.numDeOpcoes;
			//menu de pausa
			//drawCenery(mapaAtual.nome)
			scenery.desenhar()
			
			HUD_ctx.fillStyle = "#000"
			HUD_ctx.globalAlpha = 0.5;
			HUD_ctx.fillRect(0, 0, 520, 520);
			HUD_ctx.globalAlpha = 1;
			
			PauseMenu.draw(canvas.width/2, canvas.height/2);
			EventoDeToq();
			desenharBotoes(Controule.Botoeses);
			action("pause");
			controlState_save();
			if(gameFeature.pause == false){
				GameMoment = GameMomentSav;
			}
			break;
			
		case 2:
			//o jogo principal
			if(gameFeature.pause == true){
				GameMomentSav = GameMoment;
				GameMoment = 9999;
			}
			if(scenery.hasDeclaired == false){
				scenery.declair("ftest");
				assemblyCharacter(Guaxo.ID);
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
				transicaoDeTela("vindo", 0.1);
				if(alfa <= 0){
					demandarTransicao = false;
				}
			}
			action("personagem");
			colisionar(personagemAtual);
			handleYcoords(personagemAtual);
			controlState_save();
			Camera.moverPara(personagemAtual.ser.WorldPos.x, personagemAtual.ser.WorldPos.z, personagemAtual.ser.WorldPos.y);
			escreva("i "+ personagemAtual.ser.pontoCentral[1] + "", 45, 205);
			escreva("vy "+ personagemAtual.ser.velocity.y + "", 45, 225);
			//renderHUD();
			escreva("fznd "+ personagemAtual.ser.fazendo + "", 45, 265);
			escreva("Y: "+personagemAtual.ser.WorldPos.y, 45, 185);
			fale(""+personagemAtual.ser.Nome + "		hp:" + personagemAtual.ser.hp + "		x: " + personagemAtual.ser.WorldPos.x+" vx: " + personagemAtual.ser.velocity.x, 30, 30);
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
					transicaoDeTela("vindo", 0.1);
				}
			}
			break;
			action("SLCT", "vert", 3);
		default:
			GameMoment = 1
			break
	}
	if(frame >= 30){
		frame = 0
		if(frameaux >= 180){
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