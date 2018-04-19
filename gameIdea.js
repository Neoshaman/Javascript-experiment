
//GAME DESIGN---------------------------------------------------------------------------------------------
//--- -> mean it's another category of its own
//put all array group into its own object to allow nested function refresh?
//type of game			//It's a NumPlayer player GameView GameGenre game
var NumPlayer			= ["single player","multi players","massively multi players",
				   "two players","4 players","8 players",
				   "16 players","24 players","32 players","64 players",
				   "p2p","online","MMO",
				   "on site"];//---place of play
var GameView			= ["text","alternate reality",//text based
				   "side scroller",//2d vertical
				   "top down","isometric","axonometric",//2d top down
				   "card based","board based",//abstract form
				   "first person","third person","over the shoulder","virtual reality","fixed camera",//3d map
				   "split screen","augmented reality"];//alternatives
var GameLevel			= [" open world ", " arena "," metroidvania "," non linear ",//open structure
				   " linear ",  " corridor ", " branching ",//linear structures
				   " infinite "," aimless "," sandbox ", " multi ending ",//---goal type
				   " auto scrolling ", " on rail ",//---method of navigation, movement type
				   " deck building "];//type of interaction
var GameTick			= [" turn based ", " real time ", " asynchrone "]
var GameGenre			= ["story","art","social","dollhouse","adventure",//narrative
				   "sport","racing","driving",//sport
				   "4X","strategy","tactic",//wargames
				   "building","management","simulation","puzzle",//maanagement
				   "platformer","hop and bop","collecthon",//platformer
				   "beat'm up","combat","brawler","fighting",//fighting
				   "artillery","shooter",//shooting
				   "roguelike","rogue lite",//pcg
				   "rpg","Wrpg","Jrpg","Crpg"];//rpg
function gametype() {
	return "It's a " + RandomWord(NumPlayer) + " " + ", " +
		RandomWord(GameView) + RandomWord(GameLevel) + "," + RandomWord(GameTick) + 
		" " + RandomWord(GameGenre) + " game.";
}
var GameTypeObj = {
	PlayerNumber: "",
	GameView: "",
	LevelDesign: "",
	GameGenre: ""
};
//***********************************************************							
//world design			//set in WorldSize WorldTone WorldGenre world
var WorldSize			= ["tiny","medium size","big","huge", "infinite"];//arbitrary size = 1²,3²,5²,7²,inf in km, should add a scope element (the unit size) from room to galactic universe
var WorldTone			= ["dark","atmospheric","funny","dangerous"," immersive ",
							"typical", "cinematic", "beautiful","cartoon"];//need more practical classification?
var WorldGenre			= ["dream","prehistoric","futuristic","superheroes",
							"noir","steampunk","cyberpunk","fantasy",
							"sword and sorcery","science fiction","urban",
							"space opera","underground","hardboiled",
							"underwater","post apocalyptic","military"];//basically the set of objects, bahevior and rules, need a breakdown, possibly generating one from scratch
function worldtype() {
	return "Set in " + RandomWord(WorldSize) + " " + RandomWord(WorldTone) + " " + RandomWord(WorldGenre) + " world.";
}
var WorldTypeObj = {
	worldSize: "",
	worldTone: "",
	worldGenre: ""
};
//***********************************************************
//gameplay concept		//where the player is a PlayerRole
var PlayerRole			= ["wizard","tomboy","sorcerer","sorceress","cosmonaut",
							"guy","soldier","bro dude","faery","man","man",
							"mascot animal","regular person","game designer",
							"effeminate hero"];//need a better breakdown and a character generator
						//quest->who want to PlayerAction PlayerTarget for PlayerMotivation
						//-> characterize them as DO (single objectives) or BE (maintenance through affordances)
var PlayerAction		= ["wait","attack","assemble","liberate","recover",
							"observe","gather","collect","go to","create","destroy",
							"trade","use","take","defend","kill","talk",
							"intercept","guard","transport","escort"];//need formalization
var PlayerTarget		= ["monster","npc","message","secret of dangerous place",
							"data","magic equipment","scientific technology"];//need formalization and classification of type
var PlayerMotivation	= ["spirit","conquest","serenity","wealth","protection",
							"potential","reputation","ability","knowledge",
							"equipment","comfort"];//need formalization, too random
						//without PlayerFailure by PlayerModus
var PlayerFailure		= ["dying","getting lost"];//need to think what's the difference with quest structure and how it relate to goal structure, thinking avoidance verbs? also anti motivation is needed?
var PlayerModus			= ["mentoring new life form","building a team",
							"looking for hint","navigating the world",
							"killing everything"];//that's full of bullshit lol, but it's basically a quest structure
