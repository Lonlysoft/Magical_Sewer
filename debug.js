//made to show things in canvas for each frame.
function debugForMain() {
  //relativo aos inimigos objectos e outras coisas 
  for (let i = 0; i < arrayDeInimigos.length; i++) {
    escreva(arrayDeInimigos[i].hp, 20, 162 + (16 * i));
    escreva(arrayDeInimigos[i].HP, 100, 162 + (16 * i));
    escreva(arrayDeInimigos[i].pontoCentral[0], 200, 162 + (16 * i));
    escreva(arrayDeInimigos[i].pontoCentral[1], 300, 162 + (16 * i));
  }

  for (let i = 0; i < estruturasAtivas.length; i++) {
    escreva(estruturasAtivas[i].x, 20, 200 + (16 * i));
    escreva(estruturasAtivas[i].z, 400, 200 + (16 * i));
    escreva(estruturasAtivas[i].y, 100, 200 + (16 * i));
    escreva(estruturasAtivas[i].pontoDaTela[0] + "x", 200, 200 + (16 * i));
    escreva(estruturasAtivas[i].pontoDaTela[1] + "y", 300, 200 + (16 * i));
  }
  //relative to the player
  /*
  escreva("I "+ personagemAtual.pontoCentral[1] + "", 45, 205);
  escreva("VY "+ personagemAtual.velocity.y + "", 45, 225);
  */
  fale("hp: " + personagemAtual.hp, 30, 80);
  fale("		Y:" + personagemAtual.WorldPos.y, 30, 100);
  //escreva("Y: "+personagemAtual.WorldPos.y, 45, 185);	
}

function debugForTransitions() {
  escreva("∆: " + alfa, 30, 30);
}

//frame perfect