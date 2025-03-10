import { useState, useEffect, useContext } from "react";
import { CartContext } from "../cart/CartContext";

// import imag1 from "/img/1.png";
import imag2 from "/img/11.webp";
import imag3 from "/img/12.webp";
import imag4 from "/img/13.webp";
import imag5 from "/img/14.webp";
import imag6 from "/img/6.webp";
import imag7 from "/img/7.webp";
import imag8 from "/img/8.webp";
import imag9 from "/img/9.webp";
import imag10 from "/img/16.webp";
import imag11 from "/img/17.webp";
import imag12 from "/img/18.webp";
import imag13 from "/img/16.webp";
import imag14 from "/img/19.webp";
import imag15 from "/img/20.webp";
import imag16 from "/img/21.webp";
import imag17 from "/img/22.webp";

const categoriesData = [
  { name: "تلفن", icon: "📱" },
  { name: "کامپیوتر", icon: "💻" },
  { name: "ساعت", icon: "⌚" },
  { name: "دوربین", icon: "📷" },
  // { name: 'لباس', icon: '👗' },
  // { name: 'بازی', icon: '🎮' },
];

const productsData = [
  {
    id: 1,
    img: imag14,
    name: "دوربین دیجیتال کانن مدل EOS 90D به همراه لنز 135-18 میلی متر IS USM",
    price: 4120,
    category: "دوربین",
  },
  {
    id: 2,
    img: imag15,
    name: "دوربین دیجیتال مدل DA9000",
    price: 420,
    category: "دوربین",
  },
  {
    id: 3,
    img: imag2,
    name: "لپ تاپ 15.6 اینچی لنوو مدل IdeaPad Slim 3 15IRU8-i3 1315U-8GB LPDDR5-256GB SSD-TN",
    price: 960,
    category: "کامپیوتر",
  },
  {
    id: 4,
    img: imag3,
    name: "لپ تاپ 15.6 اینچی لنوو مدل LOQ 15IRX9-i7 13650HX-24GB DDR5 4800MHz-512GB SSD-RTX4060-FHD",
    price: 960,
    category: "کامپیوتر",
  },
  {
    id: 5,
    img: imag4,
    name: "لپ تاپ 15.6 اینچی لنوو مدل V15 G4 AMN-Athlon Silver 7120U-8GB LPDDR5-256GB SSD-TN",
    price: 960,
    category: "کامپیوتر",
  },
  {
    id: 6,
    img: imag5,
    name: "لپ تاپ 15.6 اینچی ایسوس مدل Vivobook 15 X515MA-BR001-Celeron N4020-8GB DDR4-512GB SSD-TFT - کاستوم شده",
    price: 960,
    category: "کامپیوتر",
  },
  {
    id: 7,
    img: imag6,
    name: " ساعت مچی عقربه ای مردانه اسکمی مدل 9069",
    price: 370,
    category: "ساعت",
  },
  {
    id: 8,
    img: imag7,
    name: " ساعت مچی عقربه‌ای مردانه دنوسی مدل ضد آب کد 12",
    price: 370,
    category: "ساعت",
  },
  {
    id: 9,
    img: imag8,
    name: " ساعت مچی عقربه‌ای مردانه مدل فول نگین دیت جاست",
    price: 370,
    category: "ساعت",
  },
  {
    id: 10,
    img: imag9,
    name: " ساعت  اصیل و لوکس عقربه ای چند موتوره",
    price: 370,
    category: "ساعت",
  },
  {
    id: 11,
    img: imag10,
    name: "گوشی آیفون 13 اپل ظرفیت 128 رم 4 گیگابایت (CH/A نات اکتیو)",
    price: 370,
    category: "تلفن",
  },
  {
    id: 12,
    img: imag11,
    name: "گوشی موبایل اپل آیفون 13 5G - ظرفیت 256 گیگابایت - رم 4 گیگابایت - دو سیم کارت - CH/A نات اکتیو",
    price: 370,
    category: "تلفن",
  },
  {
    id: 13,
    img: imag12,
    name: "گوشی گلکسی S23 Ultra سامسونگ 5G حافظه 512 رم 12 گیگابایت",
    price: 370,
    category: "تلفن",
  },
  {
    id: 14,
    img: imag13,
    name: "گوشی گلکسی S22 سامسونگ حافظه 256 رم 8 گیگابایت",
    price: 370,
    category: "تلفن",
  },
  {
    id: 15,
    img: imag16,
    name: "دوربین دیجیتال کانن مدل EOS 250D به همراه لنز 55-18 میلی متر IS STM",
    price: 420,
    category: "دوربین",
  },
  {
    id: 16,
    img: imag17,
    name: "دوربین عکاسی چاپ سریع فوجی فیلم مدل Instax Mini 12",
    price: 420,
    category: "دوربین",
  },
];

const CategoryList = () => {
  const { addToCart } = useContext(CartContext);
  const [addedProductId, setAddedProductId] = useState(false);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProductId(product.id);
    setTimeout(() => {
      setAddedProductId(null); 
    }, 2000);
  };

  const [categories, setCategories] = useState(
    categoriesData.map((category) => ({
      ...category,
      selected: false,
    }))
  );

  const [selectedCategory, setSelectedCategory] = useState("کامپیوتر");

  useEffect(() => {
    setCategories((prevCategories) =>
      prevCategories.map((category) => ({
        ...category,
        selected: category.name === selectedCategory,
      }))
    );
  }, [selectedCategory]);

  const handleCategoryClick = (clickedCategoryName) => {
    setSelectedCategory(clickedCategoryName);
  };

  const filteredProducts = productsData.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <div className="container">
      <div className="p-6">
        <div className="text-right">
          <h2 className="text-purple-700 text-center m-10 text-lg font-bold">
            دسته بندی
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {categories.map((category) => (
            <div
              key={category.name}
              onClick={() => handleCategoryClick(category.name)}
              className={`flex flex-col items-center p-4 border-2 rounded-lg transition duration-300 cursor-pointer ${
                category.selected
                  ? "border-purple-600 bg-purple-100"
                  : "border-transparent hover:bg-gray-100"
              }`}
            >
              <span className="text-3xl">{category.icon}</span>
              <span
                className={`mt-2 ${
                  category.selected ? "text-purple-600" : "text-black"
                }`}
              >
                {category.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-purple-700 text-center m-10 text-lg font-bold">
            محصولات {selectedCategory ? ` - ${selectedCategory}` : ""}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-4 text-center relative"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-auto rounded-t-lg md:size-60"
                />
                <h3 className="font-bold mt-2">{product.name}</h3>
                <p>{product.price}$</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-purple-600 text-white py-1 px-3 rounded-md"
                >
                  افزودن به سبد خرید
                </button>
                {addedProductId === product.id && ( 
                  <div className="absolute left-1/2 transform -translate-x-1/2 bottom-2 bg-purple-950 text-white px-4 py-2 rounded-md shadow-md">
                    به سبد خرید اضافه شد!
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;