//STORY SETTING
//---------------------------------------------------------------------------------------------------------
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
