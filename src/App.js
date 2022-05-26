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
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      {/* End Routing */}
      <ToastContainer position="top-center" autoClose={3000} theme="colored"/>
      <Footer></Footer>
    </div>
  );
}

export default App;
