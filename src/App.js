import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home'
import Navbar from './Pages/Shared/Navbar';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Blogs from './Pages/Blogs/Blogs';
import Error from './Pages/Shared/Error';
import Parts from './Pages/Parts/Parts';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddAReview from './Pages/Dashboard/AddAReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import PartDetail from './Pages/Parts/PartDetail';
import UpdateProfile from './Pages/Dashboard/UpdateProfile'; 
import Payment from './Pages/Dashboard/Payment';
import Portfolio from './Pages/Portfolio/Portfolio'; 
import AllReviews from './Pages/Home/AllReviews'


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/allreviews" element={<AllReviews></AllReviews>}></Route>
        <Route path="/parts" element={<RequireAuth>
          <Parts></Parts>
        </RequireAuth>}></Route>
        <Route path="/parts/:partId" element={<RequireAuth>
          <PartDetail></PartDetail>
        </RequireAuth>}></Route>

        <Route path="dashboard" element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="addareview" element={<AddAReview></AddAReview>}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route> 
          <Route path="payment/:paymentId" element={<Payment></Payment>}></Route>
        </Route>
        <Route path="/updateprofile" element={<UpdateProfile></UpdateProfile>}></Route>
       
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/*" element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
