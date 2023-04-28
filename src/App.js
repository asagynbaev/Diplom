import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from './pages/Home/Home';
import Products from "./pages/Products/Products";
// import Payment from "./pages/Payment/Payment";
import Contacts from './pages/Contacts/Contacts';

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        {/* <Route path='/payment' element={<Payment/>}/> */}
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
      
    </>
  );
}

export default App;
