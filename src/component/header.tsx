import Image from "next/image";
import Logo1 from "@/public/header/Logo1.png"
import Search from "@/public/header/Search.png"
import Favorites from "@/public/header/Favorites.png"
import Cart from "@/public/header/Cart.png"
import User from "@/public/header/User.png"

export default function Header (){
    return(
        <div className="header">
            <div className="headerLogo">
            <Image src={Logo1} alt="logo" />
            </div>
            <div className="headerSearch">
            <Image src={Search} alt="Search" className="searchIcon " />
                <input  type="text" placeholder="  Search" className="searchnput" />
              
            </div>
            <div className="headerButtons">
                <button className="headerButton">Home </button>
                <button className="headerButton">About</button>
                <button className="headerButton">Contact us</button>
                <button className="headerButton"> Blog</button>
                
            </div>
            <div className="headerIcon">
            <Image src={Favorites} alt="Favorites" />
            <Image src={Cart} alt="Cart" />
            <Image src={User} alt="User" />
                
            </div>

        </div>
    )
}