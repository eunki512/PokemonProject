class InfoText extends Object{
	constructor(container,x,y,width,height,lh,text,size){
		super(container,x,y,width,height);
		this.lh=lh;
		this.text=text;
		this.size=size;
		this.count=0;  //생성부터 사라지기까지 카운트
		this.st;

		this.div.style.borderRadius=30+"px";
		this.div.style.background="#000";
		this.div.style.opacity=0.7;
		this.div.style.textAlign="center";

		//텍스트 관련 설정
		this.div.innerHTML=this.text;
		this.div.style.lineHeight=this.lh+"px";
		this.div.style.fontSize=this.size+"px";
		this.div.style.fontWeight="bold";
		this.div.style.color="#fff";
	}

	remove(){
		this.container.removeChild(this.div);
	}
	
	remove1(){
		this.count++;
		if(this.count==40){
			this.container.removeChild(this.div);
			this.count=0;
			return;
			clearTimeout(this.st);
		}
		this.st=setTimeout("infoText.remove1()", 50);
	}

	remove2(){
		this.count++;
		if(this.count==50){
			this.container.removeChild(this.div);
			this.count=0;
			return;
			clearTimeout(this.st);
		}
		this.st=setTimeout("infoText.remove2()", 50);
	}

	remove3(){
		this.count++;
		if(this.count==30){
			this.container.removeChild(this.div);
			this.count=0;
			return;
			clearTimeout(this.st);
		}
		this.st=setTimeout("infoText.remove3()", 50);
	}

}