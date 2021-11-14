const story = {
	name: "Story",
	elements: {
		//STORY SETTING
		//---------------------------------------------------------------------------------------------------------
		StoryAttraction		: ["fear","desire"],								//"apathy?" no? because it's the tension that move the plot
		StoryCost			: ["obtain","lose"], 
		StoryValence		: ["bad","good","neutral"],							//good -> positif, bad -> negatif
		StoryNeed			: ["safety","social relationship","personal growth"],//achievement = aspiration = growth, relation = social
		StorySpace			: ["external process <font color = \"gray\">(event pattern)</font>",
									"external state <font color = \"gray\">(physical space)</font>",
									"internal state <font color = \"gray\">(mindset)</font>",
									"internal process <font color = \"gray\">(behavior pattern)</font>"],//most difficult to translate lol, still trying to figure it out//["event pattern","physical space","mindset","behavior pattern"];//(>>internal/external + process/state) //attitude -> mindset, event -> activity
		StoryTargets		: ["itself","someone","everybody","other"],
		StoryAction			: ["increase","ignore","maintain","decrease"],		//["spend","ignore","hold","destroy"]; should be about resource management, not sure how to make it make sense
					
		//STORY SET UP--------------------

		//PROCESS
		SetupTendency	: ["constructive","destructive"],						//constructive/destructive
		//change (->state) 
		SetupOccurrance	: ["is happening", "has happen", "will happen",
							"isn't happening", "hasn't happen", "will not happen"],	//is/has/will [not] happen-ing 
		SetupTarget		: ["something","resource"],								//to something/resource

		//STATE
		SetupQuantity	: ["absence", "presence","deficit","excess","uncommon state"],//absence/presence/deficit/excess/uncommon_state
		//var Setup;//of something/resource 
		SetupIssue		: ["abnormality", "problem"],							//provoke abnormality/problem

		//RESULT
		SetupTense		: ["is causing", "has caused", "will cause",
							"isn't causing", "hasn't caused", "won't cause"],		//cause [not] 
		SetupPeople		: ["person", "group"]									//to person/group 
	}
}

//resolution
//StoryAttraction to StoryCost - StoryValence StoryNeed of StorySpace for StoryTargets
function resolution() {
	return `
	${RandomWord(StoryAttraction)} to 
	${RandomWord(StoryCost)} 
	${RandomWord(StoryValence)} 
	${RandomWord(StoryNeed)}, caused by 
	${RandomWord(StorySpace) /*of -> in -> caused by*/}, for 
	${RandomWord(StoryTargets)}`
}
var ResolutionObj = {
	attraction: "",
	cost: "",
	valence: "",
	need: "",
	space: "",
	target: ""
}


//attitude
//StoryTargets StoryAction - StoryValence StoryNeed of StorySpace for StoryTargets
function attitude() {
	return `
	${RandomWord(StoryTargets)} 
	${RandomWord(StoryAction)} 
	${RandomWord(StoryValence)} 
	${RandomWord(StoryNeed)}, caused by 
	${RandomWord(StorySpace) /*of -> in -> caused by*/}, for 
	${RandomWord(StoryTargets)}`
}
var AttitudeObj = {
	target1: "",
	action: "",
	valence: "",
	need: "",
	space: "",
	target2:""	
}


//action
//StoryAction StoryNeed of StoryTargets
function action() {
	return `
	${RandomWord(StoryAction)} 
	${RandomWord(StoryNeed)} of 
	${RandomWord(StoryTargets)}`
}
var ActionObj = {
	action: "",
	need: "",
	target: ""
}


//event
//StoryTargets StoryAction StoryNeed of StoryTargets
function events() {
	return `
	${RandomWord(StoryTargets)} 
	${RandomWord(StoryAction)} 
	${RandomWord(StoryNeed)} of 
	${RandomWord(StoryTargets)}`
}
var eventObj = {
	target1: "",
	action:"",
	need:"",
	target2: ""
}


//balance
//StoryValence StoryNeed of StorySpace for StoryTargets (theme)
//is greater than
//(theme)
function theme() {
	return `
	${RandomWord(StoryValence)} 
	${RandomWord(StoryNeed)}, caused by 
	${RandomWord(StorySpace)}, for 
	${RandomWord(StoryTargets)}`
}

var ThemeObj = {
	valence: "",
	need: "",
	space: "",
	target: ""
}

function balance() {
	return `
	${theme()} <br> is greater than <br> 
	${theme()}`;
}	
var QuestObj = {
	theme1: "",
	theme2: ""
}
	
//--------------------

function setupProcess() {
	return `
	${RandomWord(SetupTendency)} change 
	${RandomWord(SetupOccurrance)} to 
	${RandomWord(SetupTarget)}`
}

var ProcessObject = {
	Tendency : "",
	Occurrance : "",
	Target : ""
}
	
function setupState() {
	return `
	${RandomWord(SetupQuantity)} of 
	${RandomWord(SetupTarget)} provoke 
	${RandomWord(SetupIssue)}`
}

var StateObject = {
	Quantity : "",
	Target : "",
	Issue : ""
}

function SetupType(){ var r = Math.random()*2; 
					if (r > 1)
						{ return `1. ${setupProcess()}`}
					else{ return `2. ${setupState()}`}
}//the process/state

function setupResult(){
	return `
	${SetupType()}, 
	${RandomWord(SetupTense)} <font color = \"blue\">
	${RandomWord(StoryValence)} 
	${RandomWord(StoryNeed)}, caused by 
	${RandomWord(StorySpace)}</font>, to 
	${RandomWord(SetupPeople)}`
}

var ResultObject = {
	Tense: "",
	Valence : "",
	Need : "",
	Space : "",
	People : ""
}
