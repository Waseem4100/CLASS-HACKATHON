import Image from "next/image";
import Macbookpro from "@/public/Macbookpro.png"
import popularproduct from "@/public/popularproduct.png"
import samsunggalaxy from "@/public/samsunggalaxy.png"
import ipadpro from "@/public/ipadpro.png"

export default function Banner3 (){
    return(
        <div className="banner3">
            <div className="popularproductcard">
            <div className="banner3container">
                <Image src={popularproduct} alt="popularproduct" />

            </div>
                <div className="banner3text">
                    <h1 className="banner3heading">    Popular Products</h1>
                    <p className="banner3pragraph"> iPad combines a magnificent 10.2-inch Retina display,incredible performnace,multitasking and ease of use.</p>
                    <button className="banner3button">ShopNow</button>
                </div>
            </div>
            <div className="ipadprocard">
            <div className="banner3container">
                <Image src={ipadpro } alt=" ipadpro" />
                </div>
                <div className="banner3text">
                    <h1 className="banner3heading">
                    Ipad Pro
                    </h1>
                    <p className="banner3pragraph">
                        iPad combines a magnificent 10.2-inch Retina display,incredible performnace,multitasking and ease of use.
                    </p>
                    <button className="banner3button">ShopNow</button>
                </div>
            </div>
            <div className="samsunggalaxycard">
            <div className="banner3container">
                <Image src={samsunggalaxy } alt="samsunggalaxy " />
                </div>
                <div className="banner3text">
                    <h1 className="banner3heading">
                      Samsung Galaxy
                    </h1>
                    <p className="banner3pragraph">
                    iPad combines a magnificent 10.2-inch Retina display,incredible performnace,multitasking and ease of use.
                    </p>
                    <button className="banner3button">ShopNow</button>
                </div>
            </div>
            <div className="Macbookprocard">
                <div className="banner3container">
                <Image src={Macbookpro} alt="Macbookpro" />
                </div>
                <div className="Macbookprotext">
                    <h1 className="banner3heading">
                        Macbook Pro
                    </h1>
                    <p className="banner3pragraph">
                    iPad combines a magnificent 10.2-inch Retina display,incredible performnace,multitasking and ease of use.
                    </p>
                    <button className="Macbookprobutton">ShopNow</button>
                </div>
            </div>

        </div>
    )
}