class Info extends Object{
	constructor(container,x,y,width,height,br,bg,text){
		super(container,x,y,width,height);
		this.br=br;
		this.bg=bg;
		this.text=text;

		this.div.style.borderRadius=br+"px"; 
		this.div.style.background=this.bg;

		//텍스트 관련 설정
		this.div.innerHTML=this.text;
		this.div.style.lineHeight=35+"px";
		this.div.style.fontSize=21+"px";
		this.div.style.fontWeight="bold";
		this.div.style.color="#fff";
		this.div.style.textAlign="center";
	}
}