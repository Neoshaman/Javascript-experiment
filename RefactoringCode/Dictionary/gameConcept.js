const GameConcept =
{
	Name: "Game concept",
	Elements: {	//game design

		//what bout an array of object with name, data list?
		//but i need query per name too
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
							"free roaming","controllable character",
							"controllable squad"],
		Goals:				["infinite","aimless", "multi ending", "single ending"],
		Interaction:		["deck building", "motion control",
							"keyboard and mice", "controller input", "context sensitive actions"],
		PlaySpace:			["on site", "in arcade center", "at home",
							"in the street"],
		Connection:			["p2p","online","MMO"]
		//mechanics? -> in gameplay.js? "skill tree"?
		//game length?
	},
	String:  `It's a 
			${this.Elements.level}
			${this.Elements.NumberPlayer}, 
			${this.Elements.View}, 
			${this.Elements.Tick} 
			${this.Elements.genre} game. ... 
			${this.Elements.Navigation} 
			${this.Elements.goal} 
			${this.Elements.Interaction} 
			${this.Elements.space} 
			${this.Elements.Connection}`
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

Object.seal(GameConcept)

//return object with tuple [index,string]??
//obj = {name:"",index:0, content: "content"}??