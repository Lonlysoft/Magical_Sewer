var mapaAtual;

var scenery = {
	hasDeclaired: false,
	declair: function(LevelNumber){
		switch(LevelNumber){
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
		mapaAtual.settarAgua();
		mapaAtual.settarItensColetaveis(ITEMS);
		this.hasDeclaired = true;
	},
	desenhar: function(){
		let layers = [];
		for(let i = 0; i < mapaAtual.objectGrid.length; i++){
			layers.push(new Array());
		}
		for(let i = 0; i < arrayDeInimigos.length; i++){
			layers[arrayDeInimigos[i].layer].push(arrayDeInimigos[i]);
		}
		for(let i = 0; i < arrayDeItens.length; i++){
			layers[arrayDeItens[i].layer].push(arrayDeItens[i]);
		}
		mapaAtual.drawFloor(2);
		layers[personagemAtual.layer].push(personagemAtual);
		
		//this.rearrangeSubInlayer(); //feito pro player também se mover atrás dos inimigos 
		for(let i = 0; i < layers.length; i++){
			for(let j = 0; j < layers[i].length; j++){
				layers[i][j].desenhar();
			}
			mapaAtual.objectGridDraw(i);
		}
		//mapaAtual.objectGridDraw(2);
	}
}