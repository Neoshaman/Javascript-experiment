//game design
//GAME DESIGN---------------------------------------------------------------------------------------------
//--- -> mean it's another category of its own
//put all array group into its own object to allow nested function refresh?
//type of game			//It's a NumPlayer player GameView GameGenre game
var NumPlayer		= ["single player","multi players","massively multi players",
				   "two players","4 players","8 players",
				   "16 players","24 players","32 players","64 players"
				   // ---methode of connection
				   ];//---place of play (play space)
				   
var GameView		= ["text","alternate reality",//text based
				   "side scroller",//2d vertical
				   "top down","isometric","axonometric",//2d top down
				   "card based","board based","menu based",//abstract form
				   "first person","third person","over the shoulder","virtual reality","fixed camera",//3d map
				   "split screen","augmented reality"];//alternatives

var GameLevel		= [" open world ", " arena "," metroidvania "," non linear ",//open structure
				   " linear ",  " corridor ", " branching "//linear structures
				   //---goal type
				   //---method of navigation, movement type
				   ];//---type of interaction

var GameTick		= [" turn based ", " real time ", " asynchrone "];

var GameGenre		= ["story","art","social","dollhouse","adventure",//narrative
				   "sport","racing","driving",//sport
				   "4X","strategy","tactic",//wargames
				   "building","management","simulation","puzzle",//maanagement
				   "platformer","hop and bop","collecthon",//platformer
				   "beat'm up","combat","brawler","fighting",//fighting
				   "artillery","shooter",//shooting
				   "roguelike","rogue lite",//pcg
				   "rpg","Wrpg","Jrpg","Crpg"];//rpg

var GameNavigation = [" auto scrolling ", " on rail "];
var GameGoals	   = [" infinite "," aimless "," sandbox ", " multi ending "];
var GameInteractionType = [" deck building "];
var GamePlaySpace  = ["on site"];
var GameConnection = ["p2p","online","MMO"];

function gametype() {
	return "It's a "
	+ RandomWord(NumPlayer) + " " + ", "
	+ RandomWord(GameView)
	+ RandomWord(GameLevel) + ","
	+ RandomWord(GameTick) + " "
	+ RandomWord(GameGenre)
	+ " game.";
}
var GameTypeObj = {
	PlayerNumber: "",
	GameView: "",
	LevelDesign: "",
	GameGenre: ""
};

function createGameTypeObj(){//fill and return a GameTypeObj

};
function gameTypeObjToString(){

};