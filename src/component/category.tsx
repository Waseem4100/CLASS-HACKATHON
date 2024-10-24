import Image from "next/image";
import ForwardArrow from "@/public/ForwardArrow.png"
import BackwardArrow from "@/public/BackwardArrow.png"
import  Phones from "@/public/Phones.png"
import SmartWatches from "@/public/SmartWatches.png"
import Headphones from "@/public/Headphones.png"
import Cameras from "@/public/Cameras.png"
import Computers from "@/public/Computers.png"
import Gaming from "@/public/Gaming.png"

export default function CategorySection(){
    return(
        <div className="categorySection">
             <div className="categorytext">
                <h1 className="categoryheading">Browse By Category</h1>
                <div className="categoryarrow">
                    <div><Image src={BackwardArrow} alt="" height={20}></Image>
                    </div>
                    <div>
                    <Image src={ForwardArrow} alt="" height={20}></Image>
                    </div>
                </div>
             </div>
             <div className="categorycards">
                <div className="categorycard">
                    <Image src={Phones} alt=""></Image>

                    <h1 className="cardtext">phone</h1>

                </div>

                <div className="categorycard">
                    <Image src={SmartWatches} alt=""></Image>

                    <h1 className="cardtext">Smart Watches</h1>

                </div>

                <div className="categorycard">
                    <Image src={Cameras} alt=""></Image>

                    <h1 className="cardtext">Cameras</h1>

                </div>

                <div className="categorycard">
                    <Image src={Headphones} alt="Headphones"></Image>

                    <h1 className="cardtext">Headphones</h1>  

                </div>

                <div className="categorycard">
                    <Image src={Computers} alt="Computers"></Image>

                    <h1 className="cardtext">Computers</h1>

                </div>

                <div className="categorycard">
                    <Image src={Gaming} alt="Gaming"></Image>

                    <h1 className="cardtext">Gaming</h1>

                </div>

             </div>
        </div>

    )
}