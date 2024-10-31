var controls_canvas = document.getElementById("ctrl")
var controls_ctx = controls_canvas.getContext("2d")
var client_width = Math.floor(document.documentElement.clientWidth);
var client_height = Math.floor(document.documentElement.clientHeight);

controls_canvas.width = 800
controls_canvas.height = 400

var boundingRect = undefined
var aspectRatio = 1;

function resize(){
	client_width = Math.floor(document.documentElement.clientWidth);
	client_height = Math.floor(document.documentElement.clientHeight);
	boundingRect = controls_canvas.getBoundingClientRect();
	aspectRatio = controls_canvas.width/client_width;
	aspectRatioHeight = controls_canvas.height/client_height;
}

function desenharBotoes(buttons, graphic){
	var button, index;
	let onOrOff = 0;
	for (index = buttons.length - 1; index > -1; --index) {
		button = buttons[index]
		if(buttons[index].tipo === "visivel"){
			if(buttons[index].ativo === true){
				onOrOff = 1;
			}
			else{
				onOrOff = 0;
			}
			controls_ctx.drawImage(graphic, button.ID*button.largura, onOrOff*button.altura, 80, 80, button.x, button.y, button.largura, button.altura);
		}
	}
}

class Butao{
	constructor(x, y, largura, altura, tipo, ID = 14){
		this.ativo = false;
		this.altura = altura;
		this.largura = largura;
		this.x = x;
		this.y = y;
		this.ID = ID;
		this.tipo = tipo;
		
	}
	contemPonto(x,y){
		if(x < this.x || x > this.x + this.largura || y < this.y || y > this.y + this.altura){
			return false;
		}
		return true;
	}
}

var Controule = {
	Botoeses: [new Butao(10,  controls_canvas.height - 160, 80, 80, "visivel", 3),//⬅ 0
				new Butao(90,  controls_canvas.height- 240, 80, 80, "visivel", 0),//⬆ 1
				new Butao(170,  controls_canvas.height - 160, 80, 80, "visivel", 1),//➡ 2
				new Butao(90,  controls_canvas.height - 80, 80, 80, "visivel", 2),//⬇ 3
				new Butao(10,  controls_canvas.height - 80, 80, 80, "invisivel"),//↙ 4
				new Butao(170,  controls_canvas.height - 80, 80, 80, "invisivel"),//↘ 5
				new Butao(170,  controls_canvas.height - 240, 80, 80, "invisivel"),//↗ 6
				new Butao(10,  controls_canvas.height - 240, 80, 80, "invisivel"),//↖ 7
				
				//botao
				new Butao(controls_canvas.width - 170,  controls_canvas.height-80, 80, 80 , "visivel",6),//B 8
				new Butao(controls_canvas.width - 250,  controls_canvas.height-160, 80, 80,"visivel", 4),//Y 9
				new Butao(controls_canvas.width - 90,  controls_canvas.height-160 ,80, 80, "visivel", 5),//A 10
				//triggers
				new Butao(controls_canvas.width/2 - 90, 25, 80, 80, "visivel", 11),//select 11
				new Butao(controls_canvas.width - 90, controls_canvas.height/10*0.5, 80, 80, "visivel", 9),//z 12
				new Butao(controls_canvas.width/2 + 10, controls_canvas.height/10*0.5, 80, 80, "visivel", 10),//start 13
				new Butao(controls_canvas.width - 170, controls_canvas.height- 240, 80, 80, "visivel", 7),//x 14
				new Butao(16, controls_canvas.height/10*0.5, 80, 80, "visivel", 8)//L 15
	],
	graph: document.querySelector(".controles"),
	testarButoes: function(target_touches){
		var bucto, indice0, indice1, toq;
		
		for(indice0 = this.Botoeses.length-1; indice0 > -1; indice0--){
			bucto = this.Botoeses[indice0]
			bucto.ativo = false
			
			for(indice1 = target_touches.length-1;indice1 > -1;indice1--){
				toq = target_touches[indice1];
				if(bucto.contemPonto((toq.clientX - boundingRect.left)*aspectRatio, (toq.clientY - boundingRect.top)*aspectRatioHeight)){
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
	controlState.L = Controule.Botoeses[15].ativo;
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
				PauseMenu.opcaoSelecionada = PauseMenu.opcaoSelecionada%4;
				UI.pauseItem[PauseMenu.opcaoSelecionada].classList.add("selecionado");
			}
			else if(Controule.Botoeses[2].ativo && controlState.west == false){ //↙⬇↘
				UI.pauseItem[PauseMenu.opcaoSelecionada].classList.remove("selecionado");
				PauseMenu.opcaoSelecionada++;
				PauseMenu.opcaoSelecionada = PauseMenu.opcaoSelecionada%4;
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
			
			if(Controule.Botoeses[8].ativo && personagemAtual.onGround == true && controlState.B == false && !personagemAtual.nadando){//pulo
				personagemAtual.velocity.y += personagemAtual.JPOW;
			}
			else if(!Controule.Botoeses[8].ativo && !personagemAtual.onGround && !personagemAtual.pulando && controlState.B){//pulo
				personagemAtual.velocity.y = 0;
				personagemAtual.pulando = true;
			}
			else if(Controule.Botoeses[8].ativo && controlState.B == false && personagemAtual.nadando){
				personagemAtual.velocity.y += personagemAtual.JPOW;
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
			if(Controule.Botoeses[14].ativo && controlState.X == false){
				
			}
			if(Controule.Botoeses[15].ativo && controlState.L == false){
				if(!personagemAtual.onGround && personagemAtual.habilidades.includes("dashDive")){
					personagemAtual.executarHabilidade("dashDive");
					personagemAtual.atacar();
				}
			}
			if(Controule.Botoeses[11].ativo && controlState.select == false){
				personagemAtual.mao = (mao+1)%personagemAtual.calda.length;
			}
			if(Controule.Botoeses[13].ativo && controlState.start == false){//start
				gameFeature.pause = true
				gameFeature.camada = 1
			}
			
		break;
	}
}