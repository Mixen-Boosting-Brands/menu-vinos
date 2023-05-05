import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import CatalogoVinos from "../pages/CatalogoVinos";
import Vinos from "../pages/Vinos";
import EspecificacionesVinos from "../pages/EspecificacionesVinos";
import Postres from "../pages/Postres";
import NoPage from "../pages/NoPage";

export default function App() {
    return (
        <BrowserRouter basename='vinosypostres'>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="catalogo" element={<CatalogoVinos />} />
                    <Route path="vinos" element={<Vinos />} />
                    <Route path="tinto" element={<Vinos />} />
                    <Route path="rosado" element={<Vinos />} />
                    <Route path="blanco" element={<Vinos />} />
                    <Route path="especificaciones" element={<EspecificacionesVinos />} />
                    <Route path="postres" element={<Postres />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<App />);