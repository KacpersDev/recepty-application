"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { addRecept } from "./receptSlice";
import { RootState, store } from "./receptStore";
import Recept from "./Recept";

const Recepts = () => {
    const recepty = useSelector((state: RootState) => state.recept.recepty);

    useEffect(() => {
        fetch("https://private-anon-96e21c7737-cookbook3.apiary-mock.com/api/v1/recipes", {
        method: "GET",
        }).then(response => response.json().then(body => { 
            for (let i of body) {
            store.dispatch(addRecept({
                id: i.id,
                name: i.name,
                stars: i.score,
                time: i.duration,
            }));
            }
        }));
        
    }, []);

  return(
    recepty.map((recept) => {
        return(
            <Recept id={recept.id} name={recept.name} stars={recept.stars} time={recept.time}/>
        )
    })
  )

}

export default Recepts;
/*
    {store.getState().recept.recepty.map((recept) => {
    return(
        <Recept key={recept.id} id={recept.id} name={recept.name} stars={recept.stars} time={recept.time}/>
        )
    })}
*/