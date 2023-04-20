import './App.css';
import ProductCatelog from "./pages/productCatelog";
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import AddProducts from './pages/addProducts';
import BuyerCustomer from './pages/buyCust';
import CustomerWishlist from './pages/CustomerWishlist';
import Vendor from './pages/vendor';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from "./components/Sidebar";
import AddUser from "./pages/addUser";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path='/productCatelog' element={<ProductCatelog/>}></Route>
            <Route path='/addproducts' element={<AddProducts/>}></Route>
            <Route path='/buyer-customer' element={<BuyerCustomer/>}></Route>
            <Route path='/customerWishlist' element={<CustomerWishlist/>}></Route>
            <Route path='/addUser' element={<AddUser/>}></Route>
            <Route path='/vendor' element={<Vendor/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
          </Routes>
        </Sidebar>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
