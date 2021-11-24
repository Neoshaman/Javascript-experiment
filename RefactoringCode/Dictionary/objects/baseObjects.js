class gameGenerator{

	name		= "empty"
	id			= null
	library		= null
	data		= null

	//reference key list? what about object?
	reference = {
		//objectList	= null,
		//keyList		= null
		
		//tuple objects associating data key to library key: 
		//{this.data.key,this.reference.element.key}
		
		//tuple objects associating objects field to class constructor?: 
		//{this.data.key,this.gamegenerator?}
	}

	getDefaultString(){
		return ""
	}

	getDataKeys(){}
	clearData(){
		for (const key in this.data) {
			//if (Object.hasOwnProperty.call(this.data, key)) {
				this.data[key] = null
			//}
		}
	}

	clear(){
		this.name		= "empty"
		this.id			= null
		this.library	= null
		this.data		= null
		this.clearData()
	}

	isDataValid(){
		for (const key in this.data) {
			//if (Object.hasOwnProperty.call(this.data, key)) {
				if (this.data != null){
					if (gameGenerator.isEmpty( this.data[key] ) )
					{	return false	}
					//else
					//{	return true		}
				}
				else {
					console.log("no data")
					return false
				}

				return true
			//}
		}
	}

	iterateKeys(object){
		for (const key in object) {
			if (Object.hasOwnProperty.call(object, key)) {
				//const element = object[key];
				//return key
			}
		}
	}
	setRandomData(){
		
		//cycle through key in reference and get the array
		//cycle through object list and generate

		//this.data.key = randomword(this.reference.element.key)

		//item{library,key, index, content }
	}
	
	setData(){}

	setDatafrom(object){
		if (this.isSameObjectType(object)){
			this.data = object.data
		}
		else{
			console.log("error: not same type of data")
		}
	}

	copy(object){
		this.name = "empty"
	id = null
	reference = null
	data = null

		if (this.isSameObjectType(object)){
			this.data = object.data
		}
		else{
			console.log("error: not same type of data")
		}
	}

	getIdentityString(){
		return "name: " + this.name + " - id: " + this.id + " - dictionary: "+ this.library + " - data: " + this.getDataKeysAsString()
	}

	getDataKeysAsString(){
		let datalist = ""
		for (const key in this.data) {
				if (this.data != null){
					datalist += this.data[key] +", "
				}
		}
		return datalist
	}
//	getData(){}   just pass name.data
//	setData(){} ??

//createEmptyObjectFrom(){}

//check empty field

//createRandomDataObjectFrom(Dictionary){}

//createObjectFromData(Dictionary,array){}

//changeData(Object, Dictionary, array){}


//objectToString(Object){}

//showElements(dictionary.elements)

//findleaf()

//wrapper to clean the string generation from html
//color(color, string) -> string can be a function that return string

//showElement: function(list){//KeyName instead of list or KeyNameOfList
//		let result = ""
//		list.forEach((element,index) => {
//			result += `${index}.${element} `
//		})
//		return result
//	},

//what if object are just array of integer that reference the dictionary

//


	static RandomWord(word){
		return word[ Math.floor(Math.random() * word.length)]
	}

	static randomFromArray(array){
		let index = Math.floor(Math.random() * array.length)
		return array[index]
	}

	static randomIndexFromArray(array){
		let index = Math.floor(Math.random() * array.length)
		return index
	}

	static randomArrayTuple(array){
		let number = Math.floor(Math.random() * array.length)
		return {index: number, content: array[index]}
	}

	isEmpty(field){
		test = false
		//  \s is the regex for "whitespace", and g is the "global" flag, meaning match ALL \s (whitespaces).
		if (typeof field === String) {field = field.replace(/\s+/g, '')}		
		if ( field === null || field === "" || field === 0 || field === "empty" ){
			console.log("error: empty field")
			return true
		}
	}
	isSameObjectType(object){
		return object.constructor.name === this.constructor.name
	}
	//return tuple + reference + key
}
function freezeLibrary(library){
	Object.freeze(library)
}
class generatorLibrary{
	name = ""
	elements = null
	//generate/update library from folder/file collections
	freeze(){freezeLibrary(this)}

	getElementsKeys(){}
	getKeysElements(){}
}
class item{//goes into data field
	library //which bibliotheque
	key // which key of the bibliotheque holding the array of elements
	index // which index of the array holding elements
	content //content to be used in generation
}

class content{
	//bibliotheque reference
	//tags
	//key
	//name
	//id/alias
	//categories
	//text, used for string generation
	//visual
	//data
	//resources
	//self generator
	//semantic link
	//relational link
}