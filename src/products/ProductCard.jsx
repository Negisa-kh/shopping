import { useContext, useState } from "react";  
import { CartContext } from "../cart/CartContext";  

const ProductCard = ({ product }) => {  
  const { addToCart } = useContext(CartContext);  
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {  
    addToCart(product);  
    setAddedToCart(true);  
    setTimeout(() => {  
      setAddedToCart(false);
    }, 3000); 
  };  

  return (  
    <div className="product-card p-4 border rounded-lg shadow-md relative">  
      <div className="relative">  
        <span className="absolute top-0 left-0 bg-purple-400 text-white text-xs font-bold px-2 py-1 rounded-br-md">  
          {product.discount}%  
        </span>  
        <img  
          src={product.img}  
          alt={product.name}  
          className="w-full h-auto rounded-t-lg"  
        />  
      </div>  
      <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>  
      <div className="flex justify-between items-center mt-1">  
        <span className="text-lg text-purple-500">${product.price}</span>  
        <span className="text-gray-500 line-through">${product.oldPrice}</span>  
      </div>  
      <div className="flex justify-center items-center mt-1">  
        <button  
          onClick={handleAddToCart}  
          className="bg-purple-600 text-white py-1 px-3 rounded-md"  
        > 
           افزودن به سبد خرید
        </button>
      </div>  
      {addedToCart && (  
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-2 bg-purple-950 text-white px-4 py-2 rounded-md shadow-md">  
          به سبد خرید اضافه شد!  
        </div>  
      )}  
    </div>  
  );  
};  

export default ProductCard;  