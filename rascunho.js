class Protagonista{
	constructor(HP, ATK, DEF, VMIN, VMAX, JMAX, calda, Nome, graphicoFolder){
		this.x = undefined; this.y = undefined
		this.HP = HP; this.hp = HP
		this.ATK = ATK; this.DEF = DEF
		this.VMIN = VMIN; this.VMAX = VMAX; this.V = 0
		this.JMAX = JMAX; this.J = 0
		this.calda = undefined
		this.Nome = Nome
		this.graphico = new Image()
		this.direcao = 1
		graphico.src = graphicoFolder
	}
}

	/*
	7 3 6
	4 X 2
	8 1 5
	*/
	
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

class JanelaDigital{
	constructor(x, y, largura, altura){
		this.x = 0
		this.y = 0
		this.largura = 0
		this.altura = 0
		this.xPotencial = x
		this.yPotencial = y
		this.wPotencial = largura
		this.hPotencial = altura
		this.linhas = 0
		this.aberta = false
	}
	escrever(texto){
		
	}
}

const alphabeto2talk = {
	a: [1, 1, 16, 16],
	b: [18, 1, 16, 16],
	c: [35, 1, 16, 16],
	d: [52, 1, 16, 16],
	e: [69, 1, 16, 16],
	f: [86, 1, 16, 16],
	g: [103, 1, 16, 16],
	h: [120, 1, 16, 16],
	i: [137, 1, 16, 16],
	j: [154, 1, 16, 16],
	k: [171, 1, 16, 16],
	l: [188, 1, 16, 16],
	m: [205, 1, 16, 16],
	n: [222, 1, 16, 16],
	o: [239, 1, 16, 16],
	p: [256, 1, 16, 16],
	q: [273, 1, 16, 16],
	r: [1, 18, 16, 16],
	s: [18, 18, 16, 16],
	t: [35, 18, 16, 16],
	u: [52, 18, 16, 16],
	v: [69, 18, 16, 16],
	w: [86, 18, 16, 16],
	x: [103, 18, 16, 16],
	y: [120, 18, 16, 16],
	z: [137, 18, 16, 16],
	til: [154, 18, 16, 16],
	crase: [171, 18, 16, 16],
	circunflexo: [188, 18, 16, 16],
	agudo: [205, 18, 16, 16],
	exclamacao: [222, 18, 16, 16],
	interrogacao: [239, 18, 16, 16],
	ponto: [256, 18, 16, 16],
	virgula: [273, 18, 16, 16],
	arroba: [1, 35, 16, 16],
	sifrao: [18, 35, 16, 16],
	doisPontos: [35, 35, 16, 16],
	abreParenteses: [52, 35, 16, 16],
	fechaParenteses: [69, 35, 16, 16],
	apostrofo: [86, 35, 16, 16],
	hifen: [103, 35, 16, 16],
	num0: [120, 35, 16, 16],
	num1: [137, 35, 16, 16],
	num2: [154, 35, 16, 16],
	num3: [171, 35, 16, 16],
	num4: [188, 35, 16, 16],
	num5: [205, 35, 16, 16],
	num6: [222, 35, 16, 16],
	num7: [239, 35, 16, 16],
	num8: [256, 35, 16, 16],
	num9: [273, 35, 16, 16]
}

const cursor = {
	x: undefined,
	y: undefined,
	altura: 40,
	largura: 50,
	graphic: new Image(),
	desenhar: function(){
		ctx.drawImage(option_window.x, option_window.y, this.altura, this.largura)
	}
}

cursor.graphic.src = "Imagens/UI/Guaxo cursor.png"

/*//cola é foda
drawImage(image, dx, dy)
drawImage(image, dx, dy, dWidth, dHeight)
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
*/


class PartyMembers{
	constructor(HP, ATK, DEF, Nome, personagem_status){
		this.HPmax = HP;
		this.hp = HP;
		this.ATK = ATK;
		this.DEF = DEF;
		this.Nome = Nome;
		this.WorldPos = {x: undefined, y: undefined, z: undefined};
		this.sensor = current_place;
		this.plano = "normal";
		this.pontoCentral = [personagemAtual.pontoCentral[0], personagemAtual.pontoCentral[1]];
	}
	procurar_inimigo(tipo){
		let x = this.pontoCentral[0] + VisionX
		switch(tipo)
	}
	AI(){
		//vai ter muitas condicionais infelizmente
		if(personagem.HP >= 100){
			procurarInimigo("agressivo")
		}
		else{
			procurarInimigo("brando")
		}
		switch(plano){
			case "curar":
				if(personagem.HP<= 100){
					//ADICIONAR A FUNÇÃO DE USAR ITEM NO PERSOMAGEM QUE TÁ COM O HP BAIXO
				}
				break
			case "naoPerdoar":
			default:
		}
	}
	
}

class ITEM {
	constructor(valor, tipo, nome){
		this.valor = valor
		this.tipo = tipo
		this.nome = nome
	}
	usar(entity){
		switch(this.tipo){
			case "cura":
				entity.hp += this.valor
				break;
			case "dano":
				//em tese ele criaria uma bounding box, mas estamos em fase de protyping
				
				break;
			case "equip":
				entity.inventario
				break;
				
		}
	}
	
}

const Itens/*[1000]*/ = [
	new ITEM(24,"cura","caramelo"),
	new ITEM(20, "cura", "maçã"),
	new ITEM(50, "cura", "hamburguer"),
	new ITEM(120, "dano", "chorume bomb"),
	new ITEM(0, "chave", "carta"),
	new ITEM(0, "chave", "cidra de beringela"),
	new ITEM(14, "equipamento ATK", "engompro enferrujado"),
	new ITEM(23, "equipamento DEF", "Cela de ouro"),
	new ITEM(189, "equipamento DEF", "????"),
	new ITEM(99, "cura", "Litrão de Montanha")
]

drawInventário(){
	HUD_ctx.drawImage();
	for(let i = 0; i < personagemAtual.calda.length, i++){
		escreva(personagemAtual.calda[i], itemX, itemY);
	}
}
	

function dano(hp, atk, def){
	hp= atk-def
	return hp
}

ctx.drawImage(janelaDigital, janela.x, janela.y, almentadorW, almentadorH)

// precisamos de um pouco mais disso daqui, entretanto


class dialog{
	constructor(x, y, type){
		this.x = x
		this.y = y
		this.height = height
		this.width = width
		this.type = type
		this.texto = [ ]
		for(let i = 0; i < texto.lenght; i++){
			this.texto[i].push(texto[i])
		}
		
	}
	desenhar(linhas){
		var dialogBox = new Image().src = "Imagens/HUD/Dialog_box"
		
	}
	texto(){
		//estabelecer um limite
	}
}

//numeros de pontuação
var numeroPontos = {
	num0: [0, 1, 10, 11],
	num1: [12, 1, 10, 11],
	num2: [24, 1, 10, 11],
	num3: [36, 1, 10, 11],
	num4: [48, 1, 10, 11],
	num5: [60, 1, 10, 11],
	num6: [72, 1, 10, 11],
	num7: [84, 1, 10, 11],
	num8: [96, 1, 10, 11],
	num9: [108, 1, 10, 11]
}


//nova versão dos controles anteriores
class Controule{
	constructor(x, y, r, type){
		this.x = x;	this.y = y;	this.r = r;
		this.opacity=1
		this.color="white"
		this.R = Math.round(this.r*3.5)
		this.X = this.x
		this.Y = this.y
		this.id=undefined
		this.pressed=false
		this.code=undefined
		this.type = type
		this.text=undefined
	}

	draw(){
		if(this.type === "visivel"){
			controls_ctx.beginPath()
    		controls_ctx.globalAlpha=this.opacity
    		controls_ctx.strokeStyle = this.color
			controls_ctx.arc(this.x,this.y,this.r,0,Math.PI*2)
			controls_ctx.stroke()
			controls_ctx.closePath()
		}
	}
	drawText(t){
		if(this.type==="visivel"){
			controls_ctx.font=`${this.r}px Arial`
			controls_ctx.fillText(t,this.x-10,this.y+10)
		}
	}
}

//colar os controles aqui

var key={
	up:false,
	down:false,
	left:false,
	right:false,
	enter:false,
	space:false,
	Z: false,
	X: false,
	S: false,
	C: false
}

