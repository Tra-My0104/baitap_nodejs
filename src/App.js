import "./App.css";
import NavbarHeader from "./components/NavbarHeader";
import {Routes , Route} from "react-router-dom"
import Shop from "./components/Shop";
import Products from "./components/Products";
import Adminproducts from "./components/Adminproducts";
import Cart from "./components/Cart";
import Addproducts from "./components/Addproducts";

function App() {
  return (
    <>
      <NavbarHeader />
      <Routes>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/adminproducts" element={<Adminproducts/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/addproducts" element={<Addproducts/>}></Route>
      </Routes>
    </>
  );
}

export default App;
