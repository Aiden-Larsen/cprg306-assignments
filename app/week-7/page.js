"use client";
import { useState } from "react";

import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import ItemsData from "./items.json";
import PageHeader from "../components/PageHeader.js";

export default function Page() {
    const [items, setItems] = useState([...ItemsData]);

    function handleAddItem(newItems) {
        if (newItems !== undefined) {
            setItems((oldItems) => [...oldItems, newItems])
            return items;
        } else {
            console.log(`Item ${newItems} is undefined`);            
        }
    }

    return (
        <main className="bg-blue-950 pb-4">
            <PageHeader title="Week-7" description="^^"/>
            <section className="rounded bg-blue-500 max-w-7/12 mx-auto pt-1 pb-3 mt-4">
                <NewItem onAddItem={handleAddItem}/>
            </section>
            <section className="rounded bg-blue-500 max-w-7/12 mx-auto pb-3">
                <h1 className="text-2xl font-bold text-gray-900 mt-4 p-2">Shopping List</h1>
                <ItemList itemList={items}/>
            </section>
        </main>
    )
}