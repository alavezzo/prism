let cocktail = "";

$("#search").click(function () {
    event.preventDefault();
    let cocktail = $("#cocktail").val();
    if (cocktail) {
        displayCocktail(cocktail)
    };
    if (cocktail = "gimlet") {
        displayMusic(blues)
    }
    else if (cocktail = "moscow mule") {
        displayMusic(jazz)
    }
    else if (cocktail = "a midsummernight dream") {
        displayMusic(rock)
    }
    else if (cocktail = "margarita") {
        displayMusic(latin)
    }
    else if (cocktail = "french 75") {
        displayMusic(hiphop)
    }
    else if (cocktail = "whiskey sour") {
        displayMusic(metal)
    }
    else if (cocktail = "manhattan") {
        displayMusic(dance)
    }
    else if (cocktail = "martini") {
        displayMusic(funk)
    }
    else if (cocktail = "old fashioned") {
        displayMusic(indie)
    }
    else { displayMusic(classical) }
});
let featuredCocktail = function () {
    let apiUrlCocktail = "https://thecocktaildb.com/api/json/v1/1/random.php";
    fetch(apiUrlCocktail)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            console.log(response.drinks[0])
            let featuredCocktail = $("<h2>");
            let cocktailNameEl = $("<h3>");
            let ingredientTitle = $("<h4>");
            let ingredientList = $("<ul>");
            let instructionsTitle = $("<h4>");
            let instructionsEl = $("<p>");
            let cocktailName = response.drinks[0].strDrink;
            let cocktailImg = $("<img>");
            cocktailImg.attr("src", response.drinks[0].strDrinkThumb + "/preview")
            let ingredient1 = response.drinks[0].strIngredient1;
            let ingredient2 = response.drinks[0].strIngredient2;
            let ingredient3 = response.drinks[0].strIngredient3;
            let ingredient4 = response.drinks[0].strIngredient4;
            let ingredient5 = response.drinks[0].strIngredient5;
            let ingredient6 = response.drinks[0].strIngredient6;
            let ingredient7 = response.drinks[0].strIngredient7;
            let ingredient8 = response.drinks[0].strIngredient8;
            let ingredient9 = response.drinks[0].strIngredient9;
            let ingredient10 = response.drinks[0].strIngredient10;
            let ingredient11 = response.drinks[0].strIngredient11;
            let ingredient12 = response.drinks[0].strIngredient12;
            let ingredient13 = response.drinks[0].strIngredient13;
            let ingredient14 = response.drinks[0].strIngredient14;
            let ingredient15 = response.drinks[0].strIngredient15;
            let ingredientObj = [ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, ingredient10, ingredient11, ingredient12, ingredient13, ingredient14, ingredient15];
            let measure1 = response.drinks[0].strMeasure1;
            let measure2 = response.drinks[0].strMeasure2;
            let measure3 = response.drinks[0].strMeasure3;
            let measure4 = response.drinks[0].strMeasure4;
            let measure5 = response.drinks[0].strMeasure5;
            let measure6 = response.drinks[0].strMeasure6;
            let measure7 = response.drinks[0].strMeasure7;
            let measure8 = response.drinks[0].strMeasure8;
            let measure9 = response.drinks[0].strMeasure9;
            let measure10 = response.drinks[0].strMeasure10;
            let measure11 = response.drinks[0].strMeasure11;
            let measure12 = response.drinks[0].strMeasure12;
            let measure13 = response.drinks[0].strMeasure13;
            let measure14 = response.drinks[0].strMeasure14;
            let measure15 = response.drinks[0].strMeasure15;
            let measureObj = [measure1, measure2, measure3, measure4, measure5, measure6, measure7, measure8, measure9, measure10, measure11, measure12, measure13, measure14, measure15];
            let instructions = response.drinks[0].strInstructions;
            featuredCocktail.text("Featured Cocktail")
            cocktailNameEl.text(cocktailName);
            ingredientTitle.text("Ingredients");
            //ingredients and measure goes here
            displayIngredients = function () {
                for (i = 0; i < ingredientObj.length; i++) {
                    if (ingredientObj[i] && measureObj[i] != null) {
                        let ingredientsEl = $("<li>");
                        ingredientsEl.text(ingredientObj[i] + " : " + measureObj[i]);
                        ingredientList.append(ingredientsEl);
                    }
                }
            };
            instructionsTitle.text("Instructions");
            instructionsEl.text(instructions);
            $("#cocktail-recipe").append(featuredCocktail);
            $("#cocktail-recipe").append(cocktailImg);
            $("#cocktail-recipe").append(cocktailNameEl);
            $("#cocktail-recipe").append(ingredientTitle);
            $("#cocktail-recipe").append(ingredientList)
            displayIngredients();
            $("#cocktail-recipe").append(instructionsTitle);
            $("#cocktail-recipe").append(instructionsEl);
        });
}

featuredCocktail();

