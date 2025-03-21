/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
    let ingredientsCanMake = new Map();
    let prerequisites = new Map();

    for (let i = 0; i < recipes.length; i++) {
        let recipe = recipes[i];
        prerequisites.set(recipe, ingredients[i].length);

        for (const item of ingredients[i]) {
            if (!ingredientsCanMake.has(item)) {
                ingredientsCanMake.set(item, []);
            }
            ingredientsCanMake.get(item).push(recipe);
        }
    }

    for(const supply of supplies){
        const products = ingredientsCanMake.get(supply);
        if(!products){
            continue;
        }
        for(const product of products){
            prerequisites.set(product, prerequisites.get(product) - 1);
            if(prerequisites.get(product) === 0){
                availableRecipes(product);
            }
        }
    }

    function availableRecipes(recipe){
        if(!ingredientsCanMake.get(recipe)){
            return;
        }
        for(const itsProduct of ingredientsCanMake.get(recipe)){
            prerequisites.set(itsProduct, prerequisites.get(itsProduct) - 1);
            if(prerequisites.get(itsProduct) === 0){
                availableRecipes(itsProduct);
            }
        }
    }

    let result = [];

    for(const recipe of recipes){
        if(prerequisites.get(recipe) === 0){
            result.push(recipe);
        }
    }

    return result;
};

let recipes = ["bread","sandwich","burger"];
let ingredients = [["yeast","flour"],["bread","meat"],["sandwich","meat","bread"]];
let supplies = ["yeast","flour","meat"];
console.log(findAllRecipes(recipes,ingredients, supplies));