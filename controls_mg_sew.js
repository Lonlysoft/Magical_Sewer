var controls_canvas = document.getElementById("controles_cheroso")
var controls_ctx = controls_canvas.getContext("2d")
controls_canvas.width = Math.floor(document.documentElement.clientWidth);
controls_canvas.height = Math.floor(document.documentElement.clientHeight);

var boundingRect = undefined
var aspectRatio = undefined

function resize(){
	controls_canvas.width = Math.floor(document.documentElement.clientWidth);
	controls_canvas.height = Math.floor(document.documentElement.clientHeight);
	// these next two lines are used for adjusting and scaling user touch input coordinates:
	boundingRect = controls_canvas.getBoundingClientRect();
	aspectRatio = controls_canvas.width / controls_canvas.height;
	resize_ctrl(Controule.Botoeses);
}

function resize_ctrl(ControuleBotoeses){
	for(let i = 0; i < ControuleBotoeses.length; i++){
		ControuleBotoeses[i].x = controls_canvas.width/18*ControuleBotoeses[i].OverPos.x;
		ControuleBotoeses[i].y = controls_canvas.height/10*ControuleBotoeses[i].OverPos.y;
	}	
}


function desenharBotoes(buttons){
	var button, index;
	for (index = buttons.length - 1; index > -1; -- index) {
		button = buttons[index]
		if(buttons[index].tipo === "visivel"){
			if(buttons[index].ativo === true){
				controls_ctx.fillStyle = "#FFFFFF"
			}
			else{
				controls_ctx.fillStyle = button.cor;
			}
			controls_ctx.fillRect(button.x, button.y, button.largura, button.altura);
			//controls_ctx.drawImage(buttonImage, buttonCoords.x, buttonCoords.y, buttonCoords.w, buttonCoords.h, button.x, button.y, button.largura, button.altura);
		}
	}
}

class Butao{
	constructor(x, y, largura, altura, cor, tipo, proporcaoPosX = 0, proporcaoPosY = 0){ // ultimos 2 argumentos são necessários por motivos apenas de responsividade
		this.ativo = false;
		this.cor = cor;
		this.altura = altura;
		this.largura = largura;
		this.x = x;
		this.y = y;
		this.tipo = tipo;
		this.OverPos = {
			x: proporcaoPosX, y: proporcaoPosY
		};
	}
	contemPonto(x,y){
		if(x < this.x || x > this.x + this.largura || y < this.y || y > this.y + this.altura){
			return false;
		}
		return true;
	}
}

