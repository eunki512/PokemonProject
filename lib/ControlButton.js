class ControlButton{
	constructor(container,x,y,width,height,br,bg,src,txt,index){
		this.container=container;
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.br=br;
		this.bg=bg;
		this.src=src;
		this.txt=txt;
		this.index=index;
		this.color;

		this.div=document.createElement("div");
		this.img=document.createElement("img");		
		this.div.style.position="absolute";
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.borderRadius=this.br+"px"; 
		this.div.style.background=this.bg;

		//텍스트 관련 설정
		this.div.innerText=this.txt;
		this.div.style.lineHeight=95+"px";
		this.div.style.fontSize=21+"px";
		this.div.style.fontWeight="bold";
		this.div.style.color="#fff";
		this.div.style.textAlign="center";

		//이미지 관련 설정
		if(this.src!=""){  
			this.img.src=this.src;
			this.img.style.width=this.width+"px";
			this.img.style.height=this.height+"px";
			this.div.appendChild(this.img);
		}

		this.container.appendChild(this.div);

		if(level%3==0){
			this.color="#6633ff";
		}else if(level%4==0){
			this.color="#ae7600";    
		}else{
			this.color="#33cc33"; 
		}
		
		//하단 버튼 클릭시 세부 메뉴 구현
		this.div.addEventListener("click", ()=>{
			removeButton();
			for(var i=0;i<detailArray[this.index].length;i++){
				this.detail=document.createElement("div");
				this.detail.id=i;
				this.detail.style.width=135+"px";
				this.detail.style.height=50+"px"
				this.detail.style.borderRadius=10+"px";
				this.detail.style.position="absolute";
				this.detail.style.top=475+53*i+"px";
				this.detail.style.left=655+107*this.index+"px";
				
				//세부 메뉴의 텍스트
				switch(this.index){
				case 0:
					this.detail.style.background=this.color;
					this.detail.innerHTML=detailArray[number][i];
					break;
				case 1:
					this.detail.style.background=this.color;
					this.detail.innerHTML=detailArray[3][i];
					break;
				case 2:
					if(i<2){
						this.detail.style.background="none";
					}else{
						this.detail.style.background=this.color;
					}
					this.detail.innerHTML=detailArray[4][i];
					break;
				}

				//세부 메뉴의 텍스트 관련 설정
				this.detail.style.lineHeight=51+"px";
				this.detail.style.fontSize=20+"px";
				this.detail.style.fontWeight="bold";
				this.detail.style.color="#fff";

				this.container.appendChild(this.detail);
				dbtArray.push(this.detail);  //세부 메뉴의 div를 배열에 담음
				
				//'싸운다' 버튼 클릭시
				if(this.index==0){
					this.detail.addEventListener("click", function(){
						if(this.id!=3){
							this.skill=document.createElement("img");
							sk=this.skill;
							this.skill.src="./images/mypokemon/"+myPokemonList[number]+"Skill"+this.id+".png";
							this.skill.style.position="absolute";
							if(this.id==2){
								this.skill.style.width=200+"px";
								this.skill.style.left=640+"px";
								this.skill.style.top=100+"px";
							}else{
								this.skill.style.width=430+"px";
								this.skill.style.left=440+"px";
								this.skill.style.top=200+"px";
							}
							stage.appendChild(this.skill);
							attack();
						}
						removeButton();
					});
				}

				//'포켓몬' 버튼 클릭시
				if(this.index==1){
					this.detail.addEventListener("click", function(){
						if(this.id!=3){
							myPokemon.img.src="./images/mypokemon/"+myPokemonList[this.id]+".png";
							number=parseInt(this.id);
							createMyInfo(this.id);
						}
						removeButton();
					});
				}

				//'몬스터볼' 버튼 클릭시
				if(this.index==2){
					this.detail.addEventListener("click", function(){
						if(this.id==2){
							enemyPokemon.img.src="./images/pocketBall.png";
							enemyPokemon.div.style.width=100+"px";
							enemyPokemon.img.style.width=100+"px";
							enemyPokemon.img.style.height=100+"px";
							enemyPokemon.div.style.left=390+"px";
							enemyPokemon.div.style.top=420+"px";
							pocketBallMove();
							pocketBall();
						}
						removeButton();
					});
				}
			}
		});
	}
}