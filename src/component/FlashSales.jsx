import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import ProductCard from "../products/ProductCard";
import products from "../products/Products";

const FlashSales = () => {
  return (
    <div className="lg:mt-20 flash-sales-container mx-auto py-10 relative">
      <h2 className="text-right text-purple-600 lg:text-2xl sm font-bold mb-6">
        فروش‌های لحظه‌ای
      </h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          nextEl: ".flash-sales-next",
          prevEl: ".flash-sales-prev",
        }}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flash-sales-prev swiper-button-prev !left-0"></div>
      <div className="flash-sales-next swiper-button-next !right-0"></div>

      {/* <div className="text-center mt-6">
        <button className="bg-red-600 text-white py-2 px-4 rounded-md">View All Products</button>
      </div> */}
    </div>
  );
};

export default FlashSales;
