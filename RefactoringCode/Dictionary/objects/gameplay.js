class gameplayGenerator{
	static library = Gameplay
}

class designObject extends gameplayGenerator{
	data = {
		roleObject	: null,		//objects
		quest		: null,		//objects
		failure		: null,		//objects
		modus		: null		//objects
	}
	reference = {
		roleObject	: null,		//objects
		quest		: null,		//objects
		failure		: null,		//objects
		modus		: null		//objects
	}
	defaulString() {
		return	`<font color = \"green\">(Role)</font> Where the player is a ${this.data.role.role}<br>

		<font color = \"green\">(Quest: <font color = \"gray\">action, target, motivation</font>)</font><br>
		who want to ${this.data.quest.action} ${this.data.quest.target} for ${this.data.quest.motivation}<br>

		<font color = \"green\">(Failure condition)</font> without ${this.data.failure.quest}<br>
		
		<font color = \"green\">(Progression)</font> by ${this.data.modus.quest}`
	}
	clearData(){
		this.data.roleObject	= null		//objects
		this.data.quest			= null		//objects
		this.data.failure		= null		//objects
		this.data.modus			= null		//objects
	}
}
class roleObject extends gameplayGenerator{
	data = {
		role	: null			//keys
	}
	reference = {
		role	: gameplayGenerator.library.elements.PlayerRole
	}
	defaulString(){ return 	`<font color = \"green\">(Role)</font> Where the player is a ${this.data.role}<br>`
	}
	clearData(){
		this.data.role	= null		//keys
	}
}
class questObject extends gameplayGenerator{
	data = {
		action		: null,		//keys
		target		: null,		//keys
		motivation	: null		//keys
	}
	reference = {
		action		: gameplayGenerator.library.elements.PlayerAction,		//keys
		target		: gameplayGenerator.library.elements.PlayerTarget,		//keys
		motivation	: gameplayGenerator.library.elements.PlayerMotivation	//keys
	}
	defaulString(){
		return 	`<font color = \"green\">(Quest: <font color = \"gray\">action, target, motivation</font>)</font><br>
		who want to ${this.data.action} ${this.data.target} for ${this.data.motivation}<br>`
	}
	clearData(){
		this.data.action		= null		//keys
		this.data.target		= null		//keys
		this.data.motivation	= null		//keys
	}
}
class failureObject extends gameplayGenerator{//is a type of quest
	data = {
		quest		: null		//object --keys
	}
	reference = {
		quest		: null		//object --keys
	}
	defaulString(){
		return 	`<font color = \"green\">(Failure condition)</font> without ${this.data.quest}<br>`
	}
	clearData(){
		this.data.quest		= null		//object --keys
	}
}
class modusObject  extends gameplayGenerator{//is a type of quest
	data = {
		quest		: null		//object --keys
	}
	reference = {
		quest		: null		//object --keys
	}
	defaulString(){
		return 	`<font color = \"green\">(Progression)</font> by ${this.data.quest}`
	}
	clearData(){
		this.data.quest	= null		//object --keys

	}
}
