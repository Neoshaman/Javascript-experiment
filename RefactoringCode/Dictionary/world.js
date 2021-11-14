const WorldDesign = {
	Name : "World",
	Elements : {	
		//world design
		//set in WorldSize WorldTone WorldGenre world
		WorldSize			:	["tiny","medium size","big","huge", "infinite"],	//arbitrary size = 1²,3²,5²,7²,inf in km, should add a scope element (the unit size) from room to galactic universe
		WorldTone			:	["dark","atmospheric","funny","dangerous"," immersive ",
								"typical", "cinematic", "beautiful","cartoon"],		//need more practical classification?
		WorldGenre			:	["dream","prehistoric","futuristic","superheroes",
								"noir","steampunk","cyberpunk","fantasy",
								"sword and sorcery","science fiction","urban",
								"space opera","underground","hardboiled",
								"underwater","post apocalyptic","military"]			//basically the set of objects, bahevior and rules, need a breakdown, possibly generating one from scratch
	}
}
						
function worldtype() {
	return `Set in ${RandomWord(WorldSize)} ${RandomWord(WorldTone)} ${RandomWord(WorldGenre)} world.`
}
var WorldTypeObj = {
	worldSize: "",
	worldTone: "",
	worldGenre: ""
};