var Controule = {
	Botoeses: [new Butao(controls_canvas.width/18*0.5,  controls_canvas.height/10*6.5, 80, 80,"#888888","visivel", 0.5, 6.5),//⬅ 0
				new Butao(controls_canvas.width/18*2,  controls_canvas.height/10*5, 80, 80, "#888888", "visivel", 2, 5),//⬆ 1
				new Butao(controls_canvas.width/18*3.5,  controls_canvas.height/10*6.5, 80, 80, "#888888", "visivel", 3.5, 6.5),//➡ 2
				new Butao(controls_canvas.width/18*2,  controls_canvas.height/10*8, 80, 80, "#888888", "visivel", 2, 8),//⬇ 3
				new Butao(controls_canvas.width/18*0.5,  controls_canvas.height/10*8, 80, 80, "#006000", "invisivel", 0.5, 8),//↙ 4
				new Butao(controls_canvas.width/18*3.5,  controls_canvas.height/10*8, 80, 80, "#009000", "invisivel", 3.5, 8),//↘ 5
				new Butao(controls_canvas.width/18*3.5,  controls_canvas.height/10*5, 80, 80, "#005000", "invisivel", 3.5, 5),//↗ 6
				new Butao(controls_canvas.width/18*0.5,  controls_canvas.height/10*5, 80, 80, "#000800", "invisivel", 0.5, 5),//↖ 7
				
				//botao
				new Butao(controls_canvas.width/18*14.5,  controls_canvas.height/10*8, 80, 80, "#792F00" , "visivel", 14.5, 8),//B 8
				new Butao(controls_canvas.width/18*13,  controls_canvas.height/10*6.5, 80, 80, "#00739F","visivel", 13, 6.5),//Y 9
				new Butao(controls_canvas.width/18*16,  controls_canvas.height/10*6.5 ,80 ,80, "#008849","visivel", 16, 6.5),//A 10
				//triggers
				new Butao(controls_canvas.width/18*0.5, controls_canvas.height/10*0.5, 120, 60, "#888888", "visivel", 0.5, 0.5),//select
				new Butao(controls_canvas.width/18*15, controls_canvas.height/10*0.5, 120, 60, "#8888AB", "visivel", 15, 0.5),//z
				new Butao(controls_canvas.width/18*8, controls_canvas.height/10*0.5, 120, 60, "#888888", "visivel", 8, 0.5),//start
				new Butao(controls_canvas.width/18*14.5, controls_canvas.height/10*5, 80, 80,"#79002f" , "visivel", 14.5, 5)//x
	],
	graph: document.querySelector("#controlGraphics"),
	testarButoes: function(target_touches){
		var bucto, indice0, indice1, toq;
		
		for(indice0 = this.Botoeses.length-1; indice0 > -1; indice0--){
			bucto = this.Botoeses[indice0]
			bucto.ativo = false
			
			for(indice1 = target_touches.length-1;indice1 > -1;indice1--){
				toq = target_touches[indice1];
				if(bucto.contemPonto((toq.clientX - boundingRect.left), (toq.clientY - boundingRect.top))){
					bucto.ativo = true;
					break;
				}
			}
		}
	},
	
	touchend:function(event) {
		event.preventDefault();
		Controule.testarButoes(event.targetTouches);
    },

	touchmove:function(event) {
		event.preventDefault();
		Controule.testarButoes(event.targetTouches);
    },

    touchstart:function(event) {
		event.preventDefault();
		Controule.testarButoes(event.targetTouches);
	}
}

function EventoDeToq(){
	 controls_canvas.addEventListener("touchstart", Controule.touchstart, {passive:false});
	 controls_canvas.addEventListener("touchmove", Controule.touchmove, {passive:false});
	 controls_canvas.addEventListener("touchend", Controule.touchend, {passive:false});
}

var controlState = {
	A: false,
	B: false,
	Y: false,
	start: false,
	select: false,
	zed: false,
	up: false,
	down: false,
	east: false,
	west: false
};

function controlState_save(){
	controlState.up = Controule.Botoeses[1].ativo;
	controlState.down = Controule.Botoeses[3].ativo;
	controlState.east = Controule.Botoeses[0].ativo;
	controlState.west = Controule.Botoeses[2].ativo;
	controlState.A = Controule.Botoeses[10].ativo;
	controlState.B = Controule.Botoeses[8].ativo;
	controlState.Y = Controule.Botoeses[9].ativo;
	controlState.start = Controule.Botoeses[13].ativo;
	controlState.select = Controule.Botoeses[11].ativo;
	controlState.zed = Controule.Botoeses[12].ativo;
}

var gameFeature = {
	pause: false,
	camada: 0
};

function checkPontoCentral(){
	if(personagemAtual.pontoCentral[0] == canvas.width/2 || personagemAtual.pontoCentral[1] == canvas.height/2){
		return true;
	}
	else{
		return false;
	}
}

