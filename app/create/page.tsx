"use client";
import { useState } from "react";
import Header from "../components/create/header/Header"
import Body from "../components/create/header/body/Body";

export default function Home() { 

    const [clicked, setClicked] = useState(false);

    return(
        <div>
            <Header clicked={clicked} setClicked={setClicked}/>
            <Body />
        </div>
    )
}