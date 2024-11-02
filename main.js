//esse é o código do mágical sewer

//variaveis globais para animações e outras coisas
var frame = 0
var frameaux = 0
var upper = 0
var oppaciter = 0
var k = 0
var graviter = 0;
var guaxo_sta_process = 0
var inimigosForamCarregados = false;
var demandarTransicao = true

const CentroDaTela = [canvas.width/2, canvas.height/2];

//limpar a tela
function limpar(contexto){
	contexto.clearRect(0, 0, 1000, 1000)
}
function zerar(contexto){
	contexto.fillStyle = "#000"
	contexto.fillRect(-1000, -1000, 2000, 2000);
}

/*---- M A I N ----*/
const fps = 30
const frequencia = 1000/fps
function GameBonanza(){
	
	if(fps == 19){
		errorMessagingEasterEgg();
	}
	else{
		//eu entendi. você pode deixar eventos e coisas assim fora do definir intervalo (loop do jogo). assim o código fica um pouco mais limpo... e com uma performance melhorada. tendo em vista que ele não irá adicionar um escutador de eventos todo quadro novo 
		//adicione aq o event listener para keyBoard controls (é um if...else tá?)
		//na verdade é mais simples de fazer de outra forma.
		//EventoDeTeclado
		EventoDeToq();
		window.addEventListener("resize", resize);
		resize();
		window.setInterval(GamePlay, frequencia)
	}
	
}

var interac1 = 0;
var interac2 = 0;
var scrnAppear = false;
var personagemSelecionado = 0;

//saving issues
var GameMoment = 2;//são o codigo salas do game, cada um tem um.
var GameMoment_Sav = 1;
// modular o frame
function GamePlay(){
	limpar(ctx);
	limpar(controls_ctx);
	limpar(HUD_ctx);
	zerar(ctx_BG);
	limpar(ctx_Tr);
	if(GameMoment != 4 && controls_canvas.width < controls_canvas.height){
		GameMomentSav = GameMoment;
		GameMoment = 4;
	}
	switch (GameMoment){
		case -3:
			if(demandarTransicao == true && scrnAppear){
				transicaoDeTela("indo", 0.05);
				timeout = 0;
				if(alfa >= 1){
					alfa = 1;
					GameMomentSav = 0;
					GameMoment++;
					//window.clearTimeout(timoutHandler);
					scrnAppear = false
				}
			}
			if(demandarTransicao == true && scrnAppear == false){
				transicaoDeTela("vindo", 0.1);
				if(alfa <= 0){
					demandarTransicao = false;
					scrnAppear = true;
					window.setTimeout(()=>{demandarTransicao = true}, 2000);
				}
			}
			
			LOGOTYPE("Vynny");
			//esprerar 5 segundos para s próxima transição
			
			break;
		case -2:
			if(demandarTransicao == true && scrnAppear){
				transicaoDeTela("indo", 0.1);
				if(alfa >= 1){
					alfa = 1;
					GameMomentSav = 0;
					GameMoment++;
					scrnAppear = false
				}
			}
			if(demandarTransicao == true && scrnAppear == false){
				transicaoDeTela("vindo", 0.1);
				if(alfa <= 0){
					demandarTransicao = false;
					scrnAppear = true;
					window.setTimeout(()=>{demandarTransicao = true}, 2000);
				}
			}
			
			LOGOTYPE("LONLYSOFT");
			
			//window.setTimeout(()=>{demandarTransicao = true}, 2000);
			
			break;
			
		case 1: if(demandarTransicao == true && scrnAppear == false){
					transicaoDeTela("vindo", 0.08);
					if(alfa <= 0){
						demandarTransicao = false;
						scrnAppear = true;
					}
				}
				//tocarMusica(1);
				UI.TelaTitulo()
				desenharBotoes(Controule.Botoeses, Controule.graph);
				//adicionar musica
				action("start");
				if(demandarTransicao == true && scrnAppear){
					transicaoDeTela("indo", 0.1);
					if(alfa >= 1){
						alfa = 1;
						GameMomentSav = 2;
						GameMoment = 2;
						scrnAppear = false;
						UI.dismissTelaTitulo();
					}
				}
			break;
			
		case 9998:
			//tela de GameOver
			GameOverScreen();
			action("end");
			break;
			
		case 9999:
			//menu de pausa
			scenery.desenhar()
			
			HUD_ctx.fillStyle = "#000"
			HUD_ctx.globalAlpha = 0.5;
			HUD_ctx.fillRect(0, 0, 520, 520);
			HUD_ctx.globalAlpha = 1;
			
			//PauseMenu.draw(canvas.width/2, canvas.height/2);
			desenharBotoes(Controule.Botoeses, Controule.graph);
			action("pause");
			controlState_save();
			if(gameFeature.pause == false){
				GameMoment = GameMomentSav;
			}
			UI.pausing();
			UI.endQuickStarting();
			break;
			
		case 2:
			//o jogo principal
			if(frame >= 30) Relogio.passarTempo();
			if(gameFeature.pause){
				GameMomentSav = GameMoment;
				GameMoment = 9999;
			}
			if(!scenery.hasDeclaired){
				scenery.declair("ftest");
				personagemAtual = personagens[personagemSelecionado];
			}
			if(!inimigosForamCarregados){
				carregarInimigos();
				inimigosForamCarregados = true;
			}
			if(!personagemAtual.isSpawn && scenery.hasDeclaired){
				UI.nomeDoPersonagem.innerHTML = personagemAtual.Nome;
				personagemAtual.isSpawn = personagemAtual.spawn();
			}
			if(demandarTransicao){
				transicaoDeTela("vindo", 0.1);
				if(alfa <= 0){
					demandarTransicao = false;
				}
			}
			
			checarEntidades(arrayDeInimigos);
			adicionarImigos();
			
			scenery.desenhar();
			for(let i = 0; i < arrayDeInimigos.length; i++){
				arrayDeInimigos[i].update();
				colisionar(arrayDeInimigos[i], i);
				handleYcoords(arrayDeInimigos[i]);
				col.handleShadowCoords(arrayDeInimigos[i]);
			}
			desenharBotoes(Controule.Botoeses, Controule.graph);
			action("personagem");
			
			personagemAtual.update();
			colisionar(personagemAtual);
			handleItems();
			col.handleShadowCoords(personagemAtual);
			handleYcoords(personagemAtual);
			handleOld();
			controlState_save();
			Camera.moverPara(personagemAtual.WorldPos.x, personagemAtual.WorldPos.z, personagemAtual.WorldPos.y);
			UI.endPausing();
			UI.quickStating();
		break;
			
		case 3:
			//tela de selecionar os personagens
			UI.startCharactering();
			desenharBotoes(Controule.Botoeses);
			if(demandarTransicao == true){
				if(alfa <= 0){
					demandarTransicao = false;
				}
				else{
					transicaoDeTela("vindo", 0.1);
				}
			}
			action("SLCT", "horiz", 3);
			break;
		case 4: //sleep mode 
			if(controls_canvas.width >= controls_canvas.height){
				GameMoment = GameMomentSav;
			}
		break;
		
		case 5: //select File 
			//aqui vão ter: novo jogo e carregar: por cookies, por browser data ou por upload de arquivo
		break;
		default:
			GameMoment = 1;
			break;
	}
	if(frame >= 30){
		frame = 0;
		
		if(frameaux >= 180){
			frameaux = 0;
		}
		else {
			frameaux++;
		}
	}
	else{
		frame++;
	}
}