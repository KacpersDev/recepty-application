interface Props {
    description: string;
    ingrediences: string[];
    info: string;
}

const Body = (props: Props) => {

    const { description, ingrediences, info } = props;

    return(
        <div className="grid justify-center font-poppins mt-[50px] max-[620px]:ml-[200px]">
            <p className="w-[600px] text-[15px] max-[420px]:ml-[50px] max-[350px]:ml-[80px]">{info}</p>
            <p className="text-[#0000ff] font-poppins_bold text-[20px] mt-[50px] mb-[25px] max-[420px]:ml-[50px] max-[350px]:ml-[80px]">Ingredience</p>
            <ul className="list-disc pl-4">
                {ingrediences.map((ingredience) => {
                    return(
                        <li className="max-[420px]:w-[300px] max-[420px]:ml-[50px] max-[350px]:ml-[80px]" key={ingredience}>{ingredience}</li>
                    )
                })}
            </ul>
            <p className="text-[#0000ff] font-poppins_bold text-[20px] mt-[50px] mb-[25px] max-[420px]:ml-[50px] max-[350px]:ml-[80px]">Příprava jídla</p>
            <p className="w-[600px] text-[15px] max-[620px]:w-[400px] max-[420px]:w-[300px] max-[420px]:ml-[50px] max-[350px]:ml-[80px]">{description}</p>
        </div>
    )
}

export default Body;