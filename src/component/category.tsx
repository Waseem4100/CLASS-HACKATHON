import Image from "next/image";
import ForwardArrow from "@/public/category//ForwardArrow.png"
import BackwardArrow from "@/public/category/BackwardArrow.png"
import  Phones from "@/public/category/Phones.png"
import SmartWatches from "@/public/category/SmartWatches.png"
import Headphones from "@/public/category/Headphones.png"
import Cameras from "@/public/category/Cameras.png"
import Computers from "@/public/category/Computers.png"
import Gaming from "@/public/category/Gaming.png"

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
                    <Image src={Phones} alt="" className="categoryimage"></Image>

                    <h1 className="cardtext">phone</h1>

                </div>

                <div className="categorycard">
                    <Image src={SmartWatches} alt="" className="categoryimage"></Image>

                    <h1 className="cardtext">Smart Watches</h1>

                </div>

                <div className="categorycard">
                    <Image src={Cameras} alt="" className="categoryimage"></Image>

                    <h1 className="cardtext">Cameras</h1>

                </div>

                <div className="categorycard">
                    <Image src={Headphones} alt="Headphones" className="categoryimage"></Image>

                    <h1 className="cardtext">Headphones</h1>  

                </div>

                <div className="categorycard">
                    <Image src={Computers} alt="Computers" className="categoryimage"></Image>

                    <h1 className="cardtext">Computers</h1>

                </div>

                <div className="categorycard">
                    <Image src={Gaming} alt="Gaming" className="categoryimage"></Image>

                    <h1 className="cardtext">Gaming</h1>

                </div>

             </div>
        </div>

    )
}