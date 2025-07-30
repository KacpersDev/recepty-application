"use client";

import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { addRecept } from "./receptSlice";
import { RootState, store } from "./receptStore";

import Recept from "./Recept";

const Recepts = () => {
    const recepty = useSelector((state: RootState) => state.recept.recepty);
    let rendered = false;

    useEffect(() => {

        const fetchRecipes = async () => {
            try {
                const response = await fetch("https://private-anon-96e21c7737-cookbook3.apiary-mock.com/api/v1/recipes", {
                    method: "GET",
                });
            
                const json = await response.json();
                for (const bodyRecord of json) {
                    store.dispatch(addRecept({
                        id: bodyRecord.id,
                        name: bodyRecord.name,
                        stars: bodyRecord.score,
                        time: bodyRecord.duration,
                    }));
                }
            } catch (err) {
                console.error(err);
            }
        }

        fetchRecipes();
    }, []);

    return(
        recepty.map((recept) => {
            return(
                <Recept 
                    key={recept.name}
                    id={recept.id}
                    name={recept.name}
                    stars={recept.stars}
                    time={recept.time}
                />
            )
        })
    )
}

export default Recepts;