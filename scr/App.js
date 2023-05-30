import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import About from "./pages/About/About";
import Contacts from './pages/Contacts/Contacts';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>   
      <Footer />
    </>
  );
}

export default App;
