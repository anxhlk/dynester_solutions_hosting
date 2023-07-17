import Home from "./Home";
import Products from "./components/products";
import VyaparApp from "./components/vyaparapp";
import Services from "./components/services";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/vyaparapp" element={<VyaparApp />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
}

export default App;
