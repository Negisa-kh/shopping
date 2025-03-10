import img1 from "/img/appstore.png";
import img2 from "/img/google-play.png";
import img3 from "/img/Qrcode 1.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-9">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 text-center">
          <div className="space-y-4">
            <h4 className="text-lg font-bold">خدمات</h4>
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-2">
                <span>ارسال و تحویل سریع</span>
              </div>
              <div className="flex items-center mb-2">
                <span>خدمات مشتری ۲۴ ساعته</span>
              </div>
              <div className="flex items-center mb-2">
                <span>ضمانت بازگشت پول</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold">اشتراک مجله</h4>
            <p>۱۰٪ تخفیف در اولین خرید</p>
            <form className="flex justify-center">
              <input
                type="email"
                className="border text-right border-gray-400 p-3 rounded-l-lg w-64 text-black placeholder-gray-400 focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
              <button className="bg-black border border-gray-300 text-white p-3 rounded-r-lg hover:bg-slate-800 transition duration-300">
                &rarr;
              </button>
            </form>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold">پشتیبانی</h4>
            <p>داکا، DH 1515، بنگلادش</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold">لینک‌های سریع</h4>
            <a href="#" className="block">
              سیاست حفظ حریم خصوصی
            </a>
            <a href="#" className="block">
              شرایط استفاده
            </a>
            <a href="#" className="block">
              سؤالات متداول
            </a>
            <a href="#" className="block">
              تماس با ما
            </a>
          </div>

          <div className="space-y-4 ">
            <h4 className="text-lg font-bold">دانلود اپ</h4>
            <div className="flex justify-center">
              <img src={img3} alt="App Store" className="w-32" />
            </div>
            <div className="flex space-x-2 justify-center">
              <img src={img2} alt="Google Play" className="w-32" />
              <img src={img1} alt="App Store" className="w-32" />
            </div>
          </div>
        </div>

        <div className="text-center mt-10 border-t border-gray-700 pt-4">
          <p>&copy; 2024 Rimel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
