
const ContactPage = () => {  
  return (  
    <div className="flex flex-col md:flex-row gap-5 justify-between p-8 mt-10 mb-10 bg-gray-50">  
      <div className="md:w-1/2 p-6 bg-white shadow-md rounded-lg mr-4 text-right">  
        <h2 className="text-2xl font-bold mb-4">با ما تماس بگیرید</h2>  
        <p className="text-gray-600 mb-2">ما به صورت 24 ساعته در 7 روز هفته در دسترس هستیم</p>  
        <p className="text-gray-800 font-semibold mb-4">تلفن: +880611112222</p>  
        <hr className="my-4" />  
        
        <h2 className="text-2xl font-bold mb-4">با ما در تماس باشید        </h2>  
        <p className="text-gray-600 mb-2">  
        فرم ما را پر کنید و ما در عرض ۲۴ ساعت با شما تماس خواهیم گرفت 
               </p>  
        <p className="text-gray-800 mb-1">ایمیل ها:</p>  
        <p className="text-blue-600">customer@exclusive.com</p>  
        <p className="text-blue-600">support@exclusive.com</p>  
      </div>  

      <div className="md:w-1/2 p-6 bg-white shadow-md rounded-lg ">  
        <h2 className="text-2xl font-bold mb-4">تماس با ما</h2>  
        <form>  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 ">  
            <input  
              type="text"  
              placeholder="Your Name *"  
              className="text-right border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"  
              required  
            />  
            <input  
              type="email"  
              placeholder="Your Email *"  
              className="text-right border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"  
              required  
            />  
            <input  
              type="tel"  
              placeholder="Your Phone *"  
              className="text-right border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"  
              required  
            />  
          </div>  
          <textarea  
            placeholder="Your Message"  
            className="text-right border border-gray-300 rounded-lg p-2 w-full h-32 focus:outline-none focus:ring focus:ring-blue-300 mb-4"  
            required  
          ></textarea>  
          <button className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600 " type="submit">  
           ارسال پیام
           </button>  
        </form>  
      </div>  
    </div>  
  );  
};  

export default ContactPage;  