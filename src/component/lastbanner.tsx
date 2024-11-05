import Image from "next/image";
import lastBanner from "@/public/lastbanner/lastBanner.jpg"

export default function LastBanner(){
    return(
        <div  className="lastbanner">
            
            <div className="lastbannertext">
                <h1 className="lastbannerheading">Big Summer <span className="lastbannerspan">Sale</span></h1>
                <p className="lastbannerprgraph">Commodo fames vitae vitae leo mauris in. Eu consequat</p>
                <button className="lastbannershopbutton">Shop Now</button>
            </div>
        </div>
    )
}