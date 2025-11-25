"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    async function fetchMealIdea(apiIngredient) {
        try {
            const mealFetch = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${apiIngredient}`);
            const mealData = await mealFetch.json();
            setMeals(mealData.meals);
            console.log(mealData.meals);
            return mealData;
        } catch (error) {
            console.log(error);
        }

    }

    async function loadMealIdeas() {
        fetchMealIdea(ingredient);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    if (meals == null) {
        return (
            <div>
                <p>no recipies avalible...</p>
            </div>
        )
    }   // else
    return (
        <div>
            {/* <p>{meals[0].strMeal}</p> */}
            {meals.map((meal) => {
            return(<p key={meal.idMeal}>{meal.strMeal}</p>)
            })}
        </div>
    )
}