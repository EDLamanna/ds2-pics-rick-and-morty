import { Routes, Route } from "react-router-dom";
import { Favorites, Home, NotFound } from "../view/Index.jsx";

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Rutas;
