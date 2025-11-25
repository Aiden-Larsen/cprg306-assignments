"use client";
import { useState } from "react";

import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import MealIdeas from "./meal-ideas.js";
import ItemsData from "./items.json";
import PageHeader from "../components/PageHeader.js";

export default function Page() {
    const [items, setItems] = useState([...ItemsData]);
    const [selectItemName, setSelectItemName] = useState("banana")

    function handleAddItem(newItems) {
        if (newItems !== undefined) {
            setItems((oldItems) => [...oldItems, newItems])
            return items;
        } else {
            console.log(`Item ${newItems} is undefined`);            
        }
    }

    function handleItemSelect(itemName) {
        let newItemName = itemName.currentTarget.id.replace(
            /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
             '').split(",");
        // console.log(newItemName[0].trim());
             
        setSelectItemName(newItemName[0].trim());
    }

    return (
        <main className="bg-blue-950 ">
            <PageHeader title="Week-8" description="^^"/>
            <div className="h-full flex justify-center items-center">
                <div className="justtify-self-start w-full m-5">
                    <section className="rounded bg-blue-500 p-2">
                        <NewItem onAddItem={handleAddItem}/>
                    </section>
                    <section className="rounded bg-blue-500">
                        <h1 className="text-2xl font-bold text-gray-900">Shopping List</h1>
                        <ItemList itemList={items} onItemSelect={handleItemSelect}/>
                    </section>
                </div>
                <div className="usttify-self-start w-full m-5">
                    <h1></h1>
                    <MealIdeas ingredient={selectItemName}/>
                </div>
            </div>
        </main>
    )
}