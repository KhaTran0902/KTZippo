import { Route,  Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import NewsLetter from "./components/footer/newsletter/Newsletter";
import Products from "./pages/products/Products";
import Details from "./pages/details/Details";
import Cart from "./pages/cart/Cart";
import Wrapper from "./components/Wrapper";
import ProductsUni from "./pages/products/ProductsUni";
import Support from "./components/support/Support";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <>
    <Wrapper>
      <Header />
   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/products/:id" element={<Details />} />
          <Route path="products/uni" element= {<ProductsUni/>}/>
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Support/>
      <NewsLetter />
      
      <Footer />
      </Wrapper>
    </>
  );
}

export default App;
