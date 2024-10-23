import { useState } from "react";  
import p1 from "../public/asaat/13.gif";  
import p2 from "../public/asaat/14.gif";  
import p3 from "../public/asaat/15.gif";  
import p4 from "../public/asaat/6.gif";  
import p5 from "../public/asaat/7.gif";  
import p6 from "../public/asaat/16.gif";  
// import p8 from "../public/asaat/12.gif";  
import p7 from "../public/asaat/11.gif";  
import { VscSend } from "react-icons/vsc";


const Chat = () => {  
  const [messages, setMessages] = useState([]);  
  const [input, setInput] = useState("");  
  const [selectedUser, setSelectedUser] = useState({  
    name: "negisa",  
    image: p1,  
    lastSeen: "onlin",  
  });  

  const users = [   
    { name: "sara", image: p2 ,lastSeen:"last seen recently"},  
    { name: "amir", image: p3,lastSeen:"online" },  
    { name: "nazanin", image: p4,lastSeen:"last seen recently" },  
    { name: "mohamad", image: p5 ,lastSeen:"last seen recently"},  
    { name: "sarina", image: p6,lastSeen:"online" },  
    { name: "nill", image: p7,lastSeen:"online" },  
    // { name: "ali", image: p8 },  
  ];  

  const sendMessage = (e) => {  
    e.preventDefault();  
    if (!input) return;  

    setMessages([...messages, input]);  
    setInput("");  
  };  

  const handleUserClick = (user) => {  
    setSelectedUser({  
      name: user.name,  
      image: user.image,  
      lastSeen:user.lastSeen ,  
    });  
  };  

  return (  
    <div className="lg:flex lg:flex-row sm:flex sm:flex-row    grid-rows-2  bg1">  
      <div className="flex flex-col h-screen p-4 bg1 w-96">  
        <div className="flex-1 overflow-auto p-4 border border-gray-300 rounded-lg mb-4">  
          <div className="flex items-center gap-x-6">  
            <img alt="" src={selectedUser.image} className="h-16 w-16 rounded-full" />  
            <div>  
              <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-200">  
                {selectedUser.name}  
              </h3>  
              <p className="text-sm font-semibold leading-6 text-gray-200">  
                {selectedUser.lastSeen}  
              </p>  
            </div>  
          </div>  
          <div className="border border-slate-300 mt-3 mb-4"></div>  
          {messages.map((msg, index) => (  
            <div key={index} className="bg-slate-300 text-black p-2 rounded-md my-1">  
              {msg}  
            </div>  
          ))}  
        </div>  
        <form onSubmit={sendMessage} className="flex">  
          <input  
            type="text"  
            value={input}  
            onChange={(e) => setInput(e.target.value)}  
            className="flex-1 border border-gray-300 p-2 rounded-l-md"  
            dir="rtl"
            placeholder="Message"  
          />  
          <button type="submit" className="bg-violet-500 text-white p-2 rounded-r-md">  
            {/* send   */}
            <VscSend />

          </button>  
        </form>  
      </div>  
      <div className="flex flex-col">  
      <h1 className="items-center text-white  gap-x-6 bg-violet-500 w-screen  focus:ring-4 font-medium text-4xl px-6 py-5">list chat</h1>
        {users.map((user) => (  
          <a  
            key={user.name}  
            href="#"  
            className="flex items-center  gap-x-6 bg-violet-400 w-screen hover:bg-violet-300 focus:ring-4 focus:ring-slate-300 font-medium text-sm px-5 py-2.5"  
            onClick={() => handleUserClick(user)}  
          >  
            <img alt="" src={user.image} className="h-16 w-16 rounded-full m-3" />  
            <div>  
              <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">  
                {user.name}  
              </h3>  
              <p className="text-sm font-semibold leading-6 text-white">  
              {user.lastSeen}  
              </p>  
            </div>  
          </a>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default Chat;



//  برای یکی در میان کردن رنگ لیست چت


// {messages.map((msg, index) => (  
//   <div   
//     key={index}  
//     className={`p-2 rounded-md my-1 ${index % 2 === 0 ? 'bg-slate-300' : 'bg-slate-400'} text-black`}  
//   >  
//     {msg}  
//   </div>  
// ))}  






