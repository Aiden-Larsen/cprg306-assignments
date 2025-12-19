"use client";
import { useState, useEffect } from "react";

export default function Recipes({ onSelect }) {
    const [recipes, setRecipes] = useState([]);

    async function fetchRecipes() {
        try {
            const recipeFetch = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
            const recipeData = await recipeFetch.json();
            setRecipes(recipeData.meals);
            return recipeData;
        } catch (error) {
            console.log(error);
        }
    }

    async function loadRecipes() {
        fetchRecipes();
    }

    useEffect(() => {
        loadRecipes();
    });

    if (recipes == null) {
        return (
            <div>
                <p>could not load recipes</p>
            </div>
        )
    }
    return (
        <div>
            {recipes.map((recipe) => {
                return(<p key={recipe.idMeal} onClick={onSelect}>{recipe.strMeal}</p>)
            })}
        </div>
    )
}