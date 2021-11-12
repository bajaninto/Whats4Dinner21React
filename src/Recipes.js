import React from 'react';
import { useState } from 'react';


function Recipes() {
//initialize state for error, ingredients, Final Ingredients, and recipe items 

// const [error, setError] = useState('');
const [ingredients, setIngredients] = useState('');
const [finalIngredients,setFinalIngredients] = useState('');
const [recipes, setRecipes] = useState([]);



//for each change in input, save value to ingredients. 
  const handleChange = (e) => {
    console.log('running handleChange');
    e.preventDefault();
    const ingredients = e.target.value;
    setIngredients(ingredients);
    console.log(ingredients);
  };
    
 

  // ingredients queried is based on the value in the input when the user clicks button
  const handleSubmit = (e)=> {
    e.preventDefault();
    console.log('running handleSubmit');
    setFinalIngredients(ingredients);
    console.log(finalIngredients);


//fetch data from the api using input ingredients
// enter API query using specified values in multiple const, then template literal to define the fetch url

    async function fetchRecipes() {
      const apiId = 'ae2fe5b5'    
      const apiKey = '46c15e68979503caf05822045ce90cff'
      const q = ingredients
      const ingr = 4
      const from = 1
      const to = 5
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${q}&app_id=${apiId}&app_key=${apiKey}&ingr=4&from=${from}&to=${to}`)
      

      //insert try catch for error handling
    
      const data = await response.json()
      // console.log(data);
      setRecipes(data.hits.slice(0,8))
      // console.log(recipes);
      console.log(finalIngredients);
      // console.log(data.hits[0].recipe.image)
    };


   //call the function 
    fetchRecipes()

  };

 // for each of the results, output the recipe image and name with hyperlink to actual recipe

 //if no recipe is found, request updated ingredients or browser refresh
return (
  <>
    <div className="recipeContainer">
      <div>
        <h2>Need help deciding what to make for dinner?  </h2>
        <h3>Follow these 4 easy steps to an enjoyable home cooked meal using whatever you have in the kitchen!</h3>
      </div>
    
      <div className="recipe">
        {/* >--  User to select ingredients-->*/}
        <h3>Step 1: Enter your list of available ingredients using '+' to seperate each ingredient.</h3>
        
        {/* <!-- User to input ingredients for recipe --> */}
        <h3>Step 2: Click "Get Recipes". </h3>
        <h3>Step 3: Select a recipe by clicking on the picture below.</h3>

        {/* <h4 className="Hint">HINT: To open in a new tab- Hold Command/ Ctrl + Click on the picture for recipe details.</h4> */}
        <h3>Step 4: Prepare and Enjoy!</h3>

       <form  onSubmit={handleSubmit}>
        <div className="inputs">
          <input type="text" id="foodSelect" name="food" defaultValue="" placeholder="Enter ingredients, using '+' as seperator"   
            onChange={handleChange}>
          </input>
          <button type="submit" className="foodButton" name="foodButton">Get Recipes</button>
        </div>
       </form> 
      </div>

      <div className="selection"> 
          {recipes.length !== 0 ? (
          <>
            <h2 className="selectionTitle"> Recipe Selection</h2> 
            <div className="resultsParent">
              {recipes.map(recipe => (   
                <div className="results">
                  <ul className="resultDisplay">
                    <li key={recipe.recipe.index} className="recipeLabel">{recipe.recipe.label}</li>
                    <a href={recipe.recipe.url} target="_blank"><img key={recipe.recipe.index} src={recipe.recipe.image} alt={recipe.recipe.label} />
                    </a>
                  </ul>  
                </div>
              ))}
            </div>
            </>
          ) : (
            <h4>Please enter new ingredients or refresh the page.</h4>
          )}
      </div>
     </div> 
  </>
  )
}

export default Recipes;