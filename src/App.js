import './App.css';  
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home'
import Navbar from './Pages/Shared/Navbar';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Blogs from './Pages/Blogs/Blogs';
import Error from './Pages/Shared/Error'; 
import Parts from './Pages/Parts/Parts';

function App() {
  return (
    <div> 
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route> 
        <Route path="/parts" element={<Parts></Parts>}></Route> 
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/*" element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
