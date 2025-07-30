"use client";

import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { addRecept } from "./receptSlice";
import { RootState, store } from "./receptStore";

import Recept from "./Recept";

const Recepts = () => {
    const recepty = useSelector((state: RootState) => state.recept.recepty);
    const rendered = useRef(false);

    useEffect(() => {
        if (rendered.current) return;
        rendered.current = true;

        const abortController = new AbortController();

        const fetchRecipes = async () => {
            try {
                const response = await fetch("https://private-anon-96e21c7737-cookbook3.apiary-mock.com/api/v1/recipes", {
                    method: "GET",
                    signal: abortController.signal,
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
                
            }
        }

        fetchRecipes();

        return () => {
            if (!abortController.signal.aborted) {
                abortController.abort();
            }
        };
    }, []);

    return(
        recepty.map((recept) => {
            console.log(recept.id);
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