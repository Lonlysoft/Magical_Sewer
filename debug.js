//made to show things in canvas for each frame.
function debugForMain(){
	//relativo aos inimigos objectos e outras coisas 
	for(let i = 0; i < arrayDeInimigos.length; i++){
		escreva(arrayDeInimigos[i].WorldPos.x, 20, 162+(16*i));
		escreva(arrayDeInimigos[i].WorldPos.z, 100, 162+(16*i));
		escreva(arrayDeInimigos[i].pontoCentral[0], 200, 162+(16*i));
		escreva(arrayDeInimigos[i].Nome, 4, 162+(16*i));
		escreva(arrayDeInimigos[i].pontoCentral[1], 300, 162+(16*i));
	}
	
	
	//relative to the player
	/*
	escreva("I "+ personagemAtual.ser.pontoCentral[1] + "", 45, 205);
	escreva("VY "+ personagemAtual.ser.velocity.y + "", 45, 225);
	*/
	escreva("FZND "+ personagemAtual.ser.fazendo + "", 45, 146);
	fale("" + personagemAtual.ser.Nome +"		HP:" + personagemAtual.ser.hp + " layer " + personagemAtual.ser.layer, 30, 100);
	//escreva("Y: "+personagemAtual.ser.WorldPos.y, 45, 185);	
}

function debugForTransitions(){
	escreva("∆: " + alfa, 30, 30);
}

//frame perfect