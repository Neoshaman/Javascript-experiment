class story {
	static name = "Story"
	static elements = {
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
Object.seal(story)

class storyGenerator extends gameGenerator{
	static reference = story
}

//resolution: StoryAttraction to StoryCost - StoryValence StoryNeed of StorySpace for StoryTargets
class resolution extends storyGenerator{
	data = {
		attraction: "",
		cost: "",
		valence: "",
		need: "",
		space: "",
		target: ""
	}
	defaultString() {
		return `
		${RandomWord(StoryAttraction)} to 
		${RandomWord(StoryCost)} 
		${RandomWord(StoryValence)} 
		${RandomWord(StoryNeed)}, caused by 
		${RandomWord(StorySpace) /*of -> in -> caused by*/}, for 
		${RandomWord(StoryTargets)}`
	}

}
//attitude: StoryTargets StoryAction - StoryValence StoryNeed of StorySpace for StoryTargets
class attitude extends storyGenerator{
	data = {
		target1: "",
		action: "",
		valence: "",
		need: "",
		space: "",
		target2:""	
	}
	defaultString() {
		return `
		${RandomWord(StoryTargets)} 
		${RandomWord(StoryAction)} 
		${RandomWord(StoryValence)} 
		${RandomWord(StoryNeed)}, caused by 
		${RandomWord(StorySpace) /*of -> in -> caused by*/}, for 
		${RandomWord(StoryTargets)}`
	}
}
//action: StoryAction StoryNeed of StoryTargets
class action extends storyGenerator {
	data = {
		action: "",
		need: "",
		target: ""
	}
	defaultString(){return `
		${RandomWord(StoryAction)} 
		${RandomWord(StoryNeed)} of 
		${RandomWord(StoryTargets)}`
	}
}
//event: StoryTargets StoryAction StoryNeed of StoryTargets
class event extends storyGenerator {
	data = {
		target1: "",
		action:"",
		need:"",
		target2: ""
	}
	defaultString() {
		return `
		${RandomWord(StoryTargets)} 
		${RandomWord(StoryAction)} 
		${RandomWord(StoryNeed)} of 
		${RandomWord(StoryTargets)}`
	}
}
//balance: StoryValence StoryNeed of StorySpace for StoryTargets 
//(theme) is greater than theme)
class theme extends storyGenerator {
	data = {
		valence: "",
		need: "",
		space: "",
		target: ""
	}
	defaultString() {
		return `
		${RandomWord(StoryValence)} 
		${RandomWord(StoryNeed)}, caused by 
		${RandomWord(StorySpace)}, for 
		${RandomWord(StoryTargets)}`
	}
}
class balance extends storyGenerator {
	data = {
		theme1: "",
		theme2: ""
	}
	defaultString() {
		return `
		${theme()} <br> is greater than <br> 
		${theme()}`;
	}
}
class process extends storyGenerator {
	data = {
	Tendency : "",
	Occurrance : "",
	Target : ""
	}
	defaultString() {
		return `
		${RandomWord(SetupTendency)} change 
		${RandomWord(SetupOccurrance)} to 
		${RandomWord(SetupTarget)}`
	}
}
class state extends storyGenerator {
	data = {
		Quantity : "",
		Target : "",
		Issue : ""
	}
	defaultString() {
		return `
		${RandomWord(SetupQuantity)} of 
		${RandomWord(SetupTarget)} provoke 
		${RandomWord(SetupIssue)}`
	}
}
class type extends storyGenerator {//-----------------------------<<<<<
	SetupType(){ var r = Math.random()*2; 
					if (r > 1)
						{ return `1. ${setupProcess()}`}
					else{ return `2. ${setupState()}`}
	}//the process/state
}
class Result extends storyGenerator {
	data = {
		Tense: "",
		Valence : "",
		Need : "",
		Space : "",
		People : ""
	}
	defaultString(){
		return `
		${SetupType()}, 
		${RandomWord(SetupTense)} <font color = \"blue\">
		${RandomWord(StoryValence)} 
		${RandomWord(StoryNeed)}, caused by 
		${RandomWord(StorySpace)}</font>, to 
		${RandomWord(SetupPeople)}`
	}
}
