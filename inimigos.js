class Inimigo extends Being{
	constructor(inimArgs, coords){
		super(inimArgs.name, inimArgs.age, inimArgs.ACL, inimArgs.VMAX, inimArgs.altura, inimArgs.largura, inimArgs.profundidade,  inimArgs.HTMLsrc, inimArgs.animations);
		this.isAlive = true;
		this.HP = inimArgs.HP
		this.ATK = inimArgs.ATK
		this.DEF = inimArgs.DEF
		this.ID = inimArgs.ID
		this.comportamento = inimArgs.tipoComportamento;
		this.fieldOfVisionReach = 100;
		this.pol = 1; //só pode ser 1 ou -1
		this.rayCast = undefined;
		this.SpawnPos = { x: coords.x, y: coords.y, z: coords.z };
	}
	update(){
		this.boxCol.x += this.velocity.x;
		this.boxCol.z += this.velocity.z;
		this.WorldPos.y += this.velocity.y;
		this.WorldPos.x = this.boxCol.x + this.boxCol.w*0.5;
		this.WorldPos.z = this.boxCol.z + this.boxCol.p*0.5;
		this.boxCol.y = this.WorldPos.y + this.boxCol.h;
		let colArr = [this.boxCol.x, this.boxCol.z, this.boxCol.w, this.boxCol.p, this.boxCol.y, this.boxCol.h];
		this.AI();
		this.centralPoint[0] = WorldToScreen1D(this.WorldPos.x, Camera.x, Camera.w/2 - Game.SCREEN_CENTER[0]);
		this.centralPoint[1] = WorldToScreen1D(this.WorldPos.z-this.WorldPos.y, Camera.y, Camera.h/2 - Game.SCREEN_CENTER[1]);
		if(this.hp <= 0){
			this.hp = 0;
			this.isAlive = false;
		}
	}
	AI(){
		BehaviorList[this.comportamento](this);
	}
	draw(){
		ctx.fillStyle = "#355467";
		ctx.fillRect(this.centralPoint[0] - this.boxCol.w*0.5, this.centralPoint[1] - this.boxCol.h, this.boxCol.w, this.boxCol.h);
	}
	spawn(){
		this.WorldPos.x = this.SpawnPos.x;
		this.WorldPos.z = this.SpawnPos.z;
		this.WorldPos.y = this.SpawnPos.y;
		this.boxCol.x = this.SpawnPos.x - this.boxCol.w*0.5;
		this.boxCol.z = this.SpawnPos.z - this.boxCol.p*0.5;
		this.boxCol.y = this.SpawnPos.y + this.boxCol.h;
		return true;
	}
}