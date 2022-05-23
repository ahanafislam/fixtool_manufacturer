import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';

function App() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <Header></Header>
      {/* Start Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      {/* End Routing */}
      <Footer></Footer>
    </div>
  );
}

export default App;
