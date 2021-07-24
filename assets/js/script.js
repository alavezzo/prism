let apiUrlCocktail ="https://thecocktaildb.com/api/json/v1/1/search.php?s="+ drinkName;
let cocktail = $("#cocktail").value
fetch(apiUrlCocktail)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        console.log(response)
    });

let blues = '8055125582';
let jazz = '151692581';
let rock = '8180281502';
let latin = '178699142';
let hipHop = '1677006641';
let metal = '2655390504';
let dance = '1291471565';
let funk = '3798795702';
let indie = '8124658462';
let classical = '1673880511';

let randomNumber = function(min, max) {
    let value = Math.floor((Math.random() * (max-min+1)) + min);

    return value;
}

fetch(`https://deezerdevs-deezer.p.rapidapi.com/playlist/${classical}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "8d232ef877msh1787bcdf76ee4c3p1a747cjsn856f383ec767",
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	}
})
.then(function (response) {
    if (response.ok) {
        response.json().then(function (response) {
        let length = response.tracks.data.length
        let randomTrack = response.tracks.data[randomNumber(0,(length-1))]
        let trackTitle = randomTrack.title
        let artist = randomTrack.artist.name
        let albumArt = randomTrack.album.cover
        console.log(trackTitle)
        console.log(artist)
        console.log(albumArt)
    })
}
});

