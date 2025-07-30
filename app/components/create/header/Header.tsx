"use client";

import { useRouter } from "next/navigation";

import Image from "next/image";

import PlusIcon from "@/app/assets/images/plus.png";
import ArrowIcon from "@/app/assets/images/arrow.png";

interface HeaderProps {
    name: string,
    text: string,
    guide: string,
    time: string,
    map: Map<number, string>,
}

const Header = (props: HeaderProps) => {

    const { name, text, guide, time, map } = props;
    const router = useRouter();

    const handleSubmit = async () => {
        await fetch("https://private-anon-e551961e9a-cookbook3.apiary-mock.com/api/v1/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                description: text,
                info: guide,
                duration: time,
                ingredients: Array.from(map.values()),
            })
        });
    }

    return(
        <div className="flex justify-center font-poppins space-x-[560px] mt-[25px]">
            <div className="flex space-x-[30px]">
                <Image 
                    className="w-[32px] hover:cursor-pointer hover:opacity-75" 
                    src={ArrowIcon} alt="arrow icon"
                    onClick={() => router.back()}
                />
                <p className="text-[18px] font-poppins_bold">Přidat recept</p>
            </div>
            <div>
                <Image 
                    className="w-[24px] h-[24px] hover:cursor-pointer hover:opacity-75" 
                    src={PlusIcon} 
                    alt="plus icon"
                    onClick={() => {
                        alert("worked " + name);
                        handleSubmit();
                    }}
                />
            </div>
        </div>
    )
}

export default Header;