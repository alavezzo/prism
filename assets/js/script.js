let cocktail="";

$("#search").click(function () {
    event.preventDefault();
    let cocktail = $("#cocktail").val();
    if (cocktail) {
        displayCocktail(cocktail)
    };
});


let displayCocktail=function(cocktail){
    let apiUrlCocktail ="https://thecocktaildb.com/api/json/v1/1/search.php?s="+ cocktail;
    fetch(apiUrlCocktail)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        console.log(response.drinks[0])
        $("#cocktail-recipe").empty();
        let cocktailNameEl=$("<h4>");
        let ingredientList=$("<ul>");
        let ingredientsEl=$("<li>");
        let instructionsEl=$("<p>");
        let cocktailName= response.drinks[0].strDrink;
        let cocktailImg=$("<img>");
        cocktailImg.attr("src",response.drinks[0].strDrinkThumb+"/preview")
        let ingredient1=response.drinks[0].strIngredient1;
        let ingredient2=response.drinks[0].strIngredient2;
        let ingredient3=response.drinks[0].strIngredient3;
        let ingredient4=response.drinks[0].strIngredient4;
        let ingredient5=response.drinks[0].strIngredient5;
        let ingredient6=response.drinks[0].strIngredient6;
        let ingredient7=response.drinks[0].strIngredient7;
        let ingredient8=response.drinks[0].strIngredient8;
        let ingredient9=response.drinks[0].strIngredient9;
        let ingredient10=response.drinks[0].strIngredient10;
        let ingredient11=response.drinks[0].strIngredient11;
        let ingredient12=response.drinks[0].strIngredient12;
        let ingredient13=response.drinks[0].strIngredient13;
        let ingredient14=response.drinks[0].strIngredient14;
        let ingredient15=response.drinks[0].strIngredient15;
        let instructions=response.drinks[0].strInstructions;
        cocktailNameEl.text(cocktailName);
        //ingredients goes here
        instructionsEl.text(instructions);
        
        $("#cocktail-recipe").append(cocktailImg);
        $("#cocktail-recipe").append(cocktailNameEl);
        $("#cocktail-recipe").append(ingredientList);
        $("#cocktail-recipe").append(instructionsEl);
    });
};



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