function concept() {
	return	"<font color = \"green\">(Role)</font> Where the player is a " + RandomWord(PlayerRole) + "<br>" +
	"<font color = \"green\">(Quest: <font color = \"gray\">action, target, motivation</font>)</font> " + "<br>" +
	"who want to " + RandomWord(PlayerAction) + " " + RandomWord(PlayerTarget) + " for " + RandomWord(PlayerMotivation) + "<br>" +
	"<font color = \"green\">(Failure condition)</font> without " + RandomWord(PlayerFailure) +
	"<br> <font color = \"green\">(Progression)</font> by " + RandomWord (PlayerModus);
}
var RoleObj = {
	Role: ""
};
var QuestObj = {
	action: "",
	target: "",
	motivation: ""
};
var FailureObj = {//is a type of quest
	failure: ""
};
var ModusObj = {//is a type of quest
	modus: ""
};
//***********************************************************
//STORY SETTING---------------------------------------------------------------------------------------------------------
var StoryAttraction		= ["fear","desire"];//"apathy?" no? because it's the tension that move the plot
var StoryCost			= ["obtain","lose"]; 
var StoryValence		= ["bad","good","neutral"]; //good -> positif, bad -> negatif
var StoryNeed			= ["safety","social relationship","personal growth"];//achievement = aspiration = growth, relation = social
var StorySpace			= ["external process <font color = \"gray\">(event pattern)</font>",
							"external state <font color = \"gray\">(physical space)</font>",
							"internal state <font color = \"gray\">(mindset)</font>",
							"internal process <font color = \"gray\">(behavior pattern)</font>"];//most difficult to translate lol, still trying to figure it out//["event pattern","physical space","mindset","behavior pattern"];//(>>internal/external + process/state) //attitude -> mindset, event -> activity
var StoryTargets		= ["itself","someone","everybody","other"];
var StoryAction			= ["increase","ignore","maintain","decrease"];//["spend","ignore","hold","destroy"]; should be about resource management, not sure how to make it make sense

function RandomWord(word){
	return word[ Math.floor(Math.random() * word.length)];
}

//resolution
//StoryAttraction to StoryCost - StoryValence StoryNeed of StorySpace for StoryTargets
function resolution() {
	return RandomWord(StoryAttraction) + " to " + 
	RandomWord(StoryCost) + " " + RandomWord(StoryValence) +
	" " + RandomWord(StoryNeed) + ", caused by "  + RandomWord(StorySpace) + //of -> in -> caused by
	", for " + RandomWord(StoryTargets);
}
var ResolutionObj = {
	attraction: "",
	cost: "",
	valence: "",
	need: "",
	space: "",
	target: ""
};
//attitude
//StoryTargets StoryAction - StoryValence StoryNeed of StorySpace for StoryTargets
function attitude() {
	return RandomWord(StoryTargets) + " " + 
	RandomWord(StoryAction) + " " + RandomWord(StoryValence) +
	" " + RandomWord(StoryNeed) + ", caused by "  + RandomWord(StorySpace) + //of -> in -> caused by
	", for " + RandomWord(StoryTargets);
}
var AttitudeObj = {
	target1: "",
	action: "",
	valence: "",
	need: "",
	space: "",
	target2:""	
};
//action
//StoryAction StoryNeed of StoryTargets
function action() {
	return RandomWord(StoryAction) + " " + 
	RandomWord(StoryNeed) + " of " + RandomWord(StoryTargets);
}
var ActionObj = {
	action: "",
	need: "",
	target: ""
};
//event
//StoryTargets StoryAction StoryNeed of StoryTargets
function events() {
	return RandomWord(StoryTargets) + " " + 
	RandomWord(StoryAction) + " " + RandomWord(StoryNeed) +
	" of " + RandomWord(StoryTargets);
}
var eventObj = {
	target1: "",
	action:"",
	need:"",
	target2: ""
};
//balance
//StoryValence StoryNeed of StorySpace for StoryTargets (theme)
//is greater than
//(theme)
function theme1() {
	return RandomWord(StoryValence) + " " + 
	RandomWord(StoryNeed) + ", caused by " + RandomWord(StorySpace) +
	", for " + RandomWord(StoryTargets);
}
function theme2() {
	return RandomWord(StoryValence) + " " + 
	RandomWord(StoryNeed) + ", caused by " + RandomWord(StorySpace) +
	", for " + RandomWord(StoryTargets);
}
var ThemeObj = {
	valence: "",
	need: "",
	space: "",
	target: ""
};
//......................................
function balance() {
	return theme1() + " <br> is greater than <br> " + theme2();
}	
var QuestObj = {
	theme1: "",
	theme2: ""
};
	
	
//STORY SET UP--------------------

