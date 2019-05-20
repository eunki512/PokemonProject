class EnemyPokemon extends GameObject{
	constructor(type,container,x,y,width,height,velX,velY,targetX,targetY,bg,src){
		super(type,container,x,y,width,height,velX,velY,targetX,targetY,bg,src);
		this.a=0.1;
		this.b=0.9;
	}

	render(){
		this.div.style.left=parseInt(this.div.style.left)+this.a*(this.targetX-parseInt(this.div.style.left))+"px";
		this.div.style.top=parseInt(this.div.style.top)+this.b*(this.targetY-parseInt(this.div.style.top))+"px";
	}
}


