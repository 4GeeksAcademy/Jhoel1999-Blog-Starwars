import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";

import { Home } from "./views/home.js";
import { Demo } from "./views/demo";
import { Single } from "./views/single.js";
import DetallePlanet from "./views/DetallePlanet.jsx";
import DetalleCharacter from "./views/DetalleCharacter.jsx";
import DetalleVehicle from "./views/DetalleVehicle.jsx";

//create your first component
const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/single/:theid" element={<Single />} />
            <Route path="/detalleplanets/:uid" element={<DetallePlanet />} />
            <Route path="/detallecharacter/:uid" element={<DetalleCharacter />}/>
            <Route path="/detallevehicle/:uid" element={<DetalleVehicle />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);