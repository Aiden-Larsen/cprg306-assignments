"use client";
import { useState } from "react";
import RecipeButton from "./recipeButton";

export default function recipeList({ recipeList, onItemSelect }) {
    <div>
        <div id="recipeList">
            {recipeList.map((item) => { return (
                <RecipeButton></RecipeButton>
            )})}
        </div>
    </div>
}