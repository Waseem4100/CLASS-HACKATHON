import Image from "next/image";
import  TopSection from "@/public/TopSection.png"
import  TopSectionred from "@/public/TopSectionred.png"
import product1 from "@/public/product1.png"
import product2 from "@/public/product2.png"
import product3 from "@/public/product3.png"
import product4 from "@/public/product4.png"
import product5 from "@/public/product5.png"
import product6 from "@/public/product6.png"
import product7 from "@/public/product7.png"
import product8 from "@/public/product8.png"


export default function Products (){
return(

    <div className="productsection">

        <div className="producttext">

        </div>
        <div className="products">

<div className="productcard">
   <Image src={TopSection} alt="" className="TopSection" />
    <Image src= {product1}alt="discount product" className="productimage"/>
   <div className="productcardtext">
    <h1 className="ProductName">Apple Iphone 14 Pro 512GB Deep Purple</h1>
    <p className="Productprice">$900</p>
    <button className="BuyButton">Buy Now</button>
    </div>
</div>

<div className="productcard">
<Image src={TopSection} alt="" className="TopSection" />
    <Image src= {product2}alt="discount product" className="productimage"/>
    <div className="productcardtext">
    <h1 className="ProductName">Blackmagic Pocket Cinema Camera 6k</h1>
    <p className="Productprice">$2535</p>
    <button className="BuyButton">Buy Now</button >
    </div>
</div>

<div className="productcard">
<Image src={TopSection} alt="" className="TopSection" />
    <Image src= {product3}alt="discount product" className="productimage"/>
    <div className="productcardtext">
    <h1 className="ProductName">Apple Watch Series 9 GPS 41mm Starlight Aluminium</h1>
    <p className="Productprice">$399</p>
    <button className="BuyButton">Buy Now</button>
    </div>
</div>

<div className="productcard">
<Image src={TopSection} alt="" className="TopSection" />
    <Image src= {product4}alt="discount product" className="productimage"/>
    <div className="productcardtext">
     <h1 className="ProductName">Samsung Galaxy Watch6 Classic 47mm Black</h1>
    <p className="Productprice">$369</p>
    <button className="BuyButton" >Buy Now</button>
    </div>
</div>
       </div>
        
       <div className="products">

<div className="productcard">
    <Image src={TopSection} alt="" className="TopSection" />
    <Image src= {product5}alt="discount product" className="productimage"/>
   <div className="productcardtext">
    <h1 className="ProductName">Galaxy Z Fold5 Unlocked |256GB |Phantom Black</h1>
    <p className="Productprice">$1799</p>
    <button className="BuyButton">Buy Now</button>
    </div>
</div>

<div className="productcard">
<Image src={TopSectionred} alt="" className="TopSection" />
    <Image src= {product6}alt="discount product" className="productimage"/>
    <div className="productcardtext">
    <h1 className="ProductName">Galaxy Buds FE Graphite</h1>
    <p className="Productprice">$99.99</p>
    <button className="BuyButton">Buy Now</button>
    </div>
</div>

<div className="productcard">
<Image src={TopSection} alt="" className="TopSection" />
    <Image src= {product7}alt="discount product" className="productimage"/>
    <div className="productcardtext">
    <h1 className="ProductName">Apple iPad 9 10.2 64GB WI-FI Sliver (MK2L3) 2021</h1>
    <p className="Productprice">$398</p>
    <button className="BuyButton">Buy Now</button>
    </div>
</div>


<div className="productcard">
<Image src={TopSection} alt="" className="TopSection" />
    <Image src= {product8}alt="discount product" className="productimage"/>
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