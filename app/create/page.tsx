"use client";
import {useRef, useState} from "react";
import Header from "../components/create/header/Header"
import Body from "@/app/components/create/body/Body";

export default function Home() {

    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [guide, setGuide] = useState("");
    const [time, setTime] = useState("");
    const map = useRef<Map<number, string>>(new Map());

    return(
        <div>
            <Header name={name} text={text} guide={guide} time={time} map={map.current}/>
            <Body setName={setName} setText={setText} setGuide={setGuide} setTime={setTime} map={map.current}/>
        </div>
    )
}