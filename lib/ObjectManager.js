class ObjectManager{
	constructor(){
		this.objectArray=[];  //맵에 등장할 모든 종류의 오브젝트들을 모아놓을 배열
		this.battleObjectArray=[];  //배틀상황에 등장할 모든 종류의 오브젝트들을 모아놓을 배열
	}

	//의뢰받은 객체를 objectArray에 넣기
	addObject(obj){
		this.objectArray.push(obj);	
	}
	//의뢰받은 객체를 objectArray에서 제거하기
	removeObject(obj){
		stage.removeChild(obj.div);
		this.objectArray.splice(this.objectArray.indexOf(obj),1);
	}

	//의뢰받은 객체를 battleobjectArray에 넣기
	addBattleObject(obj){
		this.battleObjectArray.push(obj);	
	}
	//의뢰받은 객체를 battleobjectArray에서 제거하기
	removeBattleObject(obj){
		stage.removeChild(obj.div);
		this.battleObjectArray.splice(this.battleObjectArray.indexOf(obj),1);
	}

	tick(){
		for(var i=0;i<this.objectArray.length;i++){
			this.objectArray[i].tick();
		}
	}
	render(){
		for(var i=0;i<this.objectArray.length;i++){
			this.objectArray[i].render();
		}
	}
}