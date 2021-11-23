class storyGenerator extends gameGenerator{
	static library = story
}

//resolution: StoryAttraction to StoryCost - StoryValence StoryNeed of StorySpace for StoryTargets
class resolutionObject extends storyGenerator{
	data = {
		attraction	: null,		//key
		cost		: null,		//key
		valence		: null,		//key
		need		: null,		//key
		space		: null,		//key
		target		: null		//key
	}
	reference = {
		attraction	: storyGenerator.library.elements.StoryAttraction,		//key
		cost		: storyGenerator.library.elements.StoryCost,		//key
		valence		: storyGenerator.library.elements.StoryValence,		//key
		need		: storyGenerator.library.elements.StoryNeed,		//key
		space		: storyGenerator.library.elements.StorySpace,		//key
		target		: storyGenerator.library.elements.StoryTargets		//key
	}
	getDefaultString() {
		return `
		${this.data.attraction} to 
		${this.data.cost} 
		${this.data.valence} 
		${this.data.need}, caused by 
		${this.data.space /*of -> in -> caused by*/}, for 
		${this.data.target}`
	}
	clearData(){
		this.data.attraction	= null		//key
		this.data.cost			= null		//key
		this.data.valence		= null		//key
		this.data.need			= null		//key
		this.data.space			= null		//key
		this.data.target		= null		//key
	}
}
//attitude: StoryTargets StoryAction - StoryValence StoryNeed of StorySpace for StoryTargets
class attitudeObject extends storyGenerator{
	data = {
		target1		: null,		//key
		action		: null,		//key
		valence		: null,		//key
		need		: null,		//key
		space		: null,		//key
		target2		: null		//key
	}
	reference = {
		target1		: storyGenerator.library.elements.StoryTargets,		//key
		action		: storyGenerator.library.elements.StoryAction,		//key
		valence		: storyGenerator.library.elements.StoryValence,		//key
		need		: storyGenerator.library.elements.StoryNeed,		//key
		space		: storyGenerator.library.elements.StorySpace,		//key
		target2		: storyGenerator.library.elements.StoryTargets		//key
	}
	getDefaultString() {
		return `
		${this.data.target1} 
		${this.data.action} 
		${this.data.valence} 
		${this.data.need}, caused by 
		${this.data.space /*of -> in -> caused by*/}, for 
		${this.data.target2}`
	}
	clearData(){
		this.data.target1	= null		//key
		this.data.action	= null		//key
		this.data.valence	= null		//key
		this.data.need		= null		//key
		this.data.space		= null		//key
		this.data.target2	= null		//key
	}
}
//action: StoryAction StoryNeed of StoryTargets
class actionObject extends storyGenerator {
	data = {
		action	: null,		//key
		need	: null,		//key
		target	: null		//key
	}
	reference = {
		action	: storyGenerator.library.elements.StoryAction,		//key
		need	: storyGenerator.library.elements.StoryNeed,		//key
		target	: storyGenerator.library.elements.StoryTargets		//key
	}
	getDefaultString(){return `
		${this.data.action} 
		${this.data.need} of 
		${this.data.target}`
	}
	clearData(){
		this.data.action	= null		//key
		this.data.need		= null		//key
		this.data.target	= null		//key
	}
}
//event: StoryTargets StoryAction StoryNeed of StoryTargets
class eventObject extends storyGenerator {
	data = {
		target1		: null,		//key
		action		: null,		//key
		need		: null,		//key
		target2		: null		//key
	}
	reference = {
		target1		: storyGenerator.library.elements.StoryTargets,		//key
		action		: storyGenerator.library.elements.StoryAction,		//key
		need		: storyGenerator.library.elements.StoryNeed,		//key
		target2		: storyGenerator.library.elements.StoryTargets		//key
	}
	getDefaultString() {
		return `
		${this.data.target1} 
		${this.data.action} 
		${this.data.need} of 
		${this.data.target2}`
	}
	clearData(){
		this.data.target1	= null		//key
		this.data.action	= null		//key
		this.data.need		= null		//key
		this.data.target2	= null		//key
	}
}
class processObject extends storyGenerator {
	data = {
		tendency	: null,		//key
		occurrance	: null,		//key
		target		: null		//key
	}
	reference = {
		tendency	: storyGenerator.library.elements.SetupTendency,		//key
		occurrance	: storyGenerator.library.elements.SetupOccurrance,		//key
		target		: storyGenerator.library.elements.SetupTarget		//key
	}
	getDefaultString() {
		return `
		${this.data.tendency} change 
		${this.data.occurrance} to 
		${this.data.target}`
	}
	clearData(){
		this.data.tendency		= null		//key
		this.data.occurrance	= null		//key
		this.data.target		= null		//key
	}
}
class stateObject extends storyGenerator {
	data = {
		quantity	: null,		//key
		target		: null,		//key
		issue		: null		//key
	}
	reference = {
		quantity	: storyGenerator.library.elements.SetupQuantity,	//key
		target		: storyGenerator.library.elements.SetupTarget,		//key
		issue		: storyGenerator.library.elements.SetupIssue		//key
	}
	getDefaultString() {
		return `
		${this.data.quantity} of 
		${this.data.target} provoke 
		${this.data.issue}`
	}
	clearData(){
		this.data.quantity	= null		//key
		this.data.target	= null		//key
		this.data.issue		= null		//key
	}
}
//balance: StoryValence StoryNeed of StorySpace for StoryTargets 
class themeObject extends storyGenerator {
	data = {
		valence		: null,		//key
		need		: null,		//key
		space		: null,		//key
		target		: null		//key
	}
	data = {
		valence		: storyGenerator.library.elements.StoryValence,		//key
		need		: storyGenerator.library.elements.StoryNeed,		//key
		space		: storyGenerator.library.elements.StorySpace,		//key
		target		: storyGenerator.library.elements.StoryTargets		//key
	}
	getDefaultString() {
		return `
		${this.data.valence} 
		${this.data.need}, caused by 
		${this.data.space}, for 
		${this.data.target}`
	}
	clearData(){
		this.data.valence	= null		//key
		this.data.need		= null		//key
		this.data.space		= null		//key
		this.data.target	= null		//key
	}
}
class typeObject extends storyGenerator {//-----------------------------<<<<<
	data = {
		type	: null			//object
	}
	data = {
		type	: null			//object
	}
	getDefaultString(){
		if (this.data.type === "process")
		{ return `1. ${processObject.createDefaultString()}`}
		else
		{ return `2. ${stateObject.createDefaultString()}`}
	}//the process/state
	clearData(){
		this.data.type	= null		//object
	}
	selectType(){
		let r = Math.random()*2
		if (r>1)
		{return "process"}
		else
		{return "state"} 
	}
}
class ResultObject extends storyGenerator {
	data = {
		type	: null,		//object
		tense	: null,		//key
		valence	: null,		//key
		need	: null,		//key
		space	: null,		//key
		people	: null		//key
	}
	data = {
		type	: null,		//object
		tense	: storyGenerator.library.elements.SetupTense,		//key
		valence	: storyGenerator.library.elements.StoryValence,		//key
		need	: storyGenerator.library.elements.StoryNeed,		//key
		space	: storyGenerator.library.elements.StorySpace,		//key
		people	: storyGenerator.library.elements.SetupPeople		//key
	}
	getDefaultString(){
		return `
		${this.data.type}, 
		${this.data.tense} <font color = \"blue\">
		${this.data.valence} 
		${this.data.need}, caused by 
		${this.data.space}</font>, to 
		${this.data.people}`
	}
	clearData(){
		this.data.type		= null		//object
		this.data.tense		= null		//key
		this.data.valence	= null		//key
		this.data.need		= null		//key
		this.data.space		= null		//key
		this.data.people	= null		//key
	}
}
//(theme) is greater than theme)
class balanceObject extends storyGenerator {
	data = {
		theme1	: null,		//object
		theme2	: null		//object
	}
	data = {
		theme1	: null,		//object
		theme2	: null		//object
	}
	getDefaultString() {
		return `
		${themeObject.createDefaultString()}
		<br> is greater than <br> 
		${themeObject.createDefaultString()}`;
	}
	clearData(){
		this.data.theme1	= null		//object
		this.data.theme2	= null		//object
	}
}