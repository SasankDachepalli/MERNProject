import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { CartProvider } from './components/ContextReducer';
import MyOrders from './screens/MyOrders';
import ROrders from './screens/ROrders';
import Restaurant from './screens/Restaurant';
import AddItem from './screens/AddItem';
import RLogin from './screens/RLogin';


function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<SignUp />}></Route>
            <Route exact path="/myOrder" element={<MyOrders />}></Route>
            <Route exact path="/rOrders" element={<ROrders />}></Route>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/rpage" element={<Restaurant/>}></Route>
            <Route exact path="/rlogin" element={<RLogin/>}></Route>
            <Route exact path="/addItem" element={<AddItem/>}></Route>
            {/* <Route exact path="/allOrders" element={<ROrders/>}></Route> */}
          </Routes>
        </div>
      </Router>
    </CartProvider>

  );
}

export default App;
