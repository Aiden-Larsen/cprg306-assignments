"use client";
import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);    // holds amount in quantity
    const [inDisabled, setInDisabled] = useState(false);    // holds state of buttons
    const [deDisabled, setDeDisabled] = useState(true);

    // qunatity + 1
    const increment = () => {
        setQuantity(quantity + 1);
        buttonSwitch(1);       
    }

    // quantity - 1
    const decrement = () => {
        setQuantity(quantity - 1);
        buttonSwitch(2);
    }

    // buttonSwitch works to enable/disable both button depending on the amount in quantity
    const buttonSwitch = (button) => {
        if (button == 1) {  // 1 = increment
            if (quantity+1 >= 20) {
                setInDisabled(true);
            } else if (quantity+1 < 20) {
                setInDisabled(false);   // if quantity is incremented than re-enable decrement
                setDeDisabled(false);
            }
        } else if (button == 2) {   // 2 = decrement
            if (quantity-1 <= 1) {
                setDeDisabled(true);
            } else if (quantity-1 > 1) {
                setDeDisabled(false);   // if quantity is decremented than re-enable increment
                setInDisabled(false);
            }
        }
    }

    return (
        <div className="flex flex-row flex-shrink rounded justify-center bg-blue-400 p-2 gap-3">
            <section className="flex flex-row gap-2">
                <section className="flex flex-col rounded bg-blue-300 pr-2 pb-2">
                    <div>
                        <h3 className="text-gray-600 font-bold text-xl mx-2">Count:</h3>
                    </div>
                <section className="flex felx-row ml-3 gap-3">
                <div>
                    <p className="text-gray-600 font-bold">Increment Button</p>
                    <button
                    className="rounded text-xl font-bold px-4 py-2 bg-blue-200 text-gray-600 active:bg-blue-50 disabled:text-gray-100"
                    onClick={increment}
                    disabled={inDisabled}
                    >Increment</button>
                </div>
                <div>
                    <p className="text-gray-600 font-bold">Decrement Button</p>
                    <button
                    className="rounded text-xl font-bold px-4 py-2 bg-blue-200 text-gray-600 active:bg-blue-50 disabled:text-gray-100"
                    onClick={decrement}
                    disabled={deDisabled}
                    >Decrement</button>
                </div>
            </section>
            </section>
                <div className="rounded bg-blue-300 px-2">
                    <p className="text-gray-600 text-xl font-bold bg-blue-200 mt-2 px-2 py-8">Count: {quantity}</p>
                </div>
            </section>
        </div>
    )
}