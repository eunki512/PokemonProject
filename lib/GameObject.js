class GameObject{
	constructor(type,container,x,y,width,height,velX,velY,targetX,targetY,bg,src){
		this.type=type;  
		this.container=container;
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.velX=velX;
		this.velY=velY;
		this.targetX=targetX;
		this.targetY=targetY;
		this.bg=bg;
		this.src=src;

		this.div=document.createElement("div");
		this.img=document.createElement("img");		
		this.div.style.position="absolute";
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.background=this.bg;

		//이미지 관련 설정
		if(this.src!=""){  //이미지가 있을 때만
			this.img.src=this.src;
			this.img.style.width=this.width+"px";
			this.img.style.height=this.height+"px";
			this.div.appendChild(this.img);
		}

		this.container.appendChild(this.div);
	}

	tick(){
		this.x=this.x+this.velX;
		this.y=this.y+this.velY;
	}
	render(){
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";
	}
}
