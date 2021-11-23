class world extends gameGenerator {
	library = WorldDesign
	data = {
		size		: null,		//key
		tone		: null,		//key
		genre		: null		//key
	}
	reference = {
		size		: this.library.elements.WorldSize,		//key
		tone		: this.library.elements.WorldTone,		//key
		genre		: this.library.elements.WorldGenre		//key
	}
	getDefaultString() {
		return `Set in ${this.data.size} ${this.data.tone} ${this.data.genre} world.`
	}
	clearData(){
		this.data.size	= null		//key
		this.data.tone	= null		//key
		this.data.genre	= null		//key
	}

}