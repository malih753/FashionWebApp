
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ShowProducts from "./Pages/ShowProducts";
 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/showAll" element={<ShowProducts />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

 
 