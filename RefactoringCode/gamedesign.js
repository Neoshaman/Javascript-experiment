const concept = {	//game design
	NumberPlayer:		["single player","multi players","massively multi players",
						"two players","4 players","8 players",
						"16 players","24 players","32 players","64 players"],

	View:				["text","alternate reality",						//text based
						"side scroller",									//2d vertical
						"top down","isometric","axonometric",				//2d top down
						"card based","board based","menu based",			//abstract form
						"first person","third person","over the shoulder",
						"virtual reality","fixed camera", "free camera",	//3d cam
						"split screen","augmented reality"],				//alternatives

	LevelDesign:		["sandbox", "open world", "arena","metroidvania","non linear",//open structure
						"linear",  "corridor", "branching"],				//linear structures

	Tick:				["turn based", "real time", "asynchrone"],

	Genre:				["story","art","social","dollhouse","adventure",	//narrative --genre?
						"sport","racing","driving",							//sport
						"4X","strategy","tactic",							//wargames
						"building","management","simulation","puzzle",		//management
						"platformer","hop and bop","collecthon",			//platformer
						"beat'm up","combat","brawler","fighting",			//fighting
						"artillery","shooter",								//shooting
						"roguelike","rogue lite",							//pcg -------not a genre, a type of progression
						"rpg","Wrpg","Jrpg","Crpg"],						//rpg

	Navigation:			["auto scrolling", "on rail", 
						"free roaming","controllable character", "controllable squad"],
	Goals:				["infinite","aimless", "multi ending"],
	Interaction:		["deck building", "motion control", "keyboard and mice", "controller input"],
	PlaySpace:			["on site", "in arcade center", "at home", "in the street"],
	Connection:			["p2p","online","MMO"],
	//mechanics? -> in gameplay.js? "skill tree"?
	//game length?

	showElement: function(list){
		let result = ""
		list.forEach((element,index) => {
			result += `${index}.${element} `
		})
		return result
	},
	showNumberPlayer:	function(){this.showElement(this.NumberPlayer)},
	showView:			function(){this.showElement(this.View)},
	showLevelDesign:	function(){this.showElement(this.LevelDesign)},
	showTick:			function(){this.showElement(this.Tick)},
	showGenre:			function(){this.showElement(this.Genre)},
	showNavigation:		function(){this.showElement(this.Navigation)},
	showGoals:			function(){this.showElement(this.Goals)},
	showInteraction:	function(){this.showElement(this.Interaction)},
	showPlaySpace:		function(){this.showElement(this.PlaySpace)},
	showConnection:		function(){this.showElement(this.Connection)},
	ListElement: 		function(){return " Elements in concept: NumberPlayer, View, LevelDesign, Tick, Genre, Navigation, Goals, Interaction, PlaySpace, Connection"}
}

class GameTypeObj {
	constructor(){			//(selector = RandomWord){
		this.num			= ""
		this.view			= ""
		this.level			= ""
		this.tick			= ""
		this.genre			= ""
		this.navigation		= ""
		this.goal			= ""
		this.interaction	= ""
		this.space			= ""
		this.connection		= ""
	}
	
	//add a function for creating specific game type from concept

	getRandomConcept(selector = RandomWord){
		this.num			= selector(concept.NumberPlayer);
		this.view			= selector(concept.View);
		this.level			= selector(concept.LevelDesign);
		this.tick			= selector(concept.Tick);
		this.genre			= selector(concept.Genre);
		this.navigation		= selector(concept.Navigation);
		this.goal			= selector(concept.Goals);
		this.interaction	= selector(concept.Interaction);
		this.space			= selector(concept.PlaySpace);
		this.connection		= selector(concept.Connection);
	}

	toString() {
		return `It's a ${this.num}, ${this.view} ${this.level}, ${this.tick} ${this.genre} game. ... ${this.navigation} ${this.goal} ${this.interaction} ${this.space} ${this.connection}`
	}
	//it's a "single player" "3rd person" "linear" "real time" "shooter" game
	//"Navigation: on rail" "Goal:multi ending" "Interaction: deck building" played "PlaySpace: on site" "connection:online"
	
	//it's a "online" "single player" "3rd person" "on rail" "linear" "real time" "multiending" "shooter" game with "deckbuilding", played "on site"
	//it's a "connection" "num" "view" "navigation" "level" "tick" "goal" "genre" game with "interaction", played "space"  
	

	clear(){
		this.num			= ""
		this.view			= ""
		this.level			= ""
		this.tick			= ""
		this.genre			= ""
		this.navigation		= ""
		this.goal			= ""
		this.interaction	= ""
		this.space			= ""
		this.connection		= ""
	}
}

let conceptTest = new GameTypeObj.getRandomConcept()