function key_event(){
	window.addEventListener('keydown', function(e){
		e.preventDefault()
		if(e.keyCode=="37")key.left=true
		if(e.keyCode=="38")key.up=true
		if(e.keyCode=="39")key.right=true
		if(e.keyCode=="40")key.down=true
		if(e.keyCode=="13")key.enter=true
		if(e.keyCode=="32")key.space=true
		if(e.keyCode=="87")key.X = true
		if(e.keyCode=="67")key.C = true
		if(e.keyCode=="83")key.S = true
		if(e.keyCode=="90")key.Z = true
		if(e.keyCode=="65")key.A = true
	
	})
	
	window.addEventListener('keyup', function(e){
		e.preventDefault()
		if(e.keyCode=="37")key.left=false
		if(e.keyCode=="38")key.up=false
		if(e.keyCode=="39")key.right=false
		if(e.keyCode=="40")key.down=false
		if(e.keyCode=="13")key.enter=false
		if(e.keyCode=="32")key.space=false
		if(e.keyCode=="87")key.X = false
		if(e.keyCode=="67")key.C = false
		if(e.keyCode=="83")key.S = false
		if(e.keyCode=="90")key.Z = false
		if(e.keyCode=="65")key.A = false
	})
}


var Contre = [new Controule(controls_canvas.width - 70, controls_canvas.height - 150 ,50 ,"visivel")/*A*/,
						new Controule(controls_canvas.width - 175, controls_canvas.height-60, 50, "visivel")/*B*/,
						new Controule(controls_canvas.width - 280, controls_canvas.height - 150, 50, "visivel")/*Y*/,
						
						//digital pad
						new Controule(60,controls_canvas.height - 150, 50,"visivel")/*⬅*/,
						new Controule(70, controls_canvas.height - 70, 50, "visivel")/*↙*/,
						new Controule(160, controls_canvas.height - 60, 50, "visivel")/*⬇*/, 
						new Controule(250, controls_canvas.height - 70, 50, "visivel")/*↘*/,
						new Controule(260, controls_canvas.height - 150, 50, "visivel")/*➡*/,
						new Controule(240, controls_canvas.height - 230, 50, "visivel")/*↗*/,
						new Controule(160, controls_canvas.height - 240, 50,"visivel") /*⬆*/,
						new Controule(70, controls_canvas.height - 230, 50, "visivel")/*↖*/,
								
								//triggers
						new Controule(70, 70, 40, "visivel")/*select*/,
						new Controule(controls_canvas.width/2, 70, 40, "visivel")/*start*/,
						new Controule(controls_canvas.width - 70, 70, 40, "visivel")/*z*/]

Contre[0].code = "A"
Contre[1].code = "B"
Contre[2].code = "Y"
Contre[3].code = "oeste"
Contre[4].code = "sudoeste"
Contre[5].code = "sul"
Contre[6].code = "sudeste"
Contre[7].code = "leste"
Contre[8].code = "nordeste"
Contre[9].code = "norte"
Contre[10].code = "noroeste"
Contre[11].code = "select"
Contre[12].code = "start"
Contre[13].code = "Z"


//auxiliares de interações
var onlongtouch;
var timer
var touchduration = 9

//interações muito picas
function EventoDeToq(B, key){
	controls_canvas.addEventListener('touchstart',e=>{
		for(let i=0; i<e.touches.length;i++){
				var tx=e.touches[i].clientX
				var ty=e.touches[i].clientY
				
				//encontrar qual o botão tá sendo precionado
			B.forEach(btn=>{
				var active_dist=Math.sqrt((btn.X-tx)*(btn.X-tx)+(btn.Y-ty)*(btn.Y-ty));
				if(active_dist<btn.r){
				  // button is pressed
					 btn.pressed=true
					 btn.id=e.touches[i].identifier
					 if(btn.code=="select"){key.space=true}
						else{key.space=false}
						
					 if(btn.code=="start"){key.enter=true}
						else{key.enter=false}
						
					 if(btn.code=="Y"){key.C=true}
						else{key.C=false}
						
					 if(btn.code=="Z"){key.Z=true}
						else{key.Z=false}
						
					 if(btn.code=="B"){key.X=true}
						else{key.X=false}
						
					 if(btn.code=="A"){
							key.S=true
					}
					else{
						key.S=false
					}
					
					
					//digital pads!
					if(btn.code=="norte"){
						key.up=true
					}
					else{
						key.up=false
					}
					/*
					if(btn.code=="nordeste"){
						key.up=true
						key.right=true
					}
					else{
						key.up=false
						key.right=false
					}
					*/
					if(btn.code=="leste"){key.right=true}
						else{key.right=false}
					/*
					if(btn.code=="sudeste"){
						key.down=true
						key.right=true
					}
					
					else{
						key.down=false 
						key.right=false
					}
					*/
					if(btn.code=="sul"){key.down=true}
						else{key.down=false}
					/*
					if(btn.code=="sudoeste"){
						key.down=true
						key.left=true
					} 
					else{
						key.down=false
						key.left=false
					}
					*/
					if(btn.code=="oeste"){key.left=true}
						else{key.left=false}
					/*
					if(btn.code== noroeste"){
						key.left=true
						key.up=true
					}
					else{
						key.left=false
						key.up=false
					}
					*/
				}
			})
		}
	},{passive:false})
	
	controls_canvas.addEventListener('touchend', e=>{
	    e.preventDefault();
	    for(let i = 0; i<e.changedTouches.length; i++){
	    	B.forEach(btn => {
				if(btn.id == e.changedTouches[i].identifier){
						btn.pressed=false;
						switch(btn.code){
	                   	case "select": key.space=false; break
							case "start": key.enter=false; break
							case "A": key.S=false; break
							case "B": key.X=false; break
							case "Y": key.C=false; break
							case "Z": key.Z=false; break
							case "norte": key.up=false; break
							case "nordeste": key.up=false; key.right=false; break
							case "leste":  key.right=false; break
	                   	case "sudesde":  key.down=false; key.right=false; break
	                   	case "sul":  key.down=false; break
	                   	case "sudoeste":  key.down=false; key.left=false; break
	                   	case "oeste":  key.left=false; break
	                   	case "noroeste":  key.up=false; key.left=false; break
						}
				}
	   	})
		}
	}, {passive:false})
}

//controles de toque sem key event

var controls_canvas = document.getElementById("controles_cheroso")
var controls_ctx = controls_canvas.getContext("2d")

function desenharBotoes(buttons){
	var button, index

	for (index = buttons.length - 1; index > -1; -- index) {
		button = buttons[index]
		
        controls_ctx.fillStyle = button.cor
        controls_ctx.fillRect(button.x, button.y, button.largura, button.altura)
	}
}

class Butao{
	constructor(x, y, largura, altura, cor, tipo){
		this.ativo = false
		this.cor = cor
		this.altura = altura
		this.largura = largura
		this.x = x;
		this.y = y;
		this.tipo = tipo
	}
	contemPonto(x,y){
		if(x < this.x || x > this.x + this.largura || y < this.y || y > this.y + this.altura){
			return false
		}
		return true
	}
}

