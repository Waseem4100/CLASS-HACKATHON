import Image from "next/image";
import Logo1 from "@/public/Logo1.png"
import Search from "@/public/Search.png"
import Favorites from "@/public/Favorites.png"
import Cart from "@/public/Cart.png"
import User from "@/public/User.png"

export default function Header (){
    return(
        <div className="header">
            <div className="headerLogo">
            <Image src={Logo1} alt="logo" />
            </div>
            <div className="headerSearch">
            <Image src={Search} alt="Search" className="searchIcon" />
                <input type="text" placeholder="Search" />
              
            </div>
            <div className="headerButtons">
                <button>Home </button>
                <button>About</button>
                <button>Contact us</button>
                <button> Blog</button>
                
            </div>
            <div className="headerIcon">
            <Image src={Favorites} alt="Favorites" />
            <Image src={Cart} alt="Cart" />
            <Image src={User} alt="User" />
                
            </div>

        </div>
    )
}