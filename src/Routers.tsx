import Navbar from "components/Navbar";
import Catalogo from "pages/Catalago";
import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Routers = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
