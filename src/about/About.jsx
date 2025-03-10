import img1 from "/img/Side Image.png"
const OurStory = () => {  
  return (  
    <div className="flex flex-col md:flex-row p-8 bg-white">  
      <div className="md:w-1/2 pr-4">  
        <h2 className="text-3xl font-bold mb-4 text-right">داستان ما</h2>  
        <p className="text-gray-700 mb-6 text-right">  
        در سال ۲۰۱۵ راه‌اندازی شد، اکسکلوسیو (Exclusive) پیشروترین بازار خرید آنلاین در جنوب آسیا با حضور فعال در بنگلادش است. با پشتیبانی از طیف گسترده‌ای از راه‌حل‌های بازاریابی، داده و خدمات سفارشی، اکسکلوسیو ۱۰,۵۰۰ فروشنده و ۳۰۰ برند دارد و به ۳ میلیون مشتری در سراسر منطقه خدمات ارائه می‌دهد. اکسکلوسیو بیش از ۱ میلیون محصول برای عرضه دارد و با سرعتی بسیار بالا در حال رشد است. اکسکلوسیو مجموعه‌ای متنوع در دسته‌بندی‌های مختلف از جمله محصولات مصرفی ارائه می‌دهد.
        </p>  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">  
          <div className="bg-gray-100 p-4 rounded-lg text-center">  
            <h3 className="text-2xl font-bold">۱۰.۵ هزار</h3>  
            <p>فروشنده فعال در سایت ما</p>  
          </div>  
          <div className="bg-red-500 text-white p-4 rounded-lg text-center">  
            <h3 className="text-2xl font-bold">۳۳ هزار</h3>  
            <p>فروش ماهانه محصول</p>  
          </div>  
          <div className="bg-gray-100 p-4 rounded-lg text-center">  
            <h3 className="text-2xl font-bold">۴۵.۵ هزار</h3>  
            <p>مشتری فعال در سایت ما
            </p>  
          </div>  
          {/* <div className="bg-gray-100 p-4 rounded-lg text-center">  
            <h3 className="text-2xl font-bold">25k</h3>  
            <p>Annual gross sale on our site</p>  
          </div>   */}
        </div>  
      </div>  
      <div className="md:w-1/2">  
        <img  
          src={img1} 
          alt="Our Story"  
          className="rounded-lg shadow-lg"  
        />  
      </div>  
    </div>  
  );  
};  

export default OurStory;  