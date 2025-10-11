"use client";
import { useState } from "react";
import CreateList from "./create-list";

const pageFooter = {
    author: "Crnbry",
    description: "Testing buttons in congection with functions"
}

let myArray = [1, 2, 3, 4];
let myVar = 1;

export default function Page() {
        
    return (
        <main className="py-5 bg-blue-900">
            <header className="flex-col py-2 bg-blue-700">
                <h1 className="text-xl text-center font-bold">Create Array List</h1>
            </header>
            <div className="flex-col mx-5 my-6 px-4 py-2 bg-blue-500">
                <p className="my-1 ">Click button to print out myArray!!</p>
                <button 
                onClick={createElement(myVar)} 
                className="rounded px-2.5 py-1 bg-blue-700  dark:bg-blue-500 hover:bg-blue-400"
                >Click Me!! - variable</button>
                <button
                onClick={createArrayElement(myArray)}
                className="rounded px-2.5 py-1 bg-blue-700 dark:bg-blue-500 hover:bg-blue-400"
                >Click Me!! - array</button>
                <ul>
                    <p>Items from myArray will show up here: </p>
                    <CreateList/>
                </ul>
            </div>
        </main>
    )
    
}