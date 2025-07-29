import BodyInput from "./BodyInput";

const Body = () => {
    return(
        <div className="mt-[50px] font-poppins">
            <BodyInput placeholder="Nazev receptu"/>
            <BodyInput placeholder="Uvodni text"/>  
            <p className="text-center mr-[650px] mt-[50px] font-poppins_bold text-[#0000ff]">INGREDIENCE</p>
            <div className="grid">
                <BodyInput placeholder="Vase Ingredience"/>  
                <button className="ml-[360px] w-[100px] mt-[15px] border-1 border-[#ff00ff] text-[#ff00ff] rounded-lg font-poppins_bold text-[15px]">PRIDAT</button>
            </div>  
            <BodyInput placeholder="Postup"/>
            <BodyInput placeholder="Cas"/>    
        </div>
    )
}

export default Body;