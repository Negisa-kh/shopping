import img1 from '/img/Icon-Google.png';  

const SigninPage = () => {  
  return (  
    <div className="flex items-center justify-center min-h-screen bg-gray-100">  
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">  
        <h2 className="text-2xl font-bold mb-2  text-center">ایجاد حساب کاربری</h2>  
        <p className="text-gray-600 mb-4 text-center">جزئیات خود را در زیر وارد کنید</p>  
        
        <form>  
          <div className="mb-4">  
            <label className="block text-gray-700 mb-1 text-right" htmlFor="name">نام</label>  
            <input  
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 text-right"  
              type="text"  
              id="name"  
              placeholder="نام خود را وارد کنید"  
              required  
            />  
          </div>  
          
          <div className="mb-4">  
            <label className="block text-gray-700 mb-1 text-right" htmlFor="email">ایمیل یا شماره تلفن</label>  
            <input  
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 text-right"  
              type="text"  
              id="email"  
              placeholder="ایمیل یا شماره تلفن خود را وارد کنید"  
              required  
            />  
          </div>  

          <div className="mb-4">  
            <label className="block text-gray-700 mb-1 text-right" htmlFor="password">رمز عبور</label>  
            <input  
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 text-right"  
              type="password"  
              id="password"  
              placeholder="رمز عبور خود را وارد کنید"  
              required  
            />  
          </div>  

          <button  
            type="submit"  
            className="w-full py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 focus:outline-none"  
          >  
            ایجاد حساب کاربری  
          </button>  
        </form>  

        <button className="flex items-center justify-center w-full py-2 mt-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none">  
          <img src={img1} alt="Google Logo" className="h-6 mr-2" />  
          ورود با گوگل  
        </button>  

        <p className="mt-4 text-center text-gray-600">  
          قبلاً حساب کاربری دارید؟ <a href="/login" className="text-blue-500 hover:underline">وارد شوید</a>  
        </p>  
      </div>  
    </div>  
  );  
};  

export default SigninPage;  