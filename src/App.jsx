
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ShowProducts from "./Pages/ShowProducts";
import Blog from "./Component/Blog";
import About from "./Component/About";
import Shop from "./Component/Shop";
import Contact from "./Component/Contact";
 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/showAll" element={<ShowProducts />}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      
      </Routes>
    </BrowserRouter>
  );
}
export default App;

 
 