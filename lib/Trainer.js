class Trainer extends GameObject{
	constructor(type,container,x,y,width,height,velX,velY,targetX,targetY,bg,src){
		super(type,container,x,y,width,height,velX,velY,targetX,targetY,bg,src);
	}

	tick(){
		this.x=this.x+this.velX;
		this.y=this.y+this.velY;
	
		//야생 포켓몬과 충돌시 배열의 모든 요소 제거
		for(var i=0;i<objectManager.objectArray.length;i++){
			var obj=objectManager.objectArray[i];
			if(obj.type=="POKEMON"){
				if(collisionCheck(this,obj)){
					removeAll();
				}
			}
		}

		//로켓단과 충돌시 배열의 모든 요소 제거
		for(var i=0;i<objectManager.objectArray.length;i++){
			var obj=objectManager.objectArray[i];
			if(obj.type=="ENEMY"){
				if(collisionCheck(this,obj)){
					removeAll();
					flag=true;
				}
			}
		}
	}

}
