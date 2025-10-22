"use client";
import { useState } from "react";

import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import ItemsData from "./items.json";
import PageHeader from "../components/PageHeader.js";

export default function Page() {
    const [items] = useState([...ItemsData]);

    function handleAddItem(newItem) {
        if (newItem !== undefined) {
            console.log("!! ADDING NEW ITEM !!");
            items.push(newItem);
            for (let i = 0; i < items.length; i++) {
                console.log(`${items[i].id}, ${items[i].name}, ${items[i].quantity}, ${items[i].category}`);
            }
        } else {
            console.log(`Item ${newItem} is undefined`);            
        }
    }

    return (
        <main className="bg-blue-950 pb-4">
            <PageHeader title="Week-7" description="^^"/>
            <section className="rounded bg-blue-500 max-w-7/12 mx-auto pb-3">
                <NewItem onAddItem={handleAddItem}/>
            </section>
            <section className="rounded bg-blue-500 max-w-7/12 mx-auto pb-3">
                <h1 className="text-2xl font-bold text-gray-900 mt-4 p-2">Shopping List</h1>
                <ItemList itemList={items}/>
            </section>
        </main>
    )
}