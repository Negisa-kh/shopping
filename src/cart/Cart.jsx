import { useContext } from "react";  
import { CartContext } from "../cart/CartContext";  
import { Link } from "react-router-dom";

const Cart = () => {  
  const { cart, removeFromCart, totalPrice } = useContext(CartContext);  

  if (cart.length === 0) {  
    return (  
      <div className="flex justify-center font-bold text-4xl h-[30rem] items-center bg-gray-100">  
        سفارشی وجود ندارد  
      </div>  
    );  
  }  

  const handleQuantityChange = (itemId, newQuantity) => {  
  };  

  return (  
    <div className="cart p-4 md:p-10 bg-white shadow-lg rounded-lg">  
      <h1 className="flex justify-center font-bold text-2xl md:text-4xl mb-8">  
        سفارشات شما:  
      </h1>  

      <div className="overflow-x-auto">  
        <table dir="rtl" className="min-w-full bg-white border border-gray-300">  
          <thead className="bg-gray-100">  
            <tr>  
              <th className="py-2 px-2 md:px-4 border-b">تصویر</th>  
              <th className="py-2 px-2 md:px-4 border-b">محصول</th>  
              <th className="py-2 px-2 md:px-4 border-b">قیمت</th>  
              <th className="py-2 px-2 md:px-4 border-b">تعداد</th>  
              <th className="py-2 px-2 md:px-4 border-b">جمع کل</th>  
              <th className="py-2 px-2 md:px-4 border-b">عملیات</th>  
            </tr>  
          </thead>  
          <tbody>  
            {cart.map((item) => (  
              <tr key={item.id} className="hover:bg-gray-50">  
                <td className="py-2 px-2 md:px-4 border-b">  
                  <img  
                    src={item.img}  
                    alt={item.name}  
                    className="w-12 h-12 md:w-16 md:h-16 object-cover rounded"  
                  />  
                </td>  
                <td className="py-2 px-2 text-sm lg:text-lg md:px-4 border-b">{item.name}</td>  
                <td className="py-2 px-2 text-sm lg:text-lg md:px-4 border-b">{item.price} $</td>  
                <td className="py-2 px-2 md:px-4 border-b">  
                  <input  
                    // type="number"  
                    min="1"  
                    value={item.quantity}  
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}  
                    className="border border-gray-300 p-1 text-center w-12 rounded"  
                  />  
                </td>  
                <td className="py-2 px-2 md:px-4 border-b text-sm lg:text-lg">  
                  {(item.price * item.quantity).toFixed(2)} $  
                </td>  
                <td className="py-2 px-2 md:px-4 border-b">  
                  <button  
                    className="bg-purple-900 hover:bg-purple-600 text-white py-1 px-2 md:px-3 rounded text-sm md:text-base"  
                    onClick={() => removeFromCart(item.id)}  
                  >  
                    حذف  
                  </button>  
                </td>  
              </tr>  
            ))}  
          </tbody>  
        </table>  
      </div>  

      <div className="mt-8 flex flex-col md:flex-row justify-between items-center  space-y-4 md:space-y-0">  
        <Link to="/">
        <button className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded w-full md:w-auto">  
          بازگشت به خرید  
        </button>  
        </Link>
        <div className="bg-gray-200 px-10 p-4 rounded-lg text-right shadow-md w-full md:w-auto">  
          <h2 className="text-2xl font-bold text-purple-700">مجموع قیمت</h2>  
          <p className="font-bold text-purple-900">جمع کل: ${totalPrice.toFixed(2)}</p>  
          <p>هزینه ارسال: رایگان</p>  
          <p className="font-bold text-2xl">مجموع: ${totalPrice.toFixed(2)}</p>  
          <button className="bg-gradient-to-r from-purple-400 to-purple-700 text-white px-4 py-2 rounded mt-2 w-full md:w-auto">  
            به پرداخت بروید  
          </button>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Cart;  