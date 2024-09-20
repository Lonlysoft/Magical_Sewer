var mapaAtual;

var scenery = {
  hasDeclaired: false,
  declair: function(LevelNumber) {
    switch (LevelNumber) {
      case "ftest":
        mapaAtual = ftest;
        break;
      case 1:
        mapaAtual = ceneries.level01;
        break;

      case "world":
        mapaAtual = World;
        break;
      default:
        mapaAtual = 0;
        break;
    }
    mapaAtual.settarFronteiras();
    mapaAtual.settarInimigos();
    this.hasDeclaired = true;
  },
  desenhar: function() {
    let layer1 = [];
    let layer0 = [];
    let layer2 = [];
    for (let i = 0; i < arrayDeInimigos.length; i++) {
      if (arrayDeInimigos[i].layer == 0) layer0.push(arrayDeInimigos[i]);
      if (arrayDeInimigos[i].layer == 1) layer1.push(arrayDeInimigos[i]);
      if (arrayDeInimigos[i].layer == 2) layer2.push(arrayDeInimigos[i]);
    }
    mapaAtual.drawFloor(2);

    if (personagemAtual.layer === 0) {
      layer0.push(personagemAtual);
    }
    if (personagemAtual.layer === 1) {
      layer1.push(personagemAtual);
    }
    if (personagemAtual.layer === 2) {
      layer2.push(personagemAtual);
    }

    //this.rearrangeSubInlayer(); //feito pro player também se mover atrás dos inimigos 

    for (let j = 0; j < layer0.length; j++) {
      layer0[j].desenhar();
    }
    mapaAtual.objectGridDraw(0);

    for (let j = 0; j < layer1.length; j++) {
      layer1[j].desenhar();
    }
    //mapaAtual.objectGridDraw(1);

    for (let j = 0; j < layer2.length; j++) {
      layer2[j].desenhar();
    }
    //mapaAtual.objectGridDraw(2);
  }
}