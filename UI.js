var HUD_canvin = document.getElementById("HUD");
var HUD_ctx = HUD_canvin.getContext("2d");
HUD_canvin.width = 520;
HUD_canvin.height = 520;

const UI = {
	titleDOM: document.querySelector(".titleScreen"),
	charsDOM: document.querySelector(".container__selectCharacters"),
	isCharSelectHere: false,
	isTitleHere: false,
	isInventoryHere: false,
	isInventaring: false,
	isQuickStatsHere: false,
	isCharAtualizou: false,
	isPausing: false,
	isDialogando: false,
	HUD_HP: document.querySelector(".charWin"),
	HP_bar: document.querySelector(".charWin__HPbar"),
	nomeDoPersonagem: document.querySelector(".charWin .quickStats .nomePersonagem"),
	pause: document.querySelector(".pauseMenu"),
	pauseItem: document.getElementsByClassName("it"),
	inventario: document.querySelector(".inventario"),
	dialogBoxCanvas: document.querySelector(".dialogos"),
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
	startInventario: function(entity_bag){
		if(!this.isInventaring){
			this.inventario.style.display = "flex";
			let inventStr = "";
			for(let i = 0; i < entity_bag.length; i++){
				inventStr += '<div class = "inventItem">' + entity_bar[i] + '</div>';
			}
			this.inventario.innerHTML = inventStr;
			this.isInventaring = true;
		}
	},
	endInventario: function(){
		if(this.isInventaring){
			this.inventario.style.display = "none";
			this.isInventaring = false;
		}
	},
	
	TelaTitulo: function(){
		if(!this.isTitleHere){
			this.titleDOM.style.display = "flex";
			this.isTitleHere = true;
		}
	},
	dismissTelaTitulo: function(){
		if(this.isTitleHere){
			this.titleDOM.style.display = "none";
			this.isTitleHere = false;
		}
	},
	startCharactering(){
		if(!this.isCharSelectHere){
			this.charsDOM.classList.add("flex-center");
			this.charsDOM.classList.remove("notHere");
			this.isCharSelectHere = true;
		}
	},
	endCharactering(){
		if(this.isCharSelectHere){
			this.charsDOM.classList.remove("flex-center");
			this.charsDOM.classList.add("notHere");
			this.isCharSelectHere = false;
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
	},
	addDialogBox(){
		
	}
}

//coordenadas de imagem para os numeros do HP

function esconder_HUD(){
	HUD_canvin.style.display = 'none';
}

var escala = 2;

//parte das caixas de diálogo e menu de pausa


const PauseMenu = {
	camadas: 0,
	raioDoMenu: 30,
	numDeOpcoes: 4,
	raioParaAnim: 0,
	opcaoSelecionada: 0,
	opcoes: ["falar", "items", "olhar", "status"],
	
	falar(){
		UI.addDialogBox();
	},
	items(){
		UI.startInventario(personagemAtual.calda);
	},
	status(){
		UI.showStatus();
	},
	
	avancarNaLayer(){
		this[this.opcoes[this.opcaoSelecionada]]();
	},
	regredirNaLayer(){
		if(this.camadas == -1){
			this.camadas = 0;
			gameFeature.pause = false;
		}
	}
}