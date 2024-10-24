import Image from "next/image";
import footerlogo from "@/public/footerlogo.png"
import twitter from "@/public/Twitter.png"
import facebook from "@/public/facebook.png"
import tiktok from "@/public/tiktok.png"
import Instagram from "@/public/Instagram.png"


export default function Footer (){
    return(
        <div className="footer"> 
            
            
       <div className="footercontent">
        <div className="cybercontent">
           
            <Image src={footerlogo} alt="logo"  className="footerheading"/> 
            <p className="footerpragraph">we are a residential interior designe firm located in portlant. Our boutique-studio offers more than</p>
        </div>
        <div className="servicescontent">
            <h1 className="footerheading">services</h1>
            <ul>
                <li className="footerli">Bonus program</li>
                <li className="footerli">Gift cards</li>
                <li className="footerli">Credit and payment</li>
                <li className="footerli">Servicee contracts</li>
                <li className="footerli">Non-cash account</li>
                <li className="footerli">Payment</li>
            </ul>
        </div>
        <div className="Assistancecontent">
            <h1 className="footerheading">Assistance to the user</h1>
            <ul>
                <li className="footerli">Find an order</li>
                <li className="footerli">Terms of dilvery</li>
                <li className="footerli">Exchange and return of goods</li>
                <li className="footerli">Guarrntee</li>
                <li className="footerli">Frequently asked questions</li>
                <li className="footerli">Terms of use of the site</li>
            </ul>
        </div>
    </div>

    <div className="footericon">
    <Image src={twitter} alt="" className="twitter" />
    <Image src={facebook} alt="" className="facebook" />
    <Image src={tiktok} alt="" className="tiktok" />
    <Image src={Instagram} alt="" className="Instagram" />
        
    </div>

    </div>
     
    )
}