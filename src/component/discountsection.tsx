import Image from "next/image";

import TopSection from "@/public/TopSection.png"
import discountproduct1 from "@/public/discountproduct1.png"
import discountproduct2 from "@/public/discountproduct2.png"
import discountproduct3 from "@/public/discountproduct3.png"
import discountproduct4 from "@/public/discountproduct4.png"


export default function DiscountSection(){
    return (
        <div className="discountsection">
            <div className="discounttext">
                <h1 className="discountheading"> Discount up to -50%</h1>
            </div>
            <div className="products">

                <div className="productcard">
                    <Image src={TopSection} alt="" className="TopSection" />
                    <Image src= {discountproduct1}alt="discount product" className="productimage"/>
                   <div className="productcardtext">
                    <h1 className="ProductName">Apple Iphone 14 Pro 512GB Gold(MQ233)</h1>
                    <p className="Productprice">$1437</p>
                    <button className="BuyButton">Buy Now</button>
                    </div>
                </div>

                <div className="productcard">
                <Image src={TopSection} alt="" className="TopSection" />
                    <Image src= {discountproduct2}alt="discount product" className="productimage"/>
                    <div className="productcardtext">
                    <h1 className="ProductName">AirPods Max Sliver Starlight Aluminium</h1>
                    <p className="Productprice">$549</p>
                    <button className="BuyButton">Buy Now</button>
                    </div>
                </div>

                <div className="productcard">
                <Image src={TopSection} alt="" className="TopSection" />
                    <Image src= {discountproduct3}alt="discount product" className="productimage"/>
                    <div className="productcardtext">
                    <h1 className="ProductName">Apple Watch Series 9 GPS 41mm Starlight Aluminium</h1>
                    <p className="Productprice">$399</p>
                    <button className="BuyButton">Buy Now</button>
                    </div>
                </div>

                <div className="productcard">
                <Image src={TopSection} alt="" className="TopSection" />
                    <Image src= {discountproduct4}alt="discount product" className="productimage"/>
                    <div className="productcardtext">
                     <h1 className="ProductName">Apple iphone 14 Pro 1TB Gold (MQV3)</h1>
                    <p className="Productprice">$1437</p>
                    <button className="BuyButton" >Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}