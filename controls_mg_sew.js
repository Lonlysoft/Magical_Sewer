var controls_canvas = document.getElementById("controles_cheroso")
var controls_ctx = controls_canvas.getContext("2d")
controls_canvas.width = 962;
controls_canvas.height = 520;

var mover = true;

function assemblySTA(tipo){
	if(tipo === "walk"){
		switch(personagemAtual.STA){
			case 1: case 2: case 3:
				personagemAtual.ser.fazendo = 'andarR';
			break;
			
			case 6: case 7: case 8:
				personagemAtual.ser.fazendo = 'andarL';
			break;
			
			default:
				personagemAtual.ser.fazendo = "still";
			break;
		}
		if(personagemAtual.STA > 8){
			personagemAtual.STA = 0;
		}
		else{
			personagemAtual.STA++;
		}
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
		}
	}
}

class Butao{
	constructor(x, y, largura, altura, cor, tipo){
		this.ativo = false;
		this.cor = cor;
		this.altura = altura;
		this.largura = largura;
		this.x = x;
		this.y = y;
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
	Botoeses: [new Butao(10,  controls_canvas.height - 160, 80, 80,"#888888","visivel"),//⬅ 0
				new Butao(90,  controls_canvas.height- 240, 80, 80, "#888888", "visivel"),//⬆ 1
				new Butao(170,  controls_canvas.height - 160, 80, 80, "#888888", "visivel"),//➡ 2
				new Butao(90,  controls_canvas.height - 80, 80, 80, "#888888", "visivel"),//⬇ 3
				new Butao(10,  controls_canvas.height - 80, 80, 80, "#006000", "invisivel"),//↙ 4
				new Butao(170,  controls_canvas.height - 80, 80, 80, "#009000", "invisivel"),//↘ 5
				new Butao(170,  controls_canvas.height - 240, 80, 80, "#005000", "invisivel"),//↗ 6
				new Butao(10,  controls_canvas.height - 240, 80, 80, "#000800", "invisivel"),//↖ 7
				
				//botao
				new Butao(controls_canvas.width - 170,  controls_canvas.height-80, 80, 80,"#792F00" , "visivel"),//B 8
				new Butao(controls_canvas.width - 250,  controls_canvas.height-160, 80, 80, "#00739F","visivel"),//Y 9
				new Butao(controls_canvas.width - 90,  controls_canvas.height-160 ,80 ,80 , "#008849","visivel"),//A 10
				
				//triggers
				new Butao(10, 25, 120, 60, "#888888", "visivel"),//select
				new Butao(controls_canvas.width - 130, 25, 120, 60, "#8888AB", "visivel"),//z
				new Butao(controls_canvas.width/2 - 60, 25, 120, 60, "#888888", "visivel")//start
	],
	
	testarButoes: function(target_touches){
		var bucto, indice0, indice1, toq
		
		for(indice0 = this.Botoeses.length-1; indice0 > -1; indice0--){
			bucto = this.Botoeses[indice0]
			bucto.ativo = false
			
			for(indice1 = target_touches.length-1;indice1 > -1;indice1--){
				toq = target_touches[indice1]
				if(bucto.contemPonto(toq.clientX , toq.clientY)){
					bucto.ativo = true;
					break;
				}
				if(indice0 > 7){
					
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
			if(Controule.Botoeses[13].ativo){
				contanter++
				if(contanter == 1){
					demandarTransicao = true;
				}
			}
			else{
				contanter = 0;
			}
		break;
		case "pause":
			if(Controule.Botoeses[13].ativo && controlState.start == false){
				gameFeature.pause = false;
			}
			if(Controule.Botoeses[0].ativo && controlState.east == false){ //↖⬆↗
				cursor.opcao--;
				if(cursor.opcao < 1){
					cursor.opcao = cursor.max;
				}
			}
			else if(Controule.Botoeses[2].ativo && controlState.west == false){ //↙⬇↘
				cursor.opcao++
				if(cursor.opcao > cursor.max){
					cursor.opcao = 1;
				}
			}
			else if(Controule.Botoeses[8].ativo && controlState.B == false){//B
				gameFeature.camada--;
			}
			else if(Controule.Botoeses[10].ativo && controlState.A == false){//A
				gameFeature.camada++;
			}
		break;
		
		case "personagem":
			if(Controule.Botoeses[0].ativo){//⬅
				personagemAtual.ser.andar("x");
				
				personagemAtual.ser.direcao = 4;
				if( checkPontoCentral() == true){
					personagemAtual.ser.WorldPos.x-=personagemAtual.ser.velocity.x;
				}
				else{
					personagemAtual.ser.WorldPos.x-=personagemAtual.ser.velocity.x;
					personagemAtual.pontoCentral[0]-=personagemAtual.ser.velocity.x;
				}
				if(fazendoSav != "pulando" || fazendoSav != "nadando"){
					assemblySTA("walk");
				}
			}
			else if(Controule.Botoeses[1].ativo){//⬆
				personagemAtual.ser.direcao = 3
				personagemAtual.ser.andar("z");
				
				if(checkPontoCentral() == true){
					personagemAtual.ser.WorldPos.z-=personagemAtual.ser.velocity.z;
				}
				else{
					personagemAtual.ser.WorldPos.z-=personagemAtual.ser.velocity.z;
					personagemAtual.pontoCentral[1]-=personagemAtual.ser.velocity.z;
				}
				if(fazendoSav != "pulando" || fazendoSav != "nadando"){
					assemblySTA("walk");
				}
				
			}
			else if(Controule.Botoeses[2].ativo){ //➡
				personagemAtual.ser.direcao = 2
				
				personagemAtual.ser.andar("x");
				if(checkPontoCentral() == true){
					personagemAtual.ser.WorldPos.x+=personagemAtual.ser.velocity.x;
				}
				else{
					personagemAtual.ser.WorldPos.x+=personagemAtual.ser.velocity.x;
					personagemAtual.pontoCentral[0]+=personagemAtual.ser.velocity.x;
				}
				if(fazendoSav != "pulando" || fazendoSav != "nadando"){
					assemblySTA("walk");
				}
			}
			else if(Controule.Botoeses[3].ativo){//⬇
				personagemAtual.ser.direcao = 1
				
				personagemAtual.ser.andar("z");
				if( checkPontoCentral() == true){
					personagemAtual.ser.WorldPos.z+=personagemAtual.ser.velocity.z;
				}
				else{
					personagemAtual.ser.WorldPos.z+=personagemAtual.ser.velocity.z;
					personagemAtual.pontoCentral[1]+=personagemAtual.ser.velocity.x;
				}
				if(fazendoSav != "pulando" || fazendoSav != "nadando"){
					assemblySTA("walk");
				}
			}
			else if(Controule.Botoeses[4].ativo){ //↙
				personagemAtual.ser.direcao = 8;
				personagemAtual.ser.andar("x");
				personagemAtual.ser.andar("z");
				
				if( checkPontoCentral() == true){
					if(personagemAtual.ser.ladoDaColisao == 0){
						personagemAtual.ser.WorldPos.z+=personagemAtual.ser.velocity.z;
						personagemAtual.ser.WorldPos.x-=personagemAtual.ser.velocity.x;
					}
					else if(personagemAtual.ser.ladoDaColisao == 1){
						personagemAtual.ser.WorldPos.x-=personagemAtual.ser.velocity.x;
					}
					else if(personagemAtual.ser.ladoDaColisao == 2){
						personagemAtual.ser.WorldPos.z+=personagemAtual.ser.velocity.z;
					}
				}
				else{
					if(personagemAtual.ser.ladoDaColisao == 0){
						personagemAtual.ser.WorldPos.z+=personagemAtual.ser.velocity.z;
						personagemAtual.ser.WorldPos.x-=personagemAtual.ser.velocity.x;
						personagemAtual.pontoCentral[0]-=personagemAtual.ser.velocity.x;
						personagemAtual.pontoCentral[1]+=personagemAtual.ser.velocity.x;
					}
					else if(personagemAtual.ser.ladoDaColisao == 1){
						personagemAtual.ser.WorldPos.x-=personagemAtual.ser.velocity.x;
						personagemAtual.pontoCentral[0]-=personagemAtual.ser.velocity.x;
					}
					else if(personagemAtual.ser.ladoDaColisao == 2){
						personagemAtual.ser.WorldPos.z+=personagemAtual.ser.velocity.z;
						personagemAtual.pontoCentral[1]+=personagemAtual.ser.velocity.x;
					}
				}
				if(fazendoSav != "pulando" || fazendoSav != "nadando"){
					assemblySTA("walk");
				}
			}
			else if(Controule.Botoeses[5].ativo){ //↘
				personagemAtual.ser.direcao = 5
				personagemAtual.ser.andar("x");
				personagemAtual.ser.andar("z");
				
				if( checkPontoCentral() == true){
					personagemAtual.ser.WorldPos.z+=personagemAtual.ser.velocity.z;
					personagemAtual.ser.WorldPos.x+=personagemAtual.ser.velocity.x;
				}
				else{
					if(personagemAtual.ser.ladoDaColisao == 0){
						personagemAtual.ser.WorldPos.z+=personagemAtual.ser.velocity.z;
						personagemAtual.ser.WorldPos.x+=personagemAtual.ser.velocity.x;
						personagemAtual.pontoCentral[0]+=personagemAtual.ser.velocity.x;
						personagemAtual.pontoCentral[1]+=personagemAtual.ser.velocity.z;
					}
					else if(personagemAtual.ser.ladoDaColisao == 3){
						personagemAtual.ser.WorldPos.x+=personagemAtual.ser.velocity.x;
						personagemAtual.pontoCentral[0]+=personagemAtual.ser.velocity.x;
					}
					else if(personagemAtual.ser.ladoDaColisao == 2){
						personagemAtual.pontoCentral[1]+=personagemAtual.ser.velocity.z;
						personagemAtual.ser.WorldPos.z+=personagemAtual.ser.velocity.z;
					}
					
				}
				if(fazendoSav != "pulando" || fazendoSav != "nadando"){
					assemblySTA("walk");
				}
			}
			else if(Controule.Botoeses[6].ativo){ //↗
				personagemAtual.ser.direcao = 6
				personagemAtual.ser.andar("x");
				personagemAtual.ser.andar("z");
				
				if( checkPontoCentral() == true){
					personagemAtual.ser.WorldPos.z-=personagemAtual.ser.velocity.z;
					personagemAtual.ser.WorldPos.x+=personagemAtual.ser.velocity.x;
				}
				else{
					personagemAtual.ser.WorldPos.z-=personagemAtual.ser.velocity.z;
					personagemAtual.ser.WorldPos.x+=personagemAtual.ser.velocity.x;
					personagemAtual.pontoCentral[0]+=personagemAtual.ser.velocity.x;
					personagemAtual.pontoCentral[1]-=personagemAtual.ser.velocity.z;
				}
				if(fazendoSav != "pulando" || fazendoSav != "nadando"){
					assemblySTA("walk");
				}
			}
			else if(Controule.Botoeses[7].ativo){ //↖
				personagemAtual.ser.direcao = 7
				personagemAtual.ser.andar("x");
				personagemAtual.ser.andar("z");
				
				if( checkPontoCentral() == true){
					personagemAtual.ser.WorldPos.z-=personagemAtual.ser.velocity.z;
					personagemAtual.ser.WorldPos.x-=personagemAtual.ser.velocity.x;
				}
				else{
					personagemAtual.ser.WorldPos.z-=personagemAtual.ser.velocity.z;
					personagemAtual.ser.WorldPos.x-=personagemAtual.ser.velocity.x;
					personagemAtual.pontoCentral[0]-=personagemAtual.ser.velocity.x;
					personagemAtual.pontoCentral[1]-=personagemAtual.ser.velocity.z;
				}
				if(fazendoSav != "pulando" || fazendoSav != "nadando"){
					assemblySTA("walk");
				}
			}
			else{
				personagemAtual.ser.parar();
			}
			
			if(Controule.Botoeses[8].ativo && personagemAtual.ser.fazendo != "cair" && personagemAtual.ser.pulando == false){ //B pulo
				personagemAtual.ser.pulando = true;
			}
			if(Controule.Botoeses[9].ativo){ //Y ataque base
				/*
				if(personagemAtual.pulando == true){
					
				}
				else{
					personagem.atacar();
				}
				*/
			}
			if(Controule.Botoeses[10].ativo && controlState.A == false){ //A interação
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