//PROCESS
var SetupTendency = ["constructive","destructive"];//constructive/destructive
//change (->state) 
var SetupOccurrance = ["is happening", "has happen", "will happen",
					"isn't happening", "hasn't happen", "will not happen"];//is/has/will [not] happen-ing 
var SetupTarget = ["something","resource"];//to something/resource
function setupProcess() {return RandomWord(SetupTendency) + " change " + RandomWord(SetupOccurrance) + " to " + RandomWord(SetupTarget);}

//STATE
var SetupQuantity = ["absence", "presence","deficit","excess","uncommon state"];//absence/presence/deficit/excess/uncommon_state
//var Setup;//of something/resource 
var SetupIssue = ["abnormality", "problem"];//provoke abnormality/problem
function setupState() {return RandomWord(SetupQuantity) + " of " + RandomWord(SetupTarget) + " provoke " + RandomWord(SetupIssue);}

//RESULT
var SetupTense = ["is causing", "has caused", "will cause",
				"isn't causing", "hasn't caused", "won't cause"];//cause [not] 
var SetupPeople = ["person", "group"];//to person/group 
function SetupType(){ var r = Math.random()*2; //	alert(r);
					if (r > 1)
						{return "1. " + setupProcess(); alert(1);}
					else{ return "2. " + setupState();alert(2);}; alert(3);};//the process/state
function setupResult(){ return SetupType() + ", " +
						" " + RandomWord(SetupTense)+ " " +
						"<font color = \"blue\">" +
						RandomWord(StoryValence) + " " + RandomWord(StoryNeed) + ", caused by " + RandomWord(StorySpace) +
						"</font>" +
						", to " +
						RandomWord(SetupPeople);}

//DISPLAY----------------------------------------------------------------------------------------------------------------
function GameDesign(){
document.getElementById("test").innerHTML =
"<br> <font color = \"red\"> Game Type: </font><font color = \"gray\">player number, camera, level type, game tick, genre</font> <br>" + gametype() +
"<br> <font color = \"red\">World type: </font><font color = \"gray\">size, tone, genre</font><br>" + worldtype() +
"<br> <font color = \"red\">Concept: </font><br>" + concept() +
"<br>" +
"<br> <font color = \"red\">Theme: <br> </font>" + balance() +
"<br> <font color = \"red\">Set up : <br> </font>" + setupResult() +
"<br> <font color = \"red\">Goal: <br></font>" + resolution() + //Goal -> resolution
"<br>" +
"<br> <font color = \"red\">Attitude: <br></font>" + attitude() +
"<br> <font color = \"red\">Action: <br></font>" + action() +
"<br> <font color = \"red\">Event: <br></font>" + events() +
"<br>"
;
}

var elem1 = document.getElementById("test");
var elem2 = document.getElementsByTagName("p");

elem1.innerHTML = " something1";
elem2[0].innerHTML = " something2";
GameDesign();
//setInterval(GameDesign,10000);

//todo
//character attribute generator
//world attribute generator
//place attribute generator
//detail progression generator
//genre generator
//story structure generator

//RESEARCH-----------------------------------------------------------------------------------------------------

//groupObj -> has -> member (role)

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
//tonalité: positif, negatif, neutre
//style
//rythme: regular, rythmic, chaotic, flat + tempo

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

//--pressions
//stake [fear->risk, desire->benefit]
//|define
//outcomes [bad->punishment, good->reward]
//|stimulate
//need (inhibition->decrease,catalyst->increase)
//|feed
//motivation (skeptic->deconsiderate, advisor->considerate)
//|push
//QUEST GIVER
//|make
//evaluation  (traitor->mislead, mentor->lead)
//|make
//selection (opponent->oppose, allies->support)
//|choose      |request
//OBJECT       AGENT

//--actions
//FAILURES
//^distace to
//resources (sink->decrease, gain->increase)
//|feed
//flow (reduction->decrease, amplification->increase)
//|regulate
//mean (antagonist->destroy, guardian->protect)
//|give
//skill(uncertainty->trouble, certainty->ameliore)
//^use
//AGENT

//--localisations
//direction (trickster->divert, guide->direct)
//|target
//pivot (obstacle->stop, help->move)
//|put in
//motion (bouncer->slow down/reverse, bumper->speed up)
//|through
//path (stretcher->lengthen, shortcut->shorten)
//|encounter
//test (malus->waste, bonus->optimize)
//|pass
//threshold (key->open, lock->lock)
//|distance
//OBJECT
//^distance
//RIVAL AGENT

//--
//VALUE {negative movement<-define, Positive movement<-define}
//|define
//method [actions<-decide, decisions<-influence]
//^orient
//conditions [requirement<-define,pre requisite<-require]
//^impose
//host (repulsor->push away, attractor->get closer)
//|hold
//OBJECT

