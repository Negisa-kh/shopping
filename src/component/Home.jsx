import Baner from "./Baner";
import CategoryList from "./CategoryList";
import FlashSales from "./FlashSales";
import Hero from "./Hero";

export default function Home() {
  return (
    <div>
      <Hero/>
     <FlashSales />
     <Baner/>
     <CategoryList/>
    </div>
  )
}

