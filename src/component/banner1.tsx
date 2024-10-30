 import Image from "next/image";
import  IphoneImage from "@/public/banner1/IphoneImage.png"


export default function Banner1(){
    return(
        <div className="banner1">
            <div className="banner1text">
                <h1 className="textheading1">Pro.Beyond</h1>
                <h1 className="iphoneheading">IPhone 14 <span className="prospan">PRO</span></h1>
                <p className="textparagraph"> created to change everything for the better. For everyone</p>
                <button className="shopbutton">Shop Now</button>
            </div>
            <div className="banner1image">
                <Image src={IphoneImage} alt="iphone" />
            </div>

        </div>
    )
}