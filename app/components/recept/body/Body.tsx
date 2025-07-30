interface Props {
    description: string;
    ingrediences: string[];
    info: string;
}

const Body = (props: Props) => {

    const { description, ingrediences, info } = props;

    return(
        <div className="grid justify-center font-poppins mt-[50px]">
            <p className="w-[600px] text-[15px]">{info}</p>
            <p className="text-[#0000ff] font-poppins_bold text-[20px] mt-[50px] mb-[25px]">Ingredience</p>
            <ul className="list-disc pl-4">
                {ingrediences.map((ingredience) => {
                    return(
                        <li key={ingredience}>{ingredience}</li>
                    )
                })}
            </ul>
            <p className="text-[#0000ff] font-poppins_bold text-[20px] mt-[50px] mb-[25px]">Příprava jídla</p>
            <p className="w-[600px] text-[15px]">{description}</p>
        </div>
    )
}

export default Body;