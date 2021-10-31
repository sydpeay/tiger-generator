let tigerArray = [
	"https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_full/77ic6i4qdj_Medium_WW226365.jpg",
	"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/1920px-Walking_tiger_female.jpg",
	"https://ichef.bbci.co.uk/news/976/cpsprodpb/9A50/production/_118740593_gettyimages-1231144196.jpg",
	"https://i.guim.co.uk/img/media/c0e411f5b4c387cd8b275f0794a3618210c5b216/0_339_5081_3048/master/5081.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=65cb0f7e2f7e906f92336bcb5c0fa6bb",
	"https://images.hindustantimes.com/img/2021/07/29/550x309/waldemar-brandt-zQsCISvBY2E-unsplash_1627533052461_1627533078303.jpg",
	"https://cms.bbcearth.com/sites/default/files/2021-07/Siberian%20tiger%20in%20the%20snow_GettyImages-1287040214.jpg",
	"https://images.news18.com/ibnlive/uploads/2021/07/1627472332_tiger-day-1200x800.jpg?impolicy=website&width=510&height=356",
	"https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6099b2ed1b942bdf252db977%2FBengal-tigress-licking-nose%2F960x0.jpg%3FcropX1%3D0%26cropX2%3D1462%26cropY1%3D40%26cropY2%3D863"
]

let currentImage = document.getElementById("current-image");

function randomTiger() {
	let i = Math.floor(Math.random() * tigerArray.length);
	currentImage.src = tigerArray[i];
}
