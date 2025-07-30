"use client";
import {useParams} from "next/navigation";
import {useEffect, useState} from "react";

export default function Home() {

    const params = useParams<{id: string}>();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [info, setInfo] = useState("");
    const [time, setTime] = useState(0);
    const [ingredients, setIngredients] = useState([""]);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const fetchRecept = async () => {
            const response = await fetch("https://private-anon-96e21c7737-cookbook3.apiary-mock.com/api/v1/recipes/" + params.id);
            const json = await response.json();

            setName(json.name);
            setDescription(json.description);
            setInfo(json.info);
            setTime(json.duration);
            setIngredients(json.ingredients);
            setScore(json.score);
        }

        fetchRecept();
    }, []);

    return(
        <div>
            <p>ID {params.id}</p>
        </div>
    )
}
/*

 */