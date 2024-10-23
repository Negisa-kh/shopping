
import Chat from './Chat';  
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from './SignIn'
import './index.css';  

function App() {  
  return (  
    <div className="App">  
      <Router>
          <Routes>
          <Route path="/" element={< SignIn/>} />
          <Route path="/Chat" element={<Chat />} />
          </Routes>
        </Router>
    </div>  
  );  
}  

export default App;