var Controule = {
	Botoeses: [new Butao(10,  controls_canvas.height-160, 80, 80,"#888888","visivel"),//⬅
				new Butao(90,  controls_canvas.height-240, 80, 80, "#888888", "visivel"),//⬆
				new Butao(170,  controls_canvas.height-160, 80, 80, "#888888", "visivel"),//➡
				new Butao(90,  controls_canvas.height - 80, 80, 80, "#888888", "visivel"),//⬇
				new Butao(10,  controls_canvas.height - 80, 80, 80, "#333333", "visivel"),//↙
				new Butao(170,  controls_canvas.height - 80, 80, 80, "#333333", "visivel"),//↘
				new Butao(170,  controls_canvas.height - 240, 80, 80, "#333333", "visivel"),//↗
				new Butao(10,  controls_canvas.height - 240, 80, 80, "#333333", "visivel"),//↖
				
				//botao
				new Butao(controls_canvas.width-170,  controls_canvas.height-80, 80, 80,"#792F00" , "visivel"),//B
				new Butao(controls_canvas.width- 250,  controls_canvas.height-160, 80, 80, "#00739F","visivel"),//Y
				new Butao(controls_canvas.width- 90,  controls_canvas.height-160 ,80 ,80 , "#008849","visivel"),//A
				
				//triggers
				new Butao(10, 25, 120, 60, "#888888", "visivel"),//select
				new Butao(controls_canvas.width-130, 25, 120, 60, "#888888", "visivel"),//z
				new Butao(controls_canvas.width/2-60, 25, 120, 60, "#888888", "visivel")//start
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

function AABB3D_Tri(cubol, cubo2){
	let triVerts = cubo2; // triangular shape vertices
	let minX = Math.min(triVerts[0][0], triVerts[1][0], triVerts[2][0]);
	let maxX = Math.max(triVerts[0][0], triVerts[1][0], triVerts[2][0]);
	let minY = Math.min(triVerts[0][1], triVerts[1][1], triVerts[2][1]);
	let maxY = Math.max(triVerts[0][1], triVerts[1][1], triVerts[2][1]);
	let minZ = Math.min(triVerts[0][2], triVerts[1][2], triVerts[2][2]);
	let maxZ = Math.max(triVerts[0][2], triVerts[1][2], triVerts[2][2]);
	
	return cubo1[0] + cubo1[2] >= minX &&
		cubo1[0] <= maxX + cubo2[2] &&
		cubo1[1] + cubo1[3] >= minY &&
		cubo1[1] <= maxY + cubo2[3] &&
		cubo1[4] + cubo1[5] >= minZ &&
		cubo1[4] <= maxZ + cubo2[5];
}

function checkIntersection(cubo, tri){
	let cuboFace = [[cubo[0], cubo[1], cubo[2]], [cubo[0]+cubo[3], cubo[1], cubo[2]], [cubo[0]+cubo[3], cubo[1]+cubo[4], cubo[2]], [cubo[0], cubo[1]+cubo[4], cubo[2]]];
	let triVerts = tri;

	for(let i = 0; i < cuboFace.length; i++){
		let face = cuboFace[i];
		let d = crossProduct(triVerts[1]-triVerts[0], triVerts[2]-triVerts[0]);
		let d1 = crossProduct(triVerts[1]-triVerts[0], face-triVerts[0]);
		let d2 = crossProduct(face-triVerts[0], triVerts[2]-triVerts[0]);
		let invDet = 1 / dotProduct(d, d);
		let u = dotProduct(d1, d) * invDet;
		let v = dotProduct(d2, d) * invDet;
		if (u >= 0 && v >= 0 && u + v <= 1){
			// intersection detected
			// check which side of the face the intersection occurs
			if (i === 0){
				// intersection occurs on the left face
				return "left";
			} else if (i === 1){
				// intersection occurs on the right face
				return "right";
			} else if (i === 2){
				// intersection occurs on the top face
				return "top";
			} else {
				// intersection occurs on the bottom face
				return "bottom";
			}
		}
	}
	// no intersection detected
	return null;
}

function Pause(){
	ctx.restore()
	
	if(upper >= 20){
		ctx.drawImage(pause_options.grafico, pause_options.falar[0], pause_options.falar[1], pause_options.generalW, pause_options.generalH)
		ctx.drawImage(pause_options.grafico, pause_options.item[0], pause_options.item[1], pause_options.generalW, pause_options.generalH)
		ctx.drawImage(pause_options.grafico, pause_options.checar[0], pause_options.checar[1], pause_options.generalW, pause_options.generalH)
		ctx.drawImage(pause_options.grafico, pause_options.info[0], pause_options.info[1], pause_options.generalW, pause_options.generalH)
	}
	else {
		ctx.drawImage(pause_options.grafico, pause_options.falar[0], pause_options.falar[1], pause_options.generalW, pause_options.generalH)
		ctx.drawImage(pause_options.grafico, pause_options.item[0], pause_options.item[1], pause_options.generalW, pause_options.generalH)
		ctx.drawImage(pause_options.grafico, pause_options.checar[0], pause_options.checar[1], pause_options.generalW, pause_options.generalH)
		ctx.drawImage(pause_options.grafico, pause_options.info[0], pause_options.info[1], pause_options.generalW, pause_options.generalH)
		upper++
	}
}
const alphabeto2talk = {
	a: [0, 5, 16, 16],
	b: [9, 0, 16, 16],
	c: [18, 0, 8, 9],
	d: [27, 0, 8, 13],
	e: [36, 0, 8, 9],
	f: [45, 0, 5, 13],
	g: [51, 0, 8, 13],
	h: [60, 0, 8, 13],
	i: [69, 0, 1, 13],
	j: [71, 1, 4, 12],
	k: [76, 0, 5, 13],
	l: [82, 0, 3, 13],
	m: [86, 0, 8, 9],
	n: [95, 0, 5, 9],
	o: [0, 16, 8, 9],
	p: [9, 16, 8, 13],
	q: [18, 16, 8, 13],
	r: [27, 16, 6, 8],
	s: [34, 16, 8, 9],
	t: [43, 16, 5, 13],
	u: [49, 16, 9, 9],
	v: [58, 16, 9, 9],
	w: [68, 16, 15, 9],
	x: [84, 16, 5, 9],
	y: [90, 16, 8, 13],
	z: [0, 32, 8, 9],
	num1: [1, 88, 3, 13],
	num2: [5, 88, 8, 13],
	num3: [14, 88, 8, 13],
	num4: [23, 88, 7, 13],
	num5: [31, 88, 8, 13],
	num6: [40, 88, 8, 13],
	num7: [49, 88, 8, 13],
	num8: [57, 88, 8, 13],
	num9: [65, 88, 8, 13],
	num0: [76, 88, 8, 13],
	virgula: [, , , ],
	ponto: [, , , ],
	doisPontos: [, , , ],
	sifrao: [, , , ],
	til: [9, 30, 6, 3],
	acentoCirvunflexo: [, , , ],
	acentoAgudo: [19, 29, 3, 3],
	crase: [26, 29, 3, 3],
	interrogacao: [86, 88, 8, 13],
	exclamacao: [84, 88, 1, 13],
	igual: [, , , ],
	graph: new Image()
}
alphabeto2talk.graph.src = ""


var tile = {
	position cortar = {
		gramaDia: [0, 0, 60, 60], //555
		gramaDiaSombra: [60, 0, 60, 60], //554
		gramaPorDoSol: [120, 0, 60, 60], //553
		gramaNoite: [120, 0, 60, 60], //552
		cliff: [180, 0, 60, 60], //549
		praia: [240, 0, 60, 60], //499
		águaMarinha: [300, 0, 60, 60], //498
		esgoto01: [360, 0, 60, 60], //310
		parede01: [0, 60, 60, 60], //300
		parede01buraco: [60, 60, 60, 60], //311
		janela: [120, 60, 60, 60], //679
		portaCima: [180, 60, 60, 60], //680
		portaAbertaCima: [300, 60, 60, 60], //681
		portaBaixo: [240, 60, 60, 60], //682
		portaAbertaBaixo: [360, 60, 60, 60] //683
	},
	graph = new Image()
}
tile.graph.src = "imagens/levels/mg_sew_tileset00.png"

function desenhar_tiles(mapa, cameraRequestX, cameraRquestY, cameraRequestW, cameraRequestH){
	let renderPlusX = cameraLeftPaddingX
	let renderPlusY = cameraLeftPaddingY
	for (i = cameraRequestX; i < cameraRequestH; i++){
		for(j = cameraRequestY; j < cameraRequestW; j++){
			coords = assemblyTileCoords(i, j)
			ctx.drawImage(tile.graph, coords[0], coords[1], coords[2], coords[3], renderPlusX, renderPlusY, 60, 60);
			renderPlusX+=60
		}
		renderPlusY+=60
	}
}
function assemblyTileCoords(){
	switch(mapa[i][j]){
		case 444:
			return tiles.positionCortar.parede01
		case 111:
			return tiles.positionCortar.gramaNoite //lembrar que é placeholder
		case 567:
			return tiles.positionCortar.janela //esse é placeholder tbm, eu não sei pq q eu não botei o sprite do chão de esgoto fodido nesse negócio...
	}
}


desenhar personagem

switch(whatToDo){
		case "still":
			this.pontoCentral[0] = personagemAtual.pontoCentral[0]
			this.pontoCentral[1] = personagemAtual.pontoCentral[1]
			switch(dirAtual){
				case 1: //⬇
					ctx.drawImage(sombra, personagemAtual.pontoCentral[0] - 40, personagemAtual.pontoCentral[1] - 20, 80, 30);
					//braço
					desenharParteDoCorpo(
						this.position_CORTAR.omb, 
						this.pontoCentral[0]-20,
						this.pontoCentral[1]-73,
						22, 30, 3.14/6);
					
					//leg
					desenharParteDoCorpo(
						this.position_CORTAR.leg, 
						this.pontoCentral[0] - 23,
						this.pontoCentral[1] - 40,
						25, 40);
					
					mirrorar()
					desenharParteDoCorpo(
						this.position_CORTAR.leg, 
						this.pontoCentral[0] - 23,
						this.pontoCentral[1] - 40,
						25, 40);
					mirrorar()
					//pe
					desenharParteDoCorpo(this.position_CORTAR.pS, this.pontoCentral[0] - 21, this.pontoCentral[1] - 10, 20, 10)
					ctx.translate(canvas.width, 0)
					ctx.scale(-1, 1)
					desenharParteDoCorpo(this.position_CORTAR.pS, this.pontoCentral[0] - 21, this.pontoCentral[1] - 10, 20, 10)
					ctx.translate(canvas.width, 0)
					ctx.scale(-1, 1)
					
					//braco
					ctx.translate(canvas.width,0)
					ctx.scale(-1, 1)
					desenharParteDoCorpo(this.position_CORTAR.omb, this.pontoCentral[0]-20, this.pontoCentral[1]-73, 22, 30, Math.PI/6);
					ctx.scale(-1, 1)
					ctx.translate(canvas.width*-1, 0)
					
					desenharParteDoCorpo(
						this.position_CORTAR.arm,
						this.pontoCentral[0]-31,
						this.pontoCentral[1]-60,
						22,
						25
					);
					
					desenharParteDoCorpo(
						this.position_CORTAR.arm,
						this.pontoCentral[0]+9,
						this.pontoCentral[1]-60,
						22,
						25
					);
					
					//corpo
					desenharParteDoCorpo(
						this.position_CORTAR.cS,
						this.pontoCentral[0] - 25,
						this.pontoCentral[1] - 75,
						50,
						65
					);
					//cabeca
					desenharParteDoCorpo(
						this.position_CORTAR.faceSUL,
						this.pontoCentral[0] - 18,
						this.pontoCentral[1] - 97,
						36,
						36
					);
						break;
						
						
				case 2: //➡
					ctx.drawImage(sombra, personagemAtual.pontoCentral[0] - 40, personagemAtual.pontoCentral[1] - 30, 80, 40)
					
					//tail
					
					desenharParteDoCorpo(
						this.position_CORTAR.tail01,
						
						this.pontoCentral[0] - 50,
						this.pontoCentral[1] - 40,
						36, 26
					);
					
					//leg
					
					desenharParteDoCorpo(
						this.position_CORTAR.leg,
						this.pontoCentral[0] - 13,
						this.pontoCentral[1] - 30,
						30, 30
					);
					
					//pes
					
					desenharParteDoCorpo(
						this.position_CORTAR.pL,
						this.pontoCentral[0] - 10,
						this.pontoCentral[1] - 20,
						30, 15
					);
						
					
					//corpo
					desenharParteDoCorpo(
						this.position_CORTAR.cL,
						this.pontoCentral[0] - 25,
						this.pontoCentral[1] - 75,
						50, 60);
					
					//leg direita
					desenharParteDoCorpo(
						this.position_CORTAR.leg,
						this.pontoCentral[0] - 15,
						this.pontoCentral[1] - 30,
						30,
						30);
					
					desenharParteDoCorpo(
						this.position_CORTAR.pL,
						this.pontoCentral[0] - 12,
						this.pontoCentral[1] - 15,
						30,
						15)
					
					//1 direito
					desenharParteDoCorpo(
						this.position_CORTAR.omb,
						this.pontoCentral[0]-11,
						this.pontoCentral[1]-65,
						22,
						30);
					
					desenharParteDoCorpo(
						this.position_CORTAR.arm,
						this.pontoCentral[0]-11,
						this.pontoCentral[1]-55,
						22,
						25);
					
					//cabeca
					desenharParteDoCorpo(
						this.position_CORTAR.hL,
						this.pontoCentral[0] - 18,
						this.pontoCentral[1] - 97,
						36,
						36);
					break;
				case 3: //⬆
					ctx.drawImage(sombra, personagemAtual.pontoCentral[0] - 40, personagemAtual.pontoCentral[1] - 20, 80, 30)
					
					//bracos
					
					desenharParteDoCorpo(
						this.position_CORTAR.omb,
						this.pontoCentral[0]-20,
						this.pontoCentral[1]-73,
						22,
						30,
						Math.PI/6
					);
					
					mirrorar();
					desenharParteDoCorpo(
						this.position_CORTAR.omb,
						this.pontoCentral[0]-20,
						this.pontoCentral[1]-73,
						22,
						30,
						Math.PI/6
					);
					mirrorar();
					
					desenharParteDoCorpo(
						this.position_CORTAR.arm,
						this.pontoCentral[0]-31,
						this.pontoCentral[1]-60,
						22,
						25);
						
					mirrorar();
					desenharParteDoCorpo(
						this.position_CORTAR.arm,
						this.pontoCentral[0]-31,
						this.pontoCentral[1]-60,
						22,
						25);
					mirrorar();
					
					//pes
					desenharParteDoCorpo(
						this.position_CORTAR.fS,
						this.pontoCentral[0] - 21,
						this.pontoCentral[1] - 10,
						20,
						10);
					
					mirrorar()
					desenharParteDoCorpo(
						this.position_CORTAR.fS,
						this.pontoCentral[0] - 21,
						this.pontoCentral[1] - 10,
						20,
						10
					);
					mirrorar()
					
					//legs
					desenharParteDoCorpo(
						this.position_CORTAR.leg, 
						this.pontoCentral[0] - 23,
						this.pontoCentral[1] - 40,
						25, 40
					);
					
					mirrorar()
					desenharParteDoCorpo(
						this.position_CORTAR.leg, 
						this.pontoCentral[0] - 23,
						this.pontoCentral[1] - 40,
						25, 40);
					mirrorar()
					
					//corpo
					desenharParteDoCorpo(
						this.position_CORTAR.corpoNORTE,
						this.pontoCentral[0] - 25,
						this.pontoCentral[1] - 75,
						50, 60);
					//cabess
					desenharParteDoCorpo(
						this.position_CORTAR.faceNORTE,
						
						this.pontoCentral[0] - 18,
						this.pontoCentral[1] - 95,
						36,
						36);
					//rabo
					
					desenharParteDoCorpo(
						this.position_CORTAR.tail02,
						this.pontoCentral[0] - 13,
						this.pontoCentral[1] - 40,
						26,
						32);
					break;
				case 4: //⬅
					//corpo
					ctx.translate(canvas.width,0)
					ctx.scale(-1, 1)
					desenharPersonagem(2, whatToDo)
					ctx.scale(-1, 1)
					ctx.translate(canvas.width*-1, 0)
					break;
				case 5://↘
					
					
					ctx.drawImage(sombra, this.pontoCentral[0] - 40, this.pontoCentral[1] - 25, 80, 40);
					//braco
					
					desenharParteDoCorpo(
						this.position_CORTAR.omb,
						this.pontoCentral[0]-4,
						this.pontoCentral[1]-70,
						22,
						30,
						-3.14/5);
					
					desenharParteDoCorpo(
						this.position_CORTAR.arm,
						this.pontoCentral[0]+4,
						this.pontoCentral[1]-60,
						22,
						25);
					
					
					//leg
					desenharParteDoCorpo(
						this.position_CORTAR.leg,
						this.pontoCentral[0] - 2,
						this.pontoCentral[1] - 40,
						25,
						40);
					//pe
					desenharParteDoCorpo(
						this.position_CORTAR.pSL,
						this.pontoCentral[0],
						this.pontoCentral[0] - 15,
						20,
						15);
					
					//calda
					
					desenharParteDoCorpo(
						this.position_CORTAR.tail,
						personagemAtual.pontoCentral[0]-30,
						personagemAtual.pontoCentral[1]-50,
						36,
						26,
						3.14/4);
					
					desenharParteDoCorpo(
						this.position_CORTAR.leg,
						personagemAtual.pontoCentral[0] - 21,
						personagemAtual.pontoCentral[1] - 36,
						30,
						35);
					//corpo
					desenharParteDoCorpo(
						this.position_CORTAR.cSL,
						personagemAtual.pontoCentral[0] - 25,
						personagemAtual.pontoCentral[1] - 75,
						50,
						60);
					
					
					//leg
					
					//pe
					desenharParteDoCorpo(
						this.position_CORTAR.feetSUDESTE,
						personagemAtual.pontoCentral[0] - 15,
						personagemAtual.pontoCentral[0] - 10,
						20,
						15);
					//braco
					
					desenharParteDoCorpo(
						this.position_CORTAR.arm,
						personagemAtual.pontoCentral[0]-20,
						personagemAtual.pontoCentral[1]-73,
						22,
						30,
						Math.PI/6)
					
					
					desenharParteDoCorpo(
						this.position_CORTAR.arm,
						
						personagemAtual.pontoCentral[0]-32,
						personagemAtual.pontoCentral[1]-56,
						22,
						25);
						
					//cabeca
					desenharParteDoCorpo(
						this.position_CORTAR.hSL,
						personagemAtual.pontoCentral[0] - 18,
						personagemAtual.pontoCentral[1] - 95,
						36,
						36);
					break;
				case 6://↗
					ctx.translate(canvas.width,0)
					ctx.scale(-1, 1)
					desenharPersonagem(7, whatToDo)
					ctx.scale(-1, 1)
					ctx.translate(canvas.width*-1, 0)
					break;
				case 7://↖
					ctx.drawImage(sombra, personagemAtual.pontoCentral[0] - 40, personagemAtual.pontoCentral[1] - 25, 80, 40);
					//braco 01
					desenharParteDoCorpo(
						this.position_CORTAR.arm,
						this.pontoCentral[0]-4,
						this.pontoCentral[1]-70,
						22,
						30,
						-3.14/5);
					
					desenharParteDoCorpo(
						this.position_CORTAR.arm,
						this.pontoCentral[0]+4,
						this.pontoCentral[1]-60,
						22,
						25);
					//pe
					desenharParteDoCorpo(
						this.position_CORTAR.pS,
						this.pontoCentral[0] - 21,
						this.pontoCentral[1] - 10,
						20,
						10);
					
					desenharParteDoCorpo(
						this.position_CORTAR.pS,
						this.pontoCentral[0]-4,
						this.pontoCentral[1]-13,
						20,
						10);
					
					
					//leg
					mirrorar();
					desenharParteDoCorpo(
						this.position_CORTAR.leg,
						
						personagemAtual.pontoCentral[0] - 21,
						personagemAtual.pontoCentral[1] - 44,
						30,
						40);
					mirrorar();
						
					desenharParteDoCorpo(
						this.position_CORTAR.leg,
						personagemAtual.pontoCentral[0] - 21,
						personagemAtual.pontoCentral[1] - 40,
						30,
						40);
						
					//corpo
					mirrorar();
						desenharParteDoCorpo(
							this.position_CORTAR.corpoNORDESTE,
							personagemAtual.pontoCentral[0]-25,
							personagemAtual.pontoCentral[1]-75,
							50,
							60);
					mirrorar();
					
					mirrorar();
					desenharParteDoCorpo(
						this.position_CORTAR.arm,
						this.pontoCentral[0]-4,
						this.pontoCentral[1]-60,
						22,
						30,
						-3.14/5);
					
					desenharParteDoCorpo(
						this.position_CORTAR.arm,
						this.pontoCentral[0]+4,
						this.pontoCentral[1]-55,
						22,
						25);
					mirrorar();
					
					//cabess
					desenharParteDoCorpo(
						this.position_CORTAR.faceNOROESTE,
						this.pontoCentral[0] - 18,
						this.pontoCentral[1] - 95,
						36,
						36);
					
					mirrorar();
					desenharParteDoCorpo(
						this.position_CORTAR.tail01,
						personagemAtual.pontoCentral[0]-30,
						personagemAtual.pontoCentral[1]-50,
						36,
						26,
						3.14/4);
					mirrorar();
					break;
				case 8://↙
					ctx.translate(canvas.width,0)
					ctx.scale(-1, 1)
					desenharPersonagem(5, whatToDo)
					ctx.scale(-1, 1)
					ctx.translate(canvas.width*-1, 0)
					break;
			}
			break;
			
		case "mergulhar":
			break;
		case "agachar":
			break;
			
			
		case "andarR":
			this.pontoCentral[0] = personagemAtual.pontoCentral[0]
			this.pontoCentral[1] = personagemAtual.pontoCentral[1] - 4
			switch(dirAtual){
				case 1: //⬇
					mirrorar()
					desenharPersonagem(1, "andarL")
					mirrorar()
					break;
				case 2: //➡
					ctx.drawImage(sombra, personagemAtual.pontoCentral[0] - 40, personagemAtual.pontoCentral[1] - 20, 80, 30)
					//leg
					ctx.translate(this.pontoCentral[0]-13, this.pontoCentral[1]-40);
					ctx.rotate(3.14/5);
					desenharParteDoCorpo(
						this.position_CORTAR.leg,
						0,
						0,
						30,
						30);
					desenharParteDoCorpo(
						this.position_CORTAR.feetL,
						2,
						16,
						25,
						15)
					ctx.rotate(-3.14/5);
					ctx.translate((this.pontoCentral[0]-13)*-1, (this.pontoCentral[1]-40)*-1);
					
					//tail
					
					desenharParteDoCorpo(
						this.position_CORTAR.tail01,
						
						this.pontoCentral[0] - 50,
						this.pontoCentral[1] - 40,
						36,
						26)
					
					//corpo
					desenharParteDoCorpo(
						this.position_CORTAR.cL,
						
						this.pontoCentral[0] - 25,
						this.pontoCentral[1] - 75,
						50,
						60)
					
					//leg direita
					ctx.translate(this.pontoCentral[0]-13, this.pontoCentral[1]-20);
					ctx.rotate(-3.14/5);
					desenharParteDoCorpo(
						this.position_CORTAR.leg,
						0,
						0,
						30,
						30);
					desenharParteDoCorpo(
						this.position_CORTAR.feetL,
						
						2,
						15,
						30,
						15)
					ctx.rotate(3.14/5);
					ctx.translate((this.pontoCentral[0]-13)*-1, (this.pontoCentral[1]-20)*-1);
					//braco
					ctx.translate(this.pontoCentral[0]-11, this.pontoCentral[1]-65);
					ctx.rotate(3.14/5);
					desenharParteDoCorpo(
						this.position_CORTAR.arm,
						
						0,
						0,
						22,
						30);
					
					desenharParteDoCorpo(
						this.position_CORTAR.arm,
						0,
						10,
						22,
						25);
					ctx.rotate(-3.14/5);
					ctx.translate((this.pontoCentral[0]-11)*-1, (this.pontoCentral[1]-65)*-1);
					//cabeca
					desenharParteDoCorpo(
						this.position_CORTAR.faceLESTE,
						
						this.pontoCentral[0] - 18,
						this.pontoCentral[1] - 97,
						36,
						36);
					break;
				case 3: //⬆
					ctx.drawImage(sombra, personagemAtual.pontoCentral[0] - 40, personagemAtual.pontoCentral[1] - 20, 80, 30)
					
					//bracos
					ctx.translate(this.pontoCentral[0]-20, this.pontoCentral[1]-73);
					ctx.rotate(Math.PI/6)
					ctx.drawImage(personagemAtual.grapho,
						this.position_CORTAR.arm[0],
						this.position_CORTAR.arm[1], 
						this.position_CORTAR.arm[2],
						this.position_CORTAR.arm[3],
						
						0,
						0,
						22,
						30);
					ctx.rotate(-Math.PI/6)
					ctx.translate((this.pontoCentral[0]-20)*-1, (this.pontoCentral[1]-73)*-1);
					
					ctx.translate(this.pontoCentral[0]+2, this.pontoCentral[1]-60);
					ctx.rotate(-Math.PI/6);
					ctx.drawImage(personagemAtual.grapho,
						this.position_CORTAR.arm[0],
						this.position_CORTAR.arm[1], 
						this.position_CORTAR.omb[2],
						this.position_CORTAR.omb[3],
						
						0,
						0,
						22,
						30);
					
					desenharParteDoCorpo(
						this.position_CORTAR.arm,
						0,
						5,
						22,
						25);
					
					ctx.rotate(Math.PI/6);
					ctx.translate((this.pontoCentral[0]+2)*-1, (this.pontoCentral[1]-60)*-1);
					
					
					
					desenharParteDoCorpo(
						this.position_CORTAR.arm,
						this.pontoCentral[0]-31,
						this.pontoCentral[1]-60,
						22,
						25);
					
					
					
					
					//legs
					desenharParteDoCorpo(
						this.position_CORTAR.leg,
						this.pontoCentral[0] - 23,
						this.pontoCentral[1] - 40,
						25,
						40);
					
					mirrorar()
					desenharParteDoCorpo(
						this.position_CORTAR.leg,
						this.pontoCentral[0] - 23,
						this.pontoCentral[1] - 43,
						25,
						40);
					mirrorar()
					//pes
					desenharParteDoCorpo(
						this.position_CORTAR.feet90deg2,
						this.pontoCentral[0] - 21,
						this.pontoCentral[1] - 20,
						20,
						20)
					
					//corpo
					desenharParteDoCorpo(
						this.position_CORTAR.corpoNORTE,
						this.pontoCentral[0] - 25,
						this.pontoCentral[1] - 75,
						50,
						60);
					//cabess
					desenharParteDoCorpo(
						this.position_CORTAR.faceNORTE,
						this.pontoCentral[0] - 18,
						this.pontoCentral[1] - 95,
						36,
						36);
					//rabo
					
					desenharParteDoCorpo(
						this.position_CORTAR.tail02,
						this.pontoCentral[0] - 13,
						this.pontoCentral[1] - 40,
						26,
						32
						);
					break;
				case 4: //⬅
					//corpo
					ctx.translate(canvas.width,0)
					ctx.scale(-1, 1)
					desenharPersonagem(2, whatToDo)
					ctx.scale(-1, 1)
					ctx.translate(canvas.width*-1, 0)
					break;
				case 5://↘ //andar R
					
					ctx.drawImage(sombra, personagemAtual.pontoCentral[0] - 40, personagemAtual.pontoCentral[1] - 25, 80, 40);
					//braco
					ctx.translate(this.pontoCentral[0], this.pontoCentral[1]-60);
					ctx.rotate(-3.14/4);
					desenharParteDoCorpo(
						this.position_CORTAR.omb,
						0,
						0,
						22,
						30);
					desenharParteDoCorpo(
						this.position_CORTAR.arm,
						0,
						10,
						22,
						25);
					ctx.rotate(3.14/4);
					ctx.translate((this.pontoCentral[0])*-1, (this.pontoCentral[1]-60)*-1);
					
					desenharParteDoCorpo(
						this.position_CORTAR.feetSUDESTE,
						
						this.pontoCentral[0],
						this.pontoCentral[0] - 15,
						20,
						15, -3.14/2);
					
					//leg
					desenharParteDoCorpo(
						this.position_CORTAR.leg,
						
						this.pontoCentral[0] - 2,
						this.pontoCentral[1] - 40,
						25,
						40, 3.14/6);
					//pe
					
					
					//calda
					ctx.translate(this.pontoCentral[0]-25, this.pontoCentral[1]-20);
					ctx.rotate(3.14/5);
					desenharParteDoCorpo(
						this.position_CORTAR.tail01,
						 - 25,
						 - 20,
						36,
						26);
					ctx.rotate(-3.14/5);
					ctx.translate((this.pontoCentral[0]-25)*-1, (this.pontoCentral[1]-20)*-1);
					
					desenharParteDoCorpo(
						this.position_CORTAR.leg,
						this.pontoCentral[0] - 21,
						this.pontoCentral[1] - 25,
						30,
						35, -3.14/7);
					//corpo
					desenharParteDoCorpo(
						this.position_CORTAR.corpoSUDESTE,
						this.pontoCentral[0] - 25,
						this.pontoCentral[1] - 75,
						50,
						60);
					
					
					//leg
					
					//pe
					desenharParteDoCorpo(
						this.position_CORTAR.feet30deg,
						this.pontoCentral[0] - 5,
						this.pontoCentral[1] - 15,
						20,
						15);
					//braco
					ctx.translate(this.pontoCentral[0]-20, this.pontoCentral[1]-73);
					ctx.rotate(Math.PI/6)
					desenharParteDoCorpo(
						this.position_CORTAR.omb,
						0,
						0,
						22,
						30)
					
					desenharParteDoCorpo(
						this.position_CORTAR.arm,
						0,
						12,
						22,
						25);
					
					ctx.rotate(-Math.PI/6)
					ctx.translate((this.pontoCentral[0]-20)*-1, (this.pontoCentral[1]-73)*-1);
						
					//cabeca
					ctx.drawImage(personagemAtual.grapho,
						this.position_CORTAR.hSL[0],
						this.position_CORTAR.hSL[1],
						this.position_CORTAR.hSL[2],
						this.position_CORTAR.hSL[3],
						
						this.pontoCentral[0] - 18,
						this.pontoCentral[1] - 95,
						36,
						36);
					break;
				case 6://↗
					ctx.translate(canvas.width,0)
					ctx.scale(-1, 1)
					desenharPersonagem(7, whatToDo)
					ctx.scale(-1, 1)
					ctx.translate(canvas.width*-1, 0)
					break;
				case 7://↖
					ctx.drawImage(sombra, this.pontoCentral[0] - 40, this.pontoCentral[1] - 25, 80, 40);
					//braco 01
					ctx.translate(this.pontoCentral[0]+15, this.pontoCentral[1]-60);
					ctx.rotate(-3.14/5);
					desenharParteDoCorpo(
						this.position_CORTAR.omb,
						-11,
						-15,
						22,
						30);
					
					ctx.rotate(3.14/5);
					ctx.translate((this.pontoCentral[0]+15)*-1, (this.pontoCentral[1]-60)*-1);
					desenharParteDoCorpo(
						this.position_CORTAR.arm,
						this.pontoCentral[0]+4,
						this.pontoCentral[1]-60,
						22,
						25);
					
					//pe
					desenharParteDoCorpo(
						this.position_CORTAR.pS,
						this.pontoCentral[0] - 21,
						this.pontoCentral[1] - 10,
						20,
						10)
					
					desenharParteDoCorpo(
						this.position_CORTAR.pS,
						this.pontoCentral[0]-4,
						this.pontoCentral[1]-13,
						20,
						10);
					
					
					//leg
					desenharParteDoCorpo(
						this.position_CORTAR.leg,
						this.pontoCentral[0] - 7,
						this.pontoCentral[1] - 44,
						30,
						40);
						
					desenharParteDoCorpo(
						this.position_CORTAR.leg,
						this.pontoCentral[0] - 21,
						this.pontoCentral[1] - 40,
						30,
						40);
						
					//corpo
					ctx.translate(this.pontoCentral[0]+25, this.pontoCentral[1]-75);
						ctx.scale(-1, 1)
						desenharParteDoCorpo(
							this.position_CORTAR.corpoNORDESTE,
							
							0,
							0,
							50,
							60);
						ctx.scale(-1, 1);
					ctx.translate((this.pontoCentral[0]+25)*-1, (this.pontoCentral[1]-75)*-1);
					
					ctx.translate(this.pontoCentral[0]-16, this.pontoCentral[1]-73);
					ctx.rotate(Math.PI/6)
					desenharParteDoCorpo(
						this.position_CORTAR.omb,
						0,
						0,
						22,
						30)
					
					ctx.rotate(-Math.PI/6)
					ctx.translate((this.pontoCentral[0]-16)*-1, (this.pontoCentral[1]-73)*-1);
					desenharParteDoCorpo(
						this.position_CORTAR.arm,
						
						this.pontoCentral[0]-28,
						this.pontoCentral[1]-56,
						22,
						25);
					
					//cabess
					desenharParteDoCorpo(
						this.position_CORTAR.faceNOROESTE,
						this.pontoCentral[0] - 18,
						this.pontoCentral[1] - 95,
						36,
						36);
					
					ctx.translate(this.pontoCentral[0]+25, this.pontoCentral[1]-20);
					ctx.scale(-1, 1)
					ctx.rotate(3.14/5);
					desenharParteDoCorpo(
						this.position_CORTAR.tail01,
						 - 25,
						 - 20,
						36,
						26)
					ctx.rotate(-3.14/5);
					ctx.scale(-1, 1)
					ctx.translate((this.pontoCentral[0]+25)*-1, (this.pontoCentral[1]-20)*-1);
					
					break;
				case 8://↙
					ctx.translate(canvas.width,0)
					ctx.scale(-1, 1)
					desenharPersonagem(5, whatToDo)
					ctx.scale(-1, 1)
					ctx.translate(canvas.width*-1, 0)
					break;
			}
			break;
		case "andarL":
			this.pontoCentral[0] = personagemAtual.pontoCentral[0];
			this.pontoCentral[1] = personagemAtual.pontoCentral[1] - 4;
			switch(dirAtual){
				case 1: //⬇
					ctx.drawImage(sombra, personagemAtual.pontoCentral[0] - 40, personagemAtual.pontoCentral[1] - 20, 80, 30);
					//braço
					desenharParteDoCorpo(
						this.position_CORTAR.omb, 
						this.pontoCentral[0]-20,
						this.pontoCentral[1]-73,
						22, 30, 3.14/6);
					
					desenharParteDoCorpo(
						this.position_CORTAR.arm,
						this.pontoCentral[0]-25,
						this.pontoCentral[1]-64,
						22,
						25,
						Math.PI/6
					);
					//leg
					desenharParteDoCorpo(this.position_CORTAR.feet90deg, this.pontoCentral[0] - 17, this.pontoCentral[1] - 30, 15, 26)
					desenharParteDoCorpo(
						this.position_CORTAR.leg, 
						this.pontoCentral[0] - 23,
						this.pontoCentral[1] - 49,
						27, 40);
					
					mirrorar()
					
					desenharParteDoCorpo(
						this.position_CORTAR.leg, 
						this.pontoCentral[0] - 23,
						this.pontoCentral[1] - 38,
						27, 40);
					mirrorar()
					
					
					//braco
					mirrorar()
					desenharParteDoCorpo(
						this.position_CORTAR.omb,
						this.pontoCentral[0]-20,
						this.pontoCentral[1]-73,
						22, 30,
						Math.PI/6);
					mirrorar()
					
					mirrorar()
					desenharParteDoCorpo(
						this.position_CORTAR.arm,
						this.pontoCentral[0]-31,
						this.pontoCentral[1]-60,
						22,
						25
					);
					mirrorar()
					
					//corpo
					desenharParteDoCorpo(
						this.position_CORTAR.cS,
						this.pontoCentral[0] - 25,
						this.pontoCentral[1] - 75,
						50,
						65
					);
					//cabeca
					desenharParteDoCorpo(
						this.position_CORTAR.faceSUL,
						this.pontoCentral[0] - 18,
						this.pontoCentral[1] - 97,
						36,
						36
					);
					mirrorar()
					desenharParteDoCorpo(this.position_CORTAR.feet90deg3, this.pontoCentral[0] - 21, personagemAtual.pontoCentral[1] - 26, 20, 26)
					mirrorar()
					break;
				case 2: //➡
					ctx.drawImage(sombra, personagemAtual.pontoCentral[0] - 40, personagemAtual.pontoCentral[1] - 20, 80, 30)
					//leg
					
					desenharParteDoCorpo(
						this.position_CORTAR.leg,
						this.pontoCentral[0]-5,
						this.pontoCentral[1]-20,
						30,
						30,
						-3.14/5
					);
					desenharParteDoCorpo(
						this.position_CORTAR.feetL,
						this.pontoCentral[0]+10,
						this.pontoCentral[0]-10,
						25,
						15,
						-3.14/5
					);
					
					//tail
					desenharParteDoCorpo(
						this.position_CORTAR.tail01,
						this.pontoCentral[0] - 50,
						this.pontoCentral[1] - 40,
						36,
						26
					);
					
					//corpo
					desenharParteDoCorpo(
						this.position_CORTAR.cL,
						this.pontoCentral[0] - 25,
						this.pontoCentral[1] - 75,
						50,
						60
					);
					
					//leg direita
					desenharParteDoCorpo(
						this.position_CORTAR.leg,
						this.pontoCentral[0]-15,
						this.pontoCentral[1]-35,
						30,
						30,
						3.14/6
					);
					desenharParteDoCorpo(
						this.position_CORTAR.feetL,
						this.pontoCentral[0]-22,
						this.pontoCentral[1]-18,
						25,
						15,
						3.14/5
					);
					//braco
					desenharParteDoCorpo(
						this.position_CORTAR.omb,
						this.pontoCentral[0]-11,
						this.pontoCentral[1]-55,
						22,
						30,
						-3.14/5
					);
					
					desenharParteDoCorpo(
						this.position_CORTAR.arm,
						this.pontoCentral[0]-11,
						this.pontoCentral[1]-45,
						22,
						25,
						-3.14/5
					);
					
					//cabeca
					desenharParteDoCorpo(
						this.position_CORTAR.faceLESTE,
						this.pontoCentral[0] - 18,
						this.pontoCentral[1] - 97,
						36,
						36
					);
					
					break;
				case 3: //⬆
					mirrorar();
					desenharPersonagem(3, "andarR")
					mirrorar();
					break;
					
				case 4: //⬅
					//corpo
					ctx.translate(canvas.width,0)
					ctx.scale(-1, 1)
					desenharPersonagem(2, whatToDo)
					ctx.scale(-1, 1)
					ctx.translate(canvas.width*-1, 0)
					break;
					
				case 5://↘ andar L
					ctx.drawImage(sombra, personagemAtual.pontoCentral[0] - 40, personagemAtual.pontoCentral[1] - 25, 80, 40);
					//braco
					desenharParteDoCorpo(
						this.position_CORTAR.arm,
						this.pontoCentral[0]+4,
						this.pontoCentral[1]-60,
						22,
						25, -3.14/4);
					
					desenharParteDoCorpo(
						this.position_CORTAR.feetSUDESTE,
						
						this.pontoCentral[0],
						this.pontoCentral[0] - 15,
						20,
						15, -3.14/2);
						
					desenharParteDoCorpo(
						this.position_CORTAR.leg,
						this.pontoCentral[0] - 10,
						this.pontoCentral[1] - 25,
						30,
						35, -3.14/7);
					
					//pe
					desenharParteDoCorpo(
						this.position_CORTAR.feet30deg,
						this.pontoCentral[0] + 10,
						this.pontoCentral[1] - 15,
						20,
						15);
					//leg
					desenharParteDoCorpo(
						this.position_CORTAR.leg,
						
						this.pontoCentral[0] - 5,
						this.pontoCentral[1] - 40,
						25,
						40, 3.14/6);
					//pe
					
					
					//calda
					ctx.translate(this.pontoCentral[0]-25, this.pontoCentral[1]-20);
					ctx.rotate(3.14/5);
					desenharParteDoCorpo(
						this.position_CORTAR.tail01,
						 - 25,
						 - 20,
						36,
						26);
					ctx.rotate(-3.14/5);
					ctx.translate((this.pontoCentral[0]-25)*-1, (this.pontoCentral[1]-20)*-1);
					
					
					//corpo
					desenharParteDoCorpo(
						this.position_CORTAR.corpoSUDESTE,
						this.pontoCentral[0] - 25,
						this.pontoCentral[1] - 75,
						50,
						60);
					//braco
					ctx.translate(this.pontoCentral[0]-20, this.pontoCentral[1]-73);
					ctx.rotate(Math.PI/6)
					desenharParteDoCorpo(
						this.position_CORTAR.omb,
						0,
						0,
						22,
						30)
					
					desenharParteDoCorpo(
						this.position_CORTAR.arm,
						0,
						12,
						22,
						25);
					
					ctx.rotate(-Math.PI/6)
					ctx.translate((this.pontoCentral[0]-20)*-1, (this.pontoCentral[1]-73)*-1);
						
					//cabeca
					desenharParteDoCorpo(
						this.position_CORTAR.hSL,
						this.pontoCentral[0] - 18,
						this.pontoCentral[1] - 95,
						36,
						36);
					
					break;
				case 6://↗
					ctx.translate(canvas.width,0)
					ctx.scale(-1, 1)
					this.desenhar(7, whatToDo)
					ctx.scale(-1, 1)
					ctx.translate(canvas.width*-1, 0)
					break;
				case 7://↖
					ctx.drawImage(sombra, this.pontoCentral[0] - 40, this.pontoCentral[1] - 25, 80, 40);
					//braco 01
					ctx.translate(this.pontoCentral[0]+15, this.pontoCentral[1]-60);
					ctx.rotate(-3.14/5);
					desenharParteDoCorpo(personagemAtual.grapho,
						this.position_CORTAR.omb,
						-11,
						-15,
						22,
						30);
					
					ctx.rotate(3.14/5);
					ctx.translate((this.pontoCentral[0]+15)*-1, (this.pontoCentral[1]-60)*-1);
					ctx.drawImage(personagemAtual.grapho,
						this.position_CORTAR.arm[0],
						this.position_CORTAR.arm[1], 
						this.position_CORTAR.arm[2],
						this.position_CORTAR.arm[3],
						
						this.pontoCentral[0]+4,
						this.pontoCentral[1]-60,
						22,
						25);
					
					//pe
					ctx.drawImage(personagemAtual.grapho,
						this.position_CORTAR.pS[0],
						this.position_CORTAR.pS[1], 
						this.position_CORTAR.pS[2],
						this.position_CORTAR.pS[3],
						
						this.pontoCentral[0] - 21,
						this.pontoCentral[1] - 10,
						20,
						10)
					
					ctx.drawImage(personagemAtual.grapho,
						this.position_CORTAR.pS[0],
						this.position_CORTAR.pS[1], 
						this.position_CORTAR.pS[2],
						this.position_CORTAR.pS[3],
						
						this.pontoCentral[0]-4,
						this.pontoCentral[1]-13,
						20,
						10);
					
					
					//leg
					ctx.drawImage(personagemAtual.grapho,
						this.position_CORTAR.leg[0],
						this.position_CORTAR.leg[1], 
						this.position_CORTAR.leg[2],
						this.position_CORTAR.leg[3],
						
						this.pontoCentral[0] - 7,
						this.pontoCentral[1] - 44,
						30,
						40);
						
					ctx.drawImage(personagemAtual.grapho,
						this.position_CORTAR.leg[0],
						this.position_CORTAR.leg[1], 
						this.position_CORTAR.leg[2],
						this.position_CORTAR.leg[3],
						
						this.pontoCentral[0] - 21,
						this.pontoCentral[1] - 40,
						30,
						40);
						
					//corpo
					ctx.translate(this.pontoCentral[0]+25, this.pontoCentral[1]-75);
						ctx.scale(-1, 1)
						desenharParteDoCorpo(
							0,
							0,
							50,
							60);
						ctx.scale(-1, 1);
					ctx.translate((this.pontoCentral[0]+25)*-1, (this.pontoCentral[1]-75)*-1);
					
					ctx.translate(this.pontoCentral[0]-16, this.pontoCentral[1]-73);
					ctx.rotate(Math.PI/6)
					ctx.drawImage(personagemAtual.grapho,
						this.position_CORTAR.omb[0],
						this.position_CORTAR.omb[1], 
						this.position_CORTAR.omb[2],
						this.position_CORTAR.omb[3],
						
						0,
						0,
						22,
						30)
					
					ctx.rotate(-Math.PI/6)
					ctx.translate((this.pontoCentral[0]-16)*-1, (this.pontoCentral[1]-73)*-1);
					ctx.drawImage(personagemAtual.grapho,
						this.position_CORTAR.arm[0],
						this.position_CORTAR.arm[1], 
						this.position_CORTAR.arm[2],
						this.position_CORTAR.arm[3],
						
						this.pontoCentral[0]-28,
						this.pontoCentral[1]-56,
						22,
						25);
					
					//cabess
					ctx.drawImage(personagemAtual.grapho,
						this.position_CORTAR.faceNOROESTE[0],
						this.position_CORTAR.faceNOROESTE[1],
						this.position_CORTAR.faceNOROESTE[2],
						this.position_CORTAR.faceNOROESTE[3],
						
						this.pontoCentral[0] - 18,
						this.pontoCentral[1] - 95,
						36,
						36);
					
					ctx.translate(this.pontoCentral[0]+25, this.pontoCentral[1]-20);
					ctx.scale(-1, 1)
					ctx.rotate(3.14/5);
					ctx.drawImage(personagemAtual.grapho,
						this.position_CORTAR.tail01[0],
						this.position_CORTAR.tail01[1],
						this.position_CORTAR.tail01[2],
						this.position_CORTAR.tail01[3],
						
						 - 25,
						 - 20,
						36,
						26)
					ctx.rotate(-3.14/5);
					ctx.scale(-1, 1)
					ctx.translate((this.pontoCentral[0]+25)*-1, (this.pontoCentral[1]-20)*-1);
					
					break;
				case 8://↙
					ctx.translate(canvas.width,0)
					ctx.scale(-1, 1)
					desenharPersonagem(5, whatToDo)
					ctx.scale(-1, 1)
					ctx.translate(canvas.width*-1, 0)
					break;
				}
			break;
			
		case "pulando":
				switch(dirAtual){
					//temos que ter a posição dele pulando. o braço dele é reto na diagonal
					case 1:
						//braco
						ctx.drawImage(sombra, personagemAtual.pontoCentral[0] - 40, personagemAtual.pontoCentral[1] - 20, 80, 30);
					//braço
						ctx.translate(this.pontoCentral[0]-20, this.pontoCentral[1]-73)
						ctx.rotate(3.14/6)
						desenharParteDoCorpo(
							this.position_CORTAR.omb, 
							0, 0,
							22, 30);
						desenharParteDoCorpo(
							this.position_CORTAR.arm,
							0,
							10,
							22,
							25
						);
						ctx.rotate(-3.14/6)
						ctx.translate((this.pontoCentral[0]-20)*-1, (this.pontoCentral[1]-73)*-1)
						//braco mirrorado
						mirrorar()
						ctx.translate(this.pontoCentral[0]-20, this.pontoCentral[1]-73)
						ctx.rotate(3.14/6)
						desenharParteDoCorpo(
							this.position_CORTAR.omb, 
							0, 0,
							22, 30);
						desenharParteDoCorpo(
							this.position_CORTAR.arm,
							0,
							10,
							22,
							25
						);
						ctx.rotate(-3.14/6)
						ctx.translate((this.pontoCentral[0]-20)*-1, (this.pontoCentral[1]-73)*-1)
						mirrorar()
					
						//leg
						desenharParteDoCorpo(
						this.position_CORTAR.leg, 
						this.pontoCentral[0] - 23,
						this.pontoCentral[1] - 50,
						25, 40);
					
					mirrorar()
					desenharParteDoCorpo(
						this.position_CORTAR.leg, 
						this.pontoCentral[0] - 23,
						this.pontoCentral[1] - 50,
						25, 40);
					mirrorar()
						
						//corpo
						
					//corpo
					desenharParteDoCorpo(
						this.position_CORTAR.cS,
						this.pontoCentral[0] - 25,
						this.pontoCentral[1] - 75,
						50,
						65
					);
						//cabeca
						
						break;
					case 2:
						break;
				}
			break;
		case "caindo":
				
			break;
		case "feral":
		
			break;
		case "feralJump":
		
			break;
		case "feralAttack":
			break;
	}
	
rampaX1: function(entity, cube){ //↗️ 45° em x pra cima
		if(this.slopeTop(entity, cube, 1, 0, "x"))return;
		if(this.top(entity, cube))return;
		if(this.left(entity, cube))return;
		if(this.right(entity, cube))return;
		this.bottom(entity, cube);
	},
	
	rampaX2: function(entity, cube){
		if(this.slopeTop(entity, cube, -1, 0, "x"))return;
		if(this.top(entity, cube))return;
		if(this.left(entity, cube))return;
		if(this.right(entity, cube))return;
		this.bottom(entity, cube);
	},
	
	rampaZ1: function(entity, cube){ //↗️ 45° em z pra cima
		if(this.slopeTop(entity, cube, 1, 0, "z"))return;
		if(this.top(entity, cube))return;
		if(this.left(entity, cube))return;
		if(this.right(entity, cube))return;
		this.bottom(entity, cube);
	},
	
	rampaZ2: function(entity, cube){ //↗️ -45° em z pra cima
		if(this.slopeTop(entity, cube, -1, 0, "z"))return;
		if(this.left(entity, cube))return;
		if(this.right(entity, cube))return;
		this.bottom(entity, cube);
	},