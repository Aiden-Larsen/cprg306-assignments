"use client";
import { useState } from "react";
import Item from "./item.js";
import JSONitems from "./items.json";

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");

    const newSort = (event) => {
        setSortBy(event.target.value);

        if (sortBy == "name") {
            JSONitems.sort((a,b) => a.name.localeCompare(b.name));
        } else if (sortBy == "category") {
            JSONitems.sort((a,b) => a.category.localeCompare(b.category));
        }
    }

    return (
        <form className="flex flex-row gap-4 mx-2">
            <section className="rounded border-2 border-white p-2 my-2 hover:bg-white">
                <label>Name</label>

                <button 
                value="name" 
                onClick={newSort}
                ></button>

            </section>
            <section className="rounded border-2 border-white p-2 my-2 hover:bg-white">
                <label>Category</label>

                <button
                value="category" 
                onClick={newSort}
                ></button>

            </section>
        </form>
    )
}