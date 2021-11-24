
///////////////////////////////////
// plotEngine elements definitions/
///////////////////////////////////
class plotEnum{
    //enum
    traits = {
        good: "good",
        bad: "bad",
        chaotic: "chaotic"
    }
    skills = {
        physic: "physic",
        mental: "mental",
        social: "social"
    }
    objectType = {
        silouhette:"silouhette",
        main:"main",
        pusher:"pusher"
    }
    relationQuality = {
        unknown:"unknown",
        indifference:"indifference",
        acquaintance:"acquaintance",
        //positive
        friend:"friend",
        goodfriend:"goodfriend",
        lover:"lover",
        //negative
        disgust:"disgust",
        enemy:"enemy",
        nemesis:"nemesis"
    
    }    
    locations = {
        home:"home",
        work:"work",
        house1:"house1",
        house2:"house2",
        park:"park"
    }
    // end enum
}

const namedata = ["Alice","Bob","Bernard","Carole","Dave", "Eve","Mallory",
            "Oscar","Trudy","Isaac","Ivan","Justin","Mathilda",
            "Nestor","Plod","Trent","Vanna","Victor","Walter",
            "Peggy","Pat","Arthur","Merlin"]

//number of objects in teh engine
let maxTraits = 2 //10
let maxSkills = 2 //10
let numberOfPlotObjects = 23

//array of objects
let arrayOfPlotObject = []

class plotObject{
    ID
    name = ""
    type //enum ; Type of the object (Kleenex for plot, Main, pusher with relation)
    traitTab //; 2d array containing the traits value and the tension value threshold for that traits
    skillTab //; 2d array containing the traits value and the tension value threshold for that traits
    relationList = []//; CODE *>WARNING<*; store relation *>list<* for an object
    //--relationNumber
    location//; Current location of the character
    desire//; Evaluated tension within objects, is a fonction of traits
    fear//; Evaluated tension within objects, is a fonction of traits
    //state?
}

//relation links
class link{
    ID
    owner//; owner of the relation ; in case of list in objects
    toward//; Hold the other object identifier toward which there is a relation
    quality//; Quality state of the link
}

///////////////////////////////////
// World state manager            /
///////////////////////////////////
class plotWorld{
    lastPlotId
    lastTensionID
    lastMain
}

class PlotTension{
    ID
    traits
    holder
    strength
    weight
}

///////////////////////////////////
// plots manager                  /
///////////////////////////////////
class plotVar{
    ID
    conditions //tbd var type
    weight

    subject
    Objectif
    agent
    rival

    //decision variables
    opponent
    ally

    traitor
    mentor

    //pression variables
    advisor
    skeptic

    inhibitor
    catalyst

    //action variables
    certainty
    uncertainty

    guardian
    antagonist

    amplification
    reduction

    resources
    gain
    sink
}

class plotStructure{
    //phases variables
    //phase 1
    //phase 2
    //phase 3'
    //phase 3"
    //phase 4
}

//progression variables --used to be called localisation
class progression{
    ID
    step1
    step2
    step3
    step4
}

class step{
    ID
}

class task{
    ID
}

class progress{//--used to be called locations
    ID
}

///////////////////////////////////
// dynamics                       /
///////////////////////////////////
function generatePlotObject(number, type){//move number out as this function should be used in a loop instead
    //let ID
    switch (type) {
        case plotEnum.objectType.silouhette:
            
            break;
        case plotEnum.objectType.main:
            //mainArray[number]
            for (let index = 0; index < mainArray.length; index++) {
                let obj = new plotObject()
                obj.ID = 0//define
                //obj.name = getname + "hero"
                obj.type = type

                for (let t=0; t < maxTraits; t++){
                    //obj.traitTab = randomTrait
                }
                for (let s=0; s < maxSkills; s++){
                    //obj.skillTab = randomskill
                }

                obj.location = 0
                obj.desire = 0
                obj.fear = 0
                
                //mainArray[index] = obj
                arrayOfPlotObject.push(obj)
                //array of objects: add main array      
                //arrayOfObject
            }
            break;
        case plotEnum.objectType.pusher:
           
            break;
                
        default:
            break;
    }
}

function plotWorldInit(){
    //fill with objects
}

function evaluateTraits(thisObject){}
function evaluateSkills(thisObject){}
function evaluateTensions(){
	//evaluate tension within an objects
	//create a tension in the tension list
	//weigth tension according to world context

    //___________________________________________________________________________
    // Define tension (Desire, Fear):
    // the difference between a desired state and current state of an object
    // "Desire" and "Fear" is define by traits intensity
    // "Desire" define state to be acheive and "Fear" to be avoid.
    // Negative tension define "Fear", positive define "Desire"
    //___________________________________________________________________________
}
function evaluatePlot(){
    //weigh plot according to tensions
}
function plotRun(){
    //init plot objects
    //evaluate object for each plot function
    //run plot
}
function plotMain(){
    evaluateTensions()
    evaluatePlot()
    plotRun()
}

//---------------------------------------------
function evaluateRelations(){}

function generateLink(){
    arrayOfPlotObject.forEach(thisObject => {
        let r = Math.random()*9 +1
        thisObject.relationList.length(r)

        for (let index = 0; index < r; index++) {
            thisObject.relationList[index] = new link()
            thisObject.relationList[index].owner = thisObject
            thisObject.relationList[index].quality = Math.random()*8
            thisObject.relationList[index].toward = arrayOfPlotObject[Math.random()*arrayOfPlotObject.length]
        }
    });
}

function generateTension(){
    //;evaluate tension within an objects
	evaluateTraits()
	evaluateSkills()
	evaluateRelations()
	//;create a tension in the tension list
	//;weigth tension according to world context
}

function showObjectList(){
    
    for (let index = 0; index < arrayOfObject.length; index++) {
        element = array[index]

        stringView = `
        ----------------------
        ID: ${element.ID}
        Name:  ${element.name}
        Type:  ${element.type}
        `
        //+ // for t to maxTraits return "traits ${t+1} : ${element.traitTab[t]}"
        //+ // for s to maxSkills return "skills ${s+1} : ${element.skillTab[s]}"
        //+ // for r to element.relationList.length
            //${element.relationlist[r].owner} relation with ${element.relationlist[r].toward}
            //of quality ${element.relationlist[r].quality}
        //location
        //desire
        //fear
    }
}

function showObjectsArray(){
    let output = ""
    for (let index = 0; index < arrayOfPlotObject.length; index++) {
        output += `n: ${index} ${arrayOfPlotObject[index].name}
        `
    }
    return output
}

function showRelationList(){
    let s = `link list: `
    //for all objects, for all relation
    s+= `${thisObject.relationList[index].owner.name}
    relation ${thisObject.relationList[index].quality}
    with ${thisObject.relationList[index].toward.name}
    ------------`
}

function showTensionList(){}

function testingPlot(){
    //init
    generatePlotObject(numberOfPlotObjects, plotEnum.objectType.main)
    generateLink()

    //display
    let result = ""
    result = showObjectList()
    result += showObjectsArray()
    //result += showRelationList()
    return result
}



