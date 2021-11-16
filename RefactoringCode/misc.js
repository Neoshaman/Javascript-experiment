class gameGenerator{
	name;
	id;
	reference;
	data;
	defaultString(){}

//createEmptyObjectFrom(){}

//check empty field

//createRandomDataObjectFrom(Dictionary){}

//createObjectFromData(Dictionary,array){}

//changeData(Object, Dictionary, array){}

//clearData(Object){}

//objectToString(Object){}

//showElements(dictionary.elements)

//findleaf()

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
}


//dictionary
//name
//elements
//string