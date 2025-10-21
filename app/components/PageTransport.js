"use client";
import { useState } from "react";

export default function PageTransporter() {
    const [currPage, setCurrPage] = useState("select-page")

    function changePage(event) {
        const newPage = (event.target.value);
        console.log(newPage);

        
        // if(newPage === "alert-msg") {
        //     alert("will be finisheed soon");
        // } else {
        //     console.log("this select field will allow you to travel to different project folders when an option is selected. It is currently being tested and does not work properly");
        // }

        if(newPage !== "select-page") {
            setCurrPage(newPage);

            window.location.replace(newPage);
        }
    }

    return (
        <div>
            <form className="rounded bg-blue-400 p-2">
                <label className="text-xl font-bold">Page Select: </label>
                <select value={currPage} className="text-l" onChange={changePage}>
                    {/* <option value="alert-msg" onClick={changePage}>under-construction</option>
                    <option value="info-msg" onClick={changePage}>more-info</option> */}
                    <option value="select-page">select-page</option>
                    <option value="week-2">WEEK-2</option>
                    <option value="week-3">WEEK-3</option>
                    <option value="week-4">WEEK-4</option>
                    <option value="week-5">WEEK-5</option>
                    <option value="week-6">WEEK-6</option>
                    <option value="week-7">WEEK-7</option>
                </select>
            </form>
        </div>
    )
}