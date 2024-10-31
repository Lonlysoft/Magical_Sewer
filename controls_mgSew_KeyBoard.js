

function EventoDoTecrado(){
	window.addEventListener("keydown", (e) =>{
		e.preventDefault();
		if(e.keyCode=="37")Controule.Botoeses[].ativoleft=true
		if(e.keyCode=="38")Controule.Botoeses[].ativoup=true
		if(e.keyCode=="39")Controule.Botoeses[].ativoright=true
		if(e.keyCode=="40")Controule.Botoeses[].ativodown=true
		if(e.keyCode=="13")Controule.Botoeses[].ativoenter=true
		if(e.keyCode=="32")Controule.Botoeses[].ativo=true
		if(e.keyCode=="87")Controule.Botoeses[].ativoX = true
		if(e.keyCode=="67")Controule.Botoeses[].ativoC = true
		if(e.keyCode=="83")Controule.Botoeses[].ativoS = true
		if(e.keyCode=="90")Controule.Botoeses[].ativoZ = true
		if(e.keyCode=="65")Controule.Botoeses[].ativoA = true
	})
	window.addEventListener('keyup', function(e){
		e.preventDefault();
		if(e.keyCode=="65")Controule.Botoeses[0].ativo = false;
		if(e.keyCode=="37")Controule.Botoeses[0].ativo = false;
		if(e.keyCode=="87")Controule.Botoeses[1].ativo = false;
		if(e.keyCode=="38")Controule.Botoeses[1].ativo = false;
		if(e.keyCode=="68")Controule.Botoeses[2].ativo = false;
		if(e.keyCode=="39")Controule.Botoeses[2].ativo = false;
		if(e.keyCode=="83")Controule.Botoeses[3].ativo = false;
		if(e.keyCode=="40")Controule.Botoeses[3].ativo = false;
		if(e.keyCode=="13")Controule.Botoeses[13].ativo=false;
		if(e.keyCode=="32")Controule.Botoeses[8].ativo=false;
		if(e.keyCode=="87")Controule.Botoeses[].ativoX = false;
		if(e.keyCode=="67")Controule.Botoeses[].ativoC = false;
		if(e.keyCode=="83")Controule.Botoeses[].ativoS = false;
		if(e.keyCode=="90")Controule.Botoeses[12].ativo = false;
	})
}