let displayCocktail = function (cocktail) {
    let apiUrlCocktail = "https://thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktail;
    fetch(apiUrlCocktail)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            console.log(response.drinks[0])
            $("#cocktail-recipe").empty();
            let cocktailNameEl = $("<h3>");
            let ingredientTitle = $("<h4>");
            let ingredientList = $("<ul>");
            let instructionsTitle = $("<h4>");
            let instructionsEl = $("<p>");
            let cocktailName = response.drinks[0].strDrink;
            let cocktailImg = $("<img>");
            cocktailImg.attr("src", response.drinks[0].strDrinkThumb + "/preview")
            let ingredient1 = response.drinks[0].strIngredient1;
            let ingredient2 = response.drinks[0].strIngredient2;
            let ingredient3 = response.drinks[0].strIngredient3;
            let ingredient4 = response.drinks[0].strIngredient4;
            let ingredient5 = response.drinks[0].strIngredient5;
            let ingredient6 = response.drinks[0].strIngredient6;
            let ingredient7 = response.drinks[0].strIngredient7;
            let ingredient8 = response.drinks[0].strIngredient8;
            let ingredient9 = response.drinks[0].strIngredient9;
            let ingredient10 = response.drinks[0].strIngredient10;
            let ingredient11 = response.drinks[0].strIngredient11;
            let ingredient12 = response.drinks[0].strIngredient12;
            let ingredient13 = response.drinks[0].strIngredient13;
            let ingredient14 = response.drinks[0].strIngredient14;
            let ingredient15 = response.drinks[0].strIngredient15;
            let ingredientObj = [ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, ingredient10, ingredient11, ingredient12, ingredient13, ingredient14, ingredient15];
            let measure1 = response.drinks[0].strMeasure1;
            let measure2 = response.drinks[0].strMeasure2;
            let measure3 = response.drinks[0].strMeasure3;
            let measure4 = response.drinks[0].strMeasure4;
            let measure5 = response.drinks[0].strMeasure5;
            let measure6 = response.drinks[0].strMeasure6;
            let measure7 = response.drinks[0].strMeasure7;
            let measure8 = response.drinks[0].strMeasure8;
            let measure9 = response.drinks[0].strMeasure9;
            let measure10 = response.drinks[0].strMeasure10;
            let measure11 = response.drinks[0].strMeasure11;
            let measure12 = response.drinks[0].strMeasure12;
            let measure13 = response.drinks[0].strMeasure13;
            let measure14 = response.drinks[0].strMeasure14;
            let measure15 = response.drinks[0].strMeasure15;
            let measureObj = [measure1, measure2, measure3, measure4, measure5, measure6, measure7, measure8, measure9, measure10, measure11, measure12, measure13, measure14, measure15];
            let instructions = response.drinks[0].strInstructions;
            cocktailNameEl.text(cocktailName);
            ingredientTitle.text("Ingredients");
            //ingredients and measure goes here
            displayIngredients = function () {
                for (i = 0; i < ingredientObj.length; i++) {
                    if (ingredientObj[i] && measureObj[i] != null) {
                        let ingredientsEl = $("<li>");
                        ingredientsEl.text(ingredientObj[i] + " : " + measureObj[i]);
                        ingredientList.append(ingredientsEl);
                    }
                }
            };

            instructionsTitle.text("Instructions");
            instructionsEl.text(instructions);
            $("#cocktail-recipe").append(cocktailImg);
            $("#cocktail-recipe").append(cocktailNameEl);
            $("#cocktail-recipe").append(ingredientTitle);
            $("#cocktail-recipe").append(ingredientList)
            displayIngredients();
            $("#cocktail-recipe").append(instructionsTitle);
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

let displayMusic = function (music) {
    let randomNumber = function (min, max) {
        let value = Math.floor((Math.random() * (max - min + 1)) + min);

        return value;
    }

    fetch("https://deezerdevs-deezer.p.rapidapi.com/playlist/" + music, {
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
                    let randomTrack = [response.tracks.data[randomNumber(0, (length - 1))],response.tracks.data[randomNumber(0, (length - 1))],response.tracks.data[randomNumber(0, (length - 1))]]
                    let trackTitle = [randomTrack[0].album.title,randomTrack[1].album.title,randomTrack[2].album.title];
                    let artist = [randomTrack[0].artist.name,randomTrack[1].artist.name,randomTrack[2].artist.name]
                    let albumArt = [randomTrack[0].album.cover,randomTrack[1].album.cover,randomTrack[2].album.cover]
                    console.log(trackTitle)
                    console.log(artist)
                    console.log(albumArt)
                    console.log(randomTrack)


                    displayAlbumDetails = function () {
                        $("#album-detail").empty();
                        for (i = 0; i < 3; i++) {
                            let albumCover = $("<img>");
                            let artistEl = $("<h4>");
                            let albumTitle = $("<h4>");
                            albumCover.attr("src", albumArt[i]);
                            artistEl.text(artist[i]);
                            albumTitle.text(trackTitle[i]);
                            $("#album-detail").append(albumCover);
                            $("#album-detail").append(artistEl);
                            $("#album-detail").append(albumTitle);
                        }
                    };
                    displayAlbumDetails();

                })
            }
        });
};


// let blues = '8055125582';
// let jazz = '151692581';
// let rock = '8180281502';
// let latin = '178699142';
// let hipHop = '1677006641';
// let metal = '2655390504';
// let dance = '1291471565';
// let funk = '3798795702';
// let indie = '8124658462';
// let classical = '1673880511';

// let randomNumber = function (min, max) {
//     let value = Math.floor((Math.random() * (max - min + 1)) + min);

//     return value;
// }

// fetch(`https://deezerdevs-deezer.p.rapidapi.com/playlist/${classical}`, {
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-key": "8d232ef877msh1787bcdf76ee4c3p1a747cjsn856f383ec767",
//         "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
//     }
// })
//     .then(function (response) {
//         if (response.ok) {
//             response.json().then(function (response) {
//                 let length = response.tracks.data.length
//                 let randomTrack = response.tracks.data[randomNumber(0, (length - 1))]
//                 let trackTitle = randomTrack.title
//                 let artist = randomTrack.artist.name
//                 let albumArt = randomTrack.album.cover
//                 console.log(trackTitle)
//                 console.log(artist)
//                 console.log(albumArt)
//             })
//         }
//     });
