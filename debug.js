//made to show things in canvas for each frame.
function debugForMain(){
	//relativo aos inimigos objectos e outras coisas 
	for(let i = 0; i < arrayDeInimigos.length; i++){
		escreva(arrayDeInimigos[i].WorldPos.x +"x", 20, 162+(16*i));
		escreva(arrayDeInimigos[i].WorldPos.z +"z", 100, 162+(16*i));
		escreva(arrayDeInimigos[i].pontoCentral[0], 200, 162+(16*i));
		escreva(arrayDeInimigos[i].pontoCentral[1], 300, 162+(16*i));
	}
	
	escreva(Relogio.mes + "/" + Relogio.dia + "hora:" + Relogio.hora + " min: " + Relogio.minuto+ " ", 100, 400)
	//relative to the player
	/*
	escreva("I "+ personagemAtual.pontoCentral[1] + "", 45, 205);
	escreva("VY "+ personagemAtual.velocity.y + "", 45, 225);
	*/
	fale("coin: " + personagemAtual.nadando, 30, 80);
	fale("		Y:" + personagemAtual.WorldPos.y, 30, 100);
	//escreva("Y: "+personagemAtual.WorldPos.y, 45, 185);	
}

function debugForTransitions(){
	escreva("∆: " + alfa, 30, 30);
}

//frame perfect
