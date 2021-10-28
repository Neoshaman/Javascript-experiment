const concept = {	//game design
	NumPlayer:		["single player","multi players","massively multi players",
					"two players","4 players","8 players",
					"16 players","24 players","32 players","64 players"
					],

	GameView:		["text","alternate reality",//text based
					"side scroller",//2d vertical
					"top down","isometric","axonometric",//2d top down
					"card based","board based","menu based",//abstract form
					"first person","third person","over the shoulder","virtual reality","fixed camera",//3d map
					"split screen","augmented reality"],//alternatives

	GameLevel:		["sandbox", "open world", "arena","metroidvania","non linear",//open structure
					"linear",  "corridor", "branching"//linear structures
					],

	GameTick:		["turn based", "real time", "asynchrone"],

	GameGenre:		["story","art","social","dollhouse","adventure",//narrative
					"sport","racing","driving",//sport
					"4X","strategy","tactic",//wargames
					"building","management","simulation","puzzle",//management
					"platformer","hop and bop","collecthon",//platformer
					"beat'm up","combat","brawler","fighting",//fighting
					"artillery","shooter",//shooting
					"roguelike","rogue lite",//pcg
					"rpg","Wrpg","Jrpg","Crpg"],//rpg

	GameNavigation:	["auto scrolling", "on rail", "free roaming", "controllable character", "board based"],
	GameGoals:	 	["infinite","aimless", "multi ending"],
	GameInteractionType: ["deck building"],
	GamePlaySpace:	["on site"],
	GameConnection:	["p2p","online","MMO"]				
}

let GameTypeObj = {
		num: "",
		view: "",
		level: "",
		tick: "",
		genre: "",
		navigation: "",
		goal: "",
		interaction: "",
		space: "",
		connection: "",

	gameTypeObjToString() {
		//type of game		//It's a NumPlayer player GameView GameGenre game
		return `It's ${this.num}, ${this.view} ${this.level}, ${this.tick} ${this.genre} game. ... ${this.navigation} ${this.goal} ${this.interaction} ${this.space} ${this.connection}`
	},

	createGameTypeObj(selector){
		//fill and return a GameTypeObj
		//create new game type, fill type
		this.num = selector(concept.NumPlayer);
		this.view = selector(concept.GameView);
		this.level = selector(concept.GameLevel);
		this.tick = selector(concept.GameTick);
		this.genre = selector(concept.GameGenre);
		this.navigation = selector(concept.GameNavigation);
		this.goal = selector(concept.GameGoals);
		this.interaction = selector(concept.GameInteractionType);
		this.space = selector(concept.GamePlaySpace);
		this.connection = selector(concept.GameConnection);
	}
}

let conceptTest = new GameTypeObj.createGameTypeObj(RandomWord)