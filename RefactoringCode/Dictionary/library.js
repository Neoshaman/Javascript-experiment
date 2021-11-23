class GameConcept extends generatorLibrary{
	static name = "Game concept"
	static elements = {
		//what bout an array of object with name, data list?
		//but i need query per name too
		NumberPlayer	:	["single player","multi players","massively multi players",
							"two players","4 players","8 players",
							"16 players","24 players","32 players","64 players"],

		View			:	["text","alternate reality",						//text based
							"side scroller",									//2d vertical
							"top down","isometric","axonometric",				//2d top down
							"card based","board based","menu based",			//abstract form
							"first person","third person","over the shoulder",
							"virtual reality","fixed camera", "free camera",	//3d cam
							"split screen","augmented reality"],				//alternatives

		LevelDesign		:	["sandbox", "open world", "arena","metroidvania","non linear",//open structure
							"linear",  "corridor", "branching"],				//linear structures

		Tick			:	["turn based", "real time", "asynchrone"],

		Genre			:	["story","art","social","dollhouse","adventure",	//narrative --genre?
							"sport","racing","driving",							//sport
							"4X","strategy","tactic",							//wargames
							"building","management","simulation","puzzle",		//management
							"platformer","hop and bop","collecthon",			//platformer
							"beat'm up","combat","brawler","fighting",			//fighting
							"artillery","shooter",								//shooting
							"roguelike","rogue lite",							//pcg -------not a genre, a type of progression
							"rpg","Wrpg","Jrpg","Crpg"],						//rpg

		Navigation		:	["auto scrolling", "on rail", 
							"free roaming","controllable character",
							"controllable squad"],
		Goals			:	["infinite","aimless", "multi ending", "single ending"],
		Interaction		:	["deck building", "motion control",
							"keyboard and mice", "controller input", "context sensitive actions"],
		PlaySpace		:	["on site", "in arcade center", "at home",
							"in the street"],
		Connection		:	["p2p","online","MMO"]
		//mechanics? -> in gameplay.js? "skill tree"?
		//game length?
	}
}


class Gameplay extends generatorLibrary {
	static name = "Gameplay"
	static elements = {
		//gameplay concept
		//where the player is a PlayerRole				
		PlayerRole		:	["wizard","tomboy","sorcerer","sorceress","cosmonaut",
							"guy","soldier","bro dude","faery","man","man",
							"mascot animal","regular person","game designer",
							"effeminate hero"],//need a better breakdown and a character generator

		//quest->who want to PlayerAction PlayerTarget for PlayerMotivation
		//-> characterize them as DO (single objectives) or BE (maintenance through affordances)

		PlayerAction	:	["wait","attack","assemble","liberate","recover",
							"observe","gather","collect","go to","create","destroy",
							"trade","use","take","defend","kill","talk",
							"intercept","guard","transport","escort"],//need formalization
		PlayerTarget	:	["monster","npc","message","secret of dangerous place",
							"data","magic equipment","scientific technology"],//need formalization and classification of type
		PlayerMotivation:	["spirit","conquest","serenity","wealth","protection",
							"potential","reputation","ability","knowledge",
							"equipment","comfort"],//need formalization, too random

		//without PlayerFailure by PlayerModus
		PlayerFailure	:	["dying","getting lost"],
		//need to think what's the difference with quest structure and how it relate to goal structure,
		//thinking avoidance verbs? also anti motivation is needed?

		PlayerModus		:	["mentoring new life form","building a team",
							"looking for hint","navigating the world",
							"killing everything"]//that's full of bullshit lol, but it's basically a quest structure

	}
}


class story extends generatorLibrary {
	static name = "Story"
	static elements = {
		//STORY SETTING
		//---------------------------------------------------------------------------------------------------------
		StoryAttraction	:	["fear","desire"],								//"apathy?" no? because it's the tension that move the plot
		StoryCost		:	["obtain","lose"], 
		StoryValence	:	["bad","good","neutral"],							//good -> positif, bad -> negatif
		StoryNeed		:	["safety","social relationship","personal growth"],//achievement = aspiration = growth, relation = social
		StorySpace		:	["external process <font color = \"gray\">(event pattern)</font>",
							"external state <font color = \"gray\">(physical space)</font>",
							"internal state <font color = \"gray\">(mindset)</font>",
							"internal process <font color = \"gray\">(behavior pattern)</font>"],//most difficult to translate lol, still trying to figure it out//["event pattern","physical space","mindset","behavior pattern"];//(>>internal/external + process/state) //attitude -> mindset, event -> activity
		StoryTargets	:	["itself","someone","everybody","other"],
		StoryAction		:	["increase","ignore","maintain","decrease"],		//["spend","ignore","hold","destroy"]; should be about resource management, not sure how to make it make sense
					
		//STORY SET UP--------------------

		//PROCESS
		SetupTendency	:	["constructive","destructive"],						//constructive/destructive
		//change (->state) 
		SetupOccurrance	:	["is happening", "has happen", "will happen",
							"isn't happening", "hasn't happen", "will not happen"],	//is/has/will [not] happen-ing 
		SetupTarget		:	["something","resource"],								//to something/resource

		//STATE
		SetupQuantity	:	["absence", "presence","deficit","excess","uncommon state"],//absence/presence/deficit/excess/uncommon_state
		//var Setup;//of something/resource 
		SetupIssue		:	["abnormality", "problem"],							//provoke abnormality/problem

		//RESULT
		SetupTense		:	["is causing", "has caused", "will cause",
							"isn't causing", "hasn't caused", "won't cause"],		//cause [not] 
		SetupPeople		:	["person", "group"]									//to person/group 
	}
}


class WorldDesign extends generatorLibrary {
	static name = "World design"
	static elements = {	
		//world design
		//set in WorldSize WorldTone WorldGenre world
		WorldSize		:	["tiny","medium size","big","huge", "infinite"],	//arbitrary size = 1²,3²,5²,7²,inf in km, should add a scope element (the unit size) from room to galactic universe
		WorldTone		:	["dark","atmospheric","funny","dangerous"," immersive ",
							"typical", "cinematic", "beautiful","cartoon"],		//need more practical classification?
		WorldGenre		:	["dream","prehistoric","futuristic","superheroes",
							"noir","steampunk","cyberpunk","fantasy",
							"sword and sorcery","science fiction","urban",
							"space opera","underground","hardboiled",
							"underwater","post apocalyptic","military"]			//basically the set of objects, bahevior and rules, need a breakdown, possibly generating one from scratch
	}
}

