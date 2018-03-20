
//GAME DESIGN
//type of game			//It's a NumPlayer player GameView GameGenre game
var NumPlayer			= ["single","asynchrone","multi","p2p","two","4","8",
							"16","24","32","64","massively multi"];
var GameView			= ["text","side scroller","top down","first person",
							"third person","over the shoulder","split screen",
							"isometric","axonometric","alternate reality",
							"augmented reality","Virtual reality"];
var GameGenre			= ["immersive sim","story","roguelike","beat'm up",
							"sport","open world","combat","building","art",
							"hop and bop","rpg","shooter","4X","puzzle",
							"tactic","racing","arena shooter","simulation",
							"management","artillery","dollhouse","adventure",
							"social","Wrpg","Jrpg","Crpg"];

//world design			//set in WorldSize WorldTone WorldGenre world
var WorldSize			= ["tiny","average","big","huge"];
var WorldTone			= ["dark","atmospheric","funny","dangerous"];
var WorldGenre			= ["dream","prehistoric","futuristic","superheroes",
							"noir","steampunk","cyberpunk","fantasy",
							"sword and sorcery","science fiction","urban",
							"space opera","underground","hardboiled",
							"underwater","post apocalyptic","metroidvania"];

//gameplay concept		//where the player is a PlayerRole
var PlayerRole			= ["wizard","tomboy","sorcerer","sorceress","cosmonaut",
							"guy","soldier","bro dude","faery","man","man",
							"mascot animal","regular person","game designer",
							"effeminate hero"];
						//who want to PlayerAction PlayerTarget for PlayerMotivation
var PlayerAction		= ["wait","attack","assemble","liberate","recover",
							"observe","gather","collect","goto","create","destroy",
							"trade","use","take","defend","kill","talk",
							"intercept","guard","transport","escort"];
var PlayerTarget		= ["monster","npc","message","secret of dangerous place",
							"data","magic equipment","scientific technology"];
var PlayerMotivation	= ["spirit","conquest","serenity","wealth","protection",
							"potential","reputation","ability","knowledge",
							"equipment","comfort"];
						//without PlayerFailure by PlayerModus
var PlayerFailure		= ["dying","getting lost"];
var PlayerModus			= ["mentoring new life form","building a team",
							"looking for hint","navigating the world",
							"killing everything"];

//STORY SETTING
var StoryAttraction		= ["fear","desire","apathy?"];//"fear","desire","apathy?"
var StoryCost			= ["obtain","lose"]; 
var StoryValence		= ["negatif","positif","neutral"];
var StoryNeed			= ["safety","relation","aspiration"];//achievement = aspiration
var StorySpace			= ["activity","space","attitude","behavior"];//(>>internal/external + process/state)
var StoryTargets		= ["itself","someone","everybody","other"];
var StoryAction			= ["spend","ignore","hold","destroy"];


function RandomWord(word){
	//alert("here")
	return word[ Math.floor(Math.random() * word.length)];
}


//resolution
//StoryAttraction to StoryCost - StoryValence StoryNeed of StorySpace for StoryTargets

var c1 = RandomWord(StoryAttraction);
var c2 = RandomWord(StoryCost);
var c3 = RandomWord(StoryValence);
var c4 = RandomWord(StoryNeed);
var c5 = RandomWord(StorySpace);
var c6 = RandomWord(StoryTargets);

var resolution = c1 + c2 + c3 + c4 + c5 + c6;




document.write(resolution);

