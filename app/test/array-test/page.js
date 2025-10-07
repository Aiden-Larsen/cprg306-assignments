"use client";
import { useState } from "react";
import CreateArrayList from "./create-array-list";

let myArray = [1, 2, 3, 4];

export default function Page() {
        
    return (
        <main className="bg-blue-900">
            <header className="flex-col py-2 bg-blue-700">
                <h1 className="text-xl text-center font-bold">Welcome to the test folder!!</h1>
            </header>
            <div className="flex-col mx-5 my-6 px-4 py-2 bg-blue-500">
                <p className="my-1 ">Click button to print out myArray!!</p>
                <button 
                onClick={CreateArrayList(myArray)} 
                className="rounded px-2.5 py-1 hover:bg-blue-400 bg-blue-800 dark:bg-blue-500"
                >Click Me!!</button>
                <CreateArrayList array={myArray}/>
            </div>
        </main>
    )
    
}