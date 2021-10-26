//gameplay concept
//where the player is a PlayerRole
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