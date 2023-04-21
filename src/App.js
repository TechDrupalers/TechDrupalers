import './App.css';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import {  BrowserRouter, Route,Routes} from 'react-router-dom';
import Login from "./components/Login";
import VendorDashboard from "./components/VendorDashboard/VendorDashboard";
import BuyersDashboard from './components/BuyersDashboard/BuyersDashboard';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/admindashboard/*' element={<AdminDashboard />}></Route>
              <Route path='/vendordashboard/*' element={<VendorDashboard />}></Route>
              <Route path='/buyersdashboard/*' element={<BuyersDashboard />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
