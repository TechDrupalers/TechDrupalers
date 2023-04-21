
import Footer from './Footer';
import Sidebar from "./AdminSidebar";
import Header from "./Header";
import { Route, Routes } from 'react-router-dom';
import ProductCatalog from './pages/ProductCatelog';
import AddProducts from './pages/addProducts';
import BuyerCustomer from './pages/buyCust';
import CustomerWishlist from './pages/CustomerWishlist';
import AddUser from './pages/addUser';
import Vendor from './pages/vendor';

function AdminDashboard() {
  return (
    <div>
      <Header/>
        <Sidebar>
            <Routes>
                <Route path='/productCatelog' element={<ProductCatalog/>}></Route>
                <Route path='/addproducts' element={<AddProducts />}></Route>
                <Route path='/buyer-customer' element={<BuyerCustomer />}></Route>
                <Route path='/customerWishlist' element={<CustomerWishlist />}></Route>
                <Route path='/addUser' element={<AddUser />}></Route>
                <Route path='/vendor' element={<Vendor />}></Route>
            </Routes>

        </Sidebar>
      <Footer />
    </div>
  );
}

export default AdminDashboard;
