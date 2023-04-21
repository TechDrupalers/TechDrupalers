import ProductCatelog from "./pages/productCatelog";
import Orders from "./pages/Orders";
import Invoices from "./pages/Invoices";
import { Route,Routes} from 'react-router-dom';
import Footer from './Footer';
import Sidebar from "./VendorSidebar";
import Header from "./Header";



function AdminDashboard() {
  return (
    <div>
      <Header/>
        <Sidebar>
          <Routes>
            <Route path='/productCatelog' element={<ProductCatelog />}></Route>
            <Route path='/orders' element={<Orders />}></Route>
            <Route path='/invoices' element={<Invoices />}></Route>
          </Routes>
        </Sidebar>
      <Footer />
    </div>
  );
}

export default AdminDashboard;
