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

//resolution
//StoryAttraction to StoryCost - StoryValence StoryNeed of StorySpace for StoryTargets
var resolution = RandomWord(StoryAttraction) + " to " + 
					RandomWord(StoryCost) + " " + RandomWord(StoryValence) +
					" " + RandomWord(StoryNeed) + " of "  + RandomWord(StorySpace) +
					" for " + RandomWord(StoryTargets);
//attitude
//StoryTargets StoryAction - StoryValence StoryNeed of StorySpace for StoryTargets
var attitude = RandomWord(StoryTargets) + " " + 
					RandomWord(StoryAction) + " " + RandomWord(StoryValence) +
					" " + RandomWord(StoryNeed) + " of "  + RandomWord(StorySpace) +
					" for " + RandomWord(StoryTargets);
//action
//StoryAction StoryNeed of StoryTargets
var action = RandomWord(StoryAction) + " " + 
					RandomWord(StoryNeed) + " of " + RandomWord(StoryTargets);
//event
//StoryTargets StoryAction StoryNeed of StoryTargets
var event = RandomWord(StoryTargets) + " " + 
					RandomWord(StoryAction) + " " + RandomWord(StoryNeed) +
					" of " + RandomWord(StoryTargets);
//balance
//StoryValence StoryNeed of StorySpace for StoryTargets (theme)
//is greater than
//(theme)
var theme1 = RandomWord(StoryValence) + " " + 
					RandomWord(StoryNeed) + " of " + RandomWord(StorySpace) +
					" for " + RandomWord(StoryTargets);
var theme2 = RandomWord(StoryValence) + " " + 
					RandomWord(StoryNeed) + " of " + RandomWord(StorySpace) +
					" for " + RandomWord(StoryTargets);

var balance = theme1 + " is greater than " + theme2;			
//--------------------
//process
//constructive/destructive change (state) is/has/will [not] happen-ing to something/resource
//state
//absence/presence/deficit/excess/uncommon_state of something/resource provoke abnormality/problem

//the process/state cause [not] need to person/group 

function RandomWord(var word){
	return math.random() * word.length;
};

//var elem = document.getElementById("test");
var elem = document.getElementsByTagName("p");

document.write("hello world");
alert("alert");
elem.innerHTML = "goraphi";//balance;

//synopsis (story, settings, genre), objective of the game, gameplay, controle, gameplay elements (game object), level design
//1b features, 1c mission statement of the game
//features and game systems, game structure, GOI

//game genre: action done, fantasy fulfill, audience, goal, stake, content, stake
//hand, feet, eyes

//settings:
//collection of objects: type of objects
//style guide: rules of composition
//semantic relation: meaning and their contrast
//emotional expression: tone and atmosphere + fantasy projection

//guide de mise en scène:
//ID
//note
//synopsis
//scenario
//decoupage des evenements
//theme//emotion dominante
//tonalité
//style
//rythme

//gameplay
//motivation
//but(objectif)
//payoff
//element de gameplay
//level design vue generale
//degre de spectacular
//tempo
//niveau danger (reelle/virtuelle)
//niveau de difficulté (reelle/virtuelle)
//niveau de complexité (reelle/virtuelle)


//homeostasis emotion:
//fear: avoid place that destroy you
//joy: move to place that is safe
//memory: pattern in time for avoiding/moving to place
//curiosity: seeking knowledge and maintain database
//social: mutualizing knowledge
//logic: generalization of knowledge
//consciousness: reflect self and knowledge
//metaphysics: being able to reboot the knowledge and logic of existence
//-> happen in period of crisis or complete satisfaction or boredom when logical dead end happen
