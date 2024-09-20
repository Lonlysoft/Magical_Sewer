var HUD_canvin = document.getElementById("HUD");
var HUD_ctx = HUD_canvin.getContext("2d");
HUD_canvin.width = 520;
HUD_canvin.height = 520;
 

const cursor = {
	x: undefined,
	y: undefined,
	altura: 40,
	largura: 50,
	opcao: 1,
	graphic: document.querySelector(".imgCursor"),
	desenhar: function(x_3, y_3){
		this.x = x_3;
		this.y = y_3;
		HUD_ctx.drawImage(this.graphic, this.x, this.y, this.altura, this.largura);
	},
	max: 4
}


const UI = {
	titleDOM: document.querySelector(".titulo"),
	isTitleHere: false,
	isInventoryHere: false,
	HUD_HP: document.querySelector(".charWin"),
	HP_bar: document.querySelector(".charWin__HPbar"),
	pause: document.querySelector(".pauseMenu"),
	isQuickStatsHere: false,
	isCharAtualizou: false,
	isPausing: false,
	quickStating: function(){
		if(!this.isQuickStatsHere){
			this.HUD_HP.style.display = "flex";
			this.isQuickStatsHere = true;
		}
		this.HP_bar.style.width = "" + this.covertToBar(personagemAtual.hp, personagemAtual.HP, 100) + "%";
	},
	covertToBar: function(amount, maximumAmount, barLength){
		let regraDeQuatro = amount*barLength/maximumAmount;
		return regraDeQuatro;
	},
	endQuickStarting: function(){
		if(this.isQuickStatsHere){
			this.HUD_HP.style.display = "none";
			this.isQuickStatsHere = false;
		}
	},
	pausing: function(){
		if(!this.isPausing){
			this.pause.style.display = "flex";
			this.isPausing = true;
		}
	},
	endPausing: function(){
		if(this.isPausing){
			this.pause.style.display = "none";
			this.isPausing = false;
		}
	},
	TelaTitulo: function(){
		ctx.drawImage(this.titleDOM, canvas.width*0.5-this.titleDOM.width*0.5, canvas.height*0.5-this.titleDOM.height*0.5);
	},
	abrirInventario(entity_bag){
		//pesquisar possibilidade de adicionar e remover itens aqui (talvez possamos pegar inspiração de uma to-do list)
		if(!isInventoryHere){
			
		}
	},
	charSelectionScreen(){
		ctx.fillStyle = "#195B8F"
		ctx.fillRect(0, 0, 520, 520)
		ctx.drawImage(comando[1], 50, 0, 420, 154)
		ctx.globalAlpha = 0.25
		ctx.drawImage(sombra, canvas.width/2-100, canvas.height - 100, 200, 46)
		ctx.globalAlpha = 1
		if(frame == 1 || frame == 2 || frame == 3){
			ctx.drawImage(icons.guaxo[1], canvas.width/4-100, canvas.height/2-100, 170, 170);
			//ctx.drawImage(icons.raty[1], 8 + canvas.width/4+canvas.width/4-100, canvas.height/2-100, 200, 200);
			ctx.drawImage(icons.dante[1], 8+canvas.width/4+canvas.width/4+canvas.width/4-100, 10+canvas.height/2-100, 150, 150)
		}
		else{
			ctx.drawImage(icons.guaxo[0], canvas.width/4-100, canvas.height/2-100, 170, 170)
			//ctx.drawImage(icons.raty[0], 8 + canvas.width/4+canvas.width/4-100, canvas.height/2-100, 200, 200);
			ctx.drawImage(icons.dante[0], 8 + canvas.width/4+canvas.width/4+canvas.width/4-100, 10+canvas.height/2-100, 150, 150)
		}
	},
	HUD: function(){
		HUD_ctx.globalAlpha = 0.5;
		HUD_ctx.fillRect(HUD_canvin.width - 120, 95, 110, 55);
		HUD_ctx.globalAlpha = 1;
		
		HUD_canvin.style.visibility = "visible";
		//HUD_ctx.drawImage(janelaDeStatus, 0, 0, 208, 100)
		
		//desenhar números
		let hpPraRenderizar = this.convertToBar(personagemAtual.ser.hp, personagemAtual.ser.HP, this.lifeBar.borderW-(padding*2));
		if(personagemAtual.ser.xp < 0){
			personagemAtual.ser.xp = 0;
		}else if(personagemAtual.ser.xp >= 1000000000){
			personagemAtual.ser.xp = 999999999;
		}
		let pontosStr = personagemAtual.ser.xp + "";
		escreva(pontosStr, HUD_canvin.width - 100, HUD_canvin.height - 115);
		escreva("Guaxo", HUD_canvin.width - 110, 115);
		ctx.fillStyle = "#white"
		ctx.fillRect(this.lifeBar.borderX, this.lifeBar.borderY, this.lifeBar.borderW, this.lifeBar.borderH);
		ctx.fillRect(this.lifeBar.borderX+this.lifeBar.padding, this.lifeBar.borderYthis.lifeBar.padding, this.lifeBar.borderW-(this.lifeBar.padding*2), this.lifeBar.borderH-(this.lifeBar.padding*2));
		ctx.fillRect(this.lifeBar.borderX+this.lifeBar.padding, this.lifeBar.borderYthis.lifeBar.padding, hpPraRenderizar, this.lifeBar.borderH-(this.lifeBar.padding*2));
	}
}

const numeroVida = document.querySelector(".imgNumVida");

const numeroPontos = document.querySelector(".imgNumPontos");

const janelaDeStatus = document.querySelector(".imgJanela");

//coordenadas de imagem para os numeros do HP

function esconder_HUD(){
	HUD_canvin.style.display = 'none';
}

var escala = 2;

//parte das caixas de diálogo e menu de pausa


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
		if(this.hasSeparated == false){
			this.hasSeparated = true;
		}
		fale(this.opcoes[cursor.opcao - 1], 30, y - 60, 38, "purple")
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