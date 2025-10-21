"use client";
import { useState } from "react";
import Item from "./item.js";
import JSONitems from "./items.json";

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");

    function listSort(event) {
        const newEventSort = event.target.value;
        setSortBy(newEventSort);

        if (newEventSort == "name") {
            JSONitems.sort((a,b) => a.name.localeCompare(b.name));
        } else if (newEventSort == "category") {
            JSONitems.sort((a,b) => a.category.localeCompare(b.category));
        }

        console.log(`sorted by: ${sortBy}`)
    }

    return (
        <div className="rounded bg-blue-400 mx-4 pb-3">
            <div className="pt-2">
            <label className="rounded text-xl font-bold text-gray-800 mx-2">Sort By:</label>
                <section className="flex flex-row text-gray-800 gap-4 mx-4">

                    <button 
                    name="button"
                    id="sortName"
                    value="name" 
                    onClick={listSort}
                    className="rounded border-2 border-white bg-blue-300 p-2 my-2 hover:bg-amber-200 active:bg-amber-500"
                    >Name</button>

                    <button
                    name="button"
                    id="sortCategory"
                    value="category" 
                    onClick={listSort}
                    className="rounded border-2 border-white bg-blue-300 p-2 my-2 hover:bg-amber-200 active:bg-amber-500"
                    >Category</button>

                </section>


            </div>
            
            <ul id="itemList" className="rounded border-2 border-white bg-blue-300 text-gray-800 p-3 max-w-11/12 mx-auto">
                {JSONitems.map((item) => { return (
                    <Item name={item.name} quantity={item.quantity} category={item.category} key={item.id}/>
                )})}
            </ul>
        </div>        
    )
}