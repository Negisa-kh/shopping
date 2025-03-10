import { useState } from 'react';  
import { CiSearch } from 'react-icons/ci';  
import { MdOutlineShoppingCart } from 'react-icons/md';  
import { AiOutlineClose } from 'react-icons/ai'; 
import { Link } from 'react-router-dom';  

const Navbar = () => {  
  const [isOpen, setIsOpen] = useState(false);  

  const toggleMenu = () => {  
    setIsOpen(!isOpen);  
  };  

  return (  
    <nav className="bg-white shadow-md ">  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
        <div className="flex justify-between items-center h-16">  
          <div className="flex items-center">  
            <h1 className="text-purple-600 text-2xl font-bold">Exclusive</h1>  
          </div>  
          <div className="hidden md:flex space-x-6">  
            <Link to='/sign in'> <a href="#" className=" hover:text-purple-600"> ورود/ثبت نام</a> </Link>  
            <Link to='/About'> <a href="#" className=" hover:text-purple-600">درباره ما</a> </Link>   
            <Link to='/contect'> <a href="#" className=" hover:text-purple-600">ارتباطات</a>  </Link>   
            <Link to='/'> <a href="#" className=" hover:text-purple-600">خانه</a> </Link>  
          </div>  
          <div className="hidden md:flex items-center space-x-4">  
            <div className="relative">  
              <input  
                type="text"  
                placeholder="جستجو...."  
                className="text-right border border-gray-300 rounded-md p-2 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-600"  
              />  
              <div className="absolute left-3 top-2.5">  
                <CiSearch className="h-7 w-7 text-gray-500"/>  
              </div>  
            </div>  
            <Link to="/cart">  
              <button className="relative hover:text-purple-600">  
                <MdOutlineShoppingCart className="h-6 w-6"/>  
              </button>  
            </Link>  
          </div>  
          <div className="-mr-2 flex md:hidden">  
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-purple-600 focus:outline-none">  
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">  
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />  
              </svg>  
            </button>  
          </div>  
        </div>  
      </div>  


      <div className=''>  
        <div   
          dir='rtl'   
          className={`fixed inset-0 bg-white transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden z-50`}  
        >  
          <div className="px-4 pt-4 flex justify-between items-center">  
            <h1 className="text-purple-600 text-2xl font-bold">Exclusive</h1>  
            <button onClick={toggleMenu} className="hover:text-purple-600">  
              <AiOutlineClose className="h-7 w-7" />  
            </button>  
          </div>  
          <div className="px-4 pt-2 pb-3">  
            <div className="mb-4">  
              <div className="relative ">  
                <input  
                  type="text"  
                  placeholder="جستجو...."  
                  className="text-right border border-gray-300 rounded-md p-2 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-600"  
                />  
                <div className="absolute right-52 top-2.5">  
                  <CiSearch className="h-7 w-7 text-gray-500"/>  
                </div>   
                <Link to="/cart">  
                  <button className="absolute top-2 left-11 hover:text-purple-600">  
                    <MdOutlineShoppingCart className="h-7 w-7"/>  
                  </button>  
                </Link>   
              </div>  
            </div>  
            <div className="space-y-2">  
              <Link to="/">   
                <a href="#" className="bg-slate-100 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">خانه</a>  
              </Link>  
              <Link to="/contect">   
                <a href="#" className="mt-4 bg-slate-200 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">ارتباطات</a>   
              </Link>  
              <Link to="/About">  
                <a href="#" className="mt-4 bg-slate-100 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">درباره ما</a>   
              </Link>  
              <Link to="/sign in">   
                <a href="#" className="mt-4 bg-slate-200 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">ورود/ثبت نام </a>   
              </Link>  
            </div>  
          </div>  
        </div>  
      </div>  
    </nav>  
  );  
};  

export default Navbar;  