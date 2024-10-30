
import Banner1 from "@/component/banner1" 
import Banner2 from "@/component/banner2"
import CategorySection from "@/component/category";
import Products from "@/component/product"
import Banner3  from "@/component/banner3"
import LastBanner from "@/component/lastbanner";
import DiscountSection from "@/component/discountsection"
export default function Home() {
  return (
  <div>
    <Banner1 />
   < Banner2 />
   < CategorySection />
   < Products />
   <Banner3 />
   <DiscountSection />
   <LastBanner />
  
  </div>
  );
}
