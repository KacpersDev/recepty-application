"use client";
import PlusIcon from "@/app/assets/images/plus.png";
import Image from "next/image";

import { useRouter } from "next/navigation";

const Header = () => {

    const router = useRouter();

    return(
        <div className="flex justify-center font-poppins space-x-[700px] mt-[25px] max-[800px]:space-x-[430px] max-[550px]:space-x-[300px] max-[400px]:space-x-[100px]">
            <p className="text-[18px] font-poppins_bold">Recepty</p>
            <Image 
                className="w-[24px] h-[24px] hover:cursor-pointer hover:opacity-75" 
                src={PlusIcon} alt="plus icon"
                onClick={() => router.push('/create')}
            />
        </div>
    )
}

export default Header;