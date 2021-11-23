class conceptObject extends gameGenerator{
	library = GameConcept
	data = {
		NumberPlayer	: null,	//key
		View			: null,	//key
		LevelDesign		: null,	//key
		Tick			: null,	//key
		Genre			: null,	//key
		Navigation		: null,	//key
		Goals			: null,	//key
		Interaction		: null,	//key
		PlaySpace		: null,	//key
		Connection		: null	//key
	}
	reference = {
		NumberPlayer	: this.library.elements.NumberPlayer,	//key
		View			: this.library.elements.View,			//key
		LevelDesign		: this.library.elements.LevelDesign,	//key
		Tick			: this.library.elements.Tick,			//key
		Genre			: this.library.elements.Genre,			//key
		Navigation		: this.library.elements.Navigation,		//key
		Goals			: this.library.elements.Goals,			//key
		Interaction		: this.library.elements.Interaction,	//key
		PlaySpace		: this.library.elements.PlaySpace,		//key
		Connection		: this.library.elements.Connection,		//key
	}

	defaulString(){ return  `It's a 
			${this.data.LevelDesign}
			${this.data.NumberPlayer}, 
			${this.data.View}, 
			${this.data.Tick} 
			${this.data.Genre} game. ... 
			${this.data.Navigation} 
			${this.data.Goals} 
			${this.data.Interaction} 
			${this.data.PlaySpace} 
			${this.data.Connection}`
		}
	clearData(){
		this.data.NumberPlayer	= null
		this.data.View			= null
		this.data.LevelDesign	= null
		this.data.Tick			= null
		this.data.Genre			= null
		this.data.Navigation	= null
		this.data.Goals			= null
		this.data.Interaction	= null
		this.data.PlaySpace		= null
		this.data.Connection	= null
	}
	//it's a "single player" "3rd person" "linear" "real time" "shooter" game
	
	//that you navigate with "", and interact with "",  and it's ...goal


	//"Navigation: on rail" "Goal:multi ending" "Interaction: deck building"
	//played "PlaySpace: on site" "connection:online"
	
	//it's a "online" "single player" "3rd person"    "on rail" "linear"
	//"real time"    "multiending"    "shooter" game with "deckbuilding",
	//played "on site"
	
	//it's a "connection" "num" "view" "navigation" "level"
	//"tick" "goal" "genre" game with "interaction",
	//played "space"  
}

//return object with tuple [index,string]??
//obj = {name:"",index:0, content: "content"}??