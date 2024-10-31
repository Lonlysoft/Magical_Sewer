const Relogio = {
	hora: 0, minuto: 0,
	ano: 1, dia: 28, mes: 1,
	fusco: "madrugada",
	passarTempo: function(){
		this.minuto++;
		if(this.minuto >= 60){
			this.minuto = 0;
			this.hora++;
		}
		if(this.hora >= 24){
			this.dia++;
			this.hora = 0;
		}
		if(this.dia > 28){
			this.mes++;
			this.dia = 1;
		}
		if(this.dia > 28 && mes == 4){
			this.mes = 0;
			this.dia = 0;
		}
		if(this.mes == 0 && this.hora >= 24){
			this.mes++;
		}
	},
	declararTempo: function(){
		if(this.hora > 0 && this.hora < 5){
			this.fusco = "madrugada";
		}
		else if(this.hora >= 5 && this.hora < 10){
			this.fusco = "manhã";
		}
		else if(this.hora >= 10 && this.hora < 17){
			this.fusco = "dia";
		}
		else if(this.hora == 17){
			this.fusco = "tardezinha";
		}
		else{
			this.fusco = "noite";
		}
	},
	declararClima: function(){
		
	},
	converterParaHorario: function(timeStr){
		let horaStr = timeStr[0] + timeStr[1];
		let minutoStr = timeStr[3] + timeStr[4];
		return {hora: Number(horaStr), minuto: Number(minutoStr)}
	}
}