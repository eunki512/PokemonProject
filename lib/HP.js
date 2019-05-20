class HP extends Object{
	constructor(container,x,y,width,height,targetW,bg){
		super(container,x,y,width,height);
		this.targetW=targetW;
		this.bg=bg;

		this.div.style.background=this.bg;
	}
	
	//나의 레벨에 따른 적 포켓몬 HP 감소
	enemyHpFunction(){
		enemyHp.targetW=getRandom(45)+(10+level*10);   
		enemyHp.render();
		removeSkill();
	}

	//적 레벨에 따른 나의 포켓몬 HP 감소
	myHpFunction(n){
		myHpArray[n].targetW=getRandom(30)+(20+enemyLevel*5);
		myHpArray[n].render();
	}

	render(){
		this.div.style.width=parseInt(this.div.style.width)-this.targetW+"px";
	}
}