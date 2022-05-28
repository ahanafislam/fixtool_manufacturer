import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PurchaseProduct from './Pages/Products/PurchaseProduct';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddNewReview from './Pages/Dashboard/AddNewReview';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import RequireAdmin from './Pages/Login/RequireAdmin';
import RequireUser from './Pages/Login/RequireUser';
import AddProduct from './Pages/Dashboard/AddProduct';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';

function App() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <Header></Header>
      {/* Start Routing */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path='/purchase/:product_id' element={
          <RequireAuth>
            <PurchaseProduct/>
          </RequireAuth>
        }/>
        <Route path="/dashboard" element={<RequireAuth><Dashboard/></RequireAuth>} >
          <Route index element={<MyProfile/>}/>
          <Route path='myOrder' element={<RequireUser><MyOrders/></RequireUser>}/>
          <Route path='addReview' element={<RequireUser><AddNewReview/></RequireUser>}/>
          <Route path='manageProduct' element={<RequireAdmin><ManageProducts/></RequireAdmin>}/>
          <Route path='addProduct' element={<RequireAdmin><AddProduct/></RequireAdmin>}/>
          <Route path='makeAdmin' element={<RequireAdmin><MakeAdmin/></RequireAdmin>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      {/* End Routing */}
      <ToastContainer position="top-center" autoClose={3000} theme="colored"/>
      <Footer></Footer>
    </div>
  );
}

export default App;
