import Image from "next/image";
import Playstation from "@/public/banner2/PlayStation.png"
import applevision from "@/public/banner2/applevision.png"
import airpod from "@/public/banner2/airpod.png"
import Macbook from "@/public/banner2/MacBook .png"


export default function Banner2(){
    return(
        <div className="banner2">
            <div className="leftbanner">
                <div className="playststionbanner">
                    <div><Image src={Playstation} alt="" /></div>
                    <div className="playstationtext">
                        <h1 className="playstationheading">Playstation 5</h1>
                        <p className="playstationpragraph">incredibly powerful CPUS,GPUs and with an SSD with intregrated I/O will redefine your Playstation experience</p>
                    </div>
                </div>

                <div className="lowerleftbanner">
                    <div className="airpodbanner">
                        <div><Image src={airpod} alt="" /></div>
                        <div className="airpodtext">
                            <h1 className="airpodheading" >Apple AirPod's <span className="airpodspan">Max</span></h1>
                            <p className="airpodpragraph">Computational audio. Listen,it's powerful</p>
                        </div>
                    </div>
                    <div className="applevisionbanner">
                    <div><Image src={applevision} alt="applevision" className="applevisionimage" /></div>
                    <div className="applevisiontext">
                    <h1 className="applevisionheading">Apple Vision <span className="applevisionspan">Pro</span></h1>
                    <p className="applevisionparagraph"> An immersive way to experience entertainment</p>
                    </div>
                    </div>
                    
                </div>


            </div>
            <div className="macbookbanner">
                <div className="macbooktext" >
                    <h1 className="macbookheading">Macbook <br /><span className="macbookspan">Air</span></h1>
                    <p className="macbookpragraph">The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display. </p>
                    <button className="macbookbutton">Shop Now</button>
                </div>
                <div>
                    <Image src={Macbook} alt="mackbook" />
                </div>
            </div>
        </div>
    )
}