function action(type){
	let contanter = 0
	switch(type){
		case "start":
			if(Controule.Botoeses[13].ativo && controlState.start == false){
				demandarTransicao = true;
			}
		break;
		case "pause":
			if(Controule.Botoeses[13].ativo && controlState.start == false){
				gameFeature.pause = false;
			}
			if(Controule.Botoeses[0].ativo && controlState.east == false){ //↖⬆↗
				UI.pauseItem[PauseMenu.opcaoSelecionada].classList.remove("selecionado");
				PauseMenu.opcaoSelecionada--;
				if(PauseMenu.opcaoSelecionada < 0) PauseMenu.opcaoSelecionada = 3;
				UI.pauseItem[PauseMenu.opcaoSelecionada].classList.add("selecionado");
			}
			else if(Controule.Botoeses[2].ativo && controlState.west == false){ //↙⬇↘
				UI.pauseItem[PauseMenu.opcaoSelecionada].classList.remove("selecionado");
				PauseMenu.opcaoSelecionada++;
				if(PauseMenu.opcaoSelecionada > 3) PauseMenu.opcaoSelecionada = 0;
				UI.pauseItem[PauseMenu.opcaoSelecionada].classList.add("selecionado");
				
			}
			else if(Controule.Botoeses[8].ativo && controlState.B == false){//B
				gameFeature.camada--;
				PauseMenu.regredirNaLayer();
			}
			else if(Controule.Botoeses[10].ativo && controlState.A == false){//A
				gameFeature.camada++;
				PauseMenu.avancarNaLayer();
			}
		break;
		
		case "personagem":
			if(Controule.Botoeses[0].ativo){//⬅
				personagemAtual.pol = -1;
				personagemAtual.andar("x");
				personagemAtual.direcao = 4;
				
				
			}
			else if(Controule.Botoeses[1].ativo){//⬆
				personagemAtual.direcao = 3;
				personagemAtual.pol = -1;
				personagemAtual.andar("z");
				
			}
			else if(Controule.Botoeses[2].ativo){ //➡
				personagemAtual.direcao = 2
				personagemAtual.pol = 1;
				personagemAtual.andar("x");
				
			}
			else if(Controule.Botoeses[3].ativo){//⬇
				personagemAtual.direcao = 1
				personagemAtual.pol = 1;
				personagemAtual.andar("z");
				
			}
			else if(Controule.Botoeses[4].ativo){ //↙
				personagemAtual.direcao = 8;
				personagemAtual.pol = -0.7;
				personagemAtual.andar("x");
				personagemAtual.pol = 0.7;
				personagemAtual.andar("z");
				
			}
			else if(Controule.Botoeses[5].ativo){ //↘
				personagemAtual.direcao = 5
				personagemAtual.pol = 0.7;
				personagemAtual.andar("x");
				personagemAtual.pol = 0.7;
				personagemAtual.andar("z");
				
			}
			else if(Controule.Botoeses[6].ativo){ //↗
				personagemAtual.direcao = 6
				personagemAtual.pol = 0.7;
				personagemAtual.andar("x");
				personagemAtual.pol = -0.7;
				personagemAtual.andar("z");
				
			}
			else if(Controule.Botoeses[7].ativo){ //↖
				personagemAtual.direcao = 7
				personagemAtual.pol = -0.7;
				personagemAtual.andar("x");
				personagemAtual.pol = -0.7;
				personagemAtual.andar("z");
				
			}
			else{
				personagemAtual.parar("x");
				personagemAtual.parar("z");
			}
			
			if(Controule.Botoeses[8].ativo && personagemAtual.onGround == true && controlState.B == false){//pulo
				personagemAtual.velocity.y += personagemAtual.JPOW;
			}
			else if(!Controule.Botoeses[8].ativo && !personagemAtual.onGround && !personagemAtual.pulando && controlState.B){//pulo
				personagemAtual.velocity.y = 0;
				personagemAtual.pulando = true;
			}
			if(Controule.Botoeses[9].ativo){ //Y ataque base
				if(!personagemAtual.onGround && personagemAtual.habilidades.includes("dashDive")){
					personagemAtual.executarHabilidade("dashDive");
					personagemAtual.atacar();
				}
				else{
					personagemAtual.atacar();
				}
			}
			if(Controule.Botoeses[10].ativo && controlState.A == false && col.interagir(personagemAtual)){ //A interação
				/*
				if(interagivel === true){
					//procurar personagem que fala ()
					//abrir diálogo ()
					//colocar o texto lá ()
				}
				else{
					
				}
				*/
			}
			if(Controule.Botoeses[13].ativo && controlState.start == false){//start
				gameFeature.pause = true
				gameFeature.camada = 1
			}
			
		break;
	}
}