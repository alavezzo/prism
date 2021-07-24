
let apiUrlCocktail ="https://thecocktaildb.com/api/json/v1/1/search.php?s="+ drinkName;
let cocktail = $("#cocktail").value
fetch(apiUrlCocktail)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        console.log(response)
    });