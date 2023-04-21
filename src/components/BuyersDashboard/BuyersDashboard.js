import ProductCatelog from "./pages/productCatelog";
import Orders from "./pages/Orders";
import Invoices from "./pages/Invoices";
import Wishlist from "./pages/Wishlist";
import MyCart from "./pages/MyCart";
import { Route,Routes} from 'react-router-dom';
import Footer from './Footer';
import Sidebar from "./BuyerSidebar";
import Header from "./Header";



function BuyersDashboard() {
  return (
    <div>
      <Header/>
        <Sidebar>
          <Routes>
            <Route path='/productCatelog' element={<ProductCatelog />}></Route>
            <Route path='/mycart' element={<MyCart />}></Route>
            <Route path='/wishlist' element={<Wishlist />}></Route>
            <Route path='/orders' element={<Orders />}></Route>
            <Route path='/invoices' element={<Invoices />}></Route>
          </Routes>
        </Sidebar>
      <Footer />
    </div>
  );
}

export default BuyersDashboard;
