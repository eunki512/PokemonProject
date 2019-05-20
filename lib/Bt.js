class Bt extends Object{
	constructor(container,x,y,width,height,bg,text,size,i){
		super(container,x,y,width,height);
		this.bg=bg;
		this.text=text;
		this.size=size;
		this.i=i;

		this.div.style.background=this.bg;
		this.div.id=parseInt(this.i);

		//텍스트 관련 설정
		this.div.innerText=this.text;
		this.div.style.fontSize=this.size+"px";
		this.div.style.fontWeight="bold";
		this.div.style.lineHeight=100+"px";
		this.div.style.textAlign="center